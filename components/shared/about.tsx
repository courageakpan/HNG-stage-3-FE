import Image from "next/image";
import React from "react";
import about from "@/public/images/Bitmap (2).png"

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
        </h2>
        <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
          Located at the heart of New York City, Audiophile is the premier store for
          high end headphones, earphones, speakers, and audio accessories. We have
          a large showroom and luxury demonstration rooms available for you to browse
          and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your
          portable audio equipment.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 w-full">
        <Image
          src={about.src}
          alt="Man listening to music with headphones"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default About;
