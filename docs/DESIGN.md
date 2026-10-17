# DESIGN.md — KL COM

Direção visual reutilizável para o site pessoal de **Kauê Leandro (KL COM)**.
Fonte de verdade para qualquer implementação, restyle ou página nova neste repo.

Gobernado pela skill `redline` (modo **Experience**: o trabalho lidera, a interface
não compete com ele). Regra absoluta: **nenhum fato inventado** — nome, local,
contato, número de repositórios, descrição e status de projeto saem dos dados
reais listados no §8.

---

## 1. Visual Theme & Atmosphere

**Caráter:** técnico-Editorial escuro. Impressão de um terminal bem impresso
numa revista de arquitetura — não de uma landing page de SaaS.

A página inteira é preta. A estrutura é feita de **fios de 1px** e de
**hierarquia tipográfica**, não de caixas, sombras ou cards. O vermelho é o
único elemento saturado do site inteiro e aparece com avareza deliberada.

Contraponto obrigatório: o site deve continuar legível e completo com o
JavaScript desligado, com WebGL indisponível e com `prefers-reduced-motion`.
A animação é camada, nunca conteúdo.

Textura de superfície (custo zero, muito identitária):
- Eyebrows entre parênteses — `(Sobre)`, `(Projetos)`
- Índices numéricos — `01` `02` `03`
- Separadores `//` na navegação e no rodapé
- Legendas entre colchetes — `[ carregando ]`
- Nomes `Kauê Leandro` / `KL COM` coexistem: o primeiro é a pessoa, o
  segundo é a marca. Não trocar um pelo outro.

## 2. Color

Tokens herdados do tema padrão atual (`assets/css/base.css`) — **não mudar os
valores**, são a identidade:

| Token | Valor | Papel |
|---|---|---|
| `--bg` | `#000` | fundo de página, absoluto |
| `--bg-elev` | `#0a0a0a` | superfície elevada |
| `--bg-elev-2` | `#101010` | superfície elevada, 2º nível |
| `--fg` | `#ededed` | texto primário (17.9:1) |
| `--fg-muted` | `#8a8a8a` | texto secundário (6.1:1) |
| `--fg-subtle` | `#7a7a7a` | metadado não essencial (4.9:1) |
| `--accent` | `#ff2222` | **o único saturado do site** (5.5:1) |
| `--accent-soft` | `rgba(255,34,34,.14)` | brilho/halo, nunca texto |
| `--line` | `rgba(255,255,255,.09)` | fio padrão |
| `--line-strong` | `rgba(255,255,255,.18)` | fio de ênfase |

Regras de uso do `--accent`:
- **Uma** palavra acentuada por headline (em itálico serif, ver §3)
- Preenchimento de **um** botão por viewport
- Cursor customizado, sublinhado de hover, seta de linha de projeto
- Fundo de **uma** seção no máximo (a de contato), via gradiente halo

**Proibido:** gradiente aleatório, glow decorativo, glassmorphism, blob
flutuante, segundo tom saturado, vermelho em parágrafo corrido.

Justificativa cromática: entre as 12 referências analisadas, os três sites que
o usuário mais curtiu (mkvision `#00FFAF`, mikewilcock `#7fa8ff`, samgoddard
monocromático) são **monocromáticos com um único acento racionado**. `#ff2222`
é o acento correto — ele já é o dele.

## 3. Typography

Sistema de **duas famílias + uma de acento**. O contraste entre elas é a
identidade; não é decoração.

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display | Geist | 800 | headlines 6–11vw, tracking `-0.035em`, line-height `.95` |
| Display médio | Geist | 600 | títulos de seção, títulos de projeto |
| Corpo | Geist | 400 | parágrafos, medida máxima `34rem` |
| **Acento** | **Instrument Serif Italic** | 400 | **uma palavra por headline**, sempre em `--accent` |
| Micro / label | Geist Mono | 400 | eyebrows, índices, nav, tags, status — `uppercase`, `.72rem`, tracking `.08em` |

Detalhe que carrega a marca (herdado de mkvision, o favorito): a headline é
grotesca, e **uma única palavra vira serif itálico vermelho**.

