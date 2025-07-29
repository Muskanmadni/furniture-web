"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "../../../sanityClient";
import Link from "next/link";

interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotalPrice] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cash",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const parsedCart: Product[] = JSON.parse(cart).map((item: Product) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCartItems(parsedCart);
      calculateTotalPrice(parsedCart);
    }
  }, []);

  const calculateTotalPrice = (items: Product[]) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent zero or negative quantity
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const handleCheckout = async () => {
    const { name, email, phone, address, payment } = customerInfo;
    if (!name || !email || !phone || !address || !payment) {
      alert("Please fill out all customer information fields.");
      return;
    }

    const orderData = {
      _type: "order",
      name,
      email,
      address,
      phone,
      payment,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("cart");
      router.push("/pageorder");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-16 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Your Shopping Cart</h1>

      {cartItems.length === 0 && (
        <p className="text-center text-gray-600 text-lg mt-20">Your cart is empty!</p>
      )}

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center md:items-start justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4 w-full md:w-2/3">
              <Image
                src={item.imageURL}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-indigo-600 font-semibold text-lg mt-1">£{item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-3 mt-4 md:mt-0 w-full md:w-1/3">
              <div className="flex items-center space-x-2">
                <label htmlFor={`quantity-${item._id}`} className="text-sm font-medium">
                  Quantity:
                </label>
                <input
                  id={`quantity-${item._id}`}
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, Number(e.target.value))
                  }
                  className="w-16 px-2 py-1 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="font-semibold">Total: £{(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-600 hover:text-red-800 font-semibold transition"
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <>
          <div className="mt-8 flex justify-between items-center border-t pt-6">
            <h2 className="text-2xl font-bold">Total Amount: £{total.toFixed(2)}</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md shadow-md transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}

      {showForm && (
        <div className="mt-12 max-w-xl mx-auto bg-gray-50 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Customer Information</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheckout();
            }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+1234567890"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your shipping address"
              />
            </div>

            <div>
              <label htmlFor="payment" className="block mb-1 font-medium">
                Payment Method
              </label>
              <select
                id="payment"
                name="payment"
                value={customerInfo.payment}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>
            <Link href="/pageorder"><button type="submit"className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition">Submit Order</button></Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
