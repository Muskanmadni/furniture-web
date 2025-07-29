import { CheckCircleIcon, RecycleIcon } from "lucide-react";
import { CreditCardOutlined, TruckOutlined } from "@ant-design/icons";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export function BrandDetails() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white text-[#2A254B]">
      <h2 className="text-center text-3xl font-bold tracking-tight">What Makes Our Brand Different</h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <TruckOutlined className="text-[#2A254B] text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Next Day as Standard</h3>
          <p className="text-gray-600 text-sm">Order before 3pm and get your order the next day as standard.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <CheckCircleIcon size={32} className="mx-auto text-[#2A254B] mb-4" />
          <h3 className="font-semibold text-lg mb-2">Made by True Artisans</h3>
          <p className="text-gray-600 text-sm">Hand-crafted goods made with real passion and craftsmanship.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <CreditCardOutlined className="text-[#2A254B] text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Unbeatable Prices</h3>
          <p className="text-gray-600 text-sm">For our material and quality, you won't find better prices anywhere.</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <RecycleIcon size={32} className="mx-auto text-[#2A254B] mb-4" />
          <h3 className="font-semibold text-lg mb-2">Recycled Packaging</h3>
          <p className="text-gray-600 text-sm">We use 100% recycled packaging to reduce our environmental impact.</p>
        </div>
      </div>
    </section>
  );
}
export function Newsletter() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#f9fafb] to-[#f0f2f5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-2xl p-10 text-center">
        <h2 className="text-4xl font-bold text-[#2A254B]">Join the club and get the benefits</h2>
        <p className="text-gray-600 mt-6 text-base">
          Sign up for our newsletter and receive exclusive offers on new<br />
          collections, sales, pop-up stores, and more.
        </p>

        <div className="mt-10 flex justify-center items-center gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
          />
          <Button type="submit" className="rounded-full px-6 py-2 bg-[#2A254B] text-white hover:bg-[#1f1b3a] transition">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}