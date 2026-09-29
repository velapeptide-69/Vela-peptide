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
  {
    title: "Peptides & Proteins",
    text: "High quality protein solutions for optimum growth and feed performance.",
    image: "/images/product-peptides.jpg",
    icon: "⌘",
  },
  {
    title: "Immunostimulants",
    text: "Functional nutritional support designed for stronger aquatic health.",
    image: "/images/product-immunity.jpg",
    icon: "◇",
  },
  {
    title: "Enzymes",
    text: "Support digestion, nutrient availability and efficient feed utilization.",
    image: "/images/product-enzymes.jpg",
    icon: "⚙",
  },
  {
    title: "Vitamins & Minerals",
    text: "Complete micronutrient support for balanced aquaculture nutrition.",
    image: "/images/product-vitamins.jpg",
    icon: "✦",
  },
  {
    title: "Probiotics & Prebiotics",
    text: "Nutrition concepts focused on gut health and consistent performance.",
    image: "/images/product-probiotics.jpg",
    icon: "●",
  },
  {
    title: "Functional Additives",
    text: "Tailored solutions for modern, efficient and responsible aquaculture.",
    image: "/images/product-functional.jpg",
    icon: "⌁",
  },
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

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #021714;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

        .site {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 50% 10%,
              rgba(0,255,150,.10),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #021512 0%,
              #031d19 45%,
              #02130f 100%
            );
        }

        .topbar {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          right: 0;
          height: 78px;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 0 5%;
          background: rgba(1,16,14,.84);
          border-bottom: 1px solid rgba(93,255,158,.18);
          backdrop-filter: blur(18px);
        }

        .logo {
          min-width: 240px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }

        .logo-main {
          font-size: 32px;
          line-height: .92;
          font-weight: 900;
          letter-spacing: -1.7px;
        }

        .logo-main span {
          color: #63ff43;
        }

        .leaf {
          color: #68ff40;
          font-size: 18px;
          margin-left: 4px;
        }

        .tagline {
          margin-top: 7px;
          padding-left: 35px;
          color: rgba(255,255,255,.78);
          font-size: 11px;
          letter-spacing: .2px;
        }

        .desktop-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 22px;
        }

        .desktop-nav button {
          position: relative;
          padding: 11px 2px;
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.90);
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }

        .desktop-nav button:first-child {
          color: #79ff48;
        }

        .desktop-nav button:first-child::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          border-radius: 20px;
          background: #63ff42;
          box-shadow: 0 0 15px #54ff38;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
        }

        .language {
          color: #fff;
          font-size: 13px;
          white-space: nowrap;
        }

        .quote-btn,
        .primary-btn {
          border: 0;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #73ff48,
            #4fe62e
          );
          color: #03200f;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(94,255,61,.20);
        }

        .quote-btn {
          padding: 13px 21px;
        }

        .mobile-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(114,255,80,.30);
          color: #75ff4c;
          background: rgba(0,0,0,.20);
          font-size: 24px;
          cursor: pointer;
        }

        .mobile-nav {
          position: fixed;
          z-index: 150;
          top: 70px;
          left: 0;
          right: 0;
          padding: 16px;
          display: grid;
          gap: 4px;
          background: rgba(2,20,16,.98);
          border-bottom: 1px solid rgba(100,255,100,.20);
          backdrop-filter: blur(18px);
        }

        .mobile-nav button {
          padding: 13px 14px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }

        .hero {
          position: relative;
          min-height: 650px;
          padding: 145px 5% 75px;
          display: flex;
          align-items: center;
          isolation: isolate;
          background:
            linear-gradient(
              90deg,
              rgba(0,10,8,.80) 0%,
              rgba(0,15,12,.38) 43%,
              rgba(0,12,9,.10) 100%
            ),
            url("/images/hero-underwater.jpg")
              center/cover no-repeat;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(
              circle at 62% 46%,
              rgba(0,255,150,.18),
              transparent 28%
            ),
            linear-gradient(
              180deg,
              rgba(0,20,16,.15),
              #031813 100%
            );
        }

        .hero-copy {
          width: 43%;
          max-width: 570px;
          z-index: 3;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 18px;
          color: #69ff45;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.8px;
        }

        .eyebrow::after {
          content: "";
          width: 65px;
          height: 2px;
          background: #62ff43;
          box-shadow: 0 0 12px #62ff43;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(44px,5vw,74px);
          line-height: .94;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .hero h1 .green {
          color: #64ff43;
          text-shadow: 0 0 24px rgba(93,255,61,.25);
        }

        .hero p {
          max-width: 490px;
          margin: 23px 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .outline-btn {
          padding: 15px 23px;
        }

        .outline-btn {
          border: 1px solid rgba(103,255,67,.55);
          border-radius: 30px;
          background: rgba(0,20,15,.52);
          color: #fff;
          font-weight: 800;
          cursor: pointer;
        }

        .hero-orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          width: 108px;
          height: 108px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 50%;
          text-align: center;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(120,255,170,.32),
              rgba(0,40,28,.78) 58%,
              rgba(0,15,11,.92)
            );
          border: 1px solid rgba(111,255,111,.60);
          box-shadow:
            inset 0 0 30px rgba(67,255,119,.10),
            0 0 24px rgba(67,255,119,.13);
        }

        .orb strong {
          color: #68ff44;
          font-size: 25px;
          line-height: 1;
          margin-bottom: 7px;
        }

        .orb1 {
          left: 34%;
          top: 17%;
        }

        .orb2 {
          left: 30%;
          top: 48%;
        }

        .orb3 {
          left: 39%;
          bottom: 12%;
        }

        .orb4 {
          right: 19%;
          top: 16%;
        }

        .orb5 {
          right: 11%;
          top: 38%;
        }

        .orb6 {
          right: 18%;
          bottom: 13%;
        }

        .dna {
          position: absolute;
          width: 430px;
          height: 190px;
          right: 21%;
          top: 35%;
          border-top: 5px solid rgba(77,255,159,.72);
          border-bottom: 5px solid rgba(77,255,159,.72);
          border-radius: 50%;
          transform: rotate(-10deg);
          filter: drop-shadow(0 0 10px #25ff99);
          opacity: .65;
          pointer-events: none;
        }

        .dna::before,
        .dna::after {
          content: "";
          position: absolute;
          inset: 18px 0;
          border-top: 4px solid rgba(77,255,159,.65);
          border-bottom: 4px solid rgba(77,255,159,.65);
          border-radius: 50%;
        }

        .dna::after {
          transform: rotate(90deg);
        }

        .benefitbar {
          position: relative;
          z-index: 8;
          width: 91%;
          min-height: 82px;
          margin: -32px auto 0;
          display: grid;
          grid-template-columns: repeat(5,1fr) 1.1fr;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border: 1px solid rgba(91,255,150,.45);
          border-radius: 20px;
          background: rgba(1,32,24,.84);
          backdrop-filter: blur(20px);
          box-shadow: 0 15px 50px rgba(0,0,0,.28);
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 9px;
        }

        .benefit-icon {
          min-width: 30px;
          color: #67ff43;
          font-size: 27px;
          text-align: center;
        }

        .benefit-text {
          color: #fff;
          font-size: 12px;
          line-height: 1.25;
        }

        .science {
          padding-left: 22px;
          border-left: 1px solid rgba(108,255,155,.35);
          color: rgba(255,255,255,.88);
          letter-spacing: 5px;
          line-height: 1.55;
          font-size: 11px;
        }

        .section {
          position: relative;
          padding: 85px 5%;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .section-label {
          margin-bottom: 9px;
          color: #66ff45;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(31px,4vw,50px);
          line-height: 1;
          letter-spacing: -1.7px;
        }

        .section-description {
          max-width: 360px;
          color: rgba(255,255,255,.68);
          line-height: 1.55;
          font-size: 14px;
        }

        .products {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(33,255,140,.09),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #031d18,
              #031510
            );
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 14px;
        }

        .category {
          position: relative;
          min-height: 270px;
          overflow: hidden;
          border-radius: 17px;
          border: 1px solid rgba(102,255,137,.30);
          background: #06251d;
          cursor: pointer;
          transition:
            transform .25s ease,
            border-color .25s ease;
        }

        .category:hover {
          transform: translateY(-6px);
          border-color: rgba(104,255,80,.80);
        }

        .category img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .72;
        }

        .category::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,15,10,.14),
              rgba(0,25,17,.96)
            );
        }

        .category-content {
          position: absolute;
          z-index: 2;
          left: 15px;
          right: 15px;
          bottom: 15px;
        }

        .category-icon {
          margin-bottom: 8px;
          color: #69ff47;
          font-size: 24px;
        }

        .category h3 {
          margin: 0 0 6px;
          font-size: 15px;
        }

        .category p {
          margin: 0;
          padding-right: 26px;
          color: rgba(255,255,255,.68);
          font-size: 11px;
          line-height: 1.4;
        }

        .arrow {
          position: absolute;
          z-index: 3;
          right: 12px;
          bottom: 12px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #062113;
          background: #68ff43;
          font-weight: 900;
        }

        .species-section {
          padding-top: 35px;
          padding-bottom: 80px;
          background:
            linear-gradient(
              180deg,
              rgba(0,12,9,.25),
              rgba(0,7,6,.80)
            ),
            url("/images/hero-underwater.jpg")
              center/cover no-repeat;
        }

        .species-grid {
          display: grid;
          grid-template-columns: repeat(7,1fr);
          gap: 13px;
          align-items: end;
        }

        .species {
          position: relative;
          height: 210px;
          overflow: hidden;
          border-radius: 17px;
          background:
            linear-gradient(
              180deg,
              rgba(5,48,39,.30),
              rgba(0,20,15,.85)
            );
          border: 1px solid rgba(89,255,133,.18);
        }

        .species img {
          position: absolute;
          top: 0;
          left: -10%;
          width: 120%;
          height: 78%;
          object-fit: contain;
          filter: drop-shadow(
            0 12px 12px rgba(0,0,0,.50)
          );
        }

        .species-name {
          position: absolute;
          right: 12px;
          bottom: 13px;
          left: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 800;
        }

        .species-arrow {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #05190f;
          background: #68ff43;
        }

        .content-section {
          padding: 85px 5%;
          background: #031a15;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .info-card {
          min-height: 260px;
          padding: 35px;
          border: 1px solid rgba(101,255,125,.23);
          border-radius: 25px;
          background:
            linear-gradient(
              135deg,
              rgba(12,59,46,.78),
              rgba(2,24,18,.78)
            );
          box-shadow:
            inset 0 0 45px rgba(55,255,130,.035);
        }

        .info-card h3 {
          margin: 0 0 15px;
          font-size: 29px;
        }

        .info-card p {
          max-width: 700px;
          color: rgba(255,255,255,.70);
          line-height: 1.7;
        }

        .number-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 25px;
        }

        .number {
          padding: 18px;
          border-radius: 15px;
          border: 1px solid rgba(93,255,110,.20);
          background: rgba(0,0,0,.16);
        }

        .number strong {
          display: block;
          margin-bottom: 5px;
          color: #6cff48;
          font-size: 27px;
        }

        .number span {
          color: rgba(255,255,255,.65);
          font-size: 12px;
        }

        .dark-panel {
          background:
            radial-gradient(
              circle at 20% 10%,
              rgba(68,255,145,.08),
              transparent 25%
            ),
            #02120f;
        }

        .application-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
          margin-top: 30px;
        }

        .application {
          min-height: 190px;
          padding: 28px;
          border-radius: 20px;
          background: rgba(8,48,37,.62);
          border: 1px solid rgba(90,255,120,.20);
        }

        .application-number {
          color: #68ff43;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .application h3 {
          margin: 13px 0 10px;
          font-size: 20px;
        }

        .application p {
          margin: 0;
          color: rgba(255,255,255,.65);
          line-height: 1.6;
          font-size: 13px;
        }

        .contact {
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(87,255,67,.13),
              transparent 35%
            ),
            #031a14;
        }

        .contact-box {
          max-width: 850px;
          margin: auto;
          padding: 50px 30px;
          border: 1px solid rgba(98,255,99,.28);
          border-radius: 30px;
          background: rgba(3,38,28,.62);
        }

        .contact-box h2 {
          margin: 0 0 15px;
        }

        .contact-box p {
          margin: 0 0 25px;
          color: rgba(255,255,255,.67);
        }

        footer {
          padding: 45px 5% 25px;
          background: #010c09;
          border-top: 1px solid rgba(91,255,119,.16);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr repeat(3,1fr);
          gap: 40px;
        }

        footer h4 {
          margin: 0 0 15px;
          color: #68ff43;
          font-size: 13px;
          letter-spacing: 1px;
        }

        footer p,
        footer button {
          color: rgba(255,255,255,.60);
          font-size: 13px;
          line-height: 1.8;
        }

        footer p {
          margin: 4px 0;
        }

        footer button {
          display: block;
          padding: 3px 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          text-align: left;
        }

        .footer-logo {
          font-size: 29px;
          font-weight: 900;
        }

        .footer-logo span {
          color: #68ff43;
        }

        .copyright {
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.08);
          text-align: center;
          color: rgba(255,255,255,.40);
          font-size: 11px;
        }

        .search-box {
          position: fixed;
          z-index: 200;
          top: 92px;
          right: 5%;
          width: min(360px,90%);
          padding: 15px;
          border-radius: 15px;
          background: rgba(3,30,23,.98);
          border: 1px solid rgba(105,255,86,.35);
          box-shadow: 0 20px 60px rgba(0,0,0,.40);
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #fff;
          background: transparent;
          font-size: 15px;
        }

        .search-results {
          margin-top: 12px;
          display: grid;
          gap: 7px;
        }

        .search-result {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid rgba(105,255,86,.18);
          border-radius: 10px;
          background: rgba(255,255,255,.04);
          color: #fff;
          text-align: left;
          cursor: pointer;
        }

        .modal-bg {
          position: fixed;
          z-index: 300;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,8,6,.78);
          backdrop-filter: blur(12px);
        }

        .modal {
          width: min(520px,100%);
          max-height: 90vh;
          overflow: auto;
          padding: 30px;
          border-radius: 25px;
          background: #06251d;
          border: 1px solid rgba(105,255,86,.50);
          box-shadow: 0 25px 80px rgba(0,0,0,.55);
        }

        .modal h2 {
          margin: 0 0 8px;
        }

        .modal-subtitle {
          margin: 0 0 18px;
          color: rgba(255,255,255,.65);
        }

        .modal input,
        .modal textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 14px;
          color: #fff;
          background: #031710;
          border: 1px solid rgba(105,255,86,.22);
          border-radius: 12px;
          outline: none;
        }

        .modal textarea {
          min-height: 110px;
          resize: vertical;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .topbar {
            padding: 0 3%;
          }

          .logo {
            min-width: 205px;
          }

          .logo-main {
            font-size: 28px;
          }

          .desktop-nav {
            gap: 13px;
          }

          .desktop-nav button {
            font-size: 12px;
          }

          .category-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .species-grid {
            grid-template-columns: repeat(4,1fr);
          }

          .benefitbar {
            grid-template-columns: repeat(3,1fr);
          }

          .science {
            border-left: 0;
            padding-left: 9px;
          }
        }

        @media (max-width: 780px) {
          .topbar {
            height: 70px;
            padding: 0 18px;
            justify-content: space-between;
          }

          .logo {
            min-width: auto;
          }

          .logo-main {
            font-size: 25px;
          }

          .tagline {
            padding-left: 0;
            margin-top: 5px;
            font-size: 9px;
          }

          .desktop-nav,
          .nav-right .language,
          .nav-right .quote-btn {
            display: none;
          }

          .nav-right {
            margin-left: auto;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero {
            min-height: 720px;
            padding: 115px 20px 55px;
            align-items: flex-start;
            background-position: 62% center;
          }

          .hero-copy {
            width: 100%;
            max-width: 600px;
          }

          .hero h1 {
            font-size: clamp(42px,12vw,62px);
            letter-spacing: -2px;
          }

          .hero p {
            max-width: 360px;
            font-size: 14px;
          }

          .hero-orbs {
            opacity: .82;
          }

          .orb {
            width: 78px;
            height: 78px;
            font-size: 9px;
          }

          .orb strong {
            font-size: 19px;
          }

          .orb1 {
            left: 3%;
            top: 53%;
          }

          .orb2 {
            left: 1%;
            top: 68%;
          }

          .orb3 {
            left: 29%;
            bottom: 5%;
          }

          .orb4 {
            right: 3%;
            top: 50%;
          }

          .orb5 {
            right: 1%;
            top: 68%;
          }

          .orb6 {
            right: 29%;
            bottom: 5%;
          }

          .dna {
            width: 300px;
            height: 135px;
            right: -20%;
            top: 43%;
            opacity: .48;
          }

          .benefitbar {
            width: 92%;
            margin-top: -20px;
            grid-template-columns: 1fr 1fr;
            padding: 12px;
          }

          .science {
            grid-column: 1 / -1;
            border-top: 1px solid rgba(108,255,155,.20);
            padding: 14px 5px 3px;
            text-align: center;
          }

          .section,
          .content-section {
            padding: 65px 20px;
          }

          .section-head {
            display: block;
          }

          .section-description {
            margin-top: 18px;
            max-width: none;
          }

          .category-grid {
            grid-template-columns: 1fr 1fr;
          }

          .category {
            min-height: 235px;
          }

          .species-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .species {
            height: 190px;
          }

          .info-grid,
          .application-grid {
            grid-template-columns: 1fr;
          }

          .number-grid {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          .search-box {
            top: 82px;
            right: 4%;
          }
        }

        @media (max-width: 480px) {
          .logo-main {
            font-size: 23px;
          }

          .tagline {
            font-size: 8px;
          }

          .hero {
            min-height: 735px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-actions button {
            width: 100%;
            max-width: 250px;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .category {
            min-height: 250px;
          }

          .species-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .species {
            height: 170px;
          }

          .species-name {
            font-size: 12px;
          }

          .info-card {
            padding: 25px;
          }

          .info-card h3 {
            font-size: 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .modal {
            padding: 23px;
          }
        }
      `}</style>

      <header className="topbar">
        <button
          className="logo"
          onClick={() => goTo("home")}
          aria-label="Vela Peptide home"
        >
          <div className="logo-main">
            <span>Vela</span> Peptide{" "}
            <span className="leaf">✦</span>
          </div>

          <div className="tagline">
            Advanced Nutrition for Aquatic Life
          </div>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="icon-btn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            ⌕
          </button>

          <span className="language">◎ EN</span>

          <button
            className="quote-btn"
            onClick={() => setQuoteOpen(true)}
          >
            Get a Quote
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              setQuoteOpen(true);
            }}
          >
            Get a Quote →
          </button>
        </nav>
      )}

      {searchOpen && (
        <div className="search-box">
          <input
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />

          {searchTerm && (
            <div className="search-results">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((item) => (
                  <button
                    className="search-result"
                    key={item.title}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchTerm("");
                      goTo("products");
                    }}
                  >
                    {item.title}
                  </button>
                ))
              ) : (
                <div
                  style={{
                    color: "rgba(255,255,255,.6)",
                    padding: 10,
                  }}
                >
                  No matching product category.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            ADVANCED AQUACULTURE NUTRITION
          </div>

          <h1>
            Science Driven Nutrition for{" "}
            <span className="green">
              Healthier Fish
            </span>
          </h1>

          <p>
            Advanced fish feed additives designed to support growth,
            feed efficiency, immunity and responsible aquaculture
            production.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote →
            </button>

            <button
              className="outline-btn"
              onClick={() => goTo("products")}
            >
              View All Products →
            </button>
          </div>
        </div>

        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb1">
            <strong>⌘</strong>
            Peptides
            <br />
            &amp; Proteins
          </div>

          <div className="orb orb2">
            <strong>◇</strong>
            Immuno
            <br />
            stimulants
          </div>

          <div className="orb orb3">
            <strong>⚙</strong>
            Enzymes
          </div>

          <div className="orb orb4">
            <strong>✦</strong>
            Vitamins &amp;
            <br />
            Minerals
          </div>

          <div className="orb orb5">
            <strong>●</strong>
            Probiotics &amp;
            <br />
            Prebiotics
          </div>

          <div className="orb orb6">
            <strong>⌁</strong>
            Functional
            <br />
            Additives
          </div>

          <div className="dna" />
        </div>
      </section>

      <section className="benefitbar">
        {benefits.map(([icon, title, sub]) => (
          <div className="benefit" key={title}>
            <div className="benefit-icon">{icon}</div>

            <div className="benefit-text">
              <strong>{title}</strong>
              <br />
              {sub}
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
            <div className="section-label">
              FISH FEED ADDITIVES
            </div>

            <h2>
              Complete Range of Fish Feed Additives
            </h2>
          </div>

          <div>
            <div className="section-description">
              Science-backed formulations to support growth,
              health and productivity for all stages of
              aquaculture.
            </div>

            <br />

            <button
              className="outline-btn"
              onClick={() => goTo("contact")}
            >
              View All Products →
            </button>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <article
              className="category"
              key={item.title}
              onClick={() => goTo("contact")}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="category-content">
                <div className="category-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>

              <div className="arrow">→</div>
            </article>
          ))}
        </div>
      </section>

      <section className="species-section section">
        <div className="section-head">
          <div>
            <div className="section-label">
              AQUACULTURE SPECIES
            </div>

            <h2>
              Solutions for Every Fish Species
            </h2>
          </div>

          <div className="section-description">
            Nutrition solutions designed around the needs of
            major aquaculture species.
          </div>
        </div>

        <div className="species-grid">
          {species.map(([name, image]) => (
            <article
              className="species"
              key={name}
            >
              <img
                src={image}
                alt={name}
              />

              <div className="species-name">
                <span>{name}</span>
                <span className="species-arrow">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="content-section"
      >
        <div className="section-label">
          ABOUT VELA PEPTIDE
        </div>

        <h2>
          Science, Nutrition &amp; Aquaculture
        </h2>

        <div
          className="info-grid"
          style={{ marginTop: 30 }}
        >
          <div className="info-card">
            <h3>
              Built Around Aquatic Life
            </h3>

            <p>
              Vela Peptide focuses on advanced fish feed
              additives designed to support growth, feed
              efficiency, immunity and healthier aquaculture
              production.
            </p>

            <div className="number-grid">
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
            <h3>
              From Research to Results
            </h3>

            <p>
              Our approach combines nutritional science,
              functional ingredients and practical aquaculture
              requirements to develop solutions for modern
              fish farming.
            </p>

            <button
              className="primary-btn"
              onClick={() => goTo("research")}
              style={{ marginTop: 10 }}
            >
              Explore Research →
            </button>
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="content-section dark-panel"
      >
        <div className="section-label">
          APPLICATIONS
        </div>

        <h2>
          Solutions Across Aquaculture
        </h2>

        <div className="application-grid">
          <div className="application">
            <div className="application-number">
              01
            </div>

            <h3>
              Nursery &amp; Fry
            </h3>

            <p>
              Nutritional support for early-stage growth
              and healthy development.
            </p>
          </div>

          <div className="application">
            <div className="application-number">
              02
            </div>

            <h3>
              Grow-Out
            </h3>

            <p>
              Functional additives supporting growth,
              feed utilization and overall fish performance.
            </p>
          </div>

          <div className="application">
            <div className="application-number">
              03
            </div>

            <h3>
              Shrimp &amp; Aquatic Species
            </h3>

            <p>
              Specialized nutritional concepts for diverse
              aquaculture production systems.
            </p>
          </div>
        </div>
      </section>

      <section
        id="research"
        className="content-section"
      >
        <div className="section-label">
          RESEARCH &amp; DEVELOPMENT
        </div>

        <h2>
          Science Driven Solutions
        </h2>

        <div
          className="info-grid"
          style={{ marginTop: 30 }}
        >
          <div className="info-card">
            <h3>
              Continuous Innovation
            </h3>

            <p>
              Research-led formulation is at the center
              of Vela Peptide. Ingredient functionality,
              feed performance and aquatic health guide
              our product development approach.
            </p>
          </div>

          <div className="info-card">
            <img
              src="/images/research.jpg"
              alt="Vela Peptide research"
              style={{
                width: "100%",
                height: 230,
                objectFit: "cover",
                borderRadius: 18,
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="sustainability"
        className="content-section dark-panel"
      >
        <div className="section-label">
          SUSTAINABILITY
        </div>

        <h2>
          Better Nutrition. Better Aquaculture.
        </h2>

        <div
          className="info-card"
          style={{ marginTop: 30 }}
        >
          <h3>
            Designed for a Sustainable Future
          </h3>

          <p>
            Efficient nutrition can support responsible
            aquaculture by helping farmers focus on feed
            utilization, fish health and productive farming
            practices.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="section contact"
      >
        <div className="contact-box">
          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Need a Customized Solution?
          </h2>

          <p>
            Talk to Vela Peptide about your aquaculture
            nutrition requirements.
          </p>

          <button
            className="primary-btn"
            onClick={() => setQuoteOpen(true)}
          >
            Get a Quote →
          </button>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span>Vela</span> Peptide
            </div>

            <p>
              Advanced Nutrition for Aquatic Life
            </p>

            <p>
              Science-driven fish feed additives for
              modern aquaculture.
            </p>
          </div>

          <div>
            <h4>QUICK LINKS</h4>

            {navItems.slice(0, 4).map(
              ([label, id]) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                >
                  {label}
                </button>
              ),
            )}
          </div>

          <div>
            <h4>OUR SOLUTIONS</h4>

            <button onClick={() => goTo("products")}>
              Peptides &amp; Proteins
            </button>

            <button onClick={() => goTo("products")}>
              Immunostimulants
            </button>

            <button onClick={() => goTo("products")}>
              Enzymes
            </button>

            <button onClick={() => goTo("products")}>
              Probiotics
            </button>
          </div>

          <div>
            <h4>CONTACT</h4>

            <p>Vela Peptide</p>
            <p>India</p>
            <p>
              Contact us for product enquiries.
            </p>

            <button
              style={{
                color: "#69ff47",
                fontWeight: 800,
              }}
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote →
            </button>
          </div>
        </div>

        <div className="copyright">
          © 2026 Vela Peptide. All Rights Reserved.
          · Advanced Nutrition for Aquatic Life.
        </div>
      </footer>

      {quoteOpen && (
        <div
          className="modal-bg"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Get a Quote</h2>

            <p className="modal-subtitle">
              Tell us about your aquaculture requirement.
            </p>

            <input placeholder="Your Name" />

            <input
              placeholder="Email Address"
              type="email"
            />

            <input
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Tell us about your requirement..."
            />

            <div className="modal-actions">
              <button
                className="primary-btn"
                onClick={() => setQuoteOpen(false)}
              >
                Submit Enquiry →
              </button>

              <button
                className="outline-btn"
                onClick={() => setQuoteOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