```html
<h1>Sistemas que rodam <em>sozinhos</em>.</h1>
<!-- em { font-family:"Instrument Serif",serif; font-style:italic; color:var(--accent) } -->
```

Escala fluida herdados — `--t-display: clamp(2.75rem,1.5rem + 6.5vw,7.5rem)` e
irmãs. **Nada de fonte nova além da Instrument Serif Italic.**

Proibido: caixa alta em parágrafo, três famílias no mesmo bloco, heading gigante
sem função estrutural, corpo de texto em mono.

## 4. Spacing & Grid

- Gutter fluido: `--gutter: clamp(1.25rem,.9rem + 1.8vw,5rem)`
- Padding de seção: `--section-y: clamp(4.5rem,3.5rem + 5vw,9rem)`
- Container: `--maxw: 80rem`, centralizado
- Medida de leitura: `--measure: 34rem` (parágrafos nunca mais largos)
- Fios de 1px `--line` como **único** recurso de agrupamento — sem cards, sem
  sombras, sem fundo colorido por seção
- Raios contidos: `--r-sm:8px`, `--r-md:14px`, `--r-lg:20px` — nada de pílula
  universal

Densidade: **espaçosa** para storytelling (é um portfólio, modo Experience),
com quebras de ritmo — tipo gigante → lista mono miúda → statement → mídia.

## 5. Layout & Composition

O erro a evitar é `eyebrow → heading centralizado → parágrafo → três cards
iguais`. Em vez disso, cada seção tem estrutura própria:

| # | Seção | Estrutura |
|---|---|---|
| — | Masthead fixo | barra de metadados: `NOME / PAPEL / LOCAL / STATUS` + nav `//` separada |
| 00 | **Hero** | frase-gigante em 2–3 linhas mascaradas, quebrada em linhas; meta em mono ao redor; canvas WebGL mascarado atrás (opcional, lazy) |
| 01 | **Índice de trabalho** | **linhas, não cards** — `01 / projeto / ano / stack / (status)`, fio de 1px, seta vermelha no hover |
| 02 | **Statement** | parágrafo gigante, fixado (pinned), revelado **palavra a palavra** com uma palavra em itálico serif |
| 03 | **Serviços** | lista numerada editorial, não grade de cards |
| 04 | **Sobre** | duas colunas assimétricas — mono à esquerda, serif blockquote à direita |
| 05 | **Contato** | a única seção com fundo não-preto (halo vermelho), cintilação mínima |

Regra de hierarquia: **ordem de atenção 1ª, 2ª e 3ª claras em todo viewport**.
Se tudo está destacado, nada está destacado.

A lista de projetos é **índice, não galeria** — é o que separa samgoddard e
mikewilcock dos portfólios de card genérico, e é o formato certo para
apresentar 6 repositórios sem virar grade de cartões.

## 6. Components

| Componente | Comportamento | Estados |
|---|---|---|
| **Linha de projeto** | índice `01`, nome Geist 600, ano+stack em mono, status entre parênteses, seta `↗` | default · hover (fio → `--line-strong`, seta vira `--accent`, desloca 4px) · focus-visible (outline vermelho 2px) |
| **Botão** | um sólido (`--accent`), um fantasma (fio) | default · hover · active · focus-visible · disabled |
| **Cursor customizado** | bolha vermelha 96px, `scale(0→1)`, rótulo `Ver`/`Código` | ligado só em `pointer:fine`; **desligado em touch e reduced-motion** |
| **Linha de serviço** | `01` mono + título + corpo | default · hover (fio acende) |
| **Masthead** | fixo, ganha fundo + fio depois de 40px de scroll | scrolled · top |
| **Botão `(Pausar motion)`** | pausa todo o GSAP + Lenis | pausado · rodando |
| **Skip-link** | primeiro focável da página | focus-visible |

Estados obrigatórios que **não** existem hoje e precisam existir: focus-visible
visível em todo elemento interativo, `prefers-reduced-motion` completo, e
layout funcional sem JavaScript.

## 7. Motion & Interaction

Stack escolhida pelo usuário: **GSAP 3.13 + ScrollTrigger + SplitText + Lenis**
(vendorizado, zero build, zero requisição de terceiros) e **Three.js** lazy para
um único momento 3D.

