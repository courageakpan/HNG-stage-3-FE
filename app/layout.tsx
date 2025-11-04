import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Production from "@/components/shared/production";
import About from "@/components/shared/about";
import Footer from "@/components/shared/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "audiophile",
  description: "audiophile is a high-end audio equipment company",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
      
      <Production/>
      <About/>
      <Footer/>
      
    </html>
  );
}