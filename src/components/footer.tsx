'use client';

import { FacebookFilled, InstagramFilled, LinkedinFilled, PinterestFilled, SkypeFilled, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // your signup logic or alert
  };

  return (
    <footer className="bg-[#2A254B] text-gray-300 px-8 md:px-20 py-16">
      <div className="flex flex-wrap justify-between gap-12 max-w-7xl mx-auto">
        {/* Menu */}
        <div className="w-full sm:w-auto">
          <h2 className="text-white text-xl font-semibold mb-5">Menu</h2>
          <nav className="flex flex-col space-y-3 text-gray-400 hover:text-white transition">
            <Link href={'/'} className="hover:underline">New Arrivals</Link>
            <Link href={'/'} className="hover:underline">Best sellers</Link>
            <Link href={'/'} className="hover:underline">Recently viewed</Link>
            <Link href={'/'} className="hover:underline">Popular this week</Link>
            <Link href={'/'} className="hover:underline">All Products</Link>
          </nav>
        </div>

        {/* Categories */}
        <div className="w-full sm:w-auto">
          <h2 className="text-white text-xl font-semibold mb-5">Categories</h2>
          <nav className="flex flex-col space-y-3 text-gray-400 hover:text-white transition">
            <Link href={'/'} className="hover:underline">Crockery</Link>
            <Link href={'/'} className="hover:underline">Furniture</Link>
            <Link href={'/'} className="hover:underline">Homeware</Link>
            <Link href={'/'} className="hover:underline">Plant pots</Link>
            <Link href={'/'} className="hover:underline">Chairs</Link>
          </nav>
        </div>

        {/* Company */}
        <div className="w-full sm:w-auto">
          <h2 className="text-white text-xl font-semibold mb-5">Our Company</h2>
          <nav className="flex flex-col space-y-3 text-gray-400 hover:text-white transition">
            <Link href='/about' className="hover:underline">About us</Link>
            <Link href={'/'} className="hover:underline">Vacancies</Link>
            <Link href={'/'} className="hover:underline">Contact us</Link>
            <Link href={'/'} className="hover:underline">Privacy</Link>
            <Link href={'/'} className="hover:underline">Return policy</Link>
          </nav>
        </div>

        {/* Mailing List */}
        <div className="w-full sm:w-auto text-white max-w-xs">
          <h2 className="text-xl font-semibold mb-5">Join our mailing list</h2>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              required
              className="flex-grow h-12 px-4 rounded-md bg-transparent border border-gray-600 placeholder-gray-500 text-white focus:outline-none focus:border-indigo-500 transition"
            />
            <button
              type="submit"
              className="h-12 w-full sm:w-auto px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-700 my-10 max-w-7xl mx-auto" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 max-w-7xl mx-auto gap-4">
        <p>© 2022 Avion LTD</p>
        <div className="flex space-x-6 text-xl text-gray-400 hover:text-white transition">
          <Link href={'/'}><LinkedinFilled /></Link>
          <Link href={'/'}><FacebookFilled /></Link>
          <Link href={'/'}><InstagramFilled /></Link>
          <Link href={'/'}><SkypeFilled /></Link>
          <Link href={'/'}><TwitterOutlined /></Link>
          <Link href={'/'}><PinterestFilled /></Link>
        </div>
      </div>
    </footer>
  );
};
