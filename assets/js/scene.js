/* ============================================================
   KL COM — hero scene
   ------------------------------------------------------------
   A drifting lattice of points in the accent red, sitting behind the
   hero headline and masked into the black on every edge.

   It is decorative. Removing it removes no information, which is why it
   is the only WebGL on the site and why it is fetched lazily by main.js.

   The vendored three.esm.js is tree-shaken, so only these named exports
   exist: Scene, PerspectiveCamera, WebGLRenderer, Points, BufferGeometry,
   BufferAttribute, ShaderMaterial, Vector2, Vector3, Color, SRGBColorSpace,
   AdditiveBlending. Nothing else may be imported from it.
   ============================================================ */

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Vector3,
  SRGBColorSpace,
  AdditiveBlending,
} from '../../vendor/three.esm.js';

const COLS = 72;
const ROWS = 40;
/* Hard cap on device pixel ratio: a 3x phone renders 9x the fragments for
   no visible gain on a field this soft. */
const MAX_DPR = 1.5;

const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uSize;

  varying float vFade;

  void main() {
    vec3 p = position;

    /* Three layered sines at different frequencies and speeds. The lattice
       reads as a slow system breathing, not as noise. */
    float wave =
        sin(p.x * 0.28 + uTime * 0.55) * 1.35
      + sin(p.z * 0.34 - uTime * 0.42) * 1.05
      + sin((p.x + p.z) * 0.17 + uTime * 0.3) * 0.7;

    p.y += wave;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    /* Perspective-correct point size, clamped so nothing becomes a blob. */
    gl_PointSize = clamp(uSize * (300.0 / -mv.z), 0.6, 3.2);

    /* Fade with depth and toward the edges, so the field dissolves into the
       black instead of ending on a hard line. */
    float depth = clamp((-mv.z - 6.0) / 26.0, 0.0, 1.0);
    float edge = 1.0 - smoothstep(9.0, 24.0, abs(p.x));
    vFade = (1.0 - depth) * edge;
  }
`;

const fragmentShader = /* glsl */`
  uniform vec3 uColor;
  varying float vFade;

  void main() {
    /* Round the point instead of leaving a square: cheaper than a texture. */
    vec2 c = gl_PointCoord - vec2(0.5);
    if (dot(c, c) > 0.25) discard;

    gl_FragColor = vec4(uColor, vFade * 0.85);
  }
`;

export function initScene(canvas) {
  let renderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,   /* the points are sub-pixel; AA costs a lot for nothing */
      powerPreference: 'low-power',
    });
  } catch {
    /* No WebGL: the CSS radial tint under .hero::before is already in place. */
    return null;
  }

  const scene = new Scene();
  const camera = new PerspectiveCamera(46, 1, 0.1, 100);
  camera.position.set(0, 6.5, 22);
  camera.lookAt(0, 0, 0);

  /* ── Geometry: a flat grid on XZ, displaced in the vertex shader ── */
  const positions = new Float32Array(COLS * ROWS * 3);
  const spanX = 34;
  const spanZ = 18;
  let i = 0;

  for (let z = 0; z < ROWS; z++) {
    for (let x = 0; x < COLS; x++) {
      positions[i++] = (x / (COLS - 1) - 0.5) * spanX;
      positions[i++] = 0;
      positions[i++] = (z / (ROWS - 1) - 0.5) * spanZ;
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 2.2 },
      uColor: { value: new Vector3(1.0, 0.133, 0.133) }, /* #ff2222, linear-ish */
    },
  });

  const points = new Points(geometry, material);
  scene.add(points);

  /* ── Render loop, paused whenever the hero leaves the viewport ── */
  let raf = 0;
  let running = false;
  let disposed = false;
  const start = performance.now();

  function frame(now) {
    if (!running || disposed) return;
    material.uniforms.uTime.value = (now - start) / 1000;
    points.rotation.y = Math.sin((now - start) / 26000) * 0.12;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  function resize() {
    if (disposed) return;
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (running) renderer.render(scene, camera);
  }

  function start_() {
    if (running || disposed) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  /* Only burn frames while the hero is actually on screen. */
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) start_();
    else stop();
  }, { threshold: 0.02 });
  io.observe(canvas);

  window.addEventListener('resize', resize, { passive: true });
  resize();
  renderer.render(scene, camera);

  /* Disposal is required, not optional: the scene owns a GL context and a
     geometry buffer, and both must be released if the page ever tears down. */
  function dispose() {
    disposed = true;
    stop();
    io.disconnect();
    window.removeEventListener('resize', resize);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  }

  return { dispose, stop, start: start_ };
}
