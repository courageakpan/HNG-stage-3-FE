import { Manrope } from "next/font/google";
import "../globals.css";
import Production from "@/components/shared/production";
import About from "@/components/shared/about";

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
    <>
      {children}
      <Production />
      <About />
    </>
  );
}