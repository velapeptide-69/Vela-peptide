import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Vela Peptide | Fish Feed Additives',description:'Advanced nutrition and feed additive solutions for aquaculture.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
