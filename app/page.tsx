"use client";

import { useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Products", "products"],
  ["Applications", "applications"],
  ["Research", "research"],
  ["Sustainability", "sustainability"],
  ["Contact", "contact"],
];

const benefits = [
  ["▥", "Faster", "Growth Rate"],
  ["◇", "Stronger", "Immunity"],
  ["⟳", "Better Feed", "Conversion (FCR)"],
  ["♡", "Healthier", "Fish"],
  ["⌁", "Sustainable", "Aquaculture"],
];

const categories = [
  {
    title: "Peptides & Proteins",
    text: "High quality protein sources for optimum growth",
    image: "/images/product-peptides.jpg",
    icon: "⌘",
  },
  {
    title: "Immunostimulants",
    text: "Natural support for stronger immunity",
    image: "/images/product-immunity.jpg",
    icon: "◇",
  },
  {
    title: "Enzymes",
    text: "Better digestion and nutrient absorption",
    image: "/images/product-enzymes.jpg",
    icon: "⚙",
  },
  {
    title: "Vitamins & Minerals",
    text: "Complete nutritional support",
    image: "/images/product-vitamins.jpg",
    icon: "✦",
  },
  {
    title: "Probiotics & Prebiotics",
    text: "Gut health for better performance",
    image: "/images/product-probiotics.jpg",
    icon: "●",
  },
  {
    title: "Functional Additives",
    text: "Tailored solutions for modern aquaculture",
    image: "/images/product-functional.jpg",
    icon: "⌁",
  },
];

