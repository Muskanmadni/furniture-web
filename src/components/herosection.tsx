import { Button } from "./ui/button";
import heroImage from "@/images/products/herosectionImage.png"
import Image from "next/image";
import Link from "next/link";

export function HeroSection(){
    return(
        <div className=" bg-white flex-none order-1 flex-grow-0 lg:pl-[100px] xl:ml-[300px]">
            <div className="bg-[#2A254B] lg:w-[800px] lg:h-[400px]  sm:text-center lg:text-center md:w-[680px] md:h-[350px]"> 
                <h2 className="text-white  lg:text-[30px] sm:text-[30px] md:text-[20px] xl:text-[20px] xl:text-left xl:pt-[20px] xl:pl-[20px] ">The furniture brand for the <br/>future, with timeless designs</h2>
                <Link href={"productlist"}>
                <Button variant="destructive" className="lg:self-end lg:mb-4 bg-[#494465] text-[#8e8a9f] mt-[50px] ml-[50px] xl:mt-[50px] xl:ml-[50px] xl:justify-start xl:flex md:justify-center">
                    View Products
                </Button>
                </Link>
                <p className="text-white ml-12 mt-32 lg:justify-end sm:text-center md:text-center md:text-[15px] xl:text-left xl:text-[11px] xl:ml-[10px]">A new era in eco friendly furniture with Avelon, the French luxury retail brand <br/>with nice fonts, tasteful colors and a beautiful way to display things digitally <br/>using modern web technologies.</p>
                <div className="xl:absolute xl:top-[135px] xl:left-[829px]">
                    <Image src={heroImage}alt="hero-section-image " className="lg:hidden sm:hidden xl:block hidden xl:w-[370px] xl:h-[400px]"></Image>
                </div>
            </div>
        </div>
    )
}