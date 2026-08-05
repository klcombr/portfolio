/* BOOT SCREEN */

const boot = document.getElementById("boot");

window.addEventListener("load", () => {
  setTimeout(() => {
    boot.style.opacity = "0";
    boot.style.transition = "opacity .4s ease";
    setTimeout(() => boot.remove(), 400);
  }, 1200);
});

/* TERMINAL TYPING (intro) */

function typeLine(el, text, speed = 16) {
  return new Promise((res) => {
    let i = 0;
    el.textContent = "";
    function next() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(next, speed + Math.random() * 20);
      } else {
        res();
      }
    }
    next();
  });
}

async function runTerminal() {
  const cmds = document.querySelectorAll(".cmd");
  for (const cmd of cmds) {
    const text = cmd.dataset.text;
    const delay = parseInt(cmd.dataset.delay) || 0;
    if (delay) await new Promise((r) => setTimeout(r, delay));
    await typeLine(cmd, text);
    await new Promise((r) => setTimeout(r, 200));
  }
}

/* SHELL interativo fica disponível logo após o boot,
   sem esperar a digitação do intro terminar. */
setTimeout(setupShell, 1600);

/* UPTIME (sessão) */

const bootTime = Date.now();

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;
  const s = Math.floor((Date.now() - bootTime) / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  clock.textContent = `uptime: ${pad(h)}:${pad(m)}:${pad(s % 60)}`;
}

updateClock();
setInterval(updateClock, 1000);

/* TEMA MONOCROMÁTICO (preto ↔ branco) */

const THEME_KEY = "kl_portfolio_theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f4f4f5" : "#0a0a0b");
}

function initTheme() {
  let theme = "dark";
  try {
    theme = localStorage.getItem(THEME_KEY) || "dark";
  } catch (e) {}
  applyTheme(theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
      toast(next === "light" ? "tema claro ativado" : "tema escuro ativado");
    });
  }
}

initTheme();

/* CERTIFICADO: abre/fecha sob demanda */

const certToggle = document.getElementById("cert-toggle");
const cert = certToggle ? certToggle.closest(".cert") : null;

if (certToggle && cert) {
  certToggle.addEventListener("click", () => {
    const open = cert.classList.toggle("open");
    certToggle.setAttribute("aria-expanded", String(open));
  });
}

/* SMOOTH SCROLL FOR ANCHORS */

document.querySelectorAll("a[href^='#']").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* MONOCHROME GLOW ON SCROLL */

const win = document.querySelector(".window");
window.addEventListener("scroll", () => {
  const p = Math.min(window.scrollY / 400, 1);
  const theme = document.documentElement.getAttribute("data-theme");
  const c = theme === "light" ? "0, 0, 0" : "255, 255, 255";
  win.style.boxShadow = `0 0 ${10 + p * 25}px rgba(${c}, ${p * 0.06})`;
});

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* RANDOM MICRO-GLITCH */

function microGlitch() {
  const term = document.querySelector(".term");
  if (!term) return;
  term.style.transform = `translate(${(Math.random() - 0.5) * 2}px, 0)`;
  setTimeout(() => {
    term.style.transform = "translate(0, 0)";
  }, 50);
  setTimeout(microGlitch, 4000 + Math.random() * 8000);
}
if (!REDUCED_MOTION) setTimeout(microGlitch, 3000);

/* AMBIENT PARTICLES */

const ambient = document.querySelector(".ambient");
function createParticle() {
  const p = document.createElement("div");
  p.style.cssText = `
    position: fixed;
    width: 1px;
    height: 1px;
    background: var(--accent);
    opacity: 0;
    left: ${Math.random() * 100}vw;
    top: ${Math.random() * 100}vh;
    pointer-events: none;
    z-index: 0;
    animation: floatUp ${6 + Math.random() * 8}s linear forwards;
  `;
  ambient.appendChild(p);
  setTimeout(() => p.remove(), 14000);
}
const style = document.createElement("style");
style.textContent = `
  @keyframes floatUp {
    0% { opacity: 0; transform: translateY(0); }
    15% { opacity: 0.15; }
    85% { opacity: 0.05; }
    100% { opacity: 0; transform: translateY(-120px); }
  }
`;
document.head.appendChild(style);
if (!REDUCED_MOTION) setInterval(createParticle, 3000);

/* ============================================================
   GAMIFICAÇÃO — XP, nível, conquistas, shell interativo
   ============================================================ */

const LS_KEY = "kl_portfolio_v1";

function loadGame() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

const game = Object.assign(
  {
    xp: 0,
    commands: [],
    achievements: [],
    visitedProjects: [],
    contactOpened: false,
    skillBonus: false,
    visited: false,
  },
  loadGame()
);

function saveGame() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(game));
  } catch (e) {}
}

function xpForLevel(l) {
  return 100 * ((l * (l - 1)) / 2);
}

function levelFromXp(xp) {
  let l = 1;
  while (xp >= xpForLevel(l + 1)) l++;
  return l;
}

function updateHud() {
  const hud = document.getElementById("hud");
  if (!hud) return;
  const l = levelFromXp(game.xp);
  const cur = xpForLevel(l);
  const next = xpForLevel(l + 1);
  const pct = next === cur ? 0 : Math.round(((game.xp - cur) / (next - cur)) * 100);
  hud.innerHTML = `lv <b>${l}</b> · ${game.xp} xp<span class="hud-bar"><span class="hud-fill" style="width:${pct}%"></span></span>`;
  hud.title = `xp: ${game.xp} (${pct}% para o próximo nível)`;
}

function addXp(n) {
  const before = levelFromXp(game.xp);
  game.xp += n;
  const after = levelFromXp(game.xp);
  if (after > before) {
    unlock("level2", true);
    toast(`level up · agora lv ${after}`, "levelup");
  }
  updateHud();
  saveGame();
}

/* CONQUISTAS */

const ACHIEVEMENTS = {
  first_boot: { name: "primeira visita", desc: "chegou até aqui" },
  first_cmd: { name: "o primeiro comando", desc: "digitou um comando" },
  helper: { name: "pediu ajuda", desc: "usou o help" },
  explorer: { name: "explorador", desc: "visitou todos os projetos" },
  social: { name: "falei com o dev", desc: "abriu um contato" },
  hacker: { name: "modo hacker", desc: "invadiu o terminal" },
  guitar: { name: "as guitarras da bocchi", desc: "soube a referência" },
  root: { name: "root", desc: "abusou do poder" },
  immortal: { name: "nada se cria", desc: "tentou rm -rf /" },
  terminalista: { name: "terminalista", desc: "rodou 10 comandos" },
  level2: { name: "subiu de nível", desc: "alcançou o lv 2" },
};

function unlock(id, silent) {
  if (game.achievements.includes(id)) return;
  game.achievements.push(id);
  const a = ACHIEVEMENTS[id];
  if (a && !silent) {
    toast(`conquista: ${a.name}`, "ach");
    addXp(40);
  }
  saveGame();
}

/* TOASTS */

function toast(msg, kind = "") {
  const box = document.getElementById("toasts");
  if (!box) return;
  const t = document.createElement("div");
  t.className = "toast" + (kind ? " " + kind : "");
  t.textContent = msg;
  box.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => t.classList.remove("show"), 2600);
  setTimeout(() => t.remove(), 3000);
}

/* RASTREIO DE CLICKS */

function trackActions() {
  const totalProjects = document.querySelectorAll(".project").length;

  document.querySelectorAll(".project-link").forEach((a) => {
    a.addEventListener("click", () => {
      addXp(20);
      const row = a.closest(".project");
      const name = row ? row.querySelector(".project-name").textContent : null;
      if (name && !game.visitedProjects.includes(name)) {
        game.visitedProjects.push(name);
        saveGame();
        if (game.visitedProjects.length >= totalProjects) unlock("explorer");
      }
    });
  });

  document.querySelectorAll(".contact-row").forEach((a) => {
    a.addEventListener("click", () => {
      addXp(15);
      if (!game.contactOpened) {
        game.contactOpened = true;
        saveGame();
        unlock("social");
      }
    });
  });

  document.querySelectorAll(".skill-fill").forEach((s) => {
    s.addEventListener("animationend", () => {
      if (!game.skillBonus) {
        game.skillBonus = true;
        saveGame();
        addXp(25);
      }
    });
  });
}

function animateSkills() {
  document.querySelectorAll(".skill-fill").forEach((f) => {
    const w = parseInt(f.dataset.w, 10) || 0;
    f.style.width = w + "%";
  });
}

/* SHELL INTERATIVO */

const termInput = document.getElementById("term-input");
const termOut = document.getElementById("term-out");

const FILES = ["sobre.txt", "habilidades.txt", "projetos.txt", "contato.txt", "README.md", "start.sh", "cert_python.txt"];

function complete(raw) {
  const input = raw.trim().toLowerCase();
  const names = Object.keys(CMDS);
  const pool = input.startsWith("cat ")
    ? FILES.filter((f) => f.startsWith(input.slice(4)))
    : names.filter((c) => c.startsWith(input));
  if (pool.length === 1) return input.startsWith("cat ") ? "cat " + pool[0] : pool[0];
  return null;
}

function printLines(lines, delay = 0) {
  const out = Array.isArray(lines) ? lines : [lines];
  const term = document.getElementById("shell");
  out.forEach((line, i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "term-out-line";
      div.textContent = line;
      termOut.appendChild(div);
      if (term && typeof term.scrollIntoView === "function")
        term.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, delay * i);
  });
}

const SKILLS = ["python", "typescript", "javascript", "linux", "html", "css", "git", "sqlite", "next.js"];

const CMDS = {
  help: {
    out: () => [
      "comandos disponíveis:",
      "  help                  mostra esta ajuda",
      "  ls                    lista os arquivos",
      "  cat sobre.txt         quem eu sou",
      "  cat habilidades.txt   minhas skills",
      "  cat projetos.txt      meus projetos",
      "  cat contato.txt       como falar comigo",
      "  neofetch              info do sistema",
      "  whoami                quem é você",
      "  xp                    seu progresso",
      "  conquistas            suas conquistas",
      "  sudo <cmd>            com o poder vem a responsabilidade",
      "  rm -rf /              não faça isso",
      "  bocchi                ...",
      "  hack                  ativa o modo hacker",
      "  clear                 limpa o terminal",
      "",
      "dica: todo comando vale xp. primeiras vezes valem mais.",
    ],
  },

  ls: {
    out: () => ["README.md   start.sh   cert_python.txt", "sobre.txt   habilidades.txt   projetos.txt   contato.txt"],
  },

  "ls -la": {
    out: () => [
      "-rw-r--r-- 1 kl kl   417 jan  3 09:12 README.md",
      "-rwxr-xr-x 1 kl kl   120 jan  3 09:12 start.sh",
      "-rw-r--r-- 1 kl kl  2.1k jan  3 09:12 sobre.txt",
      "-rw-r--r-- 1 kl kl  1.8k jan  3 09:12 habilidades.txt",
      "-rw-r--r-- 1 kl kl  1.1k jan  3 09:12 projetos.txt",
      "-rw-r--r-- 1 kl kl   512 jan  3 09:12 contato.txt",
      "-rw-r--r-- 1 kl kl  320k jan  3 09:12 cert_python.txt",
      "",
      "dica: tecle tab para completar comandos e arquivos.",
    ],
  },

  "cat sobre.txt": {
    out: () => [
      "sou o kauê (kl), dev de praia grande/sp.",
      "python, automação, backend e linha de comando.",
      "linux como sistema principal, minimalismo como estilo.",
      "quando não tô no terminal, tô ouvindo bocchi the rock.",
    ],
  },

  "cat habilidades.txt": {
    out: () => [
      "python ......... lv 9",
      "linux .......... lv 8",
      "html ........... lv 8",
      "css ............ lv 8",
      "javascript ..... lv 7",
      "typescript ..... lv 7",
      "git ............ lv 7",
      "sqlite ......... lv 6",
      "next.js ........ lv 5",
    ],
  },

  "cat projetos.txt": {
    out: () => [
      "FOCO             site de estudos: pomodoro, streak, xp e conquistas",
      "schoolflow       saas de gestão operacional para escolas",
      "PDFinder         buscador de PDFs online",
      "Serpentia        laboratório de código interativo",
      "Opallium         seu workspace, sua estrutura, seu código",
      "Price Calculator ferramenta web minimalista",
      "NewWay           otimizador de windows em python",
    ],
  },

  "cat contato.txt": {
    out: () => [
      "github   → @klcombr",
      "email    → kyxenpi@proton.me",
      "whatsapp → +55 (13) 97414-0538",
      "linkedin → kauê monteiro",
    ],
  },

  neofetch: {
    out: () => [
      "        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
      "      ██████████████████████████████",
      "    ██████▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█████   kl@portfolio",
      "    ██████  ●  ●  ●                    --------------------",
      "    ██████                             os ........ linux",
      "    ██████  python >_                  shell ...... zsh",
      "    ██████▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄    editor ..... nvim",
      "      ▀█████████████████████████████    foco ....... automação",
      "        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀    wm ......... minimalista",
    ],
  },

  whoami: {
    out: () => ["kl"],
  },

  xp: {
    out: () => {
      const l = levelFromXp(game.xp);
      const cur = xpForLevel(l);
      const next = xpForLevel(l + 1);
      const pct = next === cur ? 0 : Math.round(((game.xp - cur) / (next - cur)) * 100);
      return [`lv ${l} · ${game.xp} xp (${pct}% para o lv ${l + 1})`];
    },
  },

  conquistas: {
    out: () => {
      const list = Object.keys(ACHIEVEMENTS).map(
        (id) => `${game.achievements.includes(id) ? "[x]" : "[ ]"} ${ACHIEVEMENTS[id].name}`
      );
      return [...list, "", `${game.achievements.length}/${Object.keys(ACHIEVEMENTS).length} desbloqueadas`];
    },
  },

  clear: {
    out: () => {
      termOut.innerHTML = "";
      return [];
    },
  },

  ping: {
    out: () => ["pong."],
  },

  "bocchi": {
    out: () => [
      "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
      "█             GUITAR SOLO             █",
      "█ https://www.youtube.com/watch?v=8Selo-P1Ovc █",
      "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀",
      "",
      "sei lá, essa daqui é pra quem conhece.",
    ],
  },

  sudo: {
    out: () => [
      "kl não está no arquivo de sudoers. este incidente será reportado.",
      "(mas eu nunca apagaria seu sistema — seu progresso é salvo no navegador)",
    ],
  },

  "rm": {
    out: () => [
      "rm: não vou apagar nada. você precisa disso.",
      "(nada se cria, nada se perde, tudo se transforma)",
    ],
  },

  hack: {
    out: () => [
      "acessando...",
      "estabelecendo conexão cifrada...",
      "contornando o firewall...",
      "",
      ">> acesso concedido. você é um hacker agora.",
    ],
  },

  exit: {
    out: () => ["não dá pra sair. você já faz parte do sistema."],
  },

  star: {
    out: () => ["obrigado! volta sempre."],
  },

  hello: {
    out: () => ["oi! se quiser um help, digite help."],
  },
};

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function matchCommand(raw) {
  const input = raw.trim().toLowerCase();
  if (CMDS[input]) return { key: input, cmd: CMDS[input] };
  if (input.startsWith("cat ")) {
    const rest = input.slice(4);
    if (CMDS[rest]) return { key: input, cmd: CMDS[rest] };
    return { key: input, cmd: { out: () => [`cat: ${rest}: arquivo não encontrado`] } };
  }
  if (input.startsWith("sudo")) {
    if (input.replace("sudo", "").trim().startsWith("rm")) {
      return {
        key: "sudo rm",
        cmd: { out: () => ["permissão negada. nice try.", "", "dica: um sudo não te dá superpoderes aqui."] },
      };
    }
    return { key: "sudo", cmd: CMDS.sudo };
  }
  if (input.startsWith("rm")) return { key: "rm", cmd: CMDS.rm };
  if (input.startsWith("clear")) return { key: "clear", cmd: CMDS.clear };
  if (input.startsWith("bocchi")) return { key: "bocchi", cmd: CMDS.bocchi };
  if (input.startsWith("hack") || input.startsWith("matrix")) return { key: "hack", cmd: CMDS.hack };
  if (input.startsWith("ping")) return { key: "ping", cmd: CMDS.ping };
  if (input.startsWith("neofetch")) return { key: "neofetch", cmd: CMDS.neofetch };
  if (input.startsWith("whoami")) return { key: "whoami", cmd: CMDS.whoami };
  if (input.startsWith("xp") || input.startsWith("level")) return { key: "xp", cmd: CMDS.xp };
  if (input.startsWith("conquista") || input.startsWith("achievement")) return { key: "conquistas", cmd: CMDS.conquistas };
  if (input === "hi" || input === "oi" || input === "hello" || input === "ola" || input === "olá") {
    return { key: "hello", cmd: CMDS.hello };
  }
  if (input.startsWith("exit") || input.startsWith("quit")) return { key: "exit", cmd: CMDS.exit };
  if (input.includes("star") || input === "obrigado") return { key: "star", cmd: CMDS.star };
  return null;
}

function runCommand(raw) {
  const line = document.createElement("div");
  line.className = "prompt-line shell-cmd";
  line.innerHTML = `<span class="prompt">└─$</span> <span class="cmd">${esc(raw)}</span>`;
  termOut.appendChild(line);

  if (!game.commands.length) unlock("first_cmd");
  const matched = matchCommand(raw);

  if (!matched) {
    printLines([`bash: ${raw.trim().split(/\s+/)[0]}: comando não encontrado`, "digite help para ver os comandos."]);
    addXp(2);
  } else {
    if (!game.commands.includes(matched.key)) {
      game.commands.push(matched.key);
      saveGame();
      addXp(25);
      if (game.commands.length >= 10) unlock("terminalista");
    } else {
      addXp(5);
    }
    if (matched.key === "help") unlock("helper");
    if (matched.key === "hack") unlock("hacker");
    if (matched.key === "bocchi") unlock("guitar");
    if (matched.key === "sudo" || matched.key === "sudo rm") unlock("root");
    if (matched.key === "rm") unlock("immortal");
    const lines = matched.cmd.out();
    if (lines.length) printLines(lines, 60);
  }
}

const history = [];
let histIndex = -1;

function setupShell() {
  if (!termInput) return;
  termInput.disabled = false;
  termInput.focus();

  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const raw = termInput.value;
      termInput.value = "";
      if (raw.trim()) {
        history.push(raw.trim());
        histIndex = history.length;
        runCommand(raw);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIndex > 0) {
        histIndex--;
        termInput.value = history[histIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex < history.length - 1) {
        histIndex++;
        termInput.value = history[histIndex];
      } else {
        histIndex = history.length;
        termInput.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const done = complete(termInput.value);
      if (done) termInput.value = done;
    }
  });

  document.addEventListener("click", () => termInput.focus());
  updateHud();
}

/* START */

setTimeout(runTerminal, 1400);

/* BOOT BÔNUS DE VISITA */

setTimeout(() => {
  if (!game.visited) {
    game.visited = true;
    saveGame();
    addXp(50);
    unlock("first_boot", true);
    toast("bem-vindo ao terminal. +50 xp");
  }
  animateSkills();
  trackActions();
  updateHud();
}, 1500);
