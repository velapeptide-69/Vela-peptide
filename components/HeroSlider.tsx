'use client';
import {useEffect,useState} from 'react';
const slides=[
 ['FISH FEED ADDITIVES','Advanced Nutrition for Aquatic Life'],
 ['AQUACULTURE NUTRITION','Science-driven solutions for modern fish farming'],
 ['VELA PEPTIDE','Nutrition, health and performance for aquatic life'],
 ['FOR CATLA • ROHU • TILAPIA','Functional feed additive solutions']
];
export default function HeroSlider(){
 const [i,setI]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setI(v=>(v+1)%slides.length),4500);return()=>clearInterval(t)},[]);
 return <section className="relative min-h-[700px] overflow-hidden bg-[#021513] pt-[74px]">
  <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-85"/>
  <div className="absolute inset-0 bg-gradient-to-r from-[#01110f]/75 via-[#01110f]/30 to-transparent"/>
  <div className="relative z-10 flex min-h-[626px] items-end px-[7%] pb-24">
   <div className="max-w-xl"><div className="mb-4 text-xs font-bold tracking-[.35em] text-[#b4ff35]">{slides[i][0]}</div>
   <h1 className="text-5xl font-extrabold leading-[.98] md:text-7xl">{slides[i][1]}</h1>
   <p className="mt-6 max-w-lg text-lg leading-7 text-[#d4e6e1]">Premium feed additive concepts for modern aquaculture, built around nutrition, fish health and performance.</p>
   <div className="mt-7 flex gap-3"><a href="#products" className="rounded-full bg-[#a9ff32] px-6 py-3 font-bold text-[#04120c]">Explore Products →</a><a href="#contact" className="rounded-full border border-[#a9ff32] px-6 py-3 font-bold">Get a Quote</a></div></div>
  </div>
  <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">{slides.map((_,n)=><button key={n} onClick={()=>setI(n)} className={`h-2.5 w-2.5 rounded-full ${n===i?'bg-[#b4ff35] shadow-[0_0_12px_#b4ff35]':'bg-[#55746b]'}`}/>)}</div>
 </section>
}
