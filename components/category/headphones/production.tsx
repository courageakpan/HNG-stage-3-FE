"use client";

import Image from "next/image";
import Link from "next/link";
import headphone1 from "@/public/images/Group 3.png";
import headphone2 from "@/public/images/Group 3 (1).png";
import headphone3 from "@/public/images/Group 3 (2).png";

export default function HeadphonesPage() {
  const products = [
    {
      id: 1,
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. Built to deliver truly remarkable sound...",
      image: headphone1,
      isNew: true,
      slug: "xx99-mark-two",
    },
    {
      id: 2,
      name: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction...",
      image: headphone2,
      slug: "xx99-mark-one",
    },
    {
      id: 3,
      name: "XX59 Headphones",
      description:
        "Enjoy great sound without breaking the bank. The XX59 headphones offer comfort and balanced audio performance...",
      image: headphone3,
      slug: "xx59",
    },
  ];

  return (
    <main>

      <section className="px-6 md:px-24 py-24 space-y-36">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`grid md:grid-cols-2 gap-10 md:gap-20 items-center ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* PRODUCT IMAGE */}
            <div
              className={`bg-[#F1F1F1] flex justify-center items-center rounded-lg overflow-hidden ${
                index === 1 ? "md:order-2 animate-fade-in" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* PRODUCT DETAILS */}
            <div
              className={`text-center md:text-left space-y-6 max-w-md mx-auto ${
                index === 1 ? "md:order-1" : ""
              }`}
            >
              {product.isNew && (
                <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase">
                  New Product
                </p>
              )}

              <h2 className="text-3xl font-bold uppercase leading-tight">
                {product.name}
              </h2>

              <p className="text-black/60">{product.description}</p>

              <Link
                href={`/product-details/headphones/${product.id}`}
                className="inline-block bg-[#D87D4A] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#FBAF85] transition"
              >
                See Product
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
