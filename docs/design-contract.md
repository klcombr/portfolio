# design-contract.md — KL COM (rebuild do zero)

Registro de decisão do redesign. Quem vier depois (qualquer skill ou agente)
deve conseguir executar sem adivinhar e sem inventar.

---

## 1. Objetivo e artefato-alvo

Reescrever **do zero** o site pessoal estático de Kauê Monteiro (KL COM),
mantendo o tema black+red padrão dele e o deploy no Netlify
(`https://klcom.netlify.app/`). Artefato: `index.html` + CSS + JS vendorizado,
sem build step. Currículo (`curriculo.html`) é página irmã, não o foco deste
rebuild.

Audience: clientes potenciais (pequenos negócios e squads de produto) +
recrutadores técnicos. Modo de superfície `redline`: **Experience**.

## 2. Evidência usada

| # | Evidência | Tipo | Confiança |
|---|---|---|---|
| E1 | `assets/css/base.css` tokens reais do tema atual | arquivo local | **observed** |
| E2 | `index.html` e `curriculo.html` atuais — dados de contato, copy, projetos | arquivo local | **observed** |
| E3 | 13 portfolios referência, HTML+CSS baixados e lidos | web | **observed** |
| E4 | `gh api` — descrição, linguagem, topics, datas, homepage dos 6 repositórios | API GitHub | **observed** |
| E5 | READMEs dos repositórios (via `gh api repos/.../readme`) | API GitHub | **observed** |
| E6 | `~/Projetos/redline/README.md` + `REDLINE-SKILL.md` — skill de design do próprio usuário | arquivo local | **observed** |
| E7 | Decisão do usuário: 6 projetos, corrigir só quebra-cabeça rápido | conversa | **provided** |
| E8 | Decisão do usuário: zero-build vendorizado GSAP + Lenis + Three | conversa | **provided** |
| E9 | Conta GitHub `klcombr` — 53 repositórios públicos, criada 2024-09-17, Praia Grande SP | API GitHub | **observed** |
| E10 | Funcionalidade real de cada repositório (auditoria em `/tmp/opencode/repo-audit/`) | execução local | **observed** — ver §6 |

**Nada fora desta tabela pode aparecer no site.** Qualquer número, cliente,
prêmio, tecnologia ou status que não esteja aqui ou em E1–E10 é invenção e
está proibido.

## 3. Keep / Change / Do not copy

### Keep (qualidades a preservar)

| Qualidade | Origem | Por quê |
|---|---|---|
| `#000` / `#ededed` / `#ff2222` | E1 | é o tema padrão do usuário, pedido explícito |
| Geist + Geist Mono self-hosted | E1 | zero requisição de terceiro, sem CLS |
| `--ease: cubic-bezier(.16,1,.3,1)` | E1 | easing já calibrado do site atual |
| Escala fluida `clamp()` e medidas `--gutter/--section-y/--measure` | E1 | sistema de espaçamento funcionando |
| CSP estrita (`connect-src 'none'`, `script-src 'self'`) + `_headers` do Netlify | E1 | decisão de segurança consciente, não acidental |
| Three.js lazy via `IntersectionObserver` | E1 | padrão de performance já provado |
| Currículo ATS com print-to-PDF | E2 | entregável real, não tocar |
| Voz seca em pt-BR, "Sistemas que rodam sozinhos" | E2 | a voz já é boa, é a dele |
| Redline: nunca inventar fato | E6 | regra do próprio usuário |

### Change (o que o rebuild faz de novo)

| Mudança | Evidência | Motivo |
|---|---|---|
| Grade de 3 cards de projeto → **índice de 6 em linhas** | E3 (samgoddard/mikewilcock), E4/E5 | 6 repositórios em cards vira grade genérica; índice é o formato premium |
| Adicionar **Instrument Serif Italic** (22KB, 1 arquivo, 1 papel) | E3 (mkvision: `em,i{font-family:'Playfair Display'}`) | é a assinatura do favorito do usuário |
| Reveals migrados de Motion/Anime.js → **GSAP + SplitText** | E8 | decisão do usuário; kit único de motion |
| Adicionar **Lenis** | E8 | smooth scroll das referências que ele curtiu |
| Statement **pinned palavra-a-palavra** | E3 (mikewilcock `[data-pin] .statement__word`) | é o move mais memorável das 12 referências |
| Masthead → **barra de metadados** `NOME/PAPEL/LOCAL/STATUS` | E3 (kerimov) | dá credibilidade de "index card" imediata |
| Cursor customizado + magnético + marquee | E3 (10 de 12 sites) | padrão universal do conjunto, custo baixo |
| Botão **`(Pausar motion)`** | E3 (mikewilcock) | acessibilidade como polimento |
| Contador de repositórios: 52 → **53** | E9 | o número do site atual está defasado |

### Do not copy (nunca)

