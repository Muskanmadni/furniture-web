"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CardHeader, CardFooter, CardTitle, Card, CardDescription } from "./ui/card";
import { ProductData } from "@/sanity/sanity.query";

interface CeramicProduct {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
}

export function CeramicProducts() {
  const [products, setProducts] = useState<CeramicProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      const ceramicData = await ProductData();
      setProducts(ceramicData);
    }
    fetchData();
  }, []);

  // Select specific product indices manually (if required)
  const selectedIndices = [16, 5, 13, 15];
  const selectedProducts = selectedIndices
    .map((index) => products[index])
    .filter(Boolean);

  return (
    <section className="py-16 px-4 md:px-12 text-[#2A254B] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">New Chairs</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {selectedProducts.map((product) => (
            <Link
              key={product._id}
              href={{
                pathname: "/ceramicproductpage",
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

        {/* View Collection Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/productListing">
            <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-3 rounded-md hover:bg-gray-100 transition">
              View Collection
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
