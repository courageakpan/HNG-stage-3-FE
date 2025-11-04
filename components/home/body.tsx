import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroSpeaker from "@/public/images/home/image-removebg-preview(38) (1).png";
import speakerZX7 from "@/public/images/home/Bitmap (1).png";
import earphonesYX1 from "@/public/images/home/Group 12.png";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-20 space-y-10">
      {/* ZX9 SPEAKER HERO */}
      <section className="bg-[#D87D4A] rounded-lg flex flex-col md:flex-row items-center justify-between text-white overflow-hidden px-8 md:px-16 py-16 relative">
        <div className="flex justify-center md:justify-start md:w-1/2 mb-8 md:mb-0">
          <Image
            src={heroSpeaker.src}
            alt="ZX9 Speaker"
            width={280}
            height={280}
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            ZX9 <br /> Speaker
          </h1>
          <p className="text-sm text-gray-200 max-w-md">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link
            href="#"
            className="bg-black text-white text-sm uppercase tracking-widest px-6 py-3 rounded-md hover:bg-gray-800 inline-block"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* ZX7 SPEAKER BANNER */}
      <section className="relative bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center px-8 md:px-16">
        <Image
          src={speakerZX7}
          alt="ZX7 Speaker"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold uppercase mb-4">ZX7 Speaker</h2>
          <Link
            href="#"
            className="border border-black text-black text-sm uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* YX1 EARPHONES GRID */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Image side */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src={earphonesYX1}
            alt="YX1 Earphones"
            className="object-cover w-full h-full"
            width={600}
            height={400}
          />
        </div>
        {/* Text side */}
        <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center px-10 py-16">
          <h2 className="text-3xl font-bold uppercase mb-4">YX1 Earphones</h2>
          <Link
            href="#"
            className="border border-black text-black text-sm uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black hover:text-white transition w-fit"
          >
            See Product
          </Link>
        </div>
      </section>
    </main>
  );
}