| Item | Origem | Por quê |
|---|---|---|
| Logotipo, wordmark, nome ou texto de qualquer referência | E3 | propriedade de terceiros |
| Screenshot, arte ou imagem de qualquer referência | E3 | idem |
| `--c-red:#ff003d` (awake), `#00FFAF` (mkvision), `#ea0a8e` (dibjick) | E3 | o acento é `#ff2222`, o do usuário |
| Fontes Matter (mkvision), Archivo (stefanobg/mikewilcock), Satoshi (kerimov), Syne (awake) | E3 | o tema padrão é Geist |
| Stack das referências (Next.js, Tailwind, Barba.js, Elementor, Framer, Sanity) | E3 | pedido explícito: zero-build, vendorizado |
| Copy de agência genérica ("Home of Digital Excellence") | E3 | anti-pattern `redline` |
| Métricas de prêmio / badge Awwwards | E3 | seria mentira neste contexto |

## 4. Direção final (um parágrafo)

Portfólio **editorial escuro, monocromático com um único vermelho racionado**.
A página é preta, a estrutura é feita de fios de 1px e de contraste
tipográfico — nunca de cards ou sombras. A identidade é uma **dualidade de
duas fontes**: Geist 800 em tamanhos de 6–11vw com tracking negativo para as
frases-afirmação, e Geist Mono miúdo em caixa alta para tudo que é metadado
(índices `01`, eyebrows `(Projetos)`, status `(ativo)`, navegação separada por
`//`). O contraponto — e a assinatura emprestada do favorito do usuário — é
**uma única palavra por headline em Instrument Serif itálico, pintada de
`#ff2222`**. Os projetos aparecem como **índice numerado em linhas**, não como
galeria de cards. Motion é um kit pequeno e repetido (reveal de linha mascarada,
statement palavra-a-palavra fixado, marquee, cursor, magnético) sobre GSAP +
Lenis vendorizado, com um único momento WebGL lazy em linhas vermelhas atrás do
hero. Tudo degrada para um site estático legível.

## 5. Riscos e desconhecidos explícitos

| Risco | Impacto | Mitigação |
|---|---|---|
| CSP atual proíbe `'unsafe-inline'` em `script-src` — GSAP/Lenis precisam de arquivo externo | build quebra se eu inlinear script | manter `type="module" src=` em arquivo, nunca `<script>` inline |
| SplitText do GSAP 3.13 é grátis desde 2025, mas preciso confirmar a licença do arquivo baixado | legal | verificar banner de licença do `.min.js` antes de vendorizar |
| Cursor customizado quebra UX em touch | usuário se perde | só ativa em `pointer:fine`; nunca esconde o nativo em touch |
| 6 projetos exigem dados reais de status (roda / não roda) | mentira se eu chutar | saída da auditoria E10 é a única fonte; o que não foi observado vira "não observado" e **não entra** |
| Statement com `pin` pode causar layout shift em mobile | ruim em celular | `gsap.matchMedia()` — sem pin em `< 768px`, sem scrub |
| Reescrever do zero pode perder o retrato ASCII não commitado (E2) | trabalho do usuário descartado | **decisão pendente do usuário** — sinalizado, não resolvido por conta própria |
| Número de repositórios (53) muda sozinho | dado desatualiza | ou usar número vivo da API no build, ou remover a quantidade e dizer "dezenas" — decidir no build |

## 6. Gate de qualidade (passar antes de declarar pronto)

**Produto e conteúdo**
- [ ] Nenhum fato fora da tabela §2
- [ ] Todos os 6 projetos com descrição tirada do README real ou da API
- [ ] Contato exato: `mxlsc@proton.me` · `+55 13 97414-0538` · `@klcombr`
- [ ] Currículo continua acessível em `curriculo.html` e nos redirects

**Visual**
- [ ] Ordem de atenção 1ª/2ª/3ª clara em 1440px, 390px e 2560px
- [ ] Só um acento saturado no site inteiro
- [ ] Índice de projetos em linhas, zero grade de cards
- [ ] Instrument Serif Italic aparece, no máximo, uma vez por headline

**Interação**
- [ ] Focus-visible vermelho em todo elemento interativo
- [ ] Navegação por teclado completa
- [ ] Cursor e magnético desligados em touch
- [ ] `(Pausar motion)` pausa GSAP + Lenis
- [ ] `prefers-reduced-motion` remove toda animação e mantém conteúdo

**Técnico**
- [ ] Zero requisição de terceiro (fontes, libs, tudo self-hosted)
- [ ] Zero erro de console
- [ ] Three.js lazy, com fallback 2D e cap de devicePixelRatio
- [ ] Layout funcional com JavaScript desligado
- [ ] `_headers` e `_redirects` preservados e em sincronia com os ids de seção
- [ ] Teste do template de §9 da `DESIGN.md` passa
