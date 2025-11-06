"use client";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { earphones } from "@/data/earphones";
import Image from "next/image";
import headphone1 from "@/public/images/Group 3 (1).png";
import headphones2 from "@/public/images/Group 3 (2).png";
import headphones3 from "@/public/images/Group 3 (3).png";
import { useCartStore } from "@/store/cartStore";
import { useParams } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = useParams();
  const product = earphones.find((p) => p.id === productId);

  if (!product) return notFound();

  const { addItem, openCart } = useCartStore();

  return (
    <main className="px-6 md:px-24 py-10 md:py-20 space-y-20  max-w-[1440px] mx-auto
">

      {/* Go Back */}
      <Link
        href="/category/earphones"
        className="text-black/60 text-sm hover:text-black transition"
      >
        Go Back
      </Link>

      {/* PRODUCT DETAILS */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="bg-[#F1F1F1] rounded-lg p-10 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          {product.isNew && (
            <p className="text-[#D87D4A] uppercase tracking-widest text-sm">
              New Product
            </p>
          )}

          <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
            {product.name}
          </h1>

          <p className="text-black/60 leading-relaxed">{product.description}</p>

          <p className="font-bold text-lg tracking-wide">
            $ {product.price.toLocaleString()}
          </p>

          {/* Add to cart */}
          <div className="flex gap-4">
            <div className="bg-[#F1F1F1] flex items-center px-4 gap-6">
              <button className="text-black/60 hover:text-black font-bold text-lg">-</button>
              <span className="font-bold">1</span>
              <button className="text-black/60 hover:text-black font-bold text-lg">+</button>
            </div>

            <button
              onClick={() => {
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.image.src,
                });
                openCart();
              }}
              className="bg-[#D87D4A] text-white px-8 py-3 uppercase text-sm hover:bg-[#FBAF85] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES + IN THE BOX */}
      <section className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-6 uppercase">Features</h2>
          {product.features.map((feature, i) => (
            <p key={i} className="text-black/60 mb-4 leading-relaxed">
              {feature}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-6 uppercase">In the Box</h2>
          <ul className="space-y-2">
            {product.includes.map((item, i) => (
              <li key={i} className="text-black/60">
                <span className="text-[#D87D4A] font-bold">{item.quantity}x</span> {item.item}
              </li>
            ))}
          </ul>
        </div>
      </section>

            {/* GALLERY */}
        <section className="grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
            <div className="relative h-40 md:h-64 lg:h-72 rounded-lg overflow-hidden">
            <Image
                src={product.gallery[0]!}
                alt="Gallery 1"
                fill
                className="object-cover"
            />
            </div>
            <div className="relative h-40 md:h-64 lg:h-72 rounded-lg overflow-hidden">
            <Image
                src={product.gallery[1]!}
                alt="Gallery 2"
                fill
                className="object-cover"
            />
            </div>
        </div>

        <div className="relative h-80 md:h-full lg:h-[600px] rounded-lg overflow-hidden">
            <Image
            src={product.gallery[2]!}
            alt="Gallery 3"
            fill
            className="object-cover"
            />
        </div>
        </section>
              {/* YOU MAY ALSO LIKE SECTION */}
      <section className="text-center space-y-12 mt-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
          You May Also Like
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: "2", name: "XX99 Mark I", image: headphone1},
            { id: "3", name: "XX59", image: headphones2 },
            { id: "4", name: "ZX9 Speaker", image: headphones3 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-6"
            >

              {/* Image Wrapper */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-[#F1F1F1]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold uppercase">
                {item.name}
              </h3>

              {/* Button */}
              <Link
                href={`/product-details/headphones/${item.id}`}
                className="bg-[#D87D4A] text-white px-6 py-3 uppercase text-sm font-semibold tracking-wide hover:bg-[#FBAF85] transition"
              >
                See Product
              </Link>

            </div>
          ))}
        </div>
      </section>



    </main>
  );
}
