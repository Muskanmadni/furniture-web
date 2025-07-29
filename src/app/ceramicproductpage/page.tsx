"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

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
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductContent />
    </Suspense>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const productParam = searchParams.get("product");
      if (productParam) {
        const parsedProduct: Product = JSON.parse(productParam);
        setProduct(parsedProduct);

        const wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
        const exists = wishlist.some((item) => item._id === parsedProduct._id);
        setIsWishlisted(exists);
      }
    } catch (err) {
      setError("Error loading product data");
      console.error("Error parsing product:", err);
    }
  }, [searchParams]);

  const handlewishlist = () => {
    if (!product) return;

    const wishlist = localStorage.getItem("wishlist") || "[]";
    const wishlistItems: Product[] = JSON.parse(wishlist);
    const index = wishlistItems.findIndex((item) => item._id === product._id);

    if (index > -1) {
      wishlistItems.splice(index, 1);
      setIsWishlisted(false);
    } else {
      wishlistItems.push(product);
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (!product) return;

    const cart = localStorage.getItem("cart") || "[]";
    const cartItems: Product[] = JSON.parse(cart);

    const index = cartItems.findIndex((item) => item._id === product._id);

    if (index > -1) {
      cartItems[index].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    router.push("/cart");
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="p-4">Loading product details...</div>;

  return (
    <section>
      <Card className="flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col md:flex-row w-full">
          {/* Image */}
          <CardHeader className="w-full md:w-1/2 h-auto">
            {product.imageURL && (
              <Image
                width={305}
                height={375}
                src={product.imageURL}
                alt="product image"
                className="w-full h-auto object-cover"
              />
            )}
          </CardHeader>

          {/* Details */}
          <div className="flex flex-col md:w-1/2 mt-10">
            <CardTitle className="px-4 md:px-10 py-6 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
              <p className="py-2 text-lg md:text-xl">${product.price}</p>
            </CardTitle>

            <CardDescription className="text-[#505977] text-sm md:text-base ml-10">
              <h1 className="font-semibold">Description</h1>
              <p className="my-4 md:my-6">{product.description}</p>

              <div className="flex items-center mt-4">
                <label htmlFor="quantity" className="mr-4 text-lg font-medium">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-500"
                  min={1}
                />
              </div>
            </CardDescription>

            <CardDescription className="text-[#505977] text-sm md:text-base ml-10 mb-4">
              <span className="font-semibold">Features:</span> {product.features}
            </CardDescription>

            <div className="flex items-center gap-4 ml-10">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white rounded"
              >
                Add to cart
              </button>
              <Heart
                onClick={handlewishlist}
                className={`cursor-pointer w-6 h-6 transition-all duration-200 ${
                  isWishlisted ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
