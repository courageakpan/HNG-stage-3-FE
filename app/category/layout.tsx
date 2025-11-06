import Production from "@/components/shared/production";
import About from "@/components/shared/about";

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