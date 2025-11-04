"use client";

import Image from "next/image";
import Link from "next/link";
import earphonesImg from "@/public/images/Group 5.png"

export default function EarphonesPage() {
  return (
    <main className="px-6 md:px-24 py-24">
      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* IMAGE LEFT */}
        <div className="bg-[#F1F1F1] flex justify-center items-center rounded-lg p-10">
          <Image
            src={earphonesImg}
            alt="YX1 Wireless Earphones"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="text-center md:text-left space-y-6 max-w-md mx-auto">
          <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase">
            New Product
          </p>

          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
            YX1 Wireless Earphones
          </h2>

          <p className="text-black/60">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>

          <Link
            href="/product/yx1"
            className="inline-block bg-[#D87D4A] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#FBAF85] transition"
          >
            See Product
          </Link>
        </div>
      </section>
    </main>
  );
}