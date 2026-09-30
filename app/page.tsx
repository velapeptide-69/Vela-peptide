"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

/* ---------- Icons ---------- */

type IconProps = { size?: number };

const svg = (size: number, children: ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Icons = {
  molecule: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <circle cx="12" cy="12" r="2.4" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M6.5 6.5l3.8 3.8M17.5 6.5l-3.8 3.8M6.5 17.5l3.8-3.8M17.5 17.5l-3.8-3.8" />
      </>,
    ),
  gear: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3" />
        <circle cx="12" cy="12" r="6.3" />
      </>,
    ),
  shield: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <path d="M12 2.8l7.5 3v5.6c0 4.6-3.1 8.4-7.5 9.8-4.4-1.4-7.5-5.2-7.5-9.8V5.8z" />
        <path d="M8.6 12.1l2.4 2.4 4.5-4.8" />
      </>,
    ),
  capsule: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <rect x="2.6" y="8.2" width="18.8" height="7.6" rx="3.8" transform="rotate(-45 12 12)" />
        <path d="M8.9 8.9l6.2 6.2" />
      </>,
    ),
  microbe: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2.5V7M12 17v4.5M2.5 12H7M17 12h4.5M5.3 5.3l3.2 3.2M15.5 15.5l3.2 3.2M18.7 5.3l-3.2 3.2M8.5 15.5l-3.2 3.2" />
        <circle cx="10.5" cy="10.8" r=".6" fill="currentColor" />
        <circle cx="13.6" cy="13" r=".6" fill="currentColor" />
      </>,
    ),
  leaf: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <path d="M20.5 3.5C11 3.5 4.5 8.5 4.5 15.5c0 1.8.6 3.4 1.4 4.6 1.2.8 2.8 1.4 4.6 1.4 7 0 12-6.5 10-18z" />
        <path d="M4 20.5c3-4.5 6.5-8 11-10.5" />
      </>,
    ),
  drop: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <path d="M12 2.8s6.5 7 6.5 11.6a6.5 6.5 0 01-13 0C5.5 9.8 12 2.8 12 2.8z" />
        <path d="M9 14.5a3 3 0 003 3" />
      </>,
    ),
  bars: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <path d="M5 20v-7M10 20V9M15 20v-5M20 20V4" strokeWidth={3.2} />
      </>,
    ),
  cycle: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <>
        <path d="M20 11a8 8 0 00-14.3-4.3M4 13a8 8 0 0014.3 4.3" />
        <path d="M5.5 2.8v4h4M18.5 21.2v-4h-4" />
      </>,
    ),
  heart: ({ size = 24 }: IconProps) =>
    svg(
      size,
      <path d="M12 20.5s-8.5-5.1-8.5-11A4.8 4.8 0 0112 6.6a4.8 4.8 0 018.5 2.9c0 5.9-8.5 11-8.5 11z" />,
    ),
  arrow: ({ size = 18 }: IconProps) =>
    svg(size, <path d="M5 12h14M13 6l6 6-6 6" />),
  search: ({ size = 22 }: IconProps) =>
    svg(
      size,
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
      </>,
    ),
  globe: ({ size = 22 }: IconProps) =>
    svg(
      size,
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" />
      </>,
    ),
  chevron: ({ size = 14 }: IconProps) => svg(size, <path d="M6 9l6 6 6-6" />),
  play: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
    </svg>
  ),
  menu: ({ size = 24 }: IconProps) => svg(size, <path d="M4 7h16M4 12h16M4 17h16" />),
  close: ({ size = 24 }: IconProps) => svg(size, <path d="M6 6l12 12M18 6L6 18" />),
  mail: ({ size = 20 }: IconProps) =>
    svg(
      size,
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
      </>,
    ),
};

type IconName = keyof typeof Icons;

function Icon({ name, size }: { name: IconName; size?: number }) {
  const Component = Icons[name];
  return <Component size={size} />;
}

/* ---------- Content ---------- */

const navItems = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Products", "products"],
  ["Applications", "applications"],
  ["Research", "research"],
  ["Sustainability", "sustainability"],
  ["Contact", "contact"],
] as const;

const orbs: { label: string; icon: IconName; className: string }[] = [
  { label: "Peptides", icon: "molecule", className: "orb-1" },
  { label: "Enzymes", icon: "gear", className: "orb-2" },
  { label: "Immuno\u00ADstimulants", icon: "shield", className: "orb-3" },
  { label: "Vitamins & Minerals", icon: "capsule", className: "orb-4" },
  { label: "Probiotics & Prebiotics", icon: "microbe", className: "orb-5" },
  { label: "Functional Additives", icon: "leaf", className: "orb-6" },
];

