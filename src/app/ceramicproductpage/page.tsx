"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



import { Suspense } from 'react';
import { Heart } from 'lucide-react';







interface Product {
  _id: string;
  imageURL: string;
  name: string
  price: number;
  description: string;
  quantity: number;

  features:string
}

export default function ProductList() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductContent />
    </Suspense>
  )
}

function ProductContent() {
  const searchParams = useSearchParams()
  const [quantity, setQuantity] = useState<number>(1);

  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();

  useEffect(() => {
    try {
      const productParam = searchParams.get("product");
      if (productParam) {
        const parsedProduct = JSON.parse(productParam);
        setProduct(parsedProduct);
      }
    } catch (err) {
      setError("Error loading product data");
      console.error("Error parsing product:", err);
    }
  }, [searchParams]);

  const handlewishlist = () => {
    if (product) {
      const wishlist = localStorage.getItem("wishlist") || "[]";
      const wishlistItems: Product[] = JSON.parse(wishlist);
  
      // Check if the product already exists in the wishlist
      const existingItemIndex = wishlistItems.findIndex((item) => item._id === product._id);
       wishlistItems.push({ ...product });
      if (existingItemIndex > 1) {
        // If product exists, remove it from the wishlist
        wishlistItems.splice(existingItemIndex, 1);
        
        // Otherwise, add the new product to the wishlist
        wishlistItems.push(product);
      }
  
      // Save the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  
      // Navigate to the wishlist page
      router.push("/wishlistpage");
    } else {
      setError("Product not found");
    }
  };

  const handleQuantityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (product) {
      const cart = localStorage.getItem("cart") || "[]";
      const cartItems: Product[] = JSON.parse(cart);

      // Check if the product already exists in the cart
      const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

      if (existingItemIndex > -1) {
        // If product exists, update the quantity
        cartItems[existingItemIndex]._id += quantity;
      } else {
        // Otherwise, add the new product to the cart with the selected quantity
        cartItems.push({ ...product, quantity });
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Navigate to the Cart page
      router.push("/cart");
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="p-4">Loading product details...</div>;


  return (
    <>
      <section>

        <Card className="flex-col md:flex-row gap-8 items-center ">
          <div className="flex flex-col md:flex-row w-full">
            <CardHeader className="w-full md:w-1/2 h-auto">
              {product.imageURL && <Image width={305} height={375} src={product.imageURL} alt="image" className="w-full h-auto object-cover"></Image>}
            </CardHeader>
            <div className="flex flex-col md:w-1/2 mt-10">
              <CardTitle className='px-4 md:px-10 py-6 flex flex-col justify-center'>
                <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
                <p className="py-2 text-lg md:text-xl">{product.price}</p>
              </CardTitle>
              <CardDescription className="text-[#505977] text-sm md:text-base ml-10">
                <h1 className="font-semibold">Description</h1>
                <p className="my-4 md:my-6 ">{product.description}</p>
                <div className="flex items-center ml-10">
                  <label htmlFor="quantity" className="mr-4 text-lg font-medium">
                    Quantity:
                  </label>
                  <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-500" min={1} />
                </div>
              </CardDescription>
              <CardDescription className="text-[#505977] text-sm md:text-base ml-10 gap-[200px] mb-">Features: {product.features}

            </CardDescription>
              <button onClick={handleAddToCart} className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 ml-10">
                Add to cart
              </button>
              <button>
                <Heart className="mt-4 md:mt-0 ml-10" onClick={handlewishlist} />
              </button>

            </div>
          </div>
        </Card>

      </section>
    </>

  )
}