"use client";
import { useState } from "react";

const nav = [["Home","home"],["About Us","about"],["Products","products"],["Applications","applications"],["Research","research"],["Sustainability","sustainability"],["Contact","contact"]];
const categories = [
  ["Peptides & Proteins","High quality protein sources for optimum growth.","/images/product-peptides.jpg","Molecular support"],
  ["Immunostimulants","Natural support for stronger immunity and resilience.","/images/product-immunity.jpg","Immune support"],
  ["Enzymes","Better digestion and nutrient absorption.","/images/product-enzymes.jpg","Digestive support"],
  ["Vitamins & Minerals","Complete nutritional support for intensive farming.","/images/product-vitamins.jpg","Micronutrition"],
  ["Probiotics & Prebiotics","Gut health support for better performance.","/images/product-probiotics.jpg","Gut health"],
  ["Functional Additives","Tailored solutions for modern aquaculture.","/images/product-functional.jpg","Farm performance"]
];
const species = [
  ["Catla","/images/fish-catla.jpg"],["Rohu","/images/fish-rohu.jpg"],["Tilapia","/images/fish-tilapia.jpg"],
  ["Pangasius","/images/fish-pangasius.jpg"],["Shrimp","/images/fish-shrimp.jpg"],["Carp","/images/fish-carp.jpg"],["Seabass","/images/fish-seabass.jpg"]
];
const applications = [["01","Nursery & Fry","Support early-stage development, robustness and consistent feeding."],["02","Grow-out","Designed around growth, feed efficiency and day-to-day performance."],["03","Broodstock","Nutritional support for condition, vitality and reproductive programs."],["04","Shrimp Farming","Functional solutions for gut health, survival and pond performance."]];

