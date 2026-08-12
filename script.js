/* ============================================================
   O DIÁRIO DA MADRUGADA - console de visita
   ============================================================ */

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

/* ---------- reveal on scroll (IntersectionObserver) ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);

$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- relógio do masthead ---------- */
function tickClock() {
  const el = $("#mast-clock");
  if (!el) return;
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  el.textContent = `${hh}:${mm} local`;
}
tickClock();
setInterval(tickClock, 30000);

/* ============================================================
   CONSOLE DE VISITA
   ============================================================ */
const termInput = $("#term-input");
const termOut = $("#term-out");

function printLines(lines) {
  const list = Array.isArray(lines) ? lines : [lines];
  for (const line of list) {
    const div = document.createElement("div");
    div.className = "term-line";
    if (typeof line === "object" && line !== null) {
      div.className += " " + (line.cls || "");
      div.textContent = line.text;
    } else {
      div.textContent = line;
    }
    termOut.appendChild(div);
  }
  termOut.scrollTop = termOut.scrollHeight;
}

const CMDS = {
  help: () => [
    "comandos disponíveis:",
    "  help                  mostra esta ajuda",
    "  ls                    lista os arquivos",
    "  cat <arquivo>         lê um arquivo do diário",
    "  neofetch              info do sistema",
    "  whoami                quem é você",
    "  date                  que horas são na madrugada",
    "  bocchi                ...",
    "  hack                  ativa o modo hacker",
    "  sudo <cmd>            com o poder vem a responsabilidade",
    "  rm -rf /              não faça isso",
    "  clear                 limpa o console",
    "",
    "arquivos: sobre.txt · servicos.txt · habilidades.txt · projetos.txt · contato.txt · cert_python.txt",
  ],

  ls: () => [
    "README.md   cert_python.txt",
    "sobre.txt   servicos.txt   habilidades.txt   projetos.txt   contato.txt",
  ],

  "ls -la": () => [
    "-rw-r--r-- 1 kl kl   417 jan  3 09:12 README.md",
    "-rw-r--r-- 1 kl kl  2.1k jan  3 09:12 sobre.txt",
    "-rw-r--r-- 1 kl kl  1.3k jan  3 09:12 servicos.txt",
    "-rw-r--r-- 1 kl kl  1.8k jan  3 09:12 habilidades.txt",
    "-rw-r--r-- 1 kl kl   900 jan  3 09:12 projetos.txt",
    "-rw-r--r-- 1 kl kl   512 jan  3 09:12 contato.txt",
    "-rw-r--r-- 1 kl kl  320k jan  3 09:12 cert_python.txt",
  ],

  "cat sobre.txt": () => [
    "sou o kauê (kl), dev de praia grande/sp.",
    "desenvolvo sites e sistemas completos: front, back e automação.",
    "linux como sistema principal, minimalismo como estilo.",
    "quando não tô no terminal, tô ouvindo bocchi the rock.",
  ],

  "cat servicos.txt": () => [
    "sites de alta qualidade, do front ao deploy.",
    "  + front-end ....... html, css, javascript, typescript",
    "  + back-end ........ python, apis e integrações",
    "  + sistemas ........ da ideia à publicação",
    "  + automação ....... scripts que economizam horas",
    "",
    "disponível para novos projetos.",
  ],

  "cat habilidades.txt": () => [
    "o que eu sei fazer:",
    "  python ....... apis, automação, cli e dados",
    "  linux ........ shell, servidores, systemd",
    "  html/css ..... sites semânticos, acessíveis e responsivos",
    "  javascript ... interatividade, dom, apis",
    "  typescript ... código tipado e previsível",
    "  react/next ... componentes, rotas, ssr e deploy",
    "  node.js ...... servidores e apis sem dependências",
    "  git .......... fluxo de trabalho e histórico limpo",
    "  sqlite ....... modelos de dados embarcados",
  ],

  "cat projetos.txt": () => [
    "schoolflow        saas de gestão operacional para escolas",
    "VibeSec           scanner de segurança para sites criados com IA",
    "journal           plataforma de notas: web, cli e android",
    "QrCoder           gerador de QR code com api própria",
    "FOCO              site de estudos com pomodoro, streak e xp",
    "Opallium          seu workspace, sua estrutura, seu código",
    "PDFinder          buscador de PDFs online",
    "Price Calculator  ferramenta web minimalista",
    "Serpentia         laboratório de código interativo",
    "NewWay            otimizador de windows em python",
  ],

  "cat contato.txt": () => [
    "github   → @klcombr",
    "email    → kyxenpi@proton.me",
    "whatsapp → +55 (13) 97414-0538",
    "linkedin → kauê monteiro",
  ],

  "cat cert_python.txt": () => [
    "certificado de conclusão do curso de python.",
    "confere a foto lá na seção 'o autor'. :v",
  ],

  neofetch: () => [
    "        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
    "      ██████████████████████████████",
    "    ██████▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█████   kl@madrugada",
    "    ██████  ●  ●  ●                    --------------------",
    "    ██████                             cidade ..... praia grande",
    "    ██████  python >_                  horário ..... 3:42 am",
    "    ██████▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄    os .......... linux",
    "      ▀█████████████████████████████    shell ....... zsh",
    "        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀    editor ...... nvim",
    "                                        trilha ...... lofi beats",
  ],

  whoami: () => ["kl"],

  date: () => [new Date().toLocaleString("pt-BR")],

  bocchi: () => [
    "música boa, solidão saudável e muito reverb.",
    "quem entende, entende.",
  ],

  hack: () => [
    { text: "ativando modo hacker...", cls: "ok" },
    { text: "não, sério. não tem como hackear um zine. tenta um café.", cls: "dim" },
  ],

  sudo: () => [
    { text: "a senha está no papel colado no monitor.", cls: "dim" },
  ],

  "rm -rf /": () => [
    { text: "quase. mas o diário precisa de você vivo pra ler.", cls: "err" },
  ],

  clear: () => {
    termOut.innerHTML = "";
    return [];
  },
};

function runCommand(raw) {
  const cmd = raw.trim();

  if (!cmd) return;
  printLines([{ text: `└─$ ${cmd}`, cls: "dim" }]);

  if (cmd === "clear") {
    CMDS.clear();
    return;
  }

  if (cmd in CMDS) {
    printLines(CMDS[cmd]());
    return;
  }

  if (cmd.startsWith("sudo ")) {
    printLines(CMDS.sudo());
    return;
  }

  if (cmd.startsWith("cat ")) {
    const file = cmd.slice(4).trim();
    if (file in CMDS) {
      printLines(CMDS[file]());
    } else {
      printLines([{ text: `cat: ${file}: arquivo não encontrado`, cls: "err" }]);
    }
    return;
  }

  printLines([{ text: `comando não encontrado: ${cmd} (digite help)`, cls: "err" }]);
}

termInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  runCommand(termInput.value);
  termInput.value = "";
});

printLines([
  { text: "diário da madrugada · console de visita", cls: "ok" },
  { text: "digite help para ver os comandos.", cls: "dim" },
]);
