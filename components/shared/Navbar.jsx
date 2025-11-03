import React from "react";
import Image from "next/image";
import Cart from "@/public/svg/Cart.svg";
import Link from "next/link";
import Menu from "@/public/svg/Menu.svg";

const Navbar = () => {
  return (
    <nav className="bg-transparent relative h-24">
      <div className="container px-6 py-8 flex items-center justify-between border-b border-gray-1/20">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer md:hidden">
            <Image src={Menu} alt="Menu" width={15} height={15} />
          </div>
          <div className="text-white font-bold text-2xl">audiophile</div>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 ">
          <Link
            href="#"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            HEADPHONES
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            SPEAKERS
          </Link>
          <Link
            href="#"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            EARPHONES
          </Link>
        </div>

        {/* Shopping Cart Icon */}
        <div className="cursor-pointer">
          <Image src={Cart} alt="Shopping Cart" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
