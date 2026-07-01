/* BOOT SCREEN */

const boot = document.getElementById("boot");

window.addEventListener("load", () => {
  setTimeout(() => {
    boot.style.opacity = "0";
    boot.style.transition = "opacity .35s ease";
    setTimeout(() => boot.remove(), 350);
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

/* SUBTLE GREEN GLOW ON SCROLL */

const win = document.querySelector(".window");

window.addEventListener("scroll", () => {
  const p = Math.min(window.scrollY / 400, 1);
  win.style.boxShadow = `0 0 ${10 + p * 30}px rgba(51, 255, 51, ${p * 0.07})`;
});
