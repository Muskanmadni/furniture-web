"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import headerImage from "@/images/products/productlistingpageHeader.jpg";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductData } from "@/sanity/sanity.query";
import { CategoryData } from "@/sanity/sanity.query";

interface CategoryData {
  name: string;
  slug: string;
  price: number;
  imageURL: string;
}

interface ProductData {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  category: string | { name: string; slug: string };
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [filters, setFilters] = useState({ category: "", price: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await ProductData();
        const categoryData = await CategoryData();
        setProducts(productData);
        setFilteredProducts(productData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter((product) => {
        if (typeof product.category === "string") {
          return product.category === filters.category;
        } else if (product.category && typeof product.category === "object") {
          return product.category.slug === filters.category;
        }
        return false;
      });
    }

    if (filters.price === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.price === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleFilterReset = () => {
    setFilters({ category: "", price: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative w-full h-52 sm:h-72 md:h-96">
        <Image
          src={headerImage}
          alt="Our Products"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            Our Products
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4 bg-white rounded-lg shadow-md mt-8">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="category"
            className="text-gray-700 font-semibold text-sm"
          >
            Category:
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label
            htmlFor="price"
            className="text-gray-700 font-semibold text-sm"
          >
            Price:
          </label>
          <select
            id="price"
            value={filters.price}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">All</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <button
          onClick={handleFilterReset}
          className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-1 rounded-md font-semibold transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}

        {filteredProducts.map((product) => (
          <Link
            key={product._id}
            href={{
              pathname: "/allproductlistpage",
              query: { product: JSON.stringify(product) },
            }}
            className="group"
            passHref
          >
            <Card className="flex flex-col cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="overflow-hidden rounded-t-lg">
                {product.imageURL && (
                  <Image
                    src={product.imageURL}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </CardHeader>

              <CardTitle>
                <p className="truncate px-4 py-2 font-semibold text-gray-900">
                  {product.name}
                </p>
              </CardTitle>

              <CardDescription className="px-4 text-gray-600 line-clamp-2">
                {product.description}
              </CardDescription>

              <CardFooter className="px-4 py-3 border-t border-gray-200 font-semibold text-indigo-600">
                ${product.price.toFixed(2)}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </main>

      {/* View Products Button */}
      <div className="flex justify-center py-12">
        <Link href="/productListing" passHref>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition">
            View Products
          </button>
        </Link>
      </div>
    </div>
  );
}
