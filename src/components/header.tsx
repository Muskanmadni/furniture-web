

"use client";

import Link from "next/link";
import { SearchOutlined, } from "@ant-design/icons";
import React, { useState } from 'react';
import { MenuIcon, ShoppingCart, UserCircle, } from "lucide-react";





// export default function Header({}: { products : any}) {
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   if (query) {
  //     const filtered =((product: any) =>
  //       product.name.toLowerCase().includes(query)
  //     );
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts([]);
  //   }
  // };

return (
  <nav className="bg-white w-full h-20">
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="block md:hidden">
      <MenuIcon {...{ onClick: toggleMenu }} className="text-black float-right mt-6" />
    </label>
    <Link href={"/"}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-10 pt-20 absolute">Avion</h1>
      </div>
    </Link>
    <div>
      <ul
        className={`md:flex justify-end pt-7 pr-4 text-[20px] items-center gap-4  ${isMenuOpen ? 'flex flex-col absolute top-20 justify-center text-center w-[100%] h-[450px]  bg-slate-950 text-white transition-all ease-in-out duration-300  ' : 'hidden'}`} 
      >
        <Link href="/">
          <li className="hover:text-blue-500">home</li>
        </Link>
        <Link href="/Aboutpage">
          <li className="hover:text-blue-500">about</li>
        </Link>
        <Link href="/cart">
          <li className="hover:text-blue-500">cart</li>
        </Link>
        <li className="hover:text-blue-500">wishlist</li>
        <li>
          <SearchOutlined className="hover:text-blue-500" />
        </li>
        <Link href="/cart">
          <li>
            <ShoppingCart className="hover:text-blue-500" />
          </li>
        </Link>
        <li>
          <UserCircle className="hover:text-blue-500" />
        </li>
      </ul>
    </div>

    {/* Optional: Search Bar (Conditional Rendering) */}
    {/* {isSearchOpen && (
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 z-50 flex items-center justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="Search..."
          
         
        />
      </div>
    )} */}
  </nav>
);
}
export function Header2() {
  return (
    <nav className="bg-gray-50 w-full h-14 hidden lg:block xl:block">
      <ul className="w-full h-16  flex gap-8 text-center  items-center justify-center  text-gray-400">
        <li>All products</li>
        <li>Plant Pot</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
      </ul>
    </nav>
  );
}