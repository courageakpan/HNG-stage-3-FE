import { Manrope } from "next/font/google";
import "../globals.css";

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
    <div lang="en">
      <main
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </main>
    </div>
  );
}