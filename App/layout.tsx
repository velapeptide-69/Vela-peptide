import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Vela Peptide | Advanced Nutrition for Aquatic Life",description:"Science-driven fish feed additives and aquaculture nutrition solutions."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
