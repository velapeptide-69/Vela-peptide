// Mobile menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Active nav link on scroll
const links = [...nav.querySelectorAll("a")];
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
const setActive = () => {
  let current = links[0];
  sections.forEach((s, i) => {
    if (s.getBoundingClientRect().top < 140) current = links[i];
  });
  links.forEach((l) => l.classList.toggle("active", l === current));
};
window.addEventListener("scroll", setActive, { passive: true });

// DNA double helix (SVG)
(function buildDNA() {
  const svg = document.getElementById("dna");
  if (!svg) return;
  const ns = "http://www.w3.org/2000/svg";
  const W = 600, H = 420, cx = W / 2, cy = H / 2;
  const amp = 70, turns = 2.2, steps = 220;
  let phase = 0;

  const strandA = document.createElementNS(ns, "path");
  const strandB = document.createElementNS(ns, "path");
  const rungs = document.createElementNS(ns, "g");
  [strandA, strandB].forEach((p) => {
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", "#7dff5a");
    p.setAttribute("stroke-width", "7");
    p.setAttribute("stroke-linecap", "round");
  });
  rungs.setAttribute("stroke", "#9dff7a");
  rungs.setAttribute("stroke-width", "3");
  rungs.setAttribute("opacity", ".85");
  svg.append(rungs, strandA, strandB);

  // The helix wraps around the fish along an ellipse-ish arc
  const point = (t, offset) => {
    const x = 20 + t * (W - 40);
    const baseY = cy + Math.sin(t * Math.PI) * -40;
    const y = baseY + amp * Math.sin(t * turns * 2 * Math.PI + offset + phase);
    return [x, y];
  };

  const draw = () => {
    let dA = "", dB = "", r = "";
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const [xa, ya] = point(t, 0);
      const [xb, yb] = point(t, Math.PI);
      dA += (i ? "L" : "M") + xa.toFixed(1) + " " + ya.toFixed(1);
      dB += (i ? "L" : "M") + xb.toFixed(1) + " " + yb.toFixed(1);
      if (i % 6 === 0) r += `<line x1="${xa.toFixed(1)}" y1="${ya.toFixed(1)}" x2="${xb.toFixed(1)}" y2="${yb.toFixed(1)}"/>`;
    }
    strandA.setAttribute("d", dA);
    strandB.setAttribute("d", dB);
    rungs.innerHTML = r;
  };

  draw();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tick = () => {
      phase += 0.012;
      draw();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();

// Rising bubbles
(function bubbles() {
  const box = document.getElementById("bubbles");
  for (let i = 0; i < 28; i++) {
    const b = document.createElement("span");
    const size = 6 + Math.random() * 18;
    b.className = "bubble";
    b.style.width = b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.setProperty("--drift", (Math.random() * 60 - 30).toFixed(0) + "px");
    b.style.animationDuration = 7 + Math.random() * 9 + "s";
    b.style.animationDelay = -Math.random() * 14 + "s";
    box.appendChild(b);
  }
})();

// Journey modal
const modal = document.getElementById("modal");
document.getElementById("journeyBtn").addEventListener("click", () => (modal.hidden = false));
document.getElementById("modalClose").addEventListener("click", () => (modal.hidden = true));
modal.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.hidden = true; });

// Quote form -> opens WhatsApp with the enquiry filled in
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Hello Vela Peptide, I need a quote.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nSpecies: ${f.get("species")}\n\n${f.get("message")}`;
  window.open(`https://wa.me/919156699969?text=${encodeURIComponent(body)}`, "_blank");
  document.getElementById("formNote").textContent = "Thanks! WhatsApp will open with your enquiry. Just tap Send.";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Hero slider: futuristic wipe with a scan line, auto-plays every 6 s
