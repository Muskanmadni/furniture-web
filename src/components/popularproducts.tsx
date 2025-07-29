"use client";

import { useState, useEffect } from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ProductData } from "@/sanity/sanity.query";

interface CeramicData {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  features: string;
  dimensions: string;
}

export function PopularProductlist() {
  const [popularProducts, setPopularProducts] = useState<CeramicData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ProductData();
      setPopularProducts(data);
    }
    fetchData();
  }, []);

  const selectedProducts = [3, 2, 8]
    .map(index => popularProducts[index])
    .filter(Boolean); // removes undefined values

  return (
    <section className="py-16 px-6 md:px-12 text-[#2A254B] bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Popular Products</h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {selectedProducts.map((product) => (
            <Link
              key={product._id}
              href={{
                pathname: "/productlist",
                query: { product: JSON.stringify(product) },
              }}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <Card className="shadow-md hover:shadow-xl border-none rounded-xl overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.imageURL}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />
                </CardHeader>
                <div className="p-4">
                  <CardTitle className="truncate">{product.name}</CardTitle>
                  <CardDescription className="hidden">{product.description}</CardDescription>
                  <CardFooter className="pt-2 text-lg font-medium">
                    ${product.price}
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/productListing">
            <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-3 rounded-md hover:bg-gray-100 transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
