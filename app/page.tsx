import Header from "@/components/home/Header";
import Image from "next/image";
import Production from "@/components/shared/production";
import Body from "@/components/home/body";
import About from "@/components/shared/about"

export default function Home() {
  return (
    <section>
      <Header />
      <Production />
      <Body/>
      <About/>
    </section>
  );
}