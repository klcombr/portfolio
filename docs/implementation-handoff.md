# implementation-handoff.md — KL COM

Instruções operacionais para quem continuar este site. Leia `DESIGN.md` antes; este arquivo é o
"como", aquele é o "por quê".

---

## Arquivos

| Arquivo | Papel | Tocar com cuidado |
|---|---|---|
| `index.html` | home inteira | fonte única dos textos e links de projeto |
| `assets/css/base.css` | tokens, reset, chrome compartilhado | **`curriculo.html` depende dele** — `.skip-link`, `.progress`, `.masthead`, `.brand`, `.shell`, `.footer`, `.footer__inner`, `.footer__links`, `.btn`, `.tags`, `.status`, `.visually-hidden`, `.dot` e todos os `:root` |
| `assets/css/home.css` | composição da home | grid de `.work__link` tem template nas **duas** breakpoints |
| `assets/js/main.js` | Lenis, reveals, statement, marquee, cursor, magnético, toggle, 3D lazy | único ponto que seta `html[data-motion]` |
| `assets/js/scene.js` | campo de pontos Three.js | importa **só** os exports existentes (ver abaixo) |
| `curriculo.html` + `assets/css/curriculo.js` | résumé | fora do escopo do rebuild; não regrediu |

## Constraints que não podem mudar

**CSP** — `_headers` e a `<meta>` do HTML devem ficar em sincronia. `script-src 'self'` **sem**
`unsafe-inline`: por isso GSAP e Lenis são `<script src>` clássicos (UMD globals) e só `main.js` é
módulo. Inlinear qualquer script quebra o site inteiro.

**`connect-src 'none'`** — nenhuma requisição de rede a partir da página. Isso significa:
- sem chamada à API do GitHub → o número "53 repositórios" é **hardcoded** e tem que ser mantido à mão;
- sem `fetch()` — o retrato ASCII da versão anterior era inlineado no HTML por exatamente esse motivo.

**Paleta** — um único saturado, `#ff2222`. O verde do ponto de status é permitido e intencional.
`--accent-ink: #7a0d0d` existe só para mistura de gradiente, nunca como texto.

**Fonts self-hosted** — `fonts/`: Geist 400/600/800, Geist Mono 400, Instrument Serif Italic 400.
Nenhuma fonte nova sem justificar; a Instrument Serif tem **um papel só** (palavra acentuada
em itálico dentro de headline) e nunca sai disso.

**Three.js vendorizado é tree-shaken.** Só existem: `Scene`, `PerspectiveCamera`, `WebGLRenderer`,
`Points`, `BufferGeometry`, `BufferAttribute`, `ShaderMaterial`, `Vector2`, `Vector3`, `Color`,
`SRGBColorSpace`, `AdditiveBlending`. `LineSegments`, `Clock`, `Mesh` e `MathUtils` **não** estão
lá — importá-los quebra o bundle. Se precisar de mais, rebuildar o vendor.

## Gotchas já pagos

1. **Nunca `gsap.from()` em `[data-reveal]`.** O CSS esconde com `opacity:0`, e `from()` grava o
   valor atual (0) como fim → anima 0→0, seção invisível. Usar `fromTo()`. Já causou 4 seções em
   branco no deploy de 2026-10-16.
2. **Todo filho de grid precisa de área nas duas breakpoints.** `.work__status` e `.work__arrow`
   ficaram órfãos no mobile porque só existiam no template `≥900px`.
3. **`.masthead__meta` só aparece a `≥1440px`.** Abaixo disso os valores quebram em duas linhas e
   sujam o topo. Não baixar o breakpoint.
4. **Lenis assume o scroll.** Âncoras `href^="#"` são roteadas por `lenis.scrollTo` em `main.js`;
   adicionar link interno sem passar por esse handler faz o navegador e o Lenis brigarem.

## Responsive

`≥900px` → índice em uma linha, serviços em 3 colunas, sobre em 2 colunas.
`<900px` → índice empilhado (nome/ano, descrição, stack/status), serviços 2 colunas, sobre 1 coluna.
`≥1440px` → barra de metadados no masthead.

Mobile é **redesenhado**, não comprimido. Se um componente novo não sobreviver a 390px sem
reordenar, ele está errado.

## Motion

Um sistema só: GSAP. Kit permitido (nada avulso):

| Efeito | Onde |
|---|---|
| reveal de linha mascarada | `.mask > [data-intro-line]`, no load |
| batch reveal | `[data-reveal]` via `ScrollTrigger.batch`, `once:true`, `fromTo` |
| statement palavra-a-palavra | SplitText + `scrub` + `pin`, **só `≥900px`** (`gsap.matchMedia`) |
| marquee | `#marquee-track`, duplicado em JS, `xPercent:-50`, `repeat:-1` |
| cursor customizado | só `(pointer:fine)`, nunca esconde o nativo |
| magnético | `[data-magnet]`, só `(pointer:fine)` |
| campo de pontos 3D | lazy, `IntersectionObserver`, loop pausa fora do viewport |

`prefers-reduced-motion` desliga tudo e mantém o conteúdo. `(Pausar motion)` faz o mesmo sob
controle do usuário.

## Checklist antes de dar como pronto

- [ ] `node --check assets/js/main.js` e `node --check assets/js/scene.js`
- [ ] Servir por HTTP (ESM não carrega em `file://`) e zerar erros de console em 390 / 1440 / 2560
- [ ] Sem scroll horizontal em nenhuma das três larguras
- [ ] Testar com `reducedMotion: 'reduce'` — todo `[data-reveal]` com `opacity:1`
- [ ] Testar com JavaScript desligado — todo `[data-reveal]` com `opacity:1`
- [ ] Tab até o fim — toda parada com anel de foco visível
- [ ] Clicar em `(Pausar motion)` — `gsap.globalTimeline.paused() === true`
- [ ] Abrir `curriculo.html` e exportar PDF — não regrediu
- [ ] Nenhum fato fora de `design-contract.md` §2

Script de verificação em `/tmp/opencode/test-resilience.cjs` cobre os últimos sete itens
(24 asserções, requer `playwright` e um servidor em `:8899`).
