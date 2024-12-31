"use client"
import { useEffect,useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import cartimage1 from "@/images/products/Product Image (1).png"
import cartimage2 from "@/images/products/aboutpageImage2.png"
import { PlusOutlined } from "@ant-design/icons";


const Cart= () => {
    const [quantity, setQuantity] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [total1, setTotal1] = useState(85);
    const [total2, setTotal2] = useState(85);
    const [subtotal, setSubtotal] = useState(170);
    const [shipmentCharges, setShipmentCharges] = useState(0); // Initial shipment charges
    const [trackingInfo, setTrackingInfo] = useState(''); // Initial tracking information
    const [showTracking, setShowTracking] = useState(false); // State to manage tracking info visibility
    const itemPrice = 85;
    const secondItemPrice = 85;
    useEffect(() => {
      const fetchData = async () => {
        try {
          //cart api update
          const response = await fetch('https://shopifyvolodimir-kudriachenkov1.p.rapidapi.com/updateCheckout', {
            method: 'POST',
            headers: {
              'x-rapidapi-key': '5ccd12eec0msh8c040806b774d08p1bfa95jsn0afc0d9cec6c',
              'x-rapidapi-host': 'shopifyvolodimir-kudriachenkov1.p.rapidapi.com',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: null,
          });
          const result = await response.json();
          // Assuming the API response contains quantity, total, and subtotal
          setQuantity(result.quantity);
          setQuantity2(result.quantity2);
          setTotal1(result.total1);
          setTotal2(result.total2);
          setSubtotal(result.subtotal);
          setShipmentCharges(result.shipmentCharges);
          setTrackingInfo(result.trackingInfo);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    // shipment charges
    useEffect(() => {
        const fetchShipmentCharges = async () => {
          try {
            const response = await fetch('/api/shipment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-api-key': '5ccd12eec0msh8c040806b774d08p1bfa95jsn0afc0d9cec6c',
                'x-rapidapi-host': 'Shippostefan-skliarovV1.p.rapidapi.com',
              },
            });
            const result = await response.json();
            console.log('Shipment charges fetched:', result); // Debugging statement111
          
          } catch (error) {
            console.error('Error fetching shipment charges:', error);
          }
          fetchShipmentCharges();
        };
        const totalQuantity = quantity + quantity2;
        console.log('Total quantity:', totalQuantity); // Debugging statement
        if (totalQuantity > 5) {
          setShipmentCharges(200);
        } else {
          setShipmentCharges(100); // Reset shipment charges if quantity is 5 or less
        }
    }, [quantity, quantity2]);

      useEffect(() => {
        const newTotal1 = quantity * itemPrice;
        const newTotal2 = quantity2 * secondItemPrice;
        const newSubtotal = newTotal1 + newTotal2 + shipmentCharges;
        console.log('Updating totals:', { newTotal1, newTotal2, newSubtotal }); // Debugging statement
        setTotal1(newTotal1);
        setTotal2(newTotal2);
        setSubtotal(newSubtotal);
    }, [quantity, quantity2 , shipmentCharges]);

    // quanitity change function
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Number(e.target.value)); // Ensure the quantity is at least 1
        setQuantity(value);
    };
    const handleQuantity2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Number(e.target.value)); // Ensure the quantity is at least 1
        setQuantity2(value);
    };

    const handleCheckoutClick = () => {
        setShowTracking(true);
      };
    
      useEffect(() => {
        let intervalId:NodeJS.Timeout;
        if (showTracking) {
          intervalId = setInterval(async () => {
            try {
                console.log('Fetching tracking info...'); // Debugging statement
              const response = await fetch('https://shippostefan-skliarovv1.p.rapidapi.com/getTrackingStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key': '5ccd12eec0msh8c040806b774d08p1bfa95jsn0afc0d9cec6c',
                    'x-rapidapi-host': 'Shippostefan-skliarovV1.p.rapidapi.com',
                },
              });
              const result = await response.json();
              console.log('Tracking API response:', result); // Debugging statement
              if (result.trackingStatus) {
                setTrackingInfo(result.trackingStatus);
              } else {
                console.error('Tracking status not found in response:', result);
                setTrackingInfo('No tracking status available');
              }
        
            } catch (error) {
              console.error('Error fetching tracking info:', error);
            }
          }, 100); // Fetch tracking info time
        }
    
        return () => {
            if (intervalId) {
              clearInterval(intervalId);
            }
        };
    }, [showTracking]);

  return (
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
            {/* Product Section */}
            <div className="border-2 p-4">
                <h1 className="text-lg font-semibold">Product</h1>
                <div className="flex items-start justify-between mt-8">
                    <div className="flex">
                        <Image src={cartimage1}  alt="image" className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"></Image>
                        <div className="ml-6">
                            <h1 className="text-base sm:text-lg font-medium">Graystone vase</h1>
                            <p className="text-sm mt-2">A timeless ceramic vase with a tri-color grey glaze.</p>
                            <p className="mt-2 text-base font-semibold">£85</p>
                        </div>
                        </div>
                        {/* Quantity Section */}
                        <div className="flex flex-col items-center">
                            <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                            <p className="mt-2 text-lg font-medium "><input  type="number" value={quantity} onChange={handleQuantityChange} className="text-center bg-gray-200 border-none focus:outline-none focus:border-none" /></p>
                        </div>
                        </div>
                        <div className="flex items-start justify-between mt-8">
                            <div className="flex">
                                <Image src={cartimage2} alt="Product 2" className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"></Image>
                                <div className="ml-6">
                                    <h1 className="text-base sm:text-lg font-medium">Basic white vase</h1>
                                    <p className="text-sm mt-2">Beautiful and simple, this is one for the classics.</p>
                                    <p className="mt-2 text-base font-semibold">£85</p>
                                </div>
                                </div>
                                {/* Quantity Section */}
                                <div className="flex flex-col items-center ">
                                    <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                                    <p className="mt-2 text-lg font-medium "><input type="number" value={quantity2} onChange={handleQuantity2Change} className="text-center bg-gray-200 border-none focus:outline-none focus:border-none  "/></p>
                                </div>
                            </div>
                        </div>
                        {/* Total Section (Hidden on Small Screens) */}
                        <div className="border-2 p-4 sm:hidden lg:block">
                            <h1 className="text-lg font-semibold">Total</h1>
                            <p className="mt-10 text-lg font-medium">£{total1}</p>
                            <p className="mt-40 text-lg font-medium">£{total2}</p>
                        </div>
                    </div>
                    {/* Subtotal Section */}
                    <div className="mt-10 text-center lg:text-right">
                        <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
                        <h1 className="inline text-xl sm:text-2xl font-semibold">£{subtotal}</h1>
                        <p className="text-sm mt-4">Shipment charges £{shipmentCharges}</p>
                        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white" onClick={handleCheckoutClick}> Go to checkout</button>
                    </div>
                    {showTracking && (
                         <div className="mt-10 text-center lg:text-right">
                            <h1 className="inline text-lg sm:text-xl font-medium mr-4">Tracking Information</h1>
                            <p className="inline text-xl sm:text-2xl font-semibold">{trackingInfo}</p>
                        </div>
                    )}
                </div>
    );
};
export default Cart;

  
