/* ============================================================
   KL COM — home entry
   ------------------------------------------------------------
   Progressive-enhancement contract
   ------------------------------
   Motion and Anime.js are STATIC imports. Static imports resolve
   before any code in this module runs, so:

     - both bundles load  -> html[data-motion] is set -> reveals
       are hidden in CSS and animated in
     - either bundle fails -> this module never executes ->
       html[data-motion] is never set -> the
       `html[data-motion] [data-reveal]{opacity:0}` rule in
       base.css never applies -> every element stays visible

   The previous build returned early when GSAP was undefined, which
   left the full-screen loader covering the viewport and all
   headline text parked at translateY(110%): a blank page.

   Three.js is deliberately NOT imported here. It is fetched on
   demand in initBand() once the 3D section nears the viewport.
   ============================================================ */

import { animate, inView, scroll } from "../../vendor/motion.esm.js";
import { createTimeline, stagger } from "../../vendor/anime.esm.js";

const EASE = [0.16, 1, 0.3, 1];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Scroll progress ---------- */
const bar = document.getElementById("progress");
if (bar && !reduced) {
  scroll(
    (progress) => {
      bar.style.transform = `scaleX(${progress})`;
    },
    { source: document.documentElement }
  );
}

/* ---------- Header border once scrolled ---------- */
const masthead = document.getElementById("masthead");
const hero = document.getElementById("top");
if (masthead && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => {
      masthead.dataset.stuck = String(!entry.isIntersecting);
    },
    { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
  ).observe(hero);
}

/* ---------- Hero intro (Anime.js v4) ----------
   One timeline, one job. Anime owns the hero because a single
   choreographed reveal reads better as an explicit timeline than
   as N independent animations. Everything else uses Motion. */
if (!reduced) {
  const lines = document.querySelectorAll('[data-hero="line"]');
  const rest = ["kicker", "lede", "actions", "cue"]
    .map((k) => document.querySelector(`[data-hero="${k}"]`))
    .filter(Boolean);

  // Set the start state synchronously so there is no flash of the
  // final position while the bundle settles.
  lines.forEach((el) => { el.style.transform = "translateY(110%)"; });
  rest.forEach((el) => { el.style.opacity = "0"; });

  createTimeline({ defaults: { ease: "outExpo" } })
    .add(lines, {
      translateY: ["110%", "0%"],
      duration: 1200,
      delay: stagger(90),
    })
    .add(rest, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 800,
      delay: stagger(80),
    }, "-=950");
}

/* ---------- Scroll reveals (Motion) ---------- */
if (!reduced) {
  // Attribute the reveal only now, when the code that undoes it is
  // guaranteed to be in memory.
  document.documentElement.dataset.motion = "on";

  // Sibling index drives the stagger, so a heading and the rows
  // beneath it cascade instead of arriving as one block.
  const seen = new WeakMap();

  try {
    inView(
      "[data-reveal]",
      (el) => {
        const parent = el.parentElement;
        const index = seen.get(parent) ?? 0;
        seen.set(parent, index + 1);

        animate(
          el,
          {
            opacity: [0, 1],
            transform: ["translateY(20px)", "translateY(0px)"],
          },
          {
            duration: 0.75,
            ease: EASE,
            delay: Math.min(index, 4) * 0.06,
          }
        );
      },
      { amount: 0.2, margin: "0px 0px -6% 0px" }
    );
  } catch (err) {
    // If anything in here fails, drop the flag rather than leave the
    // page with content stuck at opacity 0.
    delete document.documentElement.dataset.motion;
    console.error("Reveal setup failed; showing all content.", err);
  }
}

/* ---------- 3D band (Three.js, lazy) ---------- */
function initBand() {
  const band = document.getElementById("band");
  if (!band) return;

  const load = () => import("./scene.js").catch(() => {
    // No WebGL, blocked module, or offline: the caption copy in the
    // section already carries the message, so fail silently.
  });

  if (!("IntersectionObserver" in window)) {
    load();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io.disconnect();
          load();
        }
      }
    },
    // Start fetching a little before the section is actually needed.
    { rootMargin: "60% 0px" }
  );

  io.observe(band);
}

initBand();
