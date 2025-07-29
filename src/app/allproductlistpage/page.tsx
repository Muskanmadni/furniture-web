"use client";
import { CeramicProducts } from "@/components/ceramicproduct";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
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

export default function AllProductListPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
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
      const productParam = searchParams.get("product");
      if (productParam) {
        setProduct(JSON.parse(productParam));
      }
    } catch (err) {
      setError("Error loading product");
      console.error("Error parsing product:", err);
    }
  }, [searchParams]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // min 1
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

  if (error) return <div className="text-red-500 p-4 text-center">{error}</div>;
  if (!product) return <div className="p-4 text-center text-gray-500">Loading...</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
      <Card className="flex flex-col md:flex-row gap-10 p-6 rounded-lg shadow-lg bg-white">
        <CardHeader className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
          {product.imageURL && (
            <Image
              width={450}
              height={550}
              src={product.imageURL}
              alt={product.name}
              className="w-full h-full object-cover"
              priority
            />
          )}
        </CardHeader>

        <div className="flex flex-col justify-between md:w-1/2">
          <CardTitle className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</CardTitle>
          <p className="text-indigo-600 text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>

          <CardDescription className="text-gray-600 mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Description</h2>
            <p className="leading-relaxed">{product.description}</p>
          </CardDescription>

          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-lg font-semibold text-gray-700">
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

          <CardDescription className="text-gray-700 mb-8">
            <span className="font-semibold">Features:</span> {product.features}
          </CardDescription>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-[180px] bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition-shadow shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </Card>

      <div className="mt-14">
        <CeramicProducts />
      </div>
    </section>
  );
}
