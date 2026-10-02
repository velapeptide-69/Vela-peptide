// Site search: the header search button opens a box that finds products, ingredients and fish species
(function () {
  const ITEMS = [
    { t: "Peptides & Proteins", u: "peptides.html", k: "peptide protein fish marine soy collagen keratin antimicrobial functional growth muscle" },
    { t: "Immunostimulants", u: "immunity.html", k: "immunity immune beta glucan mos nucleotides probiotics prebiotics phytogenics algal defence survival gut health" },
    { t: "Enzymes", u: "enzymes.html", k: "enzyme phytase protease peptidase amylase xylanase glucanase cellulase mannanase pectinase lipase digestion fcr gut" },
    { t: "Vitamins & Minerals", u: "vitamins.html", k: "vitamin mineral a d3 e k3 c b1 b2 b3 b5 b6 b7 b9 b12 calcium phosphorus magnesium zinc iron manganese copper selenium iodine cobalt" },
    { t: "Probiotics & Prebiotics", u: "probiotics.html", k: "probiotic prebiotic bacillus subtilis licheniformis lactobacillus pediococcus enterococcus saccharomyces yeast mos fos gos inulin xos gut" },
    { t: "Functional Additives", u: "functional.html", k: "functional chelated chelate mineral zinc iron manganese copper selenium magnesium calcium cobalt bioavailability" },
    { t: "Organic Acids", u: "organic-acids.html", k: "organic acid acidifier formic lactic citric propionic acetic butyric ph gut preservation" },
    { t: "Amino Acids", u: "amino-acids.html", k: "amino acid lysine methionine threonine tryptophan isoleucine leucine valine phenylalanine histidine alanine arginine asparagine aspartic cysteine glutamic glutamine glycine proline serine tyrosine muscle growth gut" },
    { t: "Nucleotides", u: "nucleotides.html", k: "nucleotide amp gmp cmp ump imp cell growth recovery dna rna gut" },
    { t: "Fish species: Catla, Rohu, Tilapia, Pangasius, Shrimp, Carp, Seabass", u: "index.html#applications", k: "fish species catla rohu mrigal tilapia pangasius shrimp prawn carp seabass" },
    { t: "Get a quote on WhatsApp", u: "https://wa.me/919156699969?text=Hello%20Vela%20Peptide%2C%20I%20need%20a%20quote.", k: "quote price contact whatsapp call order buy enquiry rate" },
  ];
  const btns = document.querySelectorAll(".search-btn");
  if (!btns.length) return;
  const box = document.createElement("div");
  box.className = "srch"; box.hidden = true;
  box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Search");
  box.innerHTML =
    '<div class="srch-panel">' +
    '<div class="srch-row"><svg class="srch-ico"><use href="#i-search"/></svg>' +
    '<input id="siteSearch" type="search" placeholder="Search products, ingredients or fish…" autocomplete="off" aria-label="Search" />' +
    '<button class="srch-close" type="button" aria-label="Close search">&times;</button></div>' +
    '<ul class="srch-list" id="srchList"></ul>' +
    '<p class="srch-hint">Try: lysine, zinc, gut health, rohu, enzymes</p></div>';
  document.body.appendChild(box);
  const input = box.querySelector("input"), list = box.querySelector(".srch-list");

  function render(q) {
    q = q.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    const hits = !words.length ? ITEMS.slice(0, 9) : ITEMS.filter((it) => {
      const hay = (it.t + " " + it.k).toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    list.innerHTML = "";
    if (!hits.length) {
      list.innerHTML = '<li class="srch-empty">No match for "' + q.replace(/[<>&"]/g, "") + '". Ask us on WhatsApp and we will help.</li>';
      return;
    }
    hits.forEach((it) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = it.u; a.textContent = it.t;
      if (it.u.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      a.addEventListener("click", close);
      li.appendChild(a); list.appendChild(li);
    });
  }
  let opener = null;
  function open() { opener = document.activeElement; box.hidden = false; document.body.style.overflow = "hidden"; input.value = ""; render(""); input.focus(); }
  function close() { if (box.hidden) return; box.hidden = true; document.body.style.overflow = ""; if (opener) opener.focus(); }
  btns.forEach((b) => b.addEventListener("click", open));
  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") { const first = list.querySelector("a"); if (first) first.click(); } });
  box.querySelector(".srch-close").addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();

// Header: fully transparent at the top of the page, frosted glass once the page scrolls
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", scrollY > 10 || document.querySelector(".main-nav.open") !== null);
  addEventListener("scroll", update, { passive: true });
  document.addEventListener("click", () => setTimeout(update, 0));
  update();
})();

