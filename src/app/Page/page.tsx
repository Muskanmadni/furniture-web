"use client"
import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import cartimage1 from "@/images/products/Product Image (1).png"
import cartimage2 from "@/images/products/aboutpageImage2.png"
import { PlusOutlined } from "@ant-design/icons";
import { createClient, groq } from 'next-sanity';

import sanityClient from "@/sanity/sanity.client";


import axios from "axios";

import type { ClientConfig } from 'next-sanity';

// Initialize Sanity client







interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image:string
}

const Page: React.FC = () => {
  const [sanityItems, setSanityItems] = useState<CartItem[]>([]);
  const [mockApiItems, setMockApiItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const SanityClient: ClientConfig = {
      projectId: "6qsxvofr",
      dataset: "production",
      apiVersion: "2024-12-26",
      useCdn: false
    }

    const query = groq`
    *[_type == "popularproductList"] {
      _id,
      prduct,
      price,
      quantity,
      "imageURL": image.asset->url
    }
    `;

    sanityClient.fetch(query)
      .then((data) => {
        setSanityItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data from Sanity');
        setLoading(false);
      });



    
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const combinedItems = [...sanityItems, ...mockApiItems];

  const removeItem = (id: string) => {
    setSanityItems(sanityItems.filter(item => item._id !== id));
    setMockApiItems(mockApiItems.filter(item => item._id !== id));
  };

  const increaseQuantity = (id: string) => {
    setSanityItems(sanityItems.map(item => item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
    setMockApiItems(mockApiItems.map(item => item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id: string) => {
    setSanityItems(sanityItems.map(item => item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    setMockApiItems(mockApiItems.map(item => item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalPrice = combinedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
        {/* Product Section */}
        <div className="border-2 p-4">
          <h1 className="text-lg font-semibold">Product</h1>
          <div id="cart-container" className="">
          {combinedItems.map((item) => (
            <div key={item._id} className="flex items-start justify-between mt-8">
              <div className="flex">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  width={112}
                  height={112}
                  className="w-28 h-28 object-cover"
                />
                <div className="ml-6">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="mt-2 font-semibold">£{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <button onClick={() => increaseQuantity(item._id)}>increaseQuantity</button>
                <button onClick={() => decreaseQuantity(item._id)}>-</button>
                <button onClick={() => removeItem(item._id)}>Remove</button>
                
              </div>
            </div>
          ))}
          </div>
          <div className="flex items-start justify-between mt-8">
            
            
          </div>
        </div>
        {/* Total Section (Hidden on Small Screens) */}
        <div className="border-2 p-4 sm:hidden lg:block">
          <h1 className="text-lg font-semibold">Total</h1>
          <p className="mt-10 text-lg font-medium">Total: ${totalPrice.toFixed(2)}</p>
          <p className="mt-40 text-lg font-medium"></p>
        </div>
      </div>
      {/* Subtotal Section */}
      <div className="mt-10 text-center lg:text-right">
        <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
        <h1 className="inline text-xl sm:text-2xl font-semibold"></h1>
        <p className="text-sm mt-4"></p>
        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white"> Go to checkout</button>
      </div>
      {  (
        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">Tracking Information</h1>
          <p className="inline text-xl sm:text-2xl font-semibold"></p>
        </div>
      )}
    </div>
  );
};

export default Page;
// return (
//   <div>
//     <h1>Your Cart</h1>
//     <div id="cart-container">
//       {combinedItems.map((item) => (
//         <div key={item._id} className="cart-item">
//           <h2>{item.name}</h2>
//           <p>Price: {item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => increaseQuantity(item._id)}>+</button>
//           <button onClick={() => decreaseQuantity(item._id)}>-</button>
//           <button onClick={() => removeItem(item._id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//     <h2>Total: ${totalPrice.toFixed(2)}</h2>
//   </div>
// );