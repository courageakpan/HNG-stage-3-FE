import React from "react";
import Image from "next/image";
import Cart from "@/public/svg/Cart.svg";
import Link from "next/link";
import Menu from "@/public/svg/Menu.svg";
const Navbar = () => {
  return (
    <nav className="bg-black relative h-24 z-50">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between border-b border-gray-700">
        {/* Left: Logo + Menu Icon */}
        <div className="flex items-center gap-4">
          <div className="cursor-pointer md:hidden">
            <Image src={Menu} alt="Menu" width={15} height={15} />
          </div>
          <Link href="/" className="text-white font-bold text-2xl lowercase tracking-wider">
            audiophile
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/category/headphones"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            Headphones
          </Link>
          <Link
            href="/category/speakers"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            Speakers
          </Link>
          <Link
            href="/category/earphones"
            className="text-white text-sm font-bold tracking-wider uppercase hover:text-[#D87D4A] transition-colors"
          >
            Earphones
          </Link>
        </div>

        {/* Right: Shopping Cart Icon (Clickable) */}
        <Link href="/cart" className="cursor-pointer">
          <Image src={Cart} alt="Shopping Cart" width={24} height={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;