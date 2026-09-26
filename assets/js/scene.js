/* ============================================================
   KL COM — 3D band
   ------------------------------------------------------------
   Replaces the previous fixed full-height 3D phone.

   What changed and why:
     - It was position:fixed at 28vw, so it overlaid every section
       for the entire page and collided with the contact headline.
     - It auto-advanced through 5 fake screens every 4s with no
       pause control, and the "GitHub data" it rendered was
       hardcoded and already wrong (it listed a Go repository that
       does not exist).
     - renderScreen() ran every frame, redrawing a code screen
       character by character and re-uploading a 540x1100 texture
       each time — roughly 141 MB/s of GPU upload for an image that
       only changed once every four seconds.

   What this is instead: an abstract, honest lattice. No fake UI,
   no invented metrics, no autoplay. It loads only when the section
   approaches the viewport, stops rendering when it leaves, renders
   a single static frame under prefers-reduced-motion, and disposes
   itself on pagehide.
   ============================================================ */

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  Points,
  ShaderMaterial,
  AdditiveBlending,
  Vector2,
  Vector3,
} from "../../vendor/three.esm.js";

const canvas = document.getElementById("band-canvas");
if (canvas) init();

function init() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // DPR cap below does the smoothing; AA is not worth the fill cost
      powerPreference: "low-power",
    });
  } catch {
    return; // no WebGL context — the section copy stands on its own
  }
  if (!renderer.getContext()) return;

  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);

  /* ---------- Lattice geometry ----------
     Positions are normalised to [-0.5, 0.5] and stretched via object
     scale, so a resize never rebuilds buffers. The grid ratio is 2:1,
     which keeps the dots roughly square on a desktop frame; narrower
     viewports simply crop the field, which reads as intentional. */
  const COLS = 80;
  const ROWS = 40;

  const count = COLS * ROWS;
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);

  let i = 0;
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      // Jitter breaks the perfectly regular grid without needing a
      // denser mesh.
      const jx = (Math.random() - 0.5) * 0.004;
      const jy = (Math.random() - 0.5) * 0.004;
      positions[i * 3] = x / (COLS - 1) - 0.5 + jx;
      positions[i * 3 + 1] = y / (ROWS - 1) - 0.5 + jy;
      positions[i * 3 + 2] = 0;
      phases[i] = Math.random() * Math.PI * 2;
      i++;
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("aPhase", new BufferAttribute(phases, 1));

  /* ---------- Shaders ----------
     The lattice reacts to the pointer with an expanding wavefront
     rather than a static highlight. It is the honest version of the
     idea the page is selling: a system that responds on its own.
     Deliberately abstract — no fake dashboards, no invented numbers. */
  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: new Vector2(0, 0) },
    uSpan: { value: new Vector2(16, 8) },
    uRipple: { value: new Vector2(0, 0) },
    uRippleAge: { value: 99 },
    uPixelRatio: { value: Math.min(devicePixelRatio, 1.75) },
    // Bright enough to read as a lattice at rest against pure black.
    uBase: { value: new Vector3(0.62, 0.62, 0.68) },
    uAccent: { value: new Vector3(1.0, 0.16, 0.16) },
  };

  const material = new ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform vec2  uPointer;
      uniform vec2  uSpan;
      uniform vec2  uRipple;
      uniform float uRippleAge;
      uniform float uPixelRatio;

      attribute float aPhase;

      varying float vGlow;
      varying float vFade;

      void main() {
        vec3 p = position;

        float t = uTime * 0.16;

        // Idle breathing. Kept small so the field still reads as a grid.
        p.z += sin(p.x * 9.0 + t + aPhase) * 0.22
             + cos(p.y * 7.0 - t * 0.8) * 0.18;

        // Work in scaled space so distance and the wavefront stay
        // circular despite the non-uniform lattice scale.
        vec2 q = p.xy * uSpan;

        float dRipple = distance(q, uRipple * uSpan);
        float decay   = exp(-uRippleAge * 1.15);
        float wave    = sin(dRipple * 2.1 - uRippleAge * 6.0)
                      * exp(-dRipple * 0.30) * decay;

        p.z += wave * 1.15;

        // The wavefront itself carries the accent.
        float ring = exp(-pow(dRipple - uRippleAge * 3.4, 2.0) * 1.6) * decay;

        // Steady proximity highlight, so the pointer always has a home.
        float near = 1.0 - smoothstep(0.0, 2.4, distance(q, uPointer * uSpan));

        vGlow = clamp(ring * 0.9 + near * 0.55, 0.0, 1.0);

        // Dissolve only the far corners, so the field reaches the frame
        // edge instead of floating as an island in the middle.
        vFade = 1.0 - smoothstep(0.40, 0.72, length(p.xy));

        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (2.1 + vGlow * 3.4) * uPixelRatio * (16.0 / -mv.z);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uBase;
      uniform vec3 uAccent;

      varying float vGlow;
      varying float vFade;

      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        a *= a;

        vec3 col = mix(uBase, uAccent, vGlow);
        gl_FragColor = vec4(col, a * vFade * (0.70 + 0.30 * vGlow));
      }
    `,
  });

  const cloud = new Points(geometry, material);
  scene.add(cloud);

  /* ---------- Sizing ----------
     The lattice is fitted to the camera frustum on every resize, with a
     slight overscan so the field reaches the frame edge. Fitting by
     scale rather than by rebuilding geometry keeps resize free. */
  const FOV = 45;
  const OVERSCAN = 1.08;
  camera.position.set(0, 0, 18);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;

    const dpr = Math.min(devicePixelRatio, 1.75);
    renderer.setPixelRatio(dpr);
    uniforms.uPixelRatio.value = dpr;
    renderer.setSize(w, h, false);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    // Visible extents at the z = 0 plane, then overscan.
    const halfH = camera.position.z * Math.tan((FOV * Math.PI) / 360);
    const halfW = halfH * camera.aspect;
    const spanX = halfW * 2 * OVERSCAN;
    const spanY = halfH * 2 * OVERSCAN;

    cloud.scale.set(spanX, spanY, 1);
    uniforms.uSpan.value.set(spanX, spanY);
  }

  resize();

  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
  } else {
    addEventListener("resize", resize, { passive: true });
  }

  /* ---------- Pointer + ripple trigger ---------- */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const unprojected = new Vector3();
  const local = new Vector3();

  let lastRipple = 0;

  // Converts a client point into the lattice's normalised local space.
  function toLocal(clientX, clientY, out) {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((clientY - rect.top) / rect.height) * 2 - 1);
    unprojected.set(nx, ny, 0.5).unproject(camera);
    unprojected.sub(camera.position).normalize();
    const distance = -camera.position.z / unprojected.z;
    out.copy(unprojected).multiplyScalar(distance).add(camera.position);
    cloud.worldToLocal(out);
    return true;
  }

  function onPointerMove(event) {
    if (!toLocal(event.clientX, event.clientY, local)) return;
    pointer.tx = local.x;
    pointer.ty = local.y;

    // Rate-limit so a fast drag does not stack dozens of wavefronts.
    const now = performance.now();
    if (now - lastRipple > 220) {
      lastRipple = now;
      uniforms.uRipple.value.set(local.x, local.y);
      uniforms.uRippleAge.value = 0;
    }
  }

  canvas.addEventListener("pointermove", onPointerMove, { passive: true });

  // Touch: a tap sends a wavefront from where it landed.
  canvas.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "mouse") return;
      if (!toLocal(event.clientX, event.clientY, local)) return;
      pointer.tx = local.x;
      pointer.ty = local.y;
      uniforms.uRipple.value.set(local.x, local.y);
      uniforms.uRippleAge.value = 0;
      lastRipple = performance.now();
    },
    { passive: true }
  );

  // One wavefront on load, so the section reads as alive before the
  // visitor has moved anything.
  uniforms.uRipple.value.set(0, 0);
  uniforms.uRippleAge.value = 0;

  /* ---------- Render loop ---------- */
  let raf = 0;
  let running = false;
  let visible = true;
  let start = performance.now();
  let spin = 0;
  let spinTarget = 0;

  const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);

  function frame(now) {
    raf = requestAnimationFrame(frame);

    // Seconds since the loop last started, so pausing and resuming
    // never causes a time jump in the shader.
    const t = (now - start) / 1000;
    uniforms.uTime.value = t;
    uniforms.uRippleAge.value += 1 / 60;

    // Ease the pointer toward its target.
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;
    uniforms.uPointer.value.set(pointer.x, pointer.y);

    // Very slow rotation, nudged by how far down the page we are.
    spin += (spinTarget - spin) * 0.05;
    cloud.rotation.z = spin;

    renderer.render(scene, camera);
  }

  function startLoop() {
    if (running) return;
    running = true;
    start = performance.now() - (uniforms.uTime.value * 1000);
    raf = requestAnimationFrame(frame);
  }

  function stopLoop() {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
  }

  /* ---------- Visibility + scroll coupling ---------- */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
        else stopLoop();
      },
      { threshold: 0 }
    ).observe(canvas);
  }

  if (!reduced) {
    addEventListener(
      "scroll",
      () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - innerHeight;
        spinTarget = max > 0 ? clamp01(scrollY / max) * 0.45 : 0;
      },
      { passive: true }
    );

    startLoop();
  } else {
    // One static frame: the field is still legible, nothing moves.
    uniforms.uRippleAge.value = 99;
    uniforms.uPointer.value.set(0, 0);
    renderer.render(scene, camera);
  }

  /* ---------- Teardown ---------- */
  addEventListener(
    "pagehide",
    () => {
      stopLoop();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
    { once: true }
  );
}