| Intenção | Ferramenta | Carregamento |
|---|---|---|
| Scroll suave | Lenis | eager, ~17KB |
| Reveal de linha mascarada no load | GSAP + SplitText | eager |
| Statement palavra a palavra, scrubbed | GSAP ScrollTrigger `scrub` + pin | eager |
| Índice de trabalho, hover e seta | CSS | — |
| Cursor, magnético, marquee | GSAP | eager |
| Um momento WebGL atrás do hero | Three.js | **lazy**, só quando perto do viewport |

Kit repetido (é um kit, não efeitos avulsos):
1. **Reveal de linha mascarada** — `overflow:hidden` + `translateY(115%)→0`
2. **Statement palavra a palavra** com uma palavra em itálico serif
3. **Marquee** com separadores losango + botão de pausa
4. **Cursor customizado** com rótulo
5. **Botão magnético**
6. **Rolo de letra no hover** — letra duplicada em `top:100%`, `translateY(-100%)`
7. **Contador de preloader** `000→100`
8. **Um** canvas WebGL mascarado atrás do hero, em linhas vermelhas sobre preto

Disciplina GSAP obrigatória (da skill `redline`):
- registrar plugins uma vez; `gsap.context()` e revert
- `gsap.matchMedia()` para breakpoints **e** reduced-motion
- transforms e opacity, nunca propriedades de layout
- `will-change` curto e intencional
- limpar ScrollTriggers e renderer na troca de página

**Proibido:** bounce elástico, loop constante, parallax desnecessário, flutuação
permanente, entrada longa que atrasa a interação, 3D decorativo, animação que
não comunica nada.

## 8. Voice & Brand

**Idioma:** pt-BR. Inglês só em nomes técnicos e no repo.

**Voz:** direta, seca, técnica. Frases curtas. Nada de "apaixonado por
tecnologia", nada de "soluções inovadoras". O site fala como quem escreve
commit message.

**Fatos verificados — única fonte permitida:**

| Campo | Valor |
|---|---|
| Nome | Kauê Leandro |
| Marca | KL COM |
| Papel | Desenvolvedor Full-Stack & Automação com IA |
| Local | Praia Grande, São Paulo — Brasil · remoto · UTC-3 |
| Email | mxlsc@proton.me |
| WhatsApp | +55 13 97414-0538 (`wa.me/5513974140538`) |
| GitHub | `@klcombr` — https://github.com/klcombr |
| Repos públicos | **53**, desde setembro de 2024 (número vivo via API) |
| Linguagens | Python · TypeScript · JavaScript · Go · SQL |
| Status | Aberto a projetos |
| Deploy | Netlify — https://klcom.netlify.app/ |
| GitHub criado | 2024-09-17 |

**Proibido:** métrica inventada, cliente inventado, depoimento, prêmio,
porcentagem, "X anos de experiência", número de estrelas arredondado para cima,
print de dashboard falso, tecnologia que não aparece no repo do projeto.

## 9. Anti-patterns

Gate de remoção antes de declarar pronto. Cada item já foi observado em
portfólios reais e é o que separa os três bons dos nove medianos:

- [ ] Grade de cards uniformes (o pecado nº 1 — usar índice em linhas)
- [ ] Card dentro de card
- [ ] `eyebrow → heading centralizado → 3 cards iguais`
- [ ] Gradiente aleatório / glassmorphism decorativo / glow / blob
- [ ] Sombra como substituto de composição
- [ ] Segundo tom saturado além do `--accent`
- [ ] Vermelho em parágrafo corrido
- [ ] Copypasta de SaaS genérica
- [ ] Número estatístico sem fonte
- [ ] Heading gigante sem função estrutural
- [ ] Badge/pill/ícone sem significado
- [ ] Animação que não comunica nada; bounce; loop constante
- [ ] Parallax desnecessário; flutuação permanente
- [ ] 3D decorativo (sem fallback, sem reduced-motion)
- [ ] Conteúdo bloqueado por overlay ou animação
- [ ] Hover dependente em touch
- [ ] Foco de teclado invisível

**Teste do template:** trocando "KL COM" por qualquer outro nome, o site tem
que continuar parecer deste produto específico. Se continuar parecer bom, o
design é genérico e refazer.
