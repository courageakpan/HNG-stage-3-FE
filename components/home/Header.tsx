import Image from "next/image";
import React from "react";
import Button from "@/components/shared/Button";

const Header = () => {
  return (
    <div className="h-[70vh] md:h-[90vh] bg-[url('/images/Header_Bg.png')] md:bg-[url('/images/Header_Bg_2.png')] bg-cover bg-center max-md:bg-black/20 max-md:bg-blend-darken relative">
  

      <div className="container flex items-center max-md:justify-center h-[calc(100%-96px)]">
        <div className="flex flex-col justify-center max-md:items-center space-y-6 ">
          <p className="text-gray-1/60 text-xs md:text-sm font-normal tracking-[10px] uppercase">
            NEW PRODUCT
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p className="text-white text-sm md:text-base font-normal leading-relaxed max-w-sm md:max-w-md max-md:text-center">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div>
            <Button variant="orange">SEE PRODUCT</Button>
          </div>
        </div>

        {/* <div>
          <Image
            src="/images/Header_Bg.png"
            alt="Header Background"
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;