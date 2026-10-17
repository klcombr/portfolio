/* ============================================================
   KL COM — main
   One animation system (GSAP) plus Lenis for scroll. Nothing here is
   load-bearing: if GSAP or Lenis fails to arrive, html[data-motion] is
   never set, every rule that hides content stays inert, and the page is
   a plain readable document.
   ============================================================ */

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const SplitText = window.SplitText;
const Lenis = window.Lenis;

/* Only claim motion is available once every piece we use actually resolved.
   This attribute is the single switch for every hidden-until-animated state. */
const hasGsap = !!(gsap && ScrollTrigger);
if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);
  if (SplitText) gsap.registerPlugin(SplitText);
  if (!reduceMotion.matches) root.setAttribute('data-motion', '');
}

/* ────────────────────────── Lenis ────────────────────────── */
let lenis = null;

function startLenis() {
  if (!Lenis || reduceMotion.matches) return null;
  const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });

  instance.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => instance.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return instance;
}

if (hasGsap) lenis = startLenis();

/* ─────────────────── Progress bar + stuck header ─────────────────── */
const progress = document.getElementById('progress');
const masthead = document.getElementById('masthead');

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.transform = `scaleX(${pct})`;
  if (masthead) masthead.dataset.stuck = window.scrollY > 40 ? 'true' : 'false';
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ────────────────────────── Hero intro ──────────────────────────
   The lines are already wrapped in .mask in the HTML, so no text splitting
   is needed here — SplitText would only re-do markup that already exists. */
function heroIntro() {
  const lines = document.querySelectorAll('[data-intro-line]');
  const rest = document.querySelectorAll('[data-intro]');
  if (!hasGsap || reduceMotion.matches || !lines.length) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.from(lines, {
    yPercent: 115,
    rotate: 1.5,
    duration: 1.05,
    stagger: 0.09,
  })
    .from(rest, {
      y: 18,
      opacity: 0,
      duration: 0.7,
      stagger: 0.07,
    }, '-=0.6');
}

heroIntro();

/* ────────────────────────── Reveals ────────────────────────── */
function reveals() {
  if (!hasGsap || reduceMotion.matches) return;

  /* fromTo, not from. base.css hides these with `html[data-motion] [data-reveal]
     {opacity:0}`, and gsap.from() records the element's *current* computed
     value as its end state — which is 0. A plain from() therefore animates
     0 -> 0 and the section never appears. fromTo states both ends. */
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 86%',
    once: true,
    onEnter: (batch) => {
      gsap.fromTo(batch,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.09,
          overwrite: true,
        },
      );
    },
  });
}

reveals();

/* ────────────────────── Statement, word by word ──────────────────────
   The single most memorable move borrowed from the references: a pinned
   paragraph whose words illuminate in sequence as you scroll through it.
   The pin is desktop-only — on a phone it is a plain readable block. */
function statement() {
  const el = document.querySelector('[data-statement]');
  if (!el || !hasGsap || reduceMotion.matches || !SplitText) return;

  const mm = gsap.matchMedia();

  mm.add('(min-width: 900px)', () => {
    const split = new SplitText(el, { type: 'words', wordsClass: 'word' });

    gsap.set(split.words, { opacity: 0.16 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'center center',
        /* 90% of a viewport of extra scroll. Longer reads as dead air. */
        end: '+=90%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
      },
    });

    tl.to(split.words, {
      opacity: 1,
      stagger: 0.06,
      ease: 'none',
      duration: 0.4,
    });

    /* SplitText injects spans; they must not outlive the animation. */
    return () => split.revert();
  });
}

statement();

/* ────────────────────────── Marquee ────────────────────────── */
function marquee() {
  const track = document.getElementById('marquee-track');
  if (!track || !hasGsap || reduceMotion.matches) return;

  /* Duplicate the row once so the loop has no visible seam. The original
     row is already readable if this never runs. */
  const original = track.innerHTML;
  track.innerHTML = original + original;

  gsap.to(track, {
    xPercent: -50,
    duration: 28,
    ease: 'none',
    repeat: -1,
  });
}

marquee();

/* ────────────────────────── Magnetic ────────────────────────── */
function magnetic() {
  if (!hasGsap || reduceMotion.matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('[data-magnet]').forEach((el) => {
    const strength = 14;

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
      const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
      gsap.to(el, { x, y, duration: 0.4, ease: 'power3.out' });
    });

    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

magnetic();

/* ────────────────────────── Custom cursor ──────────────────────────
   Mounted only under (pointer: fine) with a fine pointer and no reduced
   motion. The native cursor is never hidden: the bubble is an addition. */
function cursor() {
  const bubble = document.getElementById('cursor');
  const label = document.getElementById('cursor-label');
  if (!bubble || !hasGsap || reduceMotion.matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  bubble.hidden = false;

  const xTo = gsap.quickTo(bubble, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(bubble, 'y', { duration: 0.35, ease: 'power3' });

  window.addEventListener('pointermove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  }, { passive: true });

  document.querySelectorAll('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => {
      label.textContent = el.dataset.cursor;
      bubble.dataset.active = 'true';
      gsap.to(bubble, { scale: 1, duration: 0.35, ease: 'power3.out' });
    });
    el.addEventListener('pointerleave', () => {
      bubble.dataset.active = 'false';
      gsap.to(bubble, { scale: 0, duration: 0.3, ease: 'power3.in' });
    });
  });
}

cursor();

/* ────────────────────────── (Pausar motion) ──────────────────────────
   A real control, not a token gesture: it stops the ticker, the marquee and
   every in-flight tween, and puts the page into the same state reduced
   motion would have produced. */
function motionToggle() {
  const btn = document.getElementById('motion-toggle');
  if (!btn || !hasGsap) return;

  const label = btn.querySelector('.motion-toggle__label');
  let paused = false;

  btn.addEventListener('click', () => {
    paused = !paused;
    btn.setAttribute('aria-pressed', String(paused));

    if (paused) {
      gsap.globalTimeline.pause();
      if (lenis) lenis.stop();
      root.style.scrollBehavior = 'auto';
      label.textContent = '(Retomar motion)';
    } else {
      gsap.globalTimeline.resume();
      if (lenis) lenis.start();
      root.style.scrollBehavior = '';
      label.textContent = '(Pausar motion)';
    }

    ScrollTrigger.refresh();
  });
}

motionToggle();

/* ─────────────────── Reduced motion flips mid-session ─────────────────── */
reduceMotion.addEventListener('change', () => {
  if (reduceMotion.matches) {
    root.removeAttribute('data-motion');
    if (lenis) { lenis.destroy(); lenis = null; }
    if (hasGsap) gsap.globalTimeline.pause();
  } else if (hasGsap) {
    root.setAttribute('data-motion', '');
    if (!lenis) lenis = startLenis();
    gsap.globalTimeline.resume();
    ScrollTrigger.refresh();
  }
});

/* ────────────────────────── Anchor links ──────────────────────────
   Lenis owns scrolling, so the browser's native smooth scroll to a hash
   would fight it. Route the jumps through Lenis instead. */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }
  });
});

/* ────────────────────────── 3D, lazily ──────────────────────────
   Three.js is ~480 KB. It is fetched only when the hero is near the
   viewport, and never when the user asked for less motion. */
function loadScene() {
  const canvas = document.getElementById('hero-gl');
  if (!canvas || reduceMotion.matches) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      import('./scene.js')
        .then((mod) => mod.initScene(canvas))
        .catch(() => { /* decorative: a missing scene costs nothing */ });
    });
  }, { rootMargin: '200px' });

  io.observe(canvas);
}

loadScene();
