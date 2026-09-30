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
  ["◈", "Faster", "Growth Rate"],
  ["◇", "Stronger", "Immunity"],
  ["↗", "Better Feed", "Conversion (FCR)"],
  ["♡", "Healthier", "Fish"],
  ["∞", "Sustainable", "Aquaculture"],
] as const;

const categories = [
  {
    name: "Peptides & Proteins",
    text: "Advanced protein solutions designed to support growth and feed performance.",
    image: "/images/product-peptides.jpg",
    icon: "⌘",
  },
  {
    name: "Immunostimulants",
    text: "Functional nutritional support for stronger aquatic health and resilience.",
    image: "/images/product-immunity.jpg",
    icon: "◇",
  },
  {
    name: "Enzymes",
    text: "Support digestion, nutrient availability and efficient feed utilization.",
    image: "/images/product-enzymes.jpg",
    icon: "⚙",
  },
  {
    name: "Vitamins & Minerals",
    text: "Essential micronutrient support for balanced aquaculture nutrition.",
    image: "/images/product-vitamins.jpg",
    icon: "✦",
  },
  {
    name: "Probiotics & Prebiotics",
    text: "Nutrition concepts focused on gut health and consistent performance.",
    image: "/images/product-probiotics.jpg",
    icon: "●",
  },
  {
    name: "Functional Additives",
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
  const [search, setSearch] = useState("");

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  }

  const searchResults = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #02130f;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .site {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(50, 255, 145, 0.08), transparent 32%),
            #02130f;
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
          background: rgba(1, 17, 14, 0.88);
          border-bottom: 1px solid rgba(103, 255, 91, 0.18);
          backdrop-filter: blur(18px);
        }

        .logo {
          min-width: 215px;
          border: 0;
          background: transparent;
          color: #ffffff;
          text-align: left;
        }

        .logo-title {
          font-size: 29px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .logo-title span {
          color: #67ff45;
        }

        .logo-subtitle {
          margin-top: 6px;
          padding-left: 30px;
          color: rgba(255,255,255,0.65);
          font-size: 10px;
          letter-spacing: 0.3px;
        }

        .desktop-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 18px;
        }

        .desktop-nav button {
          position: relative;
          padding: 10px 2px;
          border: 0;
          background: transparent;
          color: rgba(255,255,255,0.82);
          font-size: 12px;
        }

        .desktop-nav button:hover,
        .desktop-nav button:first-child {
          color: #6cff48;
        }

        .desktop-nav button:first-child::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          border-radius: 10px;
          background: #67ff45;
          box-shadow: 0 0 12px #67ff45;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .search-button,
        .menu-button {
          width: 38px;
          height: 38px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #ffffff;
          font-size: 22px;
        }

        .language {
          color: rgba(255,255,255,0.75);
          font-size: 12px;
        }

        .quote-button,
        .primary-button {
          border: 0;
          border-radius: 30px;
          padding: 13px 21px;
          background: linear-gradient(135deg, #7aff4e, #48df2d);
          color: #03180d;
          font-weight: 800;
          box-shadow: 0 0 25px rgba(93,255,67,0.14);
        }

        .outline-button {
          border: 1px solid rgba(103,255,72,0.55);
          border-radius: 30px;
          padding: 13px 21px;
          background: rgba(0,25,18,0.55);
          color: #ffffff;
          font-weight: 800;
        }

        .menu-button {
          display: none;
          border-radius: 10px;
          border: 1px solid rgba(103,255,72,0.35);
        }

        .mobile-nav {
          position: fixed;
          z-index: 95;
          top: 78px;
          left: 0;
          right: 0;
          padding: 15px;
          background: rgba(2,20,16,0.98);
          border-bottom: 1px solid rgba(103,255,72,0.2);
        }

        .mobile-nav button {
          display: block;
          width: 100%;
          padding: 13px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: #ffffff;
          text-align: left;
        }

        .hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          padding: 150px 5% 90px;
          isolation: isolate;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(0,12,9,0.86), rgba(0,18,13,0.5) 45%, rgba(0,15,11,0.16)),
            url("/images/hero-underwater.jpg") center / cover no-repeat;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 65% 45%, rgba(41,255,153,0.16), transparent 28%),
            linear-gradient(180deg, transparent 55%, #02130f 100%);
        }

        .hero-content {
          position: relative;
          z-index: 5;
          width: 47%;
          max-width: 620px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 17px;
          color: #69ff47;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.8px;
        }

        .eyebrow::after {
          content: "";
          width: 55px;
          height: 2px;
          background: #69ff47;
          box-shadow: 0 0 12px #69ff47;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(45px, 5.4vw, 76px);
          line-height: 0.96;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .green {
          color: #69ff47;
          text-shadow: 0 0 25px rgba(105,255,71,0.2);
        }

        .hero-text {
          max-width: 510px;
          margin: 23px 0;
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .floating-orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          width: 105px;
          height: 105px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(106,255,114,0.55);
          border-radius: 50%;
          background: radial-gradient(circle at 30% 25%, rgba(102,255,165,0.27), rgba(0,35,25,0.85) 62%);
          box-shadow: 0 0 25px rgba(65,255,130,0.12);
          color: #ffffff;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
        }

        .orb strong {
          margin-bottom: 6px;
          color: #69ff47;
          font-size: 25px;
        }

        .orb-one {
          left: 34%;
          top: 17%;
        }

        .orb-two {
          left: 29%;
          top: 50%;
        }

        .orb-three {
          left: 39%;
          bottom: 10%;
        }

        .orb-four {
          right: 19%;
          top: 15%;
        }

        .orb-five {
          right: 10%;
          top: 40%;
        }

        .orb-six {
          right: 18%;
          bottom: 11%;
        }

        .dna {
          position: absolute;
          right: 19%;
          top: 34%;
          width: 390px;
          height: 180px;
          border-top: 4px solid rgba(83,255,164,0.6);
          border-bottom: 4px solid rgba(83,255,164,0.6);
          border-radius: 50%;
          transform: rotate(-10deg);
          opacity: 0.5;
          filter: drop-shadow(0 0 8px #27ff9b);
        }

        .dna::before,
        .dna::after {
          content: "";
          position: absolute;
          inset: 18px 0;
          border-top: 3px solid rgba(83,255,164,0.55);
          border-bottom: 3px solid rgba(83,255,164,0.55);
          border-radius: 50%;
        }

        .dna::after {
          transform: rotate(90deg);
        }

        .benefits {
          position: relative;
          z-index: 10;
          width: 91%;
          margin: -32px auto 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr) 1.1fr;
          gap: 8px;
          align-items: center;
          padding: 12px 18px;
          border: 1px solid rgba(100,255,140,0.35);
          border-radius: 20px;
          background: rgba(2,35,26,0.86);
          backdrop-filter: blur(18px);
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px;
        }

        .benefit-icon {
          color: #69ff47;
          font-size: 25px;
        }

        .benefit-text {
          font-size: 11px;
          line-height: 1.35;
        }

        .science-text {
          padding-left: 18px;
          border-left: 1px solid rgba(100,255,140,0.3);
          color: rgba(255,255,255,0.78);
          font-size: 10px;
          letter-spacing: 4px;
          line-height: 1.6;
        }

        .section {
          padding: 85px 5%;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .section-label {
          margin-bottom: 9px;
          color: #69ff47;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .section-description {
          max-width: 390px;
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          line-height: 1.65;
        }

        .products-section {
          background:
            radial-gradient(circle at 50% 0%, rgba(42,255,143,0.08), transparent 35%),
            #031a15;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }

        .product-card {
          position: relative;
          min-height: 280px;
          overflow: hidden;
          border: 1px solid rgba(103,255,120,0.23);
          border-radius: 18px;
          background: #06251d;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          border-color: rgba(103,255,100,0.7);
        }

        .product-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.68;
        }

        .product-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,15,10,0.1), rgba(0,22,15,0.98));
        }

        .product-content {
          position: absolute;
          z-index: 2;
          right: 15px;
          bottom: 15px;
          left: 15px;
        }

        .product-icon {
          margin-bottom: 8px;
          color: #69ff47;
          font-size: 23px;
        }

        .product-content h3 {
          margin: 0 0 7px;
          font-size: 15px;
        }

        .product-content p {
          margin: 0;
          color: rgba(255,255,255,0.66);
          font-size: 10px;
          line-height: 1.45;
        }

        .product-arrow {
          position: absolute;
          z-index: 3;
          right: 12px;
          bottom: 12px;
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #69ff47;
          color: #041a0d;
          font-weight: 900;
        }

        .species-section {
          padding-top: 45px;
          background:
            linear-gradient(180deg, rgba(0,15,11,0.3), rgba(0,10,7,0.9)),
            url("/images/hero-underwater.jpg") center / cover no-repeat;
        }

        .species-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }

        .species-card {
          position: relative;
          height: 215px;
          overflow: hidden;
          border: 1px solid rgba(96,255,126,0.2);
          border-radius: 17px;
          background: rgba(3,29,22,0.8);
        }

        .species-card img {
          position: absolute;
          top: 0;
          left: -8%;
          width: 116%;
          height: 78%;
          object-fit: contain;
          filter: drop-shadow(0 10px 12px rgba(0,0,0,0.55));
        }

        .species-name {
          position: absolute;
          right: 11px;
          bottom: 12px;
          left: 11px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 800;
        }

        .species-arrow {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #69ff47;
          color: #041a0d;
        }

        .content-section {
          padding: 85px 5%;
          background: #031a15;
        }

        .content-section.dark {
          background:
            radial-gradient(circle at 15% 10%, rgba(74,255,143,0.07), transparent 28%),
            #02130f;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-top: 30px;
        }

        .info-card {
          padding: 32px;
          border: 1px solid rgba(101,255,125,0.22);
          border-radius: 23px;
          background: linear-gradient(135deg, rgba(9,58,44,0.78), rgba(2,25,19,0.8));
        }

        .info-card h3 {
          margin: 0 0 15px;
          font-size: 27px;
        }

        .info-card p {
          color: rgba(255,255,255,0.67);
          line-height: 1.7;
          font-size: 14px;
        }

        .number-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 25px;
        }

        .number-card {
          padding: 16px;
          border: 1px solid rgba(103,255,100,0.16);
          border-radius: 14px;
          background: rgba(0,0,0,0.14);
        }

        .number-card strong {
          display: block;
          margin-bottom: 4px;
          color: #69ff47;
          font-size: 25px;
        }

        .number-card span {
          color: rgba(255,255,255,0.6);
          font-size: 11px;
        }

        .application-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          margin-top: 30px;
        }

        .application {
          min-height: 190px;
          padding: 28px;
          border: 1px solid rgba(96,255,126,0.19);
          border-radius: 20px;
          background: rgba(7,49,37,0.65);
        }

        .application-number {
          color: #69ff47;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .application h3 {
          margin: 13px 0 9px;
          font-size: 20px;
        }

        .application p {
          margin: 0;
          color: rgba(255,255,255,0.64);
          line-height: 1.6;
          font-size: 13px;
        }

        .research-image {
          width: 100%;
          height: 245px;
          border-radius: 17px;
          object-fit: cover;
        }

        .contact-section {
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(91,255,65,0.13), transparent 38%),
            #031a14;
        }

        .contact-box {
          max-width: 850px;
          margin: auto;
          padding: 55px 30px;
          border: 1px solid rgba(103,255,100,0.25);
          border-radius: 30px;
          background: rgba(4,43,31,0.65);
        }

        .contact-box p {
          margin: 15px auto 25px;
          max-width: 600px;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
        }

        footer {
          padding: 48px 5% 25px;
          background: #010b08;
          border-top: 1px solid rgba(93,255,116,0.15);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr repeat(3, 1fr);
          gap: 35px;
        }

        .footer-logo {
          font-size: 29px;
          font-weight: 900;
        }

        .footer-logo span {
          color: #69ff47;
        }

        footer h4 {
          margin: 0 0 13px;
          color: #69ff47;
          font-size: 12px;
          letter-spacing: 1px;
        }

        footer p,
        footer button {
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          line-height: 1.8;
        }

        footer p {
          margin: 4px 0;
        }

        footer button {
          display: block;
          padding: 2px 0;
          border: 0;
          background: transparent;
          text-align: left;
        }

        footer button:hover {
          color: #69ff47;
        }

        .copyright {
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          color: rgba(255,255,255,0.35);
          font-size: 10px;
        }

        .search-panel {
          position: fixed;
          z-index: 200;
          top: 92px;
          right: 5%;
          width: min(370px, 90%);
          padding: 16px;
          border: 1px solid rgba(103,255,100,0.35);
          border-radius: 16px;
          background: rgba(2,31,23,0.98);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }

        .search-input {
          width: 100%;
          padding: 12px;
          border: 1px solid rgba(103,255,100,0.2);
          border-radius: 10px;
          outline: none;
          background: #031710;
          color: #ffffff;
        }

        .search-results {
          display: grid;
          gap: 6px;
          margin-top: 10px;
        }

        .search-result {
          padding: 10px;
          border: 1px solid rgba(103,255,100,0.16);
          border-radius: 9px;
          background: rgba(255,255,255,0.03);
          color: #ffffff;
          text-align: left;
        }

        .modal-background {
          position: fixed;
          z-index: 300;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,8,6,0.8);
          backdrop-filter: blur(10px);
        }

        .modal {
          width: min(520px, 100%);
          max-height: 90vh;
          overflow: auto;
          padding: 30px;
          border: 1px solid rgba(103,255,100,0.45);
          border-radius: 24px;
          background: #06251d;
          box-shadow: 0 25px 80px rgba(0,0,0,0.55);
        }

        .modal h2 {
          margin: 0 0 8px;
          font-size: 30px;
        }

        .modal-subtitle {
          margin: 0 0 18px;
          color: rgba(255,255,255,0.62);
        }

        .modal input,
        .modal textarea {
          width: 100%;
          margin-bottom: 11px;
          padding: 13px;
          border: 1px solid rgba(103,255,100,0.2);
          border-radius: 11px;
          outline: none;
          background: #031710;
          color: #ffffff;
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

        @media (max-width: 1150px) {
          .desktop-nav {
            gap: 11px;
          }

          .desktop-nav button {
            font-size: 11px;
          }

          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .species-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .benefits {
            grid-template-columns: repeat(3, 1fr);
          }

          .science-text {
            grid-column: 1 / -1;
            border-left: 0;
            border-top: 1px solid rgba(100,255,140,0.2);
            padding: 10px 0 0;
            text-align: center;
          }
        }

        @media (max-width: 800px) {
          .topbar {
            height: 70px;
            padding: 0 18px;
          }

          .logo {
            min-width: auto;
          }

          .logo-title {
            font-size: 24px;
          }

          .logo-subtitle {
            padding-left: 0;
            font-size: 8px;
          }

          .desktop-nav,
          .language,
          .quote-button {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .mobile-nav {
            top: 70px;
          }

          .hero {
            min-height: 730px;
            padding: 120px 20px 60px;
            align-items: flex-start;
            background-position: 62% center;
          }

          .hero-content {
            width: 100%;
          }

          .hero h1 {
            font-size: clamp(42px, 12vw, 63px);
            letter-spacing: -2px;
          }

          .hero-text {
            max-width: 380px;
            font-size: 14px;
          }

          .orb {
            width: 78px;
            height: 78px;
            font-size: 8px;
          }

          .orb strong {
            font-size: 18px;
          }

          .orb-one {
            left: 3%;
            top: 52%;
          }

          .orb-two {
            left: 1%;
            top: 67%;
          }

          .orb-three {
            left: 29%;
            bottom: 5%;
          }

          .orb-four {
            right: 3%;
            top: 50%;
          }

          .orb-five {
            right: 1%;
            top: 67%;
          }

          .orb-six {
            right: 29%;
            bottom: 5%;
          }

          .dna {
            right: -20%;
            top: 43%;
            width: 300px;
            height: 135px;
          }

          .benefits {
            width: 92%;
            grid-template-columns: 1fr 1fr;
            padding: 11px;
          }

          .section,
          .content-section {
            padding: 65px 20px;
          }

          .section-header {
            display: block;
          }

          .section-description {
            max-width: none;
            margin-top: 17px;
          }

          .product-grid {
            grid-template-columns: 1fr 1fr;
          }

          .species-grid {
            grid-template-columns: 1fr 1fr;
          }

          .info-grid,
          .application-grid {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 500px) {
          .hero {
            min-height: 740px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-buttons button {
            width: 100%;
            max-width: 250px;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .species-grid {
            grid-template-columns: 1fr 1fr;
          }

          .species-card {
            height: 175px;
          }

          .number-grid {
            grid-template-columns: 1fr;
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
          onClick={() => scrollToSection("home")}
          aria-label="Vela Peptide home"
        >
          <div className="logo-title">
            <span>Vela</span> Peptide ✦
          </div>

          <div className="logo-subtitle">
            Advanced Nutrition for Aquatic Life
          </div>
        </button>

        <nav className="desktop-nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="search-button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-label="Search"
          >
            ⌕
          </button>

          <span className="language">◎ EN</span>

          <button
            className="quote-button"
            onClick={() => setQuoteOpen(true)}
          >
            Get a Quote
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
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
        <div className="search-panel">
          <input
            className="search-input"
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />

          {search.length > 0 && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <button
                    key={item.name}
                    className="search-result"
                    onClick={() => {
                      setSearch("");
                      setSearchOpen(false);
                      scrollToSection("products");
                    }}
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <div
                  style={{
                    padding: "10px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  No matching product found.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            ADVANCED AQUACULTURE NUTRITION
          </div>

          <h1>
            Science Driven Nutrition for{" "}
            <span className="green">
              Healthier Fish
            </span>
          </h1>

          <p className="hero-text">
            Advanced fish feed additives designed to support
            growth, feed efficiency, immunity and responsible
            aquaculture production.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote →
            </button>

            <button
              className="outline-button"
              onClick={() => scrollToSection("products")}
            >
              View All Products →
            </button>
          </div>
        </div>

        <div className="floating-orbs" aria-hidden="true">
          <div className="orb orb-one">
            <strong>⌘</strong>
            Peptides
            <br />
            & Proteins
          </div>

          <div className="orb orb-two">
            <strong>◇</strong>
            Immuno
            <br />
            stimulants
          </div>

          <div className="orb orb-three">
            <strong>⚙</strong>
            Enzymes
          </div>

          <div className="orb orb-four">
            <strong>✦</strong>
            Vitamins
            <br />
            & Minerals
          </div>

          <div className="orb orb-five">
            <strong>●</strong>
            Probiotics
            <br />
            & Prebiotics
          </div>

          <div className="orb orb-six">
            <strong>⌁</strong>
            Functional
            <br />
            Additives
          </div>

          <div className="dna" />
        </div>
      </section>

      <section className="benefits">
        {benefits.map(([icon, title, text]) => (
          <div className="benefit" key={title}>
            <div className="benefit-icon">{icon}</div>

            <div className="benefit-text">
              <strong>{title}</strong>
              <br />
              {text}
            </div>
          </div>
        ))}

        <div className="science-text">
          SCIENCE
          <br />
          DRIVEN
          <br />
          SOLUTIONS
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="section-header">
          <div>
            <div className="section-label">
              FISH FEED ADDITIVES
            </div>

            <h2>
              Complete Range of Fish Feed Additives
            </h2>
          </div>

          <div className="section-description">
            Science-backed formulations to support growth,
            health and productivity across modern aquaculture.
          </div>
        </div>

        <div className="product-grid">
          {categories.map((item) => (
            <article
              className="product-card"
              key={item.name}
            >
              <img src={item.image} alt={item.name} />

              <div className="product-content">
                <div className="product-icon">
                  {item.icon}
                </div>

                <h3>{item.name}</h3>

                <p>{item.text}</p>
              </div>

              <div className="product-arrow">
                →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section species-section">
        <div className="section-header">
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
              className="species-card"
              key={name}
            >
              <img src={image} alt={name} />

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
          Science, Nutrition & Aquaculture
        </h2>

        <div className="info-grid">
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
              <div className="number-card">
                <strong>01</strong>
                <span>Science Driven</span>
              </div>

              <div className="number-card">
                <strong>02</strong>
                <span>Quality Focused</span>
              </div>

              <div className="number-card">
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
              className="primary-button"
              onClick={() => scrollToSection("research")}
            >
              Explore Research →
            </button>
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="content-section dark"
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

            <h3>Nursery & Fry</h3>

            <p>
              Nutritional support for early-stage growth
              and healthy development.
            </p>
          </div>

          <div className="application">
            <div className="application-number">
              02
            </div>

            <h3>Grow-Out</h3>

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
              Shrimp & Aquatic Species
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
          RESEARCH & DEVELOPMENT
        </div>

        <h2>
          Science Driven Solutions
        </h2>

        <div className="info-grid">
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
              className="research-image"
              src="/images/research.jpg"
              alt="Vela Peptide research"
            />
          </div>
        </div>
      </section>

      <section
        id="sustainability"
        className="content-section dark"
      >
        <div className="section-label">
          SUSTAINABILITY
        </div>

        <h2>
          Better Nutrition. Better Aquaculture.
        </h2>

        <div className="info-card">
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
        className="section contact-section"
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
            className="primary-button"
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
              Science-driven fish feed additives for modern
              aquaculture.
            </p>
          </div>

          <div>
            <h4>QUICK LINKS</h4>

            {navItems.slice(0, 4).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div>
            <h4>OUR SOLUTIONS</h4>

            <button onClick={() => scrollToSection("products")}>
              Peptides & Proteins
            </button>

            <button onClick={() => scrollToSection("products")}>
              Immunostimulants
            </button>

            <button onClick={() => scrollToSection("products")}>
              Enzymes
            </button>

            <button onClick={() => scrollToSection("products")}>
              Probiotics & Prebiotics
            </button>
          </div>

          <div>
            <h4>CONTACT</h4>

            <p>Vela Peptide</p>
            <p>India</p>

            <button
              onClick={() => setQuoteOpen(true)}
              style={{
                color: "#69ff47",
                fontWeight: 800,
              }}
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
          className="modal-background"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <h2>Get a Quote</h2>

            <p className="modal-subtitle">
              Tell us about your aquaculture requirement.
            </p>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Tell us about your requirement..."
            />

            <div className="modal-actions">
              <button
                className="primary-button"
                onClick={() => setQuoteOpen(false)}
              >
                Submit Enquiry →
              </button>

              <button
                className="outline-button"
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
