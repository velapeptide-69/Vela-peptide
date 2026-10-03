// Content protection: discourages copying text, images and code. These are deterrents only;
// a browser always receives the page, and OS screenshots cannot be blocked by a website.
(function () {
  const isField = (el) => el && el.closest && el.closest("input, textarea, select, [contenteditable]");
  const stop = (e) => { if (!isField(e.target)) { e.preventDefault(); return false; } };

  ["contextmenu", "selectstart", "copy", "cut", "dragstart"].forEach((t) => document.addEventListener(t, stop));

  document.addEventListener("keydown", (e) => {
    const k = (e.key || "").toLowerCase();
    const mod = e.ctrlKey || e.metaKey;
    const devtools = k === "f12" || (mod && e.shiftKey && ["i", "j", "c", "k"].includes(k)) || (e.metaKey && e.altKey && ["i", "j", "c", "u"].includes(k));
    const pageKeys = mod && ["u", "s", "p"].includes(k);
    const copyKeys = mod && ["c", "x", "a"].includes(k) && !isField(e.target);
    if (devtools || pageKeys || copyKeys) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  // Print Screen key (desktop): wipe the clipboard and hide the page for a moment
  document.addEventListener("keyup", (e) => {
    if (e.key === "PrintScreen") {
      try { navigator.clipboard.writeText("© Vela Peptide. Content is protected."); } catch (err) {}
      document.documentElement.classList.add("vp-hide");
      setTimeout(() => document.documentElement.classList.remove("vp-hide"), 1500);
    }
  });

  // Desktop: blur the page while the window is not in focus (most screenshot tools take focus)
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    addEventListener("blur", () => document.documentElement.classList.add("vp-blur"));
    addEventListener("focus", () => document.documentElement.classList.remove("vp-blur"));
  }
})();
