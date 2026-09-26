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
| Reveals, scroll, hover | [Motion](https://motion.dev) 12 | `inView` / `scroll` / `animate`; springs, interruptible |
| Hero intro | [Anime.js](https://animejs.com) 4 | One explicit `createTimeline` reads better than N loose animations |
| 3D band | [Three.js](https://threejs.org) r180 | One custom `ShaderMaterial`, no scene graph |
| Fonts | Geist + Geist Mono, self-hosted | No third-party request, no layout shift from a CDN |

All three libraries are vendored as tree-shaken ESM bundles in `vendor/`, built with:

```bash
bun build src/motion.js --outfile vendor/motion.esm.js --format esm --minify --target browser
```

## Weight

Gzipped, as served:

| | |
|---|---|
| Eager code (HTML + CSS + Motion + Anime) | ~55 KB |
| Fonts (4 woff2, immutable, cached 1 year) | ~111 KB |
| `three.esm.js` — **lazy**, only when the 3D band nears the viewport | ~118 KB |

Three.js is loaded via dynamic `import()` inside an `IntersectionObserver`, so it never touches the
critical path. The render loop stops when the band scrolls out of view and disposes on `pagehide`.

## Progressive enhancement contract

This is the one invariant worth preserving when editing `assets/js/`:

> Motion and Anime.js are **static** imports in `main.js`. Static imports resolve before any code in
> the module runs, so if either bundle fails to load, `main.js` never executes, the
> `html[data-motion]` attribute is never set, the `html[data-motion] [data-reveal]{opacity:0}` rule
> never applies, and **every element stays visible**.

The previous version returned early when GSAP was undefined, which left a full-screen loader covering
the viewport with all headline text parked at `translateY(110%)` — a blank page. Do not reintroduce a
full-screen loader or hide content from CSS without a matching JS guarantee that it will be shown.

`prefers-reduced-motion: reduce` skips the attribute entirely, so the CSS keeps everything visible.

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
assets/css/base.css   tokens, reset, a11y, header, footer, buttons, tags
assets/css/home.css   home sections
assets/css/curriculo.css
assets/js/main.js     entry: reveals, progress, header, hero intro, lazy 3D
assets/js/scene.js    Three.js band
assets/js/curriculo.js
vendor/               pinned ESM bundles
fonts/                self-hosted woff2
```

## Content accuracy

- The public repo count is **52**, verified via the GitHub API. It is hardcoded in `index.html` and
  `curriculo.html`; update both if it drifts. There is deliberately no live GitHub API call
  (`connect-src 'none'`), so this number has to be maintained by hand.
- Project links point at real public repositories. If any becomes private, update or remove the card.
- The résumé lists **Go** among the languages. The GitHub primary-language breakdown shows no Go
  repository, which is not a contradiction (a language need not head a repo) but is worth confirming.

## Deploying

Push to `main`; Netlify serves it. `_headers` and `_redirects` only take effect on Netlify — opening
the files locally with `file://` will not apply them.

`vendor/*` is served `immutable` for a year because those are pinned library versions. If you upgrade
one, rename the file or purge the cache in the Netlify UI, otherwise browsers will keep the old copy.

## Accessibility notes

- Body copy uses `#8a8a8a` on `#000` (6.1:1). The previous `--dim: #555` was 2.8:1 and failed WCAG AA
  on every paragraph.
- All interactive targets are at least 24×24 CSS px (WCAG 2.2 SC 2.5.8).
- Visible `:focus-visible` rings everywhere; the site does **not** hide the native cursor.
- The nav has no `mix-blend-mode`, which previously made link contrast unpredictable over tinted
  sections.
