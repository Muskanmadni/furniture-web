import Image from "next/image"
import feature from "@/images/products/Features (1).png"
import feature2 from "@/images/products/Features (3).png"
import feature3 from "@/images/products/Email sign-up.png"
export default function About (){
    return(
        <div>
            <Image src={feature} alt="image"></Image>
            <Image src={feature2} alt="image"></Image>
            <Image src={feature3} alt="image"></Image>
        </div>
    )
}
    