const species = [
  ["Catla", "/images/fish-catla.jpg"],
  ["Rohu", "/images/fish-rohu.jpg"],
  ["Tilapia", "/images/fish-tilapia.jpg"],
  ["Pangasius", "/images/fish-pangasius.jpg"],
  ["Shrimp", "/images/fish-shrimp.jpg"],
  ["Carp", "/images/fish-carp.jpg"],
  ["Seabass", "/images/fish-seabass.jpg"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [quote, setQuote] = useState(false);
  const [search, setSearch] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenu(false);
  };

  return (
    <main className="site">
      <style>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          background:#021612;
          color:#fff;
          font-family:Arial,Helvetica,sans-serif
        }
        button,input,textarea{font:inherit}
        button{cursor:pointer}

        .site{
          min-height:100vh;
          overflow:hidden;
          background:
            radial-gradient(circle at 50% 10%,rgba(48,255,139,.10),transparent 30%),
            #021612
        }

        /* HEADER */
        .header{
          position:fixed;
          z-index:100;
          top:0;
          left:0;
          right:0;
          height:78px;
          display:flex;
          align-items:center;
          gap:25px;
          padding:0 4.5%;
          background:rgba(1,15,13,.84);
          border-bottom:1px solid rgba(92,255,133,.20);
          backdrop-filter:blur(18px)
        }

        .brand{
          width:265px;
          flex-shrink:0;
          border:0;
          background:transparent;
          color:#fff;
          text-align:left
        }

        .brand-name{
          font-size:34px;
          line-height:.9;
          font-weight:900;
          letter-spacing:-2px
        }

        .brand-name span{color:#67ff43}
        .brand-mark{color:#67ff43;margin-left:5px}
        .tagline{
          margin-top:7px;
          padding-left:37px;
          font-size:12px;
          color:rgba(255,255,255,.82)
        }

        .nav{
          flex:1;
          display:flex;
          justify-content:center;
          gap:22px
        }

        .nav button{
          position:relative;
          padding:11px 2px;
          border:0;
          background:none;
          color:#fff;
          font-size:14px;
          white-space:nowrap
        }

        .nav button:first-child{color:#69ff46}
        .nav button:first-child:after{
          content:"";
          position:absolute;
          left:0;
          right:0;
          bottom:0;
          height:3px;
          border-radius:8px;
          background:#69ff46;
          box-shadow:0 0 14px #69ff46
        }

        .header-right{
          display:flex;
          align-items:center;
          gap:15px
        }

        .search-button{
          width:38px;
          height:38px;
          border:0;
          background:none;
          color:#fff;
          font-size:26px
        }

        .language{
          white-space:nowrap;
          font-size:14px
        }

        .quote-button,
        .primary{
          border:0;
          border-radius:30px;
          padding:14px 23px;
          background:linear-gradient(135deg,#7aff50,#4ee331);
          color:#03180c;
          font-weight:800;
          box-shadow:0 0 25px rgba(87,255,61,.20)
        }

        .menu-button{
          display:none;
          width:42px;
          height:42px;
          border:1px solid rgba(100,255,80,.35);
          border-radius:11px;
          background:rgba(0,0,0,.2);
          color:#6dff4b;
          font-size:23px
        }

        .mobile-nav{
          position:fixed;
          z-index:90;
          top:78px;
          left:0;
          right:0;
          padding:14px;
          display:grid;
          background:rgba(2,20,16,.98);
          border-bottom:1px solid rgba(100,255,80,.2)
        }

        .mobile-nav button{
          padding:14px;
          border:0;
          border-radius:10px;
          background:none;
          color:#fff;
          text-align:left
        }

        .search-box{
          position:fixed;
          z-index:110;
          top:90px;
          right:5%;
          width:min(360px,90%);
          padding:15px;
          border:1px solid rgba(100,255,80,.35);
          border-radius:15px;
          background:#06251c;
          box-shadow:0 20px 50px #0008
        }

        .search-box input{
          width:100%;
          border:0;
          outline:0;
          color:#fff;
          background:transparent
        }

        /* HERO */
        .hero{
          position:relative;
          min-height:650px;
          padding:130px 5% 60px;
          display:flex;
          align-items:center;
          isolation:isolate;
          background:
            linear-gradient(90deg,rgba(0,12,9,.88),rgba(0,15,12,.35),rgba(0,12,9,.12)),
            url("/images/hero-underwater.jpg") center/cover no-repeat
        }

        .hero:after{
          content:"";
          position:absolute;
          z-index:-1;
          inset:0;
          background:
            radial-gradient(circle at 62% 45%,rgba(34,255,146,.17),transparent 28%),
            linear-gradient(180deg,transparent 45%,#031914 100%)
        }

        .hero-content{
          position:relative;
          z-index:5;
          width:42%;
          max-width:570px
        }

        .eyebrow{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:18px;
          color:#69ff46;
          font-size:11px;
          font-weight:800;
          letter-spacing:3px
        }

        .eyebrow:after{
          content:"";
          width:65px;
          height:2px;
          background:#69ff46;
          box-shadow:0 0 12px #69ff46
        }

        .hero h1{
          margin:0;
          font-size:clamp(45px,5vw,76px);
          line-height:.94;
          letter-spacing:-3px
        }

        .green{
          color:#69ff46;
          text-shadow:0 0 25px rgba(105,255,70,.25)
        }

        .hero-text{
          max-width:490px;
          margin:22px 0;
          color:rgba(255,255,255,.76);
          font-size:16px;
          line-height:1.65
        }

        .hero-buttons{
          display:flex;
          gap:12px;
          flex-wrap:wrap
        }

        .outline{
          border:1px solid rgba(105,255,70,.60);
          border-radius:30px;
          padding:14px 22px;
          color:#fff;
          background:rgba(0,25,18,.55)
        }

        /* FLOATING CIRCLES */
        .orbs{
          position:absolute;
          inset:0;
          pointer-events:none
        }

        .orb{
          position:absolute;
          width:105px;
          height:105px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding:10px;
          border:1px solid rgba(105,255,100,.65);
          border-radius:50%;
          background:
            radial-gradient(circle at 30% 20%,rgba(110,255,170,.35),rgba(0,42,29,.82) 60%,#021510 100%);
          box-shadow:0 0 25px rgba(65,255,125,.14),inset 0 0 25px rgba(65,255,125,.10);
          font-size:11px;
          font-weight:700
        }

        .orb strong{
          margin-bottom:6px;
          color:#6aff47;
          font-size:25px
        }

        .orb1{left:34%;top:15%}
        .orb2{left:29%;top:47%}
        .orb3{left:39%;bottom:10%}
        .orb4{right:19%;top:14%}
        .orb5{right:11%;top:37%}
        .orb6{right:18%;bottom:11%}

        .dna{
          position:absolute;
          z-index:1;
          width:430px;
          height:185px;
          right:21%;
          top:35%;
          border-top:5px solid #2dff9a99;
          border-bottom:5px solid #2dff9a99;
          border-radius:50%;
          transform:rotate(-10deg);
          box-shadow:0 0 18px #27ff98;
          opacity:.65
        }

        .dna:before,
        .dna:after{
          content:"";
          position:absolute;
          inset:17px 0;
          border-top:4px solid #2dff9a88;
          border-bottom:4px solid #2dff9a88;
          border-radius:50%
        }

        .dna:after{transform:rotate(90deg)}

        /* BENEFITS */
        .benefits{
          position:relative;
          z-index:10;
          width:91%;
          min-height:82px;
          margin:-30px auto 0;
          display:grid;
          grid-template-columns:repeat(5,1fr) 1.05fr;
          align-items:center;
          gap:6px;
          padding:12px 16px;
          border:1px solid rgba(94,255,145,.48);
          border-radius:20px;
          background:rgba(2,37,28,.88);
          backdrop-filter:blur(18px)
        }

        .benefit{
          display:flex;
          align-items:center;
          gap:9px;
          padding:8px
        }

        .benefit-icon{
          min-width:30px;
          color:#69ff46;
          font-size:27px;
          text-align:center
        }

        .benefit-text{
          font-size:11px;
          line-height:1.3
        }

        .science{
          padding-left:20px;
          border-left:1px solid rgba(100,255,140,.30);
          color:rgba(255,255,255,.80);
          font-size:11px;
          line-height:1.5;
          letter-spacing:4px
        }

        /* COMMON SECTIONS */
        .section{
          position:relative;
          padding:80px 5%
        }

        .products{
          background:
            radial-gradient(circle at 50% 0,rgba(40,255,140,.09),transparent 35%),
            #031b15
        }

        .section-head{
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:30px;
          margin-bottom:30px
        }

        .label{
          margin-bottom:9px;
          color:#69ff46;
          font-size:11px;
          font-weight:800;
          letter-spacing:3px
        }

        h2{
          margin:0;
          font-size:clamp(31px,4vw,50px);
          line-height:1;
          letter-spacing:-1.7px
        }

        .section-description{
          max-width:350px;
          color:rgba(255,255,255,.67);
          font-size:14px;
          line-height:1.55
        }

        /* PRODUCT CARDS */
        .product-grid{
          display:grid;
          grid-template-columns:repeat(6,1fr);
          gap:14px
        }

        .product-card{
          position:relative;
          min-height:265px;
          overflow:hidden;
          border:1px solid rgba(100,255,120,.28);
          border-radius:17px;
          background:#06241c;
          transition:.25s
        }

        .product-card:hover{
          transform:translateY(-5px);
          border-color:#6aff48
        }

        .product-card img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          opacity:.70
        }

        .product-card:after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(180deg,rgba(0,15,10,.10),rgba(0,25,17,.97))
        }

        .product-info{
          position:absolute;
          z-index:2;
          left:15px;
          right:15px;
          bottom:15px
        }

        .product-icon{
          color:#69ff46;
          font-size:24px;
          margin-bottom:6px
        }

        .product-info h3{
          margin:0 0 6px;
          font-size:15px
        }

        .product-info p{
          margin:0;
          color:rgba(255,255,255,.68);
          font-size:11px;
          line-height:1.4
        }

        .card-arrow{
          position:absolute;
          z-index:3;
          right:11px;
          bottom:11px;
          width:34px;
          height:34px;
          display:grid;
          place-items:center;
          border-radius:50%;
          color:#062113;
          background:#69ff46;
          font-weight:900
        }

        /* SPECIES */
        .species-section{
          background:
            linear-gradient(180deg,rgba(0,12,9,.20),rgba(0,8,6,.82)),
            url("/images/hero-underwater.jpg") center/cover no-repeat
        }

        .species-grid{
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:12px
        }

        .species{
          position:relative;
          height:205px;
          overflow:hidden;
          border:1px solid rgba(90,255,130,.20);
          border-radius:16px;
          background:rgba(3,30,22,.58)
        }

        .species img{
          position:absolute;
          top:0;
          left:-10%;
          width:120%;
          height:75%;
          object-fit:contain;
          filter:drop-shadow(0 12px 10px #0009)
        }

        .species-name{
          position:absolute;
          left:12px;
          right:12px;
          bottom:12px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          font-weight:800
        }

        .species-arrow{
          width:28px;
          height:28px;
          display:grid;
          place-items:center;
          border-radius:50%;
          background:#69ff46;
          color:#061b0e
        }

        /* CONTENT */
        .content{
          padding:80px 5%;
          background:#031a15
        }

        .dark{
          background:
            radial-gradient(circle at 20% 0,rgba(55,255,140,.07),transparent 28%),
            #02120f
        }

        .info-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:22px;
          margin-top:30px
        }

        .info-card{
          min-height:240px;
          padding:32px;
          border:1px solid rgba(100,255,120,.22);
          border-radius:24px;
          background:linear-gradient(135deg,rgba(10,58,44,.75),rgba(2,25,19,.82))
        }

        .info-card h3{
          margin:0 0 14px;
          font-size:28px
        }

        .info-card p{
          color:rgba(255,255,255,.68);
          line-height:1.7
        }

        .numbers{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
          margin-top:24px
        }

        .number{
          padding:16px;
          border-radius:14px;
          background:#0002;
          border:1px solid rgba(100,255,100,.18)
        }

        .number strong{
          display:block;
          margin-bottom:4px;
          color:#69ff46;
          font-size:25px
        }

        .number span{
          color:rgba(255,255,255,.62);
          font-size:11px
        }

        .application-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:17px;
          margin-top:30px
        }

        .application{
          min-height:185px;
          padding:27px;
          border:1px solid rgba(100,255,120,.20);
          border-radius:20px;
          background:rgba(7,50,38,.62)
        }

        .application-number{
          color:#69ff46;
          font-size:11px;
          letter-spacing:2px
        }

        .application h3{
          margin:13px 0 9px;
          font-size:20px
        }

        .application p{
          margin:0;
          color:rgba(255,255,255,.63);
          line-height:1.6;
          font-size:13px
        }

        .research-image{
          width:100%;
          height:230px;
          object-fit:cover;
          border-radius:18px
        }

        /* CONTACT */
        .contact{
          text-align:center;
          background:
            radial-gradient(circle at 50% 0,rgba(88,255,70,.13),transparent 35%),
            #031a14
        }

        .contact-box{
          max-width:850px;
          margin:auto;
          padding:50px 30px;
          border:1px solid rgba(100,255,100,.27);
          border-radius:30px;
          background:rgba(4,39,29,.68)
        }

        .contact-box p{
          color:rgba(255,255,255,.65);
          margin:15px 0 25px
        }

        /* FOOTER */
        footer{
          padding:45px 5% 25px;
          background:#010d0a;
          border-top:1px solid rgba(90,255,110,.15)
        }

        .footer-grid{
          display:grid;
          grid-template-columns:1.5fr repeat(3,1fr);
          gap:35px
        }

        .footer-logo{
          font-size:29px;
          font-weight:900
        }

        .footer-logo span{color:#69ff46}

        footer h4{
          margin:0 0 14px;
          color:#69ff46;
          font-size:12px;
          letter-spacing:1px
        }

        footer p,
        footer button{
          color:rgba(255,255,255,.57);
          font-size:12px;
          line-height:1.8
        }

        footer button{
          display:block;
          padding:2px 0;
          border:0;
          background:none;
          text-align:left
        }

        .copyright{
          margin-top:32px;
          padding-top:18px;
          border-top:1px solid rgba(255,255,255,.08);
          text-align:center;
          color:rgba(255,255,255,.38);
          font-size:10px
        }

        /* MODAL */
        .modal-bg{
          position:fixed;
          z-index:300;
          inset:0;
          display:grid;
          place-items:center;
          padding:20px;
          background:rgba(0,8,6,.80);
          backdrop-filter:blur(10px)
        }

        .modal{
          width:min(520px,100%);
          padding:30px;
          border:1px solid rgba(100,255,80,.48);
          border-radius:24px;
          background:#06251c;
          box-shadow:0 25px 80px #0009
        }

        .modal h2{margin-bottom:10px}

        .modal p{
          color:rgba(255,255,255,.62);
          font-size:13px
        }

        .modal input,
        .modal textarea{
          width:100%;
          margin:6px 0;
          padding:13px;
          border:1px solid rgba(100,255,80,.20);
          border-radius:11px;
          outline:0;
          color:#fff;
          background:#031710
        }

        .modal textarea{
          min-height:105px;
          resize:vertical
        }

        .modal-actions{
          display:flex;
          gap:10px;
          margin-top:10px
        }

        /* RESPONSIVE */
        @media(max-width:1150px){
          .brand{width:220px}
          .nav{gap:13px}
          .nav button{font-size:12px}
          .product-grid{grid-template-columns:repeat(3,1fr)}
          .species-grid{grid-template-columns:repeat(4,1fr)}
          .benefits{grid-template-columns:repeat(3,1fr)}
          .science{
            grid-column:span 3;
            border-left:0;
            padding-left:0;
            text-align:center
          }
        }

        @media(max-width:780px){
          .header{
            height:70px;
            padding:0 17px;
            gap:10px
          }

          .brand{width:auto}
          .brand-name{font-size:25px}
          .tagline{
            padding-left:0;
            font-size:9px
          }

          .nav,
          .language,
          .header-right .quote-button{
            display:none
          }

          .header-right{margin-left:auto}
          .menu-button{display:block}

          .hero{
            min-height:720px;
            padding:112px 20px 50px;
            align-items:flex-start;
            background-position:62% center
          }

          .hero-content{
            width:100%;
            max-width:600px
          }

          .hero h1{
            font-size:clamp(43px,12vw,62px);
            letter-spacing:-2px
          }

          .hero-text{
            max-width:370px;
            font-size:14px
          }

          .orb{
            width:78px;
            height:78px;
            font-size:8px
          }

          .orb strong{font-size:18px}

          .orb1{left:3%;top:51%}
          .orb2{left:1%;top:67%}
          .orb3{left:29%;bottom:5%}
          .orb4{right:3%;top:49%}
          .orb5{right:0;top:65%}
          .orb6{right:28%;bottom:5%}

          .dna{
            width:300px;
            right:3%;
            top:38%
          }

          .benefits{
            width:92%;
            grid-template-columns:repeat(2,1fr);
            padding:12px
          }

          .science{
            grid-column:span 2
          }

          .section,
          .content{
            padding:65px 20px
          }

          .section-head{
            display:block
          }

          .section-description{
            margin-top:17px
          }

          .product-grid{
            grid-template-columns:repeat(2,1fr)
          }

          .species-grid{
            grid-template-columns:repeat(2,1fr)
          }

          .species{height:185px}

          .info-grid,
          .application-grid{
            grid-template-columns:1fr
          }

          .footer-grid{
            grid-template-columns:1fr 1fr
          }
        }

        @media(max-width:430px){
          .header-right .search-button{display:none}
          .hero{min-height:690px}
          .product-grid{grid-template-columns:1fr}
          .footer-grid{grid-template-columns:1fr}
          .numbers{grid-template-columns:1fr}
        }
      `}</style>

      <header className="header">
        <button className="brand" onClick={() => scrollTo("home")}>
          <div className="brand-name">
            <span>Vela</span> Peptide
            <i className="brand-mark">⌁</i>
          </div>
          <div className="tagline">Advanced Nutrition for Aquatic Life</div>
        </button>

        <nav className="nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-right">
          <button
            className="search-button"
            onClick={() => setSearch(!search)}
            aria-label="Search"
          >
            ⌕
          </button>

          <span className="language">◎ EN⌄</span>

          <button className="quote-button" onClick={() => setQuote(true)}>
            Get a Quote →
          </button>

          <button
            className="menu-button"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? "×" : "☰"}
          </button>
        </div>
      </header>

      {search && (
        <div className="search-box">
          <input
            autoFocus
            placeholder="Search products, solutions..."
          />
        </div>
      )}

      {menu && (
        <nav className="mobile-nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
          <button
            style={{ color: "#69ff46", fontWeight: 800 }}
            onClick={() => {
              setMenu(false);
              setQuote(true);
            }}
          >
            Get a Quote →
          </button>
        </nav>
      )}

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="eyebrow">FISH FEED ADDITIVES</div>

          <h1>
            Science Driven
            <br />
            <span className="green">Nutrition</span> for
            <br />
            Healthier Fish
          </h1>

          <p className="hero-text">
            Advanced peptides, proteins and functional additives for better
            growth, stronger immunity and sustainable aquaculture.
          </p>

          <div className="hero-buttons">
            <button className="primary" onClick={() => setQuote(true)}>
              Get a Quote →
            </button>

            <button className="outline" onClick={() => scrollTo("products")}>
              View All Products →
            </button>
          </div>
        </div>

        <div className="dna" />

        <div className="orbs">
          <div className="orb orb1">
            <strong>⌘</strong>
            Peptides
          </div>

          <div className="orb orb2">
            <strong>⚙</strong>
            Enzymes
          </div>

          <div className="orb orb3">
            <strong>◇</strong>
            Immunostimulants
          </div>

          <div className="orb orb4">
            <strong>✦</strong>
            Vitamins & Minerals
          </div>

          <div className="orb orb5">
            <strong>●</strong>
            Probiotics & Prebiotics
          </div>

          <div className="orb orb6">
            <strong>⌁</strong>
            Functional Additives
          </div>
        </div>
      </section>

      <section className="benefits">
        {benefits.map(([icon, first, second]) => (
          <div className="benefit" key={first}>
            <div className="benefit-icon">{icon}</div>
            <div className="benefit-text">
              <strong>{first}</strong>
              <br />
              {second}
            </div>
          </div>
        ))}

        <div className="science">
          SCIENCE
          <br />
          DRIVEN
          <br />
          SOLUTIONS
        </div>
      </section>

      <section id="products" className="section products">
        <div className="section-head">
          <div>
            <div className="label">FISH FEED ADDITIVES</div>
            <h2>Complete Range of Fish Feed Additives</h2>
          </div>

          <div>
            <div className="section-description">
              Science backed formulations to support growth, health and
              productivity for all stages of aquaculture.
            </div>
            <br />
            <button className="outline" onClick={() => scrollTo("contact")}>
              View All Products →
            </button>
          </div>
        </div>

        <div className="product-grid">
          {categories.map((item) => (
            <article className="product-card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="product-info">
                <div className="product-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <div className="card-arrow">→</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section species-section">
        <div className="section-head">
          <div>
            <div className="label">AQUACULTURE SPECIES</div>
            <h2>Solutions for Every Fish Species</h2>
          </div>

          <div className="section-description">
            Nutrition solutions designed around the needs of major aquaculture
            species.
          </div>
        </div>

        <div className="species-grid">
          {species.map(([name, image]) => (
            <article className="species" key={name}>
              <img src={image} alt={name} />
              <div className="species-name">
                <span>{name}</span>
                <span className="species-arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content">
        <div className="label">ABOUT VELA PEPTIDE</div>
        <h2>Science, Nutrition & Aquaculture</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Built Around Aquatic Life</h3>
            <p>
              Vela Peptide focuses on advanced fish feed additives designed to
              support growth, feed efficiency, immunity and healthier
              aquaculture production.
            </p>

            <div className="numbers">
              <div className="number">
                <strong>01</strong>
                <span>Science Driven</span>
              </div>

              <div className="number">
                <strong>02</strong>
                <span>Quality Focused</span>
              </div>

              <div className="number">
                <strong>03</strong>
                <span>Aquaculture Focus</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>From Research to Results</h3>
            <p>
              Our approach combines nutritional science, functional
              ingredients and practical aquaculture requirements to develop
              solutions for modern fish farming.
            </p>

            <button
              className="primary"
              onClick={() => scrollTo("research")}
            >
              Explore Research →
            </button>
          </div>
        </div>
      </section>

      <section id="applications" className="content dark">
        <div className="label">APPLICATIONS</div>
        <h2>Solutions Across Aquaculture</h2>

        <div className="application-grid">
          <div className="application">
            <div className="application-number">01</div>
            <h3>Nursery & Fry</h3>
            <p>
              Nutritional support for early-stage growth and healthy
              development.
            </p>
          </div>

          <div className="application">
            <div className="application-number">02</div>
            <h3>Grow-Out</h3>
            <p>
              Functional additives supporting growth, feed utilization and
              overall fish performance.
            </p>
          </div>

          <div className="application">
            <div className="application-number">03</div>
            <h3>Shrimp & Aquatic Species</h3>
            <p>
              Specialized nutritional concepts for diverse aquaculture
              production systems.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="content">
        <div className="label">RESEARCH & DEVELOPMENT</div>
        <h2>Science Driven Solutions</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Continuous Innovation</h3>
            <p>
              Research-led formulation is at the center
