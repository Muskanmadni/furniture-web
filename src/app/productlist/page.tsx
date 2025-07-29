'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Suspense } from "react";

interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  features: string;
}

export default function ProductList() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading products...</div>}>
      <ProductContent />
    </Suspense>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const productParam = searchParams.get('product');
      if (productParam) {
        const parsedProduct = JSON.parse(productParam);
        setProduct(parsedProduct);
      }
    } catch (err) {
      setError('Error loading product data');
      console.error('Error parsing product:', err);
    }
  }, [searchParams]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // Min 1
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (product) {
      const cart = localStorage.getItem("cart") || "[]";
      const cartItems: Product[] = JSON.parse(cart);

      const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push({ ...product, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
      router.push("/cart");
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="p-4 text-center text-gray-500">Loading product details...</div>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Card className="flex flex-col md:flex-row gap-12 items-start md:items-center shadow-lg rounded-lg border border-gray-200">
        {/* Product Image */}
        <CardHeader className="w-full md:w-1/2 rounded-lg overflow-hidden">
          {product.imageURL && (
            <Image
              src={product.imageURL}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          )}
        </CardHeader>

        {/* Product Details */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6 px-4 md:px-0">
          <CardTitle>
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mt-1 text-indigo-600 text-2xl font-semibold">${product.price.toFixed(2)}</p>
          </CardTitle>

          <CardDescription>
            <h2 className="text-gray-700 font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </CardDescription>

          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="font-semibold text-gray-700">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <CardDescription>
            <h2 className="text-gray-700 font-semibold mb-2">Features</h2>
            <p className="text-gray-600">{product.features}</p>
          </CardDescription>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition w-full md:w-44 self-start shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </section>
  );
}
