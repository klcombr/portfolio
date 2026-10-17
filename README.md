# klcombr/portfolio

Personal site for **Kauê Monteiro (KL COM)** — full-stack developer in Praia Grande, SP, working on
AI agents, automation and interface engineering.

Static site. No build step, no framework, no third-party requests. Deployed on Netlify.

- `https://klcom.netlify.app/` — home
- `https://klcom.netlify.app/curriculo.html` — résumé (ATS-safe, with print-to-PDF)

---

## Stack

| Concern | Choice | Why |
|---|---|---|
| Structure | Semantic HTML, no framework | Two pages did not need a framework |
| Styling | Hand-written CSS, custom properties | One fluid type scale and spacing scale in `base.css` |
| Scroll | [Lenis](https://lenis.darkroom.engineering) 1.3 | Smooth scrolling without fighting ScrollTrigger |
| Choreography | [GSAP](https://gsap.com) 3.13 + ScrollTrigger | Timelines, scrubbed pins, batched reveals |
| Text splitting | [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText) | Word-by-word reveal on the statement. Free since GSAP 3.13 |
| Hero field | [Three.js](https://threejs.org) r180 | One `ShaderMaterial` on `Points`, no scene graph |
| Fonts | Geist + Geist Mono + Instrument Serif Italic, self-hosted | No third-party request, no layout shift from a CDN |

GSAP and Lenis are served as **classic UMD scripts**, not ESM: they ship as globals, and the CSP
keeps `script-src 'self'` (no `unsafe-inline`), so they must be separate same-origin files.
`main.js` is the only module and reads the globals off `window`.

GSAP 3.13 is under the GreenSock **standard "no charge" license** (<https://gsap.com/standard-license>).
The `@license` banner inside the minified files points at that same license.

## Weight

Measured gzipped, as served:

| | |
|---|---|
| Eager code (HTML + CSS + main + GSAP + ScrollTrigger + SplitText + Lenis) | **68 KB** |
| Fonts — preloaded (Geist 400/800, Geist Mono, Instrument Serif Italic) | ~101 KB |
| Fonts — full set including Geist 600, fetched on demand | ~136 KB |
| `three.esm.js` — **lazy**, only when the hero nears the viewport | ~121 KB |

The previous (Motion + Anime.js) build was ~55 KB eager. GSAP + SplitText + Lenis cost ~13 KB more
and buy the scrubbed statement, the magnetic buttons and the custom cursor.

Three.js is loaded via dynamic `import()` inside an `IntersectionObserver`, so it never touches the
critical path. The render loop stops when the hero leaves the viewport and disposes on demand.

## Progressive enhancement contract

This is the invariant worth preserving when editing `assets/js/`:

> `html[data-motion]` is set by `main.js` **only after** it confirms `window.gsap` and
> `window.ScrollTrigger` both resolved, and only when `prefers-reduced-motion` is not `reduce`.
> That attribute is the single switch for every hidden-until-animated state. If GSAP fails to load,
> the attribute is never set, the `html[data-motion] [data-reveal]{opacity:0}` rule never applies,
> and **every element stays visible**.

`prefers-reduced-motion: reduce` skips the attribute entirely, so the CSS keeps everything visible.

Two regressions already hit this codebase — do not reintroduce either:

1. **A full-screen loader that parks headlines at `translateY(110%)`.** If the animation bundle dies,
   the visitor gets a blank page. There is deliberately no preloader here.
2. **`gsap.from()` on a `[data-reveal]` element.** `base.css` hides those with `opacity:0`, and
   `gsap.from()` records the element's *current* computed value as its end state — which is `0`.
   The tween therefore animates `0 → 0` and the section never appears. **Use `gsap.fromTo()`** with
   both ends stated. This shipped as a bug in the 2026-10 rebuild and left four sections blank.

`reveals()` also cannot use a plain `fromTo` on the *same* elements repeatedly; `once: true` on the
`ScrollTrigger.batch` is what keeps it one-shot.

The résumé deliberately has **no** scroll-reveal animation. Hidden-until-scrolled content is a hazard
on a page whose job is to be printed and parsed: printing to PDF without scrolling would produce a
résumé with entire sections missing.

## Layout

```
index.html            home
curriculo.html        résumé (single column, print stylesheet)
404.html
_redirects            /portfolio -> /, /cv -> /curriculo.html, anchor shortcuts
_headers              CSP, security headers, cache policy
assets/css/base.css   tokens, reset, a11y, header, footer, buttons, tags, cursor
assets/css/home.css   home sections
assets/css/curriculo.css
assets/js/main.js     entry: Lenis, reveals, statement, marquee, cursor, toggle, lazy 3D
assets/js/scene.js    Three.js hero field
assets/js/curriculo.js
vendor/               pinned bundles (gsap, ScrollTrigger, SplitText, lenis, three)
fonts/                self-hosted woff2
docs/                 DESIGN.md, design-contract.md — the design contract
```

## Content accuracy

- The public repo count is **53**, verified via the GitHub API on 2026-10-16. It is hardcoded in
  `index.html` and `curriculo.html` (the résumé still says 52); update both if it drifts. There is
  deliberately no live GitHub API call (`connect-src 'none'`), so this number has to be maintained
  by hand.
- The six featured projects are real public repositories, each with a one-line description taken
  from its own README. If any becomes private, update or remove the row.
- The résumé lists **Go** among the languages. The GitHub primary-language breakdown shows no Go
  repository, which is not a contradiction (a language need not head a repo) but is worth confirming.

Nothing on this site may assert a fact that is not in `docs/design-contract.md` §2.

## Deploying

Push to `main`; Netlify serves it. `_headers` and `_redirects` only take effect on Netlify — opening
the files locally with `file://` will not apply them.

`vendor/*` is served `immutable` for a year because those are pinned library versions. If you upgrade
one, rename the file or purge the cache in the Netlify UI, otherwise browsers will keep the old copy.

## Accessibility notes

- Body copy uses `#8a8a8a` on `#000` (6.1:1). An earlier `--dim: #555` was 2.8:1 and failed WCAG AA
  on every paragraph.
- All interactive targets are at least 24×24 CSS px (WCAG 2.2 SC 2.5.8).
- Visible `:focus-visible` rings everywhere; the site does **not** hide the native cursor. The custom
  red bubble is mounted only under `(pointer: fine)` and only when motion is allowed.
- The nav has no `mix-blend-mode`, which previously made link contrast unpredictable over tinted
  sections.
- `(Pausar motion)` is a real control: it pauses `gsap.globalTimeline`, stops Lenis and puts the page
  in the same state `prefers-reduced-motion` would produce.
