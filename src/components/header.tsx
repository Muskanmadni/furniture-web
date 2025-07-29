"use client";

import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { MenuIcon, ShoppingCart, UserCircle } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white w-full shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#2A254B]">
          Avion
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#2A254B] text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Aboutpage">About</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/wishlistpage">Wishlist</Link></li>
          <li><SearchOutlined className="text-xl cursor-pointer" /></li>
          <li><Link href="/cart"><ShoppingCart className="w-5 h-5" /></Link></li>
          <li><Link href="/accountpage"><UserCircle className="w-5 h-5" /></Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          <MenuIcon className="w-6 h-6 text-[#2A254B]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2A254B] text-white py-6 px-6 space-y-4 text-center transition-all duration-300 ease-in-out">
          <Link href="/" className="block hover:text-blue-300">Home</Link>
          <Link href="/Aboutpage" className="block hover:text-blue-300">About</Link>
          <Link href="/cart" className="block hover:text-blue-300">Cart</Link>
          <Link href="/wishlistpage" className="block hover:text-blue-300">Wishlist</Link>
          <SearchOutlined className="block mx-auto text-white text-xl" />
          <Link href="/cart"><ShoppingCart className="mx-auto w-5 h-5" /></Link>
          <Link href="/accountpage"><UserCircle className="mx-auto w-5 h-5" /></Link>
        </div>
      )}
    </nav>
  );
}

export function Header2() {
  return (
    <nav className="bg-gray-50 w-full border-b hidden lg:block">
      <ul className="max-w-7xl mx-auto flex justify-center items-center gap-10 text-sm text-gray-600 py-4 tracking-wide">
        <li className="cursor-pointer hover:text-[#2A254B]">All Products</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Plant Pots</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Ceramics</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Tables</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Chairs</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Crockery</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Tableware</li>
        <li className="cursor-pointer hover:text-[#2A254B]">Cutlery</li>
      </ul>
    </nav>
  );
}