export default function Home(){
  const [menu,setMenu]=useState(false),[quote,setQuote]=useState(false),[sent,setSent]=useState(false);
  const go=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
  return <main>
    <header className="topbar"><div className="navwrap">
      <button className="logo" onClick={()=>go("home")}><span>Vela</span><b>Peptide</b><i>✦</i><small>Advanced Nutrition for Aquatic Life</small></button>
      <nav className={menu?"desktop-nav open":"desktop-nav"}>{nav.map(([l,id])=><button key={id} onClick={()=>go(id)}>{l}</button>)}</nav>
      <div className="navright"><button className="search" onClick={()=>go("products")}>⌕</button><button className="language">◎ EN⌄</button><button className="quote" onClick={()=>setQuote(true)}>Get a Quote <strong>→</strong></button><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button></div>
    </div></header>

    <section id="home" className="hero"><div className="hero-image"/><div className="hero-shade"/><div className="hero-dna" aria-hidden="true">⌁⌁⌁</div>
      <div className="hero-copy"><div className="hero-kicker">SCIENCE • NUTRITION • AQUACULTURE</div><h1>Science Driven<br/>Nutrition for<br/><span>Healthier Fish</span></h1><p>Advanced peptides, proteins and functional additives for better growth, stronger immunity and sustainable aquaculture.</p><div className="hero-actions"><button className="lime" onClick={()=>setQuote(true)}>Get a Quote <b>→</b></button><button className="outline" onClick={()=>go("products")}>View All Products <b>→</b></button></div></div>
      {[['Peptides','✣','orb1'],['Vitamins & Minerals','◉','orb2'],['Enzymes','✦','orb3'],['Immunostimulants','⬡','orb4'],['Probiotics & Prebiotics','●','orb5'],['Functional Additives','◒','orb6']].map(([t,ic,c])=><div key={t} className={'orb '+c}><span>{ic}</span><b>{t}</b></div>)}
    </section>

    <section className="benefitbar">{[["▮▮▮","Faster","Growth Rate"],["⬡","Stronger","Immunity"],["⟳","Better Feed","Conversion (FCR)"],["♡","Healthier","Fish"],["◒","Sustainable","Aquaculture"]].map(([i,a,b])=><div className="benefit" key={a}><strong>{i}</strong><span><b>{a}</b>{b}</span></div>)}<div className="sciencebox"><span>SCIENCE<br/>DRIVEN<br/>SOLUTIONS</span><button onClick={()=>go("research")}>▶ Our Journey<br/><small>Explore</small></button></div></section>

    <section id="products" className="product-section"><div className="section-title"><div><label>FISH FEED ADDITIVES ━━━━━</label><h2>Complete Range of Fish Feed Additives</h2></div><div className="title-right"><p>Science-backed formulations to support growth, health and productivity for all stages of aquaculture.</p><button onClick={()=>setQuote(true)}>View All Products →</button></div></div>
      <div className="category-row">{categories.map(([name,desc,img,tag])=><article className="cat" key={name}><div className="cat-photo"><img src={img} alt={name}/><span>{tag}</span></div><h3>{name}</h3><p>{desc}</p><button onClick={()=>setQuote(true)}>→</button></article>)}</div>
    </section>

    <section className="fishband"><div className="fish-heading"><label>AQUACULTURE SPECIES ━━━━━</label><h2>Solutions for Every <span>Fish Species</span></h2></div><div className="fishrow">{species.map(([s,img])=><button key={s} className="fishcard" onClick={()=>setQuote(true)}><div className="fishart"><img src={img} alt={s}/></div><b>{s}</b><i>→</i></button>)}</div></section>

    <section id="about" className="content-section"><div className="panel-image"><img src="/images/hero-underwater.jpg" alt="Aquaculture environment"/><div className="dna-ring">DNA</div></div><div className="copy"><label>ABOUT VELA PEPTIDE</label><h2>Nutrition engineered around <span>real farm outcomes.</span></h2><p>Vela Peptide develops functional feed additive concepts for aquaculture businesses looking for consistent performance, technical clarity and scalable nutrition programs.</p><ul><li>Growth & feed efficiency</li><li>Immune and stress support</li><li>Digestive performance</li><li>Species-specific programs</li></ul><button className="lime" onClick={()=>go("research")}>Discover Our Approach →</button></div></section>

    <section id="applications" className="darksection"><div className="section-title"><div><label>APPLICATIONS ━━━━━</label><h2>Solutions across the <span>production cycle</span></h2></div><p>From nursery to grow-out, our approach connects formulation with practical farm needs.</p></div><div className="application-grid">{applications.map(([n,t,d])=><article key={n}><em>{n}</em><h3>{t}</h3><p>{d}</p><button onClick={()=>setQuote(true)}>Discuss program →</button></article>)}</div></section>

    <section id="research" className="research-section"><div className="research-copy"><label>RESEARCH & DEVELOPMENT ━━━━━</label><h2>Formulation with <span>purpose.</span></h2><p>We focus on functional ingredients, application logic and practical feeding programs—so every solution has a clear job to do.</p><div className="research-points"><div><b>01</b><span>Ingredient strategy</span></div><div><b>02</b><span>Application design</span></div><div><b>03</b><span>Field feedback</span></div></div></div><img src="/images/research.jpg" alt="Aquaculture research"/></section>

    <section id="sustainability" className="sustain"><label>SUSTAINABILITY ━━━━━</label><h2>Better feed. Better fish. <span>Better aquaculture.</span></h2><p>Practical nutrition with efficiency and responsible farming in mind.</p><div className="sustain-grid"><div><b>♻</b><h3>Feed efficiency</h3><p>Focus on practical FCR outcomes.</p></div><div><b>◌</b><h3>Water responsibility</h3><p>Nutrition designed with farm systems in mind.</p></div><div><b>✦</b><h3>Scalable farming</h3><p>Programs built for commercial operations.</p></div></div></section>

    <section id="contact" className="contact"><div><label>LET'S TALK ━━━━━</label><h2>Build your next <span>nutrition program.</span></h2><p>Tell us your species, production stage and goal. Our team can help map the right solution family.</p></div><button className="lime" onClick={()=>setQuote(true)}>Get a Quote →</button></section>
    <footer><div><div className="footerlogo"><span>Vela</span>Peptide</div><small>Advanced Nutrition for Aquatic Life</small></div><div className="footerlinks">{nav.slice(1).map(([l,id])=><button key={id} onClick={()=>go(id)}>{l}</button>)}</div><p>© 2026 Vela Peptide. All rights reserved.</p></footer>

    {quote&&<div className="modal-bg" onClick={()=>setQuote(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setQuote(false)}>×</button>{sent?<div className="success"><b>✓</b><h2>Enquiry received</h2><p>Thank you. Your request is ready for the Vela Peptide team.</p><button className="lime" onClick={()=>{setSent(false);setQuote(false)}}>Close</button></div>:<><label>GET A QUOTE</label><h2>Tell us what you need.</h2><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><input placeholder="Phone / WhatsApp"/><select defaultValue=""><option value="" disabled>Select species</option>{species.map(([s])=><option key={s}>{s}</option>)}</select><textarea required placeholder="Tell us about your product / application"/><button className="lime" type="submit">Send Enquiry →</button></form></>}</div></div>}
  </main>
}
