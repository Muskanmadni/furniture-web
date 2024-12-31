

import { CheckCircleIcon, RecycleIcon,  } from "lucide-react"

import { CreditCardOutlined, TruckOutlined } from "@ant-design/icons"


import { Button } from "./ui/button"

import { Input } from "@/components/ui/input"

//brand details 
export function BrandDetails(){

  

    return(
        <>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Feature 1 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <TruckOutlined size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <CheckCircleIcon  size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <CreditCardOutlined size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <RecycleIcon size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
    </>
    )
}
// product listing home page

//  popular product list


// news letter section
export function Newsletter(){
    return(
        <div className=" newsletter-section bg- bg-gray-200 mt-96">
            <div className="newsletterText mt-16">
                <h2 className="text-black newsheading text-center pt-28 font-light text-4xl">Join the club and get the benefits</h2>
                <p className="text-black text-center mt-12 text-sm">Sign up for our newsletter and receive exclusive offers on new<br/> ranges, sales, pop up stores and more</p>
                <div className="flex w-full max-w-sm items-center space-x-2 signupSection bg-gray-500">
                    <Input type="email" placeholder="Email" className="border-none"/>
                    <Button type="submit" className="signupbutton bg-[#2A254B]">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}
