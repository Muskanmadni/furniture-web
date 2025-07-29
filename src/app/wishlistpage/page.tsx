"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        const parsedWishlist: Product[] = JSON.parse(storedWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
        setWishlist([]);
      }
    }
  }, []);

  const handleRemoveItem = (productId: string) => {
    const updatedwishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedwishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedwishlist));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 sm:px-10 lg:px-32 pt-14 pb-20 text-[#2A254B]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Your Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex items-center space-x-6 w-full">
                <Image
                  src={item.imageURL}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-xl w-28 h-28 object-cover"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-md mt-1">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-500 font-medium hover:text-red-600 mt-4 sm:mt-0 sm:ml-4"
              >
                ✕ Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg mb-6">Your wishlist is empty.</p>
          <Link href="/productlist">
            <button className="bg-[#2A254B] text-white px-6 py-3 rounded-full text-sm hover:bg-[#1e1a35] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
