const qs = (s) => document.querySelector(s);

const menuToggle = qs(".menu-toggle");
const nav = qs(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const searchBtn = qs("#searchBtn");
const searchPanel = qs("#searchPanel");
const searchInput = qs("#siteSearch");
const searchResult = qs("#searchResult");

searchBtn?.addEventListener("click", () => {
  const open = searchPanel.classList.toggle("open");
  searchPanel.setAttribute("aria-hidden", String(!open));
  if (open) setTimeout(() => searchInput?.focus(), 50);
});

qs("#searchGo")?.addEventListener("click", () => {
  const term = searchInput.value.trim().toLowerCase();
  const products = ["peptides", "proteins", "immunostimulants", "enzymes", "vitamins", "minerals", "probiotics", "prebiotics", "functional additives"];
  const found = products.filter(p => p.includes(term) || term.includes(p));
  if (!term) {
    searchResult.textContent = "Type a product or solution to search.";
  } else if (found.length) {
    searchResult.textContent = `Found: ${found.join(", ")}. Scroll to Products to view the range.`;
    document.querySelector("#products").scrollIntoView({behavior:"smooth"});
  } else {
    searchResult.textContent = "No exact match found. Use the enquiry form for a custom requirement.";
  }
});

qs("#watchBtn")?.addEventListener("click", () => {
  qs("#videoModal").classList.add("open");
  qs("#videoModal").setAttribute("aria-hidden", "false");
});
qs("#modalClose")?.addEventListener("click", () => {
  qs("#videoModal").classList.remove("open");
  qs("#videoModal").setAttribute("aria-hidden", "true");
});
qs("#videoModal")?.addEventListener("click", e => {
  if (e.target.id === "videoModal") qs("#modalClose").click();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && qs("#videoModal").classList.contains("open")) qs("#modalClose").click();
});

const form = qs("#contactForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const company = String(data.get("company") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const interest = String(data.get("interest") || "").trim();
  const message = String(data.get("message") || "").trim();
  const status = qs("#formStatus");

  if (!name || !email) {
    status.textContent = "Please enter your name and a valid email address.";
    status.style.color = "#b23b2f";
    return;
  }

  const subject = encodeURIComponent(`Vela Peptide enquiry — ${interest}`);
  const body = encodeURIComponent(
`Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Interest: ${interest}

Message:
${message}`
  );

  // Change this address to the final business inbox before launch.
  window.location.href = `mailto:sales@velapeptide.com?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email app with the enquiry details...";
  status.style.color = "#147a48";
});

qs("#year").textContent = new Date().getFullYear();

// Active navigation state while scrolling.
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px", threshold:0});
sections.forEach(s => observer.observe(s));
