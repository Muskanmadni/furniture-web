import { CheckCircleIcon,  } from "lucide-react"
import { CardHeader , CardDescription ,CardTitle  ,Card } from "./ui/card"
import { CreditCardOutlined, TruckOutlined } from "@ant-design/icons"
import recycle from "@/images/logos&Icons/Sprout.png"
import Image from "next/image"
import dancyChair from "@/images/products/dancyChair.png"
import { Button } from "./ui/button"
import sofa from"@/images/products/ThePoplarsuedesofa.png"
import blackchair from "@/images/products/blackChair.png"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import list2 from "@/images/products/TheLucyLamp.png"
import list3 from "@/images/products/RusticVaseSet.png"
import list4 from "@/images/products/TheSilkVase.png" 
//brand details 
export function BrandDetails(){
    return(
        <div className="w-full h-96 bg-white justify-center flex text-xl branddatils">
            <h3 className="mt-16">What makes our brand different</h3>
            <div className=" branddatils flex">
                <Card className="border-none">
                    <CardHeader><TruckOutlined/></CardHeader>
                    <CardTitle className="font-thin">Next day as standard</CardTitle>
                    <CardDescription className="pt-6">Order before 3pm and get your order <br/>the next day as standard</CardDescription>
                </Card>
                <Card className="border-none">
                    <CardHeader><CheckCircleIcon/></CardHeader>
                    <CardTitle className="font-thin">Made by true artisans</CardTitle>
                    <CardDescription className="pt-6">Handmade crafted goods made with <br/>real passion and craftmanship</CardDescription>
                </Card>
                <Card className="border-none" >
                    <CardHeader><CreditCardOutlined/></CardHeader>
                    <CardTitle className="font-thin">Unbeatable prices</CardTitle>
                    <CardDescription className="pt-6">For our materials and quality you <br/>wont find better prices anywhere</CardDescription>
                </Card>
                <Card className="border-none">
                    <CardHeader><Image src={recycle} alt="image"></Image></CardHeader>
                    <CardTitle className="font-thin">Recycled packaging</CardTitle>
                    <CardDescription className="pt-6">We use 100% recycled packaging to<br/> ensure our footprint is manageable</CardDescription>
                </Card>

            </div>

        </div>
    )
}
// product listing home page
export function Productslisthomepage(){
    return(
        <div className="bg-white w-full h-96 ">
            <h4 className="font-sans font-thin  ml-40  text-4xl pt-12">New ceramics</h4>
            <div className="homeListingCard flex" >
                <Card className="mt-5 homeListingCard sm:w-28 sm:h-28">
                    <CardHeader className="w-72"><Image src={dancyChair} alt="productlisting"></Image></CardHeader>
                    <CardTitle>The Dandy chair</CardTitle>
                    <CardDescription>£250</CardDescription>
                </Card>
                <Card className="homeListingCard sm:w-28 sm:h-28">
                    <CardHeader className="w-72 "><Image src={list3} alt="productlisting"></Image></CardHeader>
                    <CardTitle>Rustic Vase Set</CardTitle>
                    <CardDescription>£155</CardDescription>
                </Card>
                <Card className="homeListingCard sm:w-28 sm:h-28">
                    <CardHeader className="w-72"><Image src={list4} alt="productlisting"></Image></CardHeader>
                    <CardTitle>The Silky Vase</CardTitle>
                    <CardDescription>£125</CardDescription>
                </Card>
                <Card className="homeListingCard sm:w-28 sm:h-28">
                    <CardHeader className="w-72"><Image src={list2} alt="productlisting"></Image></CardHeader>
                    <CardTitle>The Lucy Lamp</CardTitle>
                    <CardDescription>£399</CardDescription>
                </Card>
            </div>
            <div >
            <Button variant="destructive" className="productlistbutton bg-gray-100 text-neutral-900">View Products</Button> 
            </div> 
        </div>
    );
};
//  popular product list

export function PopularProductlist(){
    return(
        <div className="w-full h-96 bg-white mt-96 popular-product-list">
            <div><h2 className="font-thin text-3xl ml-32">Our popular products</h2></div>
            <div className="popular-product-list-cards">
                <Card className="border-none sm:w-28 sm:h-28">
                    <CardHeader><Image src={sofa} alt="image"></Image></CardHeader>
                    <CardDescription className="ml-5">The Poplar suede sofa</CardDescription>
                    <CardDescription className="ml-5">£980</CardDescription>
                </Card>
                <Card className="border-none sm:w-28 sm:h-28">
                    <CardHeader><Image src={dancyChair} alt="image"></Image></CardHeader>
                    <CardDescription className="ml-5">The Dandy chair</CardDescription>
                    <CardDescription className="ml-5">£250</CardDescription>
                </Card>
                <Link href={"productListingpage sm:w-28 sm:h-28"}>
                <Card className="border-none">
                    
                    <CardHeader><Image src={blackchair} alt="image"></Image></CardHeader>
                    <CardDescription className="ml-5">The Dandy chair</CardDescription>
                    <CardDescription className="ml-5">£250</CardDescription>
                </Card>
                </Link>
                
            </div>
            <div >
            <Button variant="destructive" className="productlistbutton bg-gray-100 text-neutral-900">View Products</Button> 
            </div>
        </div>
    )
}
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
