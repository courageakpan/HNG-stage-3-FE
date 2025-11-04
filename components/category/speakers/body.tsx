"use client";

import Image from "next/image";
import Link from "next/link";
import speakers1 from "@/public/images/Group 3 (3).png";
import speakers2 from "@/public/images/image-removebg-preview(49) (1).png";

export default function SpeakersPage() {
  const products = [
    {
      id: 1,
      name: "ZX9 Speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.",
      image: speakers1,
      slug: "zx9",
      isNew: true,
      reverse: false, // Image Left / Text Right
    },
    {
      id: 2,
      name: "ZX7 Speaker",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: speakers2,
      slug: "zx7",
      reverse: true, // Image Right / Text Left
    },
  ];

  return (
    <main className="px-6 md:px-24 py-24 space-y-40">
      {products.map((product) => (
        <div
          key={product.id}
          className="grid md:grid-cols-2 items-center gap-10 md:gap-20"
        >
          {/* IMAGE */}
          <div
            className={`bg-[#F1F1F1] flex justify-center items-center rounded-lg p-10
              ${product.reverse ? "md:order-2" : "md:order-1"}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div
            className={`text-center md:text-left space-y-6 max-w-md mx-auto
              ${product.reverse ? "md:order-1" : "md:order-2"}`}
          >
            {product.isNew && (
              <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase">
                New Product
              </p>
            )}

            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
              {product.name}
            </h2>

            <p className="text-black/60">{product.description}</p>

            <Link
              href={`/product/${product.slug}`}
              className="inline-block bg-[#D87D4A] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#FBAF85] transition"
            >
              See Product
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
