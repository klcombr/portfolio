/* ============================================================
   KL COM — résumé behaviour
   ------------------------------------------------------------
   Deliberately minimal.

   This page is a document, not a landing page. It gets no
   scroll-reveal animation on purpose: hidden-until-scrolled content
   is a hazard here, because a visitor who prints to PDF without
   scrolling (or a recruiter who prints straight from the URL) would
   get a résumé with entire sections missing, and Ctrl+F and screen
   readers hit the same problem. Static content is the correct call
   for a page whose job is to be read, printed and parsed.

   The only behaviour is the print button, bound here rather than with
   an inline onclick so the page needs no 'unsafe-inline' in
   script-src.
   ============================================================ */

const printBtn = document.getElementById("print-btn");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

// Read progress. A plain scroll listener rather than Motion: this page
// loads no animation library at all.
const bar = document.getElementById("progress");
if (bar) {
  let queued = false;

  const update = () => {
    queued = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
  };

  addEventListener(
    "scroll",
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}
