import React from "react";
import Image from "next/image";
import Link from "next/link";

import headphones from "@/public/images/Group 5.png";
import speakers from "@/public/images/image-removebg-preview(38).png";
import earphones from "@/public/images/Group 5.png";



const categories = [
  {
    title: "HEADPHONES",
    image: headphones,
    link: "/category/headphones",
  },
  {
    title: "SPEAKERS",
    image: speakers,
    link: "/category/speakers",
  },
  {
    title: "EARPHONES",
    image: earphones,
    link: "/category/earphones",
  },
];

const Production: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-32 flex flex-col md:flex-row justify-center items-center gap-16">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-end w-[327px] h-[180px] md:w-[350px] md:h-[200px] hover:scale-105 transition-transform duration-300"
        >
          {/* Product image */}
          <div className="absolute -top-24 flex justify-center">
            <Image
              src={category.image}
              alt={category.title}
              width={180}
              height={180}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Product title and link */}
          <div className="flex flex-col items-center mt-20 mb-6 space-y-2">
            <h3 className="text-black font-bold tracking-wider text-[15px]">
              {category.title}
            </h3>
            <Link
              href={category.link}
              className="text-[13px] text-gray-500 uppercase tracking-widest flex items-center hover:text-[#D87D4A] transition-colors"
            >
              Shop
              <span className="text-[#D87D4A] text-lg ml-2">›</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Production;