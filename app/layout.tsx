import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import ConvexClientProvider from "@/components/ConvexClientProvider";

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
      <body className={`${manrope.variable} antialiased bg-[#101010] text-white`}>
        <ConvexClientProvider>
          {/* Navbar at the top of all pages */}
          <Navbar />

          {/* Page content */}
          <main>{children}</main>

          {/* Shared sections below all pages */}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}