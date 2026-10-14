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

// Fish pyramid: every few seconds each fish moves one spot anti-clockwise around the pyramid, gliding there
// Spots (CSS nth-child): 1 top, 2 middle-left, 3 middle-right, 4 bottom-left, 5 bottom-centre, 6 bottom-right
(function () {
  const row = document.querySelector(".species-row");
  if (!row || !row.animate || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const PATH = [0, 1, 3, 4, 5, 2]; // top -> middle-left -> bottom-left -> bottom-centre -> bottom-right -> middle-right -> top
  let timer = null, paused = false, visible = false;
  function shuffle() {
    if (paused || !visible || document.hidden) return;
    const fish = [...row.children];
    if (fish.length !== PATH.length) return;
    const before = new Map(fish.map((f) => [f, f.getBoundingClientRect()]));
    const order = fish.slice();
    PATH.forEach((spot, i) => { order[PATH[(i + 1) % PATH.length]] = fish[spot]; });
    order.forEach((f) => row.appendChild(f));
    order.forEach((f) => {
      const a = before.get(f), b = f.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top;
      if (dx || dy) f.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: 1100, easing: "cubic-bezier(.25,.8,.25,1)" });
    });
  }
  function start() { clearInterval(timer); timer = setInterval(shuffle, 4000); }
  function stop() { clearInterval(timer); }
  row.addEventListener("mouseenter", () => { paused = true; });
  row.addEventListener("mouseleave", () => { paused = false; });
  row.addEventListener("focusin", () => { paused = true; });
  row.addEventListener("focusout", () => { paused = false; });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible) start(); else stop(); }), { threshold: 0.2 }).observe(row);
  } else { visible = true; start(); }
})();
