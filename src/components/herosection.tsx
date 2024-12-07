import { Button } from "./ui/button";
import heroImage from "@/images/products/herosectionImage.png"
import Image from "next/image";


export function HeroSection(){
    return(
        <div className="herosection bg-white">
            <div className="heroText ">
                <h2 className="text-white heroheading ">The furniture brand for the <br/>future, with timeless designs</h2>
                <Button variant="destructive" className="herobutton">View Products</Button>
                <p className="text-white ml-12 mt-36">A new era in eco friendly furniture with Avelon, the French luxury retail brand <br/>with nice fonts, tasteful colors and a beautiful way to display things digitally <br/>using modern web technologies.</p>
                <div className="heroImage">
                    <Image src={heroImage}alt="hero-section-image" className="hero-section-image"></Image>
                </div>
            </div>
        </div>
    )
}