// theme simples
console.log("portfolio loaded");

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    const el = document.querySelector(a.getAttribute("href"));

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* LOADING */

const loading = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");

const messages = [
  "loading modules",
  "initializing ui",
  "starting services",
  "optimizing layout",
  "finalizing",
];

let i = 0;

const interval = setInterval(() => {
  i++;

  if (i < messages.length) {
    loadingText.style.opacity = "0";

    setTimeout(() => {
      loadingText.textContent = messages[i];
      loadingText.style.opacity = "1";
    }, 120);
  }
}, 450);

/* ENTRADA DOS CARDS */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12,
  },
);

document
  .querySelectorAll(".card, .terminal-card, .chip, .contact-card")
  .forEach((el) => {
    observer.observe(el);
  });

/* HEADER glow on scroll */

const header = document.querySelector(".header-inner");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.borderColor = "rgba(255,255,255,.28)";
    header.style.boxShadow = "0 0 28px rgba(255,255,255,.06)";
  } else {
    header.style.borderColor = "";
    header.style.boxShadow = "";
  }
});

/* LOADING END */

window.addEventListener("load", () => {
  setTimeout(() => {
    clearInterval(interval);

    loading.style.opacity = "0";
    loading.style.transform = "scale(1.02)";
    loading.style.transition = "opacity .55s ease, transform .55s ease";

    setTimeout(() => {
      loading.remove();
    }, 550);
  }, 1400);
});
