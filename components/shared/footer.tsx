import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-14">
      <div className="container mx-auto px-6 md:px-16 space-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <h2 className="text-xl font-bold lowercase tracking-wider">
            audiophile
          </h2>

          {/* Nav Links */}
          <nav className="flex gap-6 text-sm font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#D87D4A]">
              Home
            </Link>
            <Link href="/headphones" className="hover:text-[#D87D4A]">
              Headphones
            </Link>
            <Link href="/speakers" className="hover:text-[#D87D4A]">
              Speakers
            </Link>
            <Link href="/earphones" className="hover:text-[#D87D4A]">
              Earphones
            </Link>
          </nav>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 text-gray-400 text-sm leading-relaxed">
          <p className="md:w-1/2">
            Audiophile is an all-in-one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we’re open 7 days a week.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg justify-start md:justify-end">
            <Link
              href="#"
              className="hover:text-[#D87D4A] transition-colors duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="hover:text-[#D87D4A] transition-colors duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="hover:text-[#D87D4A] transition-colors duration-200"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-gray-500 text-xs md:text-sm">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
