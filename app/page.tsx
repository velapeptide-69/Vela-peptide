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
] as const;

const benefits = [
  ["▥", "Faster", "Growth Rate"],
  ["◇", "Stronger", "Immunity"],
  ["⟳", "Better Feed", "Conversion (FCR)"],
  ["♡", "Healthier", "Fish"],
  ["⌁", "Sustainable", "Aquaculture"],
] as const;

const categories = [
  ["Peptides & Proteins", "High quality protein solutions for optimum growth and feed performance.", "/images/product-peptides.jpg", "⌘"],
  ["Immunostimulants", "Functional nutritional support designed for stronger aquatic health.", "/images/product-immunity.jpg", "◇"],
  ["Enzymes", "Support digestion, nutrient availability and efficient feed utilization.", "/images/product-enzymes.jpg", "⚙"],
  ["Vitamins & Minerals", "Complete micronutrient support for balanced aquaculture nutrition.", "/images/product-vitamins.jpg", "✦"],
  ["Probiotics & Prebiotics", "Nutrition concepts focused on gut health and consistent performance.", "/images/product-probiotics.jpg", "●"],
  ["Functional Additives", "Tailored solutions for modern, efficient and responsible aquaculture.", "/images/product-functional.jpg", "⌁"],
] as const;

const species = [
  ["Catla", "/images/fish-catla.jpg"],
  ["Rohu", "/images/fish-rohu.jpg"],
  ["Tilapia", "/images/fish-tilapia.jpg"],
  ["Pangasius", "/images/fish-pangasius.jpg"],
  ["Shrimp", "/images/fish-shrimp.jpg"],
  ["Carp", "/images/fish-carp.jpg"],
  ["Seabass", "/images/fish-seabass.jpg"],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const results = categories.filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="site">
      <style>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          background:#021714;
          color:#fff;
          font-family:Arial,Helvetica,sans-serif
        }
        button,input,textarea{font:inherit}
        button{cursor:pointer}

        .site{
          min-height:100vh;
          overflow-x:hidden;
          background:
            radial-gradient(circle at 50% 8%,rgba(0,255,150,.1),transparent 30%),
            linear-gradient(180deg,#021512,#031d19 45%,#02130f)
        }

        .topbar{
          position:fixed;
          z-index:100;
          top:0;
          left:0;
          right:0;
          height:78px;
          display:flex;
          align-items:center;
          gap:22px;
          padding:0 5%;
          background:rgba(1,16,14,.84);
          border-bottom:1px solid rgba(93,255,158,.18);
          backdrop-filter:blur(18px)
        }

        .logo{
          min-width:235px;
          padding:0;
          border:0;
          background:none;
          color:#fff;
          text-align:left
        }

        .logo-main{
          font-size:32px;
          line-height:.92;
          font-weight:900;
          letter-spacing:-1.7px
        }

        .logo-main span{color:#63ff43}

        .tagline{
          margin-top:7px;
          padding-left:35px;
          color:rgba(255,255,255,.78);
          font-size:11px
        }

        .desktop-nav{
          flex:1;
          display:flex;
          justify-content:center;
          gap:20px
        }

        .desktop-nav button{
          position:relative;
          padding:11px 2px;
          border:0;
          background:none;
          color:rgba(255,255,255,.9);
          font-size:13px
        }

        .desktop-nav button:first-child{color:#79ff48}

        .desktop-nav button:first-child:after{
          content:"";
          position:absolute;
          left:0;
          right:0;
          bottom:0;
          height:3px;
          border-radius:20px;
          background:#63ff42;
          box-shadow:0 0 15px #54ff38
        }

        .nav-right{
          display:flex;
          align-items:center;
          gap:10px
        }

        .icon-btn{
          width:38px;
          height:38px;
          border:0;
          background:none;
          color:#fff;
          font-size:22px
        }

        .language{font-size:13px}

        .quote-btn,
        .primary-btn{
          border:0;
          border-radius:30px;
          background:linear-gradient(135deg,#73ff48,#4fe62e);
          color:#03200f;
          font-weight:800;
          box-shadow:0 0 25px rgba(94,255,61,.2)
        }

        .quote-btn{padding:13px 21px}

        .mobile-menu-btn{
          display:none;
          width:42px;
          height:42px;
          border-radius:12px;
          border:1px solid rgba(114,255,80,.3);
          color:#75ff4c;
          background:rgba(0,0,0,.2);
          font-size:24px
        }

        .mobile-nav{
          position:fixed;
          z-index:150;
          top:70px;
          left:0;
          right:0;
          padding:16px;
          display:grid;
          gap:4px;
          background:rgba(2,20,16,.98);
          border-bottom:1px solid rgba(100,255,100,.2)
        }

        .mobile-nav button{
          padding:13px 14px;
          border:0;
          border-radius:10px;
          background:none;
          color:#fff;
          text-align:left
        }

        .hero{
          position:relative;
          min-height:650px;
          padding:145px 5% 75px;
          display:flex;
          align-items:center;
          isolation:isolate;
          background:
            linear-gradient(
              90deg,
              rgba(0,10,8,.8),
              rgba(0,15,12,.38) 43%,
              rgba(0,12,9,.1)
            ),
            url("/images/hero-underwater.jpg") center/cover no-repeat
        }

        .hero:before{
          content:"";
          position:absolute;
          inset:0;
          z-index:-1;
          background:
            radial-gradient(
              circle at 62% 46%,
              rgba(0,255,150,.18),
              transparent 28%
            ),
            linear-gradient(
              180deg,
              rgba(0,20,16,.15),
              #031813
            )
        }

        .hero-copy{
          width:43%;
          max-width:570px;
          z-index:3
        }

        .eyebrow{
          display:flex;
          align-items:center;
          gap:13px;
          margin-bottom:18px;
          color:#69ff45;
          font-size:12px;
          font-weight:800;
          letter-spacing:2.8px
        }

        .eyebrow:after{
          content:"";
          width:65px;
          height:2px;
          background:#62ff43;
          box-shadow:0 0 12px #62ff43
        }

        .hero h1{
          margin:0;
          font-size:clamp(44px,5vw,74px);
          line-height:.94;
          letter-spacing:-3px;
          font-weight:900
        }

        .green{
          color:#64ff43;
          text-shadow:0 0 24px rgba(93,255,61,.25)
        }

        .hero p{
          max-width:490px;
          margin:23px 0;
          color:rgba(255,255,255,.78);
          font-size:16px;
          line-height:1.65
        }

        .hero-actions{
          display:flex;
          gap:13px;
          flex-wrap:wrap
        }

        .primary-btn,
        .outline-btn{
          padding:15px 23px
        }

        .outline-btn{
          border:1px solid rgba(103,255,67,.55);
          border-radius:30px;
          background:rgba(0,20,15,.52);
          color:#fff;
          font-weight:800
        }

        .hero-orbs{
          position:absolute;
          inset:0;
          pointer-events:none
        }

        .orb{
          position:absolute;
          width:108px;
          height:108px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          padding:12px;
          border-radius:50%;
          text-align:center;
          color:#fff;
          font-size:12px;
          font-weight:700;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(120,255,170,.32),
              rgba(0,40,28,.78) 58%,
              rgba(0,15,11,.92)
            );
          border:1px solid rgba(111,255,111,.6);
          box-shadow:
            inset 0 0 30px rgba(67,255,119,.1),
            0 0 24px rgba(67,255,119,.13)
        }

        .orb strong{
          color:#68ff44;
          font-size:25px;
          margin-bottom:7px
        }

        .orb1{left:34%;top:17%}
        .orb2{left:30%;top:48%}
        .orb3{left:39%;bottom:12%}
        .orb4{right:19%;top:16%}
        .orb5{right:11%;top:38%}
        .orb6{right:18%;bottom:13%}

        .dna{
          position:absolute;
          width:430px;
          height:190px;
          right:21%;
          top:35%;
          border-top:5px solid rgba(77,255,159,.72);
          border-bottom:5px solid rgba(77,255,159,.72);
          border-radius:50%;
          transform:rotate(-10deg);
          filter:drop-shadow(0 0 10px #25ff99);
          opacity:.65
        }

        .dna:before,
        .dna:after{
          content:"";
          position:absolute;
          inset:18px 0;
          border-top:4px solid rgba(77,255,159,.65);
          border-bottom:4px solid rgba(77,255,159,.65);
          border-radius:50%
        }

        .dna:after{transform:rotate(90deg)}

        .benefitbar{
          position:relative;
          z-index:8;
          width:91%;
          min-height:82px;
          margin:-32px auto 0;
          display:grid;
          grid-template-columns:repeat(5,1fr) 1.1fr;
          align-items:center;
          gap:8px;
          padding:12px 18px;
          border:1px solid rgba(91,255,150,.45);
          border-radius:20px;
          background:rgba(1,32,24,.84);
          backdrop-filter:blur(20px);
          box-shadow:0 15px 50px rgba(0,0,0,.28)
        }

        .benefit{
          display:flex;
          align-items:center;
          gap:10px;
          padding:8px 9px
        }

        .benefit-icon{
          min-width:30px;
          color:#67ff43;
          font-size:27px;
          text-align:center
        }

        .benefit-text{
          font-size:12px;
          line-height:1.25
        }

        .science{
          padding-left:22px;
          border-left:1px solid rgba(108,255,155,.35);
          color:rgba(255,255,255,.88);
          letter-spacing:5px;
          line-height:1.55;
          font-size:11px
        }

        .section,
        .content-section{
          position:relative;
          padding:85px 5%
        }

        .section-head{
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:30px;
          margin-bottom:30px
        }

        .section-label{
          margin-bottom:9px;
          color:#66ff45;
          font-size:11px;
          letter-spacing:3px;
          font-weight:800
        }

        .section h2{
          margin:0;
          font-size:clamp(31px,4vw,50px);
          line-height:1;
          letter-spacing:-1.7px
        }

        .section-description{
          max-width:360px;
          color:rgba(255,255,255,.68);
          line-height:1.55;
          font-size:14px
        }

        .products{
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(33,255,140,.09),
              transparent 35%
            ),
            linear-gradient(180deg,#031d18,#031510)
        }

        .category-grid{
          display:grid;
          grid-template-columns:repeat(6,1fr);
          gap:14px
        }

        .category{
          position:relative;
          min-height:270px;
          overflow:hidden;
          border-radius:17px;
          border:1px solid rgba(102,255,137,.3);
          background:#06251d;
          transition:.25s
        }

        .category:hover{
          transform:translateY(-6px);
          border-color:rgba(104,255,80,.8)
        }

        .category img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          opacity:.72
        }

        .category:after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(
              180deg,
              rgba(0,15,10,.14),
              rgba(0,25,17,.96)
            )
        }

        .category-content{
          position:absolute;
          z-index:2;
          left:15px;
          right:15px;
          bottom:15px
        }

        .category-icon{
          margin-bottom:8px;
          color:#69ff47;
          font-size:24px
        }

        .category h3{
          margin:0 0 6px;
          font-size:15px
        }

        .category p{
          margin:0;
          padding-right:26px;
          color:rgba(255,255,255,.68);
          font-size:11px;
          line-height:1.4
        }

        .arrow{
          position:absolute;
          z-index:3;
          right:12px;
          bottom:12px;
          width:34px;
          height:34px;
          display:grid;
          place-items:center;
          border-radius:50%;
          color:#062113;
          background:#68ff43;
          font-weight:900
        }
      `}</style>
          )}
  </main>
);