(function () {
  const root = document.getElementById("heroSlider");
  if (!root) return;
  const slides = [...root.querySelectorAll(".slide")];
  const dots = [...root.querySelectorAll(".sl-dot")];
  const now = document.getElementById("slNow");
  const DELAY = 6000;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0, timer = null, paused = false;
  root.style.setProperty("--sl-time", DELAY + "ms");
  if (reduce) root.classList.add("static");

  function show(next, dir) {
    next = (next + slides.length) % slides.length;
    if (next === index) return;
    const prev = slides[index];
    root.dataset.dir = dir;
    slides.forEach((s) => s.classList.remove("is-leaving"));
    prev.classList.remove("is-active");
    prev.classList.add("is-leaving");
    prev.setAttribute("aria-hidden", "true"); prev.tabIndex = -1;
    const cur = slides[next];
    cur.classList.add("is-active");
    cur.removeAttribute("aria-hidden"); cur.removeAttribute("tabindex");
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === next);
      if (i === next) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
    // restart the progress bar and the scan line
    const bar = dots[next].firstElementChild; bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = "";
    root.classList.remove("scanning"); void root.offsetWidth; root.classList.add("scanning");
    setTimeout(() => prev.classList.remove("is-leaving"), reduce ? 0 : 1100);
    index = next;
    if (now) now.textContent = String(next + 1).padStart(2, "0");
    restart();
  }
  function restart() {
    clearTimeout(timer);
    if (!reduce && !paused) timer = setTimeout(() => show(index + 1, "next"), DELAY);
  }
  function pause(p) { paused = p; root.classList.toggle("paused", p); if (p) clearTimeout(timer); else restart(); }

  root.querySelector(".sl-nav.next").addEventListener("click", () => show(index + 1, "next"));
  root.querySelector(".sl-nav.prev").addEventListener("click", () => show(index - 1, "prev"));
  dots.forEach((d, i) => d.addEventListener("click", () => show(i, i > index ? "next" : "prev")));
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1, "next");
    if (e.key === "ArrowLeft") show(index - 1, "prev");
  });
  root.addEventListener("mouseenter", () => pause(true));
  root.addEventListener("mouseleave", () => pause(false));
  root.addEventListener("focusin", () => pause(true));
  root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) pause(false); });
  document.addEventListener("visibilitychange", () => pause(document.hidden));

  // swipe on touch screens
  let x0 = null;
  root.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1), dx < 0 ? "next" : "prev");
  });

  restart();
})();

// Welcome popup: shows once per visit a moment after the page opens
(function () {
  const box = document.getElementById("promo");
  if (!box) return;
  let seen = false;
  try { seen = sessionStorage.getItem("velaPromoSeen") === "1"; } catch (e) {}
  if (seen) return;
  let lastFocus = null;
  function close() {
    box.hidden = true; document.body.style.overflow = "";
    try { sessionStorage.setItem("velaPromoSeen", "1"); } catch (e) {}
    if (lastFocus) lastFocus.focus();
  }
  setTimeout(() => {
    lastFocus = document.activeElement;
    box.hidden = false; document.body.style.overflow = "hidden";
    document.getElementById("promoClose").focus();
  }, 1200);
  document.getElementById("promoClose").addEventListener("click", close);
  document.getElementById("promoGo").addEventListener("click", close);
  box.querySelector(".btn-wa").addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
})();


// Product cards: spotlight each card's image in turn, in the owner's chosen order
(function () {
  const ORDER = ["immunity", "organic-acids", "functional", "nucleotides", "probiotics", "peptides", "vitamins", "enzymes", "amino-acids"];
  const grid = document.querySelector(".product-grid");
  if (!grid || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cards = ORDER.map((n) => grid.querySelector('.product-card[href="' + n + '.html"]')).filter(Boolean);
  if (!cards.length) return;
  let i = 0, timer = null, paused = false, visible = false;
  function step() {
    cards.forEach((c) => c.classList.remove("spot"));
    if (paused || !visible) return;
    const c = cards[i % cards.length];
    void c.offsetWidth; c.classList.add("spot");
    i++;
  }
  function start() { clearInterval(timer); step(); timer = setInterval(step, 1400); }
  function stop() { clearInterval(timer); cards.forEach((c) => c.classList.remove("spot")); }
  grid.addEventListener("mouseenter", () => { paused = true; stop(); });
  grid.addEventListener("mouseleave", () => { paused = false; if (visible) start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible && !paused) start(); else stop(); }), { threshold: 0.2 }).observe(grid);
  } else { visible = true; start(); }
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else if (visible && !paused) start(); });
})();
