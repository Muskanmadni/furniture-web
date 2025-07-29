import { Button } from "./ui/button";
import heroImage from "@/images/products/herosectionImage.png";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-[#2A254B] text-white py-16 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            The furniture brand for the future, <br className="hidden sm:block" />
            with timeless designs
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with elegant fonts, tasteful colors, and beautiful
            digital presentation using modern web technologies.
          </p>

          <Link href="/productlist">
            <Button className="bg-white text-[#2A254B] hover:bg-gray-100 font-medium transition px-6 py-2 rounded-md">
              View Products
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="hidden xl:block">
          <Image
            src={heroImage}
            alt="Hero Section Image"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
