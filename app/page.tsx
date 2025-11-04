import Header from "@/components/home/Header";
import Image from "next/image";
import Production from "@/components/shared/production";
import Body from "@/components/home/body";

export default function Home() {
  return (
    <section>
      <Header />
      <Production />
      <Body/>
    </section>
  );
}