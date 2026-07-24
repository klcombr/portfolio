/* BOOT SCREEN */

const boot = document.getElementById("boot");

window.addEventListener("load", () => {
  setTimeout(() => {
    boot.style.opacity = "0";
    boot.style.transition = "opacity .4s ease";
    setTimeout(() => boot.remove(), 400);
  }, 1200);
});

/* TERMINAL TYPING */

function typeLine(el, text, speed = 30) {
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

/* CLOCK */

function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `uptime: ${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);

/* START */

setTimeout(runTerminal, 1400);

/* SMOOTH SCROLL FOR ANCHORS */

document.querySelectorAll("a[href^='#']").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* SUBTLE PINK GLOW ON SCROLL */

const win = document.querySelector(".window");

window.addEventListener("scroll", () => {
  const p = Math.min(window.scrollY / 400, 1);
  win.style.boxShadow = `0 0 ${10 + p * 25}px rgba(232, 99, 122, ${p * 0.06})`;
});

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

setTimeout(microGlitch, 3000);

/* AMBIENT PARTICLES */

const ambient = document.querySelector(".ambient");

function createParticle() {
  const p = document.createElement("div");
  p.style.cssText = `
    position: fixed;
    width: 1px;
    height: 1px;
    background: #e8637a;
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

/* inject float animation */
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

setInterval(createParticle, 3000);
