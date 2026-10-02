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
  window.open(`https://wa.me/919196699969?text=${encodeURIComponent(body)}`, "_blank");
  document.getElementById("formNote").textContent = "Thanks! WhatsApp will open with your enquiry. Just tap Send.";
});

document.getElementById("year").textContent = new Date().getFullYear();
