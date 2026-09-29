"use client";

import { useState } from "react";

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

const benefits = [
  ["▥", "Faster", "Growth Rate"],
  ["◇", "Stronger", "Immunity"],
  ["⟳", "Better Feed", "Conversion (FCR)"],
  ["♡", "Healthier", "Fish"],
  ["⌁", "Sustainable", "Aquaculture"],
];

const nav = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Products", "products"],
  ["Applications", "applications"],
  ["Research", "research"],
  ["Sustainability", "sustainability"],
  ["Contact", "contact"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [quote, setQuote] = useState(false);
  const [search, setSearch] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenu(false);
  };

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
          background: #021714;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 50% 15%, rgba(0,255,150,.12), transparent 32%),
            linear-gradient(180deg, #021512 0%, #031d19 45%, #02130f 100%);
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
          padding: 0 5%;
          gap: 30px;
          background: rgba(1,16,14,.82);
          border-bottom: 1px solid rgba(93,255,158,.18);
          backdrop-filter: blur(18px);
        }

        .logo {
          min-width: 265px;
          cursor: pointer;
          background: transparent;
          border: 0;
          color: white;
          text-align: left;
        }

        .logo-main {
          font-size: 34px;
          line-height: .9;
          font-weight: 800;
          letter-spacing: -1.8px;
        }

        .logo-main span {
          color: #5dff42;
        }

        .leaf {
          color: #68ff40;
          font-size: 19px;
          vertical-align: top;
          margin-left: 4px;
        }

        .tagline {
          margin-top: 7px;
          padding-left: 38px;
          font-size: 12px;
          color: rgba(255,255,255,.82);
          letter-spacing: .2px;
        }

        .desktop-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 25px;
        }

        .desktop-nav button {
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.92);
          font-size: 14px;
          padding: 11px 3px;
          cursor: pointer;
          position: relative;
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
          border-radius: 10px;
          background: #63ff42;
          box-shadow: 0 0 15px #54ff38;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          border: 0;
          background: transparent;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .language {
          color: white;
          font-size: 14px;
          white-space: nowrap;
        }

        .quote-btn {
          border: 0;
          border-radius: 30px;
          background: linear-gradient(135deg,#73ff48,#4fe62e);
          color: #03200f;
          font-weight: 800;
          padding: 14px 24px;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(94,255,61,.22);
        }

        .mobile-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(114,255,80,.3);
          color: #75ff4c;
          background: rgba(0,0,0,.2);
          font-size: 25px;
        }

        .hero {
          position: relative;
          min-height: 650px;
          padding: 135px 5% 60px;
          display: flex;
          align-items: center;
          isolation: isolate;
          background:
            linear-gradient(90deg, rgba(0,10,8,.78) 0%, rgba(0,15,12,.34) 42%, rgba(0,12,9,.12) 100%),
            url("/images/hero-underwater.jpg") center/cover no-repeat;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 62% 46%, rgba(0,255,150,.18), transparent 28%),
            linear-gradient(180deg, rgba(0,20,16,.18), #031813 100%);
        }

        .hero-copy {
          width: 38%;
          max-width: 540px;
          z-index: 3;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #69ff45;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.8px;
          margin-bottom: 18px;
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
          font-size: clamp(44px,5vw,75px);
          line-height: .94;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .hero h1 .green {
          color: #64ff43;
          text-shadow: 0 0 24px rgba(93,255,61,.25);
        }

        .hero p {
          margin: 23px 0;
          max-width: 480px;
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
          border-radius: 30px;
          cursor: pointer;
          font-weight: 800;
        }

        .primary-btn {
          border: 0;
          color: #03190d;
          background: #67ff43;
          box-shadow: 0 0 28px rgba(95,255,65,.2);
        }

        .outline-btn {
          color: white;
          background: rgba(0,20,15,.5);
          border: 1px solid rgba(103,255,67,.55);
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
          text-align: center;
          padding: 12px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, rgba(120,255,170,.32), rgba(0,40,28,.78) 58%, rgba(0,15,11,.92));
          border: 1px solid rgba(111,255,111,.6);
          box-shadow:
            inset 0 0 30px rgba(67,255,119,.1),
            0 0 24px rgba(67,255,119,.13);
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .orb strong {
          color: #68ff44;
          font-size: 25px;
          line-height: 1;
          margin-bottom: 7px;
        }

        .orb1 { left: 34%; top: 17%; }
        .orb2 { left: 30%; top: 48%; }
        .orb3 { left: 39%; bottom: 12%; }
        .orb4 { right: 19%; top: 16%; }
        .orb5 { right: 11%; top: 38%; }
        .orb6 { right: 18%; bottom: 13%; }

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
          filter: blur(.1px) drop-shadow(0 0 10px #25ff99);
          opacity: .7;
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
          margin: -32px auto 0;
          min-height: 82px;
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
          color: #67ff43;
          font-size: 28px;
          min-width: 30px;
          text-align: center;
        }

        .benefit-text {
          font-size: 12px;
          line-height: 1.25;
          color: white;
        }

        .science {
          border-left: 1px solid rgba(108,255,155,.35);
          padding-left: 22px;
          color: rgba(255,255,255,.88);
          letter-spacing: 5px;
          line-height: 1.55;
          font-size: 11px;
        }

        .section {
          padding: 85px 5%;
          position: relative;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .section-label {
          color: #66ff45;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(31px,4vw,50px);
          line-height: 1;
          letter-spacing: -1.7px;
        }

        .section-description {
          max-width: 330px;
          color: rgba(255,255,255,.68);
          line-height: 1.55;
          font-size: 14px;
        }

        .products {
          background:
            radial-gradient(circle at 50% 0%, rgba(33,255,140,.09), transparent 35%),
            linear-gradient(180deg,#031d18,#031510);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 14px;
        }

        .category {
          position: relative;
          min-height: 260px;
          overflow: hidden;
          border-radius: 17px;
          border: 1px solid rgba(102,255,137,.3);
          background: #06251d;
          cursor: pointer;
          transition: transform .25s ease, border-color .25s ease;
        }

        .category:hover {
          transform: translateY(-6px);
          border-color: rgba(104,255,80,.8);
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
          background: linear-gradient(180deg,rgba(0,15,10,.16),rgba(0,25,17,.96));
        }

        .category-content {
          position: absolute;
          z-index: 2;
          left: 15px;
          right: 15px;
          bottom: 15px;
        }

        .category-icon {
          color: #69ff47;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .category h3 {
          margin: 0 0 6px;
          font-size: 15px;
        }

        .category p {
          margin: 0;
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
            linear-gradient(180deg,rgba(0,12,9,.25),rgba(0,7,6,.72)),
            url("/images/hero-underwater.jpg") center/cover fixed;
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
          background: linear-gradient(180deg,rgba(5,48,39,.3),rgba(0,20,15,.85));
          border: 1px solid rgba(89,255,133,.18);
        }

        .species img {
          position: absolute;
          width: 120%;
          height: 78%;
          left: -10%;
          top: 0;
          object-fit: contain;
          filter: drop-shadow(0 12px 12px rgba(0,0,0,.5));
        }

        .species-name {
          position: absolute;
          bottom: 13px;
          left: 12px;
          right: 12px;
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
            linear-gradient(135deg,rgba(12,59,46,.78),rgba(2,24,18,.78));
          box-shadow: inset 0 0 45px rgba(55,255,130,.035);
        }

        .info-card h3 {
          font-size: 29px;
          margin: 0 0 15px;
        }

        .info-card p {
          color: rgba(255,255,255,.7);
          line-height: 1.7;
          max-width: 650px;
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
          border: 1px solid rgba(93,255,110,.2);
          background: rgba(0,0,0,.16);
        }

        .number strong {
          display: block;
          color: #6cff48;
          font-size: 27px;
          margin-bottom: 5px;
        }

        .number span {
          color: rgba(255,255,255,.65);
          font-size: 12px;
        }

        .dark-panel {
          background:
            radial-gradient(circle at 20% 10%,rgba(68,255,145,.08),transparent 25%),
            #02120f;
        }

        .application-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
          margin-top: 30px;
        }

        .application {
          padding: 28px;
          min-height: 190px;
          border-radius: 20px;
          background: rgba(8,48,37,.62);
          border: 1px solid rgba(90,255,120,.2);
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
            radial-gradient(circle at 50% 0%,rgba(87,255,67,.13),transparent 35%),
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
          margin-bottom: 15px;
        }

        .contact-box p {
          color: rgba(255,255,255,.67);
          margin-bottom: 25px;
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
          color: #68ff43;
          margin: 0 0 15px;
          font-size: 13px;
          letter-spacing: 1px;
        }

        footer p,
        footer button {
          color: rgba(255,255,255,.6);
          font-size: 13px;
          line-height: 1.8;
        }

        footer button {
          display: block;
          border: 0;
          background: transparent;
          padding: 3px 0;
          cursor: pointer;
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
          color: rgba(255,255,255,.4);
          font-size: 11px;
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
          padding: 30px;
          border-radius: 25px;
          background: #06251d;
          border: 1px solid rgba(105,255,86,.5);
          box-shadow: 0 25px 80px rgba(0,0,0,.55);
        }

        .modal h2 {
          margin-top: 0;
        }

        .modal input,
        .modal textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 14px;
          color: white;
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
        }

        .search-box {
          position: fixed;
          z-index: 200;
          top: 92px;
          right: 5%;
          width: min(360px,90%);
          padding: 15px;
          border-radius: 15px;
          background: rgba(3,30,23,.97);
          border: 1px solid rgba(105,255,86,.35);
          box-shadow: 0 20px 60px rgba(0,0,0,.4);
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: none;
          color: white;
          background: transparent;
          font-size: 15px;
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
            font-size: 9px;
            margin-top: 5px;
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

          .mobile-nav {
            position: fixed;
            z-index: 150;
            top: 70px;
            left: 0;
            right: 0;
            padding: 18px;
            background: rgba(2,20,16,.98);
            border-bottom: 1px solid rgba(100,255,100,.2);
            display: grid;
            gap: 4px;
          }

          .mobile-nav button {
            padding: 14px;
            text-align: left;
            border: 0;
            border-radius: 10px;
            background: transparent;
            color: white;
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
            font-size: 14px;
            max-width: 360px;
          }

          .hero-orbs {
            opacity: .85;
          }

          .orb {
            width: 78px;
            height: 78px;
            font-size: 9px;
          }

          .orb strong {
            font-size: 19px;
          }

          .orb1 { left: 3%; top: 53%; }
          .orb2 { left: 1%; top: 68%; }
          .orb3 { left: 29%; bottom: 5%; }
          .orb4 { right: 3%; top: 50%; }
          .orb5 { right: 0%; top: 65%; }
          .orb6 { right: 28%; bottom: 5%; }

          .dna {
            width: 300px;
            right: 3%;
            top: 38%;
          }

          .benefitbar {
            width: 92%;
            margin-top: -25px;
            grid-template-columns: repeat(2,1fr);
            padding: 12px;
          }

          .benefit {
            padding: 7px;
          }

          .benefit-icon {
            font-size: 22px;
          }

          .science {
            grid-column: span 2;
            text-align: center;
            padding: 13px 0 3px;
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
          }

          .category-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .category {
            min-height: 235px;
          }

          .species-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .species {
            height: 185px;
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
            gap: 25px;
          }
        }

        @media (max-width: 430px) {
          .nav-right .icon-btn {
            display: none;
          }

          .hero {
            min-height: 690px;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .category {
            min-height: 250px;
          }

          .species-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .quote-btn {
            padding: 13px 18px;
          }
        }
      `}</style>

      <header className="topbar">
        <button className="logo" onClick={() => go("home")}>
          <div className="logo-main">
            <span>Vela</span> Peptide <i className="leaf">⌁</i>
          </div>
          <div className="tagline">Advanced Nutrition for Aquatic Life</div>
        </button>

        <nav className="desktop-nav">
          {nav.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => setSearch(!search)}
          >
            ⌕
          </button>

          <span className="language">◎ EN⌄</span>

          <button className="quote-btn" onClick={() => setQuote(true)}>
            Get a Quote →
          </button>

          <button
            className="mobile-menu-btn"
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
            aria-label="Search"
          />
        </div>
      )}

      {menu && (
        <nav className="mobile-nav">
          {nav.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button
            style={{ color: "#69ff47", fontWeight: 800 }}
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
        <div className="hero-copy">
          <div className="eyebrow">FISH FEED ADDITIVES</div>

          <h1>
            Science Driven
            <br />
            <span className="green">Nutrition</span> for
            <br />
            Healthier Fish
          </h1>

          <p>
            Advanced peptides, proteins and functional additives for better
            growth, stronger immunity and sustainable aquaculture.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setQuote(true)}>
              Get a Quote →
            </button>

            <button className="outline-btn" onClick={() => go("products")}>
              View All Products →
            </button>
          </div>
        </div>

        <div className="dna" />

        <div className="hero-orbs">
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
            Vitamins &
            <br />
            Minerals
          </div>

          <div className="orb orb5">
            <strong>●</strong>
            Probiotics &
            <br />
            Prebiotics
          </div>

          <div className="orb orb6">
            <strong>⌁</strong>
            Functional
            <br />
            Additives
          </div>
        </div>
      </section>

      <section className="benefitbar">
        {benefits.map(([icon, a, b]) => (
          <div className="benefit" key={a}>
            <div className="benefit-icon">{icon}</div>
            <div className="benefit-text">
              <strong>{a}</strong>
              <br />
              {b}
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
            <div className="section-label">FISH FEED ADDITIVES</div>
            <h2>Complete Range of Fish Feed Additives</h2>
          </div>

          <div>
            <div className="section-description">
              Science backed formulations to support growth, health and
              productivity for all stages of aquaculture.
            </div>
            <br />
            <button className="outline-btn" onClick={() => go("contact")}>
              View All Products →
            </button>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <article className="category" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="category-content">
                <div className="category-icon">{item.icon}</div>
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
            <div className="section-label">AQUACULTURE SPECIES</div>
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

      <section id="about" className="content-section">
        <div className="section-label">ABOUT VELA PEPTIDE</div>
        <h2>Science, Nutrition & Aquaculture</h2>

        <div className="info-grid" style={{ marginTop: 30 }}>
          <div className="info-card">
            <h3>Built Around Aquatic Life</h3>
            <p>
              Vela Peptide focuses on advanced fish feed additives designed to
              support growth, feed efficiency, immunity and healthier
              aquaculture production.
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
            <h3>From Research to Results</h3>
            <p>
              Our approach combines nutritional science, functional
              ingredients and practical aquaculture requirements to develop
              solutions for modern fish farming.
            </p>

            <button
              className="primary-btn"
              onClick={() => go("research")}
              style={{ marginTop: 10 }}
            >
              Explore Research →
            </button>
          </div>
        </div>
      </section>

      <section id="applications" className="content-section dark-panel">
        <div className="section-label">APPLICATIONS</div>
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

      <section id="research" className="content-section">
        <div className="section-label">RESEARCH & DEVELOPMENT</div>
        <h2>Science Driven Solutions</h2>

        <div className="info-grid" style={{ marginTop: 30 }}>
          <div className="info-card">
            <h3>Continuous Innovation</h3>
            <p>
              Research-led formulation is at the center of Vela Peptide.
              Ingredient functionality, feed performance and aquatic health
              guide our product development approach.
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

      <section id="sustainability" className="content-section dark-panel">
        <div className="section-label">SUSTAINABILITY</div>
        <h2>Better Nutrition. Better Aquaculture.</h2>

        <div className="info-card" style={{ marginTop: 30 }}>
          <h3>Designed for a Sustainable Future</h3>
          <p>
            Efficient nutrition can support responsible aquaculture by helping
            farmers focus on feed utilization, fish health and productive
            farming practices.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-box">
          <div className="section-label">GET IN TOUCH</div>

          <h2>Need a Customized Solution?</h2>

          <p>
            Talk to Vela Peptide about your aquaculture nutrition requirements.
          </p>

          <button className="primary-btn" onClick={() => setQuote(true)}>
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
            <p>Advanced Nutrition for Aquatic Life</p>
            <p>
              Science-driven fish feed additives for modern aquaculture.
            </p>
          </div>

          <div>
            <h4>QUICK LINKS</h4>
            {nav.slice(0, 4).map(([label, id]) => (
              <button key={id} onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </div>

          <div>
            <h4>OUR SOLUTIONS</h4>
            <button onClick={() => go("products")}>Peptides & Proteins</button>
            <button onClick={() => go("products")}>Immunostimulants</button>
            <button onClick={() => go("products")}>Enzymes</button>
            <button onClick={() => go("products")}>Probiotics</button>
          </div>

          <div>
            <h4>CONTACT</h4>
            <p>Vela Peptide</p>
            <p>India</p>
            <p>Contact us for product enquiries.</p>
            <button
              style={{ color: "#69ff47", fontWeight: 800 }}
              onClick={() => setQuote(true)}
            >
              Get a Quote →
            </button>
          </div>
        </div>

        <div className="copyright">
          © 2026 Vela Peptide. All Rights Reserved. · Advanced Nutrition for
          Aquatic Life.
        </div>
      </footer>

      {quote && (
        <div className="modal-bg" onClick={() => setQuote(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Get a Quote</h2>

            <p style={{ color: "rgba(255,255,255,.65)" }}>
              Tell us about your aquaculture requirement.
            </p>

            <input placeholder="Your Name" />
            <input placeholder="Email Address" type="email" />
            <input placeholder="Phone Number" />
            <textarea placeholder="Tell us about your requirement..." />

            <div className="modal-actions">
              <button className="primary-btn">
                Submit Enquiry →
              </button>

              <button
                className="outline-btn"
                onClick={() => setQuote(false)}
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
