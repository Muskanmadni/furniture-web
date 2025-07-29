"use client";

import { useRouter } from "next/navigation";

export default function PageOrder() {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push("/"); // Change this to your shop or home route
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-md w-full text-center p-10 bg-white rounded-3xl shadow-xl border border-indigo-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-indigo-900">
          🎉 Thank You for Your Order!
        </h1>
        <p className="text-indigo-700 mb-8 text-lg sm:text-xl">
          We appreciate your purchase. Your order is being processed and will be shipped soon.
        </p>
        <button
          onClick={handleContinueShopping}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold py-3 px-12 rounded-full shadow-lg transition transform hover:-translate-y-1 active:scale-95"
          aria-label="Continue Shopping"
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
}
