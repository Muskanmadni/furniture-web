

"use client";

import Link from "next/link";
import { SearchOutlined, } from "@ant-design/icons";
import React, { useState } from 'react';
import { MenuIcon, ShoppingCart, UserCircle,} from "lucide-react";


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isSearchOpen, SetIsSearchOpen] = useState(false);
  const Searchbar = ()=> {
    SetIsSearchOpen(!isSearchOpen);
  };
    return(
        <nav className="bg-white w-full h-20 navbar">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
                <MenuIcon className="text-black "/>
            </label>
            <label className="logo">Avion</label>
            <ul className={`buttons justify-center  ${isMenuOpen ? 'show' : ''}`}>
                <Link href={"/"}>
                <li className="navbutton">home</li>
                </Link>
                
                <Link href={"Aboutpage"}>
                <li className="navbutton">about</li>
                </Link>
                <Link href={'cart'}>
                <li className="navbutton">cart</li>
                </Link>
                <li className="navbutton">wishlist</li>
                <li>
                    <label htmlFor="searched" className="searchbtn " onClick={Searchbar}>
                        <SearchOutlined/>
                    </label> 
                </li>
                <Link href={"cart"}>
                <li>
                    <label htmlFor="searched" className="searchbtn  " onClick={Searchbar}>
                        <ShoppingCart/>
                    </label>
                </li>
                </Link>
                <li>
                    <label htmlFor="searched" className="searchbtn " onClick={Searchbar}>
                        <UserCircle/>
                    </label>
                </li>
            </ul>
        </nav>
    )
};
export function Header2(){
    return(
        <nav className="bg-gray-50 w-full h-14">
            <ul className="w-full h-16 flex items-center justify-center gap-10 text-gray-400 header2 "> 
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
    )
}