const benefits: { icon: IconName; top: string; bottom: string }[] = [
  { icon: "bars", top: "Faster", bottom: "Growth Rate" },
  { icon: "shield", top: "Stronger", bottom: "Immunity" },
  { icon: "cycle", top: "Better Feed", bottom: "Conversion (FCR)" },
  { icon: "heart", top: "Healthier", bottom: "Fish" },
  { icon: "leaf", top: "Sustainable", bottom: "Aquaculture" },
];

const products: {
  name: string;
  short: string;
  detail: string;
  image: string;
  icon: IconName;
}[] = [
  {
    name: "Peptides & Proteins",
    short: "High quality protein sources for optimum growth",
    detail:
      "Bioactive peptides and hydrolysed proteins that are highly digestible, improve palatability and support faster, uniform growth.",
    image: "/product-peptides.jpg",
    icon: "molecule",
  },
  {
    name: "Immunostimulants",
    short: "Natural support for stronger immunity",
    detail:
      "Beta-glucans, nucleotides and herbal actives that strengthen natural defences and help stock handle stress and disease pressure.",
    image: "/product-immunity.jpg",
    icon: "shield",
  },
  {
    name: "Enzymes",
    short: "Better digestion and nutrient absorption",
    detail:
      "Protease, phytase and carbohydrase blends that unlock more nutrients from feed and reduce waste in the water.",
    image: "/product-enzymes.jpg",
    icon: "microbe",
  },
  {
    name: "Vitamins & Minerals",
    short: "Complete nutritional support",
    detail:
      "Stabilised vitamin and chelated mineral premixes for skeletal strength, moulting, pigmentation and overall vitality.",
    image: "/product-vitamins.jpg",
    icon: "drop",
  },
  {
    name: "Probiotics & Prebiotics",
    short: "Gut health for better performance",
    detail:
      "Selected beneficial strains and prebiotic fibres that balance gut flora and improve pond and water quality.",
    image: "/product-probiotics.jpg",
    icon: "microbe",
  },
  {
    name: "Functional Additives",
    short: "Tailored solutions for modern aquaculture",
    detail:
      "Attractants, binders, toxin binders and organic acids, formulated to the needs of your species and system.",
    image: "/product-functional.jpg",
    icon: "leaf",
  },
];

const species = [
  { name: "Catla", image: "/fish-catla.jpg", note: "Surface feeder — fast growth & body weight" },
  { name: "Rohu", image: "/fish-rohu.jpg", note: "Column feeder — better FCR & survival" },
  { name: "Tilapia", image: "/fish-tilapia.jpg", note: "Robust growth in intensive systems" },
  { name: "Pangasius", image: "/fish-pangasius.jpg", note: "Fillet yield & feed efficiency" },
  { name: "Shrimp", image: "/fish-shrimp.jpg", note: "Moulting, immunity & survival" },
  { name: "Carp", image: "/fish-carp.jpg", note: "Healthy gut & uniform harvest size" },
  { name: "Seabass", image: "/fish-seabass.jpg", note: "Premium protein for carnivorous fish" },
];

const stats = [
  ["15+", "Years of R&D"],
  ["40+", "Formulations"],
  ["12", "Countries served"],
  ["2,500+", "Farms supported"],
];

const applications = [
  {
    title: "Feed Mills",
    text: "Premixes and additives engineered for pelleting and extrusion stability, dosed easily in your existing lines.",
  },
  {
    title: "Fish & Shrimp Farms",
    text: "Top-dressing and water-applied solutions for grow-out ponds, cages, RAS and biofloc systems.",
  },
  {
    title: "Hatcheries",
    text: "Starter nutrition and immune support for larvae, fry and post-larvae during their most sensitive stages.",
  },
];

const sustainability = [
  {
    icon: "cycle" as IconName,
    title: "Lower FCR",
    text: "Every point of FCR we save means less feed, lower cost and a lighter footprint per kilo harvested.",
  },
  {
    icon: "drop" as IconName,
    title: "Cleaner Water",
    text: "Better digestion reduces nitrogen and phosphorus waste reaching ponds and surrounding ecosystems.",
  },
  {
    icon: "shield" as IconName,
    title: "Less Antibiotic Use",
    text: "Natural immunity support helps farmers reduce reliance on antibiotics and chemicals.",
  },
];

/* ---------- Page ---------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      reveal.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setQuoteOpen(false);
        setVideoOpen(false);
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = quoteOpen || videoOpen || menuOpen ? "hidden" : "";
  }, [quoteOpen, videoOpen, menuOpen]);

  function go(id: string) {
    setMenuOpen(false);
    setSearchOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openQuote(product = "") {
    setSelectedProduct(product);
    setSent(false);
    setQuoteOpen(true);
    setMenuOpen(false);
  }

  function submitQuote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Product: ${data.get("product")}`,
      `Species: ${data.get("species")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:velapeptide@gmail.com?subject=${encodeURIComponent(
      "Quote request — Vela Peptide",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const q = query.trim().toLowerCase();
  const results = q
    ? [
        ...products
          .filter((p) => `${p.name} ${p.short}`.toLowerCase().includes(q))
          .map((p) => ({ label: p.name, kind: "Product", target: "products" })),
        ...species
          .filter((s) => s.name.toLowerCase().includes(q))
          .map((s) => ({ label: s.name, kind: "Species", target: "applications" })),
      ]
    : [];

  return (
    <>
      {/* ---------- Header ---------- */}
      <header className={`topbar${scrolled ? " scrolled" : ""}`}>
        <div className="navwrap">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            aria-label="Vela Peptide — home"
          >
            <span className="logo-word">
              <span className="logo-vela">Vela</span>
              <span className="logo-peptide">
                Peptide
                <svg className="logo-leaf" viewBox="0 0 40 30" aria-hidden="true">
                  <path d="M4 26C6 12 16 4 30 3c-2 12-10 21-26 23z" fill="#7cff3a" />
                  <path d="M20 22c2-9 9-15 17-17-1 9-7 15-17 17z" fill="#46c21a" />
                </svg>
              </span>
            </span>
            <span className="logo-tag">Advanced Nutrition for Aquatic Life</span>
          </a>

          <nav className="desktop-nav" aria-label="Main">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name="search" />
            </button>
            <span className="divider" />
            <button className="lang" aria-label="Language">
              <Icon name="globe" /> EN <Icon name="chevron" />
            </button>
            <button className="btn btn-lime quote-btn" onClick={() => openQuote()}>
              Get a Quote <Icon name="arrow" />
            </button>
            <button
              className="icon-btn menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="search-panel">
            <div className="search-box">
              <Icon name="search" size={18} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products or species…"
                aria-label="Search products or species"
              />
            </div>
            {q && (
              <ul className="search-results">
                {results.length ? (
                  results.map((r) => (
                    <li key={r.label}>
                      <button
                        onClick={() => {
                          setQuery("");
                          go(r.target);
                        }}
                      >
                        <span>{r.label}</span>
                        <small>{r.kind}</small>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="empty">No results for “{query}”</li>
                )}
              </ul>
            )}
          </div>
        )}
      </header>

      {/* ---------- Mobile menu ---------- */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              tabIndex={menuOpen ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {label}
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <button
          className="btn btn-lime"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => openQuote()}
        >
          Get a Quote <Icon name="arrow" />
        </button>
      </div>

      <main>
        {/* ---------- Hero ---------- */}
        <section id="home" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="bubbles" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} style={{ ["--i" as string]: i }} />
            ))}
          </div>

          <div className="hero-stage">
            <h1 className="sr-only">
              Vela Peptide — advanced fish feed additives for aquaculture
            </h1>

            <div className="helix-wrap" aria-hidden="true">
              <div className="platform" />
              <svg className="helix" viewBox="0 0 600 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hx" x1="0" x2="1">
                    <stop offset="0" stopColor="#7cff3a" stopOpacity=".15" />
                    <stop offset=".5" stopColor="#9dff5c" />
                    <stop offset="1" stopColor="#7cff3a" stopOpacity=".15" />
                  </linearGradient>
                </defs>
                <g className="helix-strands">
                  <path d="M0 150 C75 30,150 30,225 150 S375 270,450 150 S525 30,600 150" />
                  <path d="M0 150 C75 270,150 270,225 150 S375 30,450 150 S525 270,600 150" />
                </g>
                <g className="helix-rungs">
                  {Array.from({ length: 23 }).map((_, i) => {
                    const x = 12 + i * 25.5;
                    const amp = Math.sin((x / 450) * Math.PI * 2) * 88;
                    return <line key={i} x1={x} x2={x} y1={150 - amp} y2={150 + amp} />;
                  })}
                </g>
              </svg>
              <div className="hero-fish">
                <img src="/fish-tilapia.jpg" alt="" />
              </div>
              <div className="hero-shrimp">
                <img src="/fish-shrimp.jpg" alt="" />
              </div>
            </div>

            {orbs.map((orb) => (
              <button
                key={orb.label}
                className={`orb ${orb.className}`}
                onClick={() => go("products")}
              >
                <Icon name={orb.icon} size={36} />
                <span>{orb.label}</span>
              </button>
            ))}
          </div>

          {/* Benefits strip */}
          <div className="benefit-bar reveal">
            <ul className="benefits">
              {benefits.map((b) => (
                <li key={b.top}>
                  <span className="benefit-icon">
                    <Icon name={b.icon} size={30} />
                  </span>
                  <span>
                    {b.top}
                    <br />
                    {b.bottom}
                  </span>
                </li>
              ))}
            </ul>
            <p className="science">
              <span>Science</span> <span>Driven</span> <span>Solutions</span>
            </p>
            <button className="journey" onClick={() => setVideoOpen(true)}>
              <img src="/hero-underwater.jpg" alt="" />
              <span className="journey-play">
                <Icon name="play" />
              </span>
              <span className="journey-text">
                Our Journey
                <br />
                <small>Watch Now</small>
              </span>
            </button>
          </div>
        </section>

        {/* ---------- Products ---------- */}
        <section id="products" className="section products">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Fish Feed Additives</p>
              <h2>Complete Range of Fish Feed Additives</h2>
            </div>
            <div className="head-side">
              <p>
                Science backed formulations to support growth, health and productivity
                for all stages of aquaculture.
              </p>
              <button className="btn btn-outline" onClick={() => go("applications")}>
                View All Products <Icon name="arrow" />
              </button>
            </div>
          </div>

          <div className="product-grid">
            {products.map((p, i) => (
              <article
                key={p.name}
                className="product-card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="product-top">
                  <span className="product-icon">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <div>
                    <h3>{p.name.replace("Immunostimulants", "Immuno\u00ADstimulants")}</h3>
                    <p>{p.short}</p>
                  </div>
                </div>
                <div className="product-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-more">
                  <p>{p.detail}</p>
                  <button className="link-btn" onClick={() => openQuote(p.name)}>
                    Request pricing <Icon name="arrow" size={16} />
                  </button>
                </div>
                <button
                  className="round-arrow"
                  aria-label={`Enquire about ${p.name}`}
                  onClick={() => openQuote(p.name)}
                >
                  <Icon name="arrow" />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Species strip ---------- */}
        <section className="species" aria-label="Species we support">
          <div className="water-line" aria-hidden="true" />
          <ul className="species-row">
            {species.map((s, i) => (
              <li
                key={s.name}
                className="species-item reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <button onClick={() => go("applications")} title={s.note}>
                  <span className="species-img">
                    <img src={s.image} alt={s.name} loading="lazy" />
                  </span>
                  <span className="species-name">
                    {s.name}
                    <span className="mini-arrow">
                      <Icon name="arrow" size={16} />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section about">
          <div className="two-col">
            <div className="reveal">
              <p className="eyebrow">About Us</p>
              <h2>
                Advanced nutrition, <span className="lime">built on science</span>
              </h2>
              <p className="lead">
                Vela Peptide develops high-performance feed additives for fish and shrimp
                farming. Our team of nutritionists, microbiologists and aquaculture
                specialists turns research into practical products that help farmers
                grow healthier stock, more efficiently.
              </p>
              <p className="muted">
                From hatchery to harvest, we partner with feed mills and farms to design
                nutrition programmes around real pond conditions — tested in our labs and
                proven in the field.
              </p>
              <button className="btn btn-lime" onClick={() => openQuote()}>
                Talk to an Expert <Icon name="arrow" />
              </button>
            </div>
            <div className="stats reveal">
              {stats.map(([n, l]) => (
                <div key={l} className="stat">
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Applications ---------- */}
        <section id="applications" className="section applications">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Applications</p>
              <h2>Solutions for Every Stage of Aquaculture</h2>
            </div>
            <div className="head-side">
              <p>
                Proven programmes for carps, catfish, tilapia, shrimp and marine species —
                across ponds, cages, RAS and hatcheries.
              </p>
            </div>
          </div>
          <div className="app-grid">
            {applications.map((a, i) => (
              <article key={a.title} className="app-card reveal">
                <span className="app-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <button className="link-btn" onClick={() => openQuote()}>
                  Learn more <Icon name="arrow" size={16} />
                </button>
              </article>
            ))}
          </div>
          <div className="species-chips reveal">
            {species.map((s) => (
              <div key={s.name} className="chip">
                <img src={s.image} alt="" loading="lazy" />
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.note}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Research ---------- */}
        <section id="research" className="section research">
          <div className="two-col">
            <div className="research-img reveal">
              <img src="/research.jpg" alt="Vela Peptide research laboratory" loading="lazy" />
            </div>
            <div className="reveal">
              <p className="eyebrow">Research</p>
              <h2>
                Where the lab meets <span className="lime">the pond</span>
              </h2>
              <p className="lead">
                Every formulation starts with controlled trials and ends with on-farm
                validation, so the results you see on paper are the results you get in
                the water.
              </p>
              <ul className="checks">
                <li>In-house nutrition & microbiology laboratory</li>
                <li>Growth, FCR & survival trials across key species</li>
                <li>Quality tested every batch — consistent performance</li>
                <li>Technical support team for on-farm guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Sustainability ---------- */}
        <section id="sustainability" className="section sustainability">
          <div className="section-head center reveal">
            <div>
              <p className="eyebrow">Sustainability</p>
              <h2>Growing More With Less</h2>
            </div>
          </div>
          <div className="sus-grid">
            {sustainability.map((s) => (
              <article key={s.title} className="sus-card reveal">
                <span className="sus-icon">
                  <Icon name={s.icon} size={30} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section contact">
          <div className="contact-card reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s grow healthier fish together</h2>
              <p className="muted">
                Tell us your species, system and goals — our team will recommend the right
                products and send you a quote.
              </p>
              <ul className="contact-list">
                <li>
                  <Icon name="mail" />
                  <a href="mailto:velapeptide@gmail.com">velapeptide@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="contact-cta">
              <button className="btn btn-lime big" onClick={() => openQuote()}>
                Get a Quote <Icon name="arrow" />
              </button>
              <button className="btn btn-outline big" onClick={() => go("products")}>
                Explore Products <Icon name="arrow" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <span className="lime">Vela</span> Peptide
            </div>
            <p className="muted">Advanced Nutrition for Aquatic Life</p>
          </div>
          <nav aria-label="Footer">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="copy">© {new Date().getFullYear()} Vela Peptide. All rights reserved.</p>
      </footer>

      {/* ---------- Quote modal ---------- */}
      {quoteOpen && (
        <div className="overlay" onClick={() => setQuoteOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="icon-btn modal-close"
              aria-label="Close"
              onClick={() => setQuoteOpen(false)}
            >
              <Icon name="close" />
            </button>
            {sent ? (
              <div className="sent">
                <span className="sus-icon">
                  <Icon name="shield" size={30} />
                </span>
                <h3 id="quote-title">Thank you!</h3>
                <p className="muted">
                  Your email app should open with your request. If it didn’t, write to{" "}
                  <a href="mailto:velapeptide@gmail.com">velapeptide@gmail.com</a>.
                </p>
                <button className="btn btn-lime" onClick={() => setQuoteOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Get a Quote</p>
                <h3 id="quote-title">Tell us what you need</h3>
                <form onSubmit={submitQuote} className="form">
                  <input name="name" placeholder="Full name *" required />
                  <input name="company" placeholder="Company / Farm" />
                  <input name="email" type="email" placeholder="Email *" required />
                  <input name="phone" type="tel" placeholder="Phone" />
                  <select name="product" defaultValue={selectedProduct}>
                    <option value="">Product of interest</option>
                    {products.map((p) => (
                      <option key={p.name}>{p.name}</option>
                    ))}
                  </select>
                  <select name="species" defaultValue="">
                    <option value="">Species</option>
                    {species.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Farm size, quantity, any requirements…"
                  />
                  <button type="submit" className="btn btn-lime">
                    Send Request <Icon name="arrow" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ---------- Video modal ---------- */}
      {videoOpen && (
        <div className="overlay" onClick={() => setVideoOpen(false)}>
          <div
            className="modal video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Our Journey"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="icon-btn modal-close"
              aria-label="Close"
              onClick={() => setVideoOpen(false)}
            >
              <Icon name="close" />
            </button>
            <div className="video-frame">
              <img src="/hero-underwater.jpg" alt="" />
              <div>
                <h3>Our Journey</h3>
                <p>
                  From a small research lab to a trusted partner for fish and shrimp farmers —
                  our story video is coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
