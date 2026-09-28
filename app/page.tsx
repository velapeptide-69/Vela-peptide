import HeroSlider from '@/components/HeroSlider';
const products=['Peptides & Proteins','Immunostimulants','Enzymes','Vitamins & Minerals','Probiotics & Prebiotics','Functional Additives'];
const species=['Catla','Rohu','Tilapia','Pangasius','Shrimp','Carp','Seabass'];
export default function Home(){
 return <main>
  <nav className="fixed top-0 z-30 flex h-[74px] w-full items-center justify-between border-b border-[#78ff501f] bg-[#000f0dcc] px-[5%] backdrop-blur-xl">
   <div className="text-3xl font-extrabold"><span className="text-[#b4ff35]">Vela</span> Peptide</div>
   <div className="hidden gap-7 text-sm md:flex"><a href="#home">Home</a><a href="#products">Products</a><a href="#applications">Applications</a><a href="#research">Research</a><a href="#contact">Contact</a></div>
   <a href="#contact" className="rounded-full bg-[#a9ff32] px-5 py-3 font-bold text-[#04120c]">Get a Quote →</a>
  </nav>
  <div id="home"><HeroSlider/></div>
  <div className="mx-[4%] -mt-8 grid overflow-hidden rounded-2xl border border-[#96ff5033] md:grid-cols-5">
   {['Faster Growth','Stronger Immunity','Better Feed Conversion','Healthier Fish','Sustainable Aquaculture'].map((x,i)=><div key={x} className="bg-[#001a16e6] p-5 text-center font-bold"><b className="mb-1 block text-2xl text-[#b4ff35]">{['↗','◇','◎','♥','⌁'][i]}</b>{x}</div>)}
  </div>
  <section id="products" className="px-[6%] py-24"><div className="text-xs font-bold tracking-[.35em] text-[#b4ff35]">OUR PRODUCTS</div><h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Complete Range of Fish Feed Additives</h2><p className="mt-3 text-[#a9c0ba]">Solutions for nutrition, health and productivity across aquaculture.</p>
   <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{products.map((x,i)=><div key={x} className="min-h-40 rounded-2xl border border-[#96ff502e] bg-gradient-to-br from-[#0b2b25] to-[#061914] p-5"><div className="text-3xl text-[#b4ff35]">{['⌬','♢','⚙','◉','✺','⌁'][i]}</div><h3 className="mt-4 font-bold">{x}</h3><p className="mt-2 text-sm leading-5 text-[#a9c0ba]">Targeted support for modern aquaculture nutrition.</p></div>)}</div>
  </section>
  <section id="applications" className="bg-gradient-to-b from-[#031a16] to-[#02100e] px-[6%] py-24"><div className="text-xs font-bold tracking-[.35em] text-[#b4ff35]">AQUACULTURE SPECIES</div><h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Solutions for Every Aquaculture Segment</h2><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">{species.map((x)=><div key={x} className="rounded-2xl border border-[#96ff5028] bg-[#04221cb3] p-6 text-center"><div className="text-4xl">🐟</div><strong className="mt-3 block">{x}</strong></div>)}</div></section>
  <section id="research" className="px-[6%] py-24"><div className="text-xs font-bold tracking-[.35em] text-[#b4ff35]">SCIENCE & RESEARCH</div><h2 className="mt-2 text-4xl font-extrabold">Built Around Aquatic Nutrition</h2><p className="mt-5 max-w-3xl leading-7 text-[#a9c0ba]">A premium science-focused platform for fish feed additives. Verified product specifications, certifications and trial data can be added before commercial launch.</p></section>
  <section id="contact" className="px-[6%] py-24"><div className="text-xs font-bold tracking-[.35em] text-[#b4ff35]">CONTACT</div><h2 className="mt-2 text-4xl font-extrabold">Build Better Aquaculture</h2><p className="mt-4 text-[#a9c0ba]">Connect your enquiry form and WhatsApp details through the API route.</p><a href="mailto:hello@velapeptide.com" className="mt-7 inline-block rounded-full bg-[#a9ff32] px-6 py-3 font-bold text-[#04120c]">Enquire Now →</a></section>
  <footer className="flex justify-between border-t border-[#96ff5028] px-[6%] py-8 text-sm text-[#8fa9a2]"><span>© 2026 Vela Peptide</span><span>Advanced Nutrition for Aquatic Life</span></footer>
 </main>
}
