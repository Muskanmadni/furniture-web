import { CheckCircleIcon, Recycle, RecycleIcon, Wallet } from "lucide-react"
import { CardHeader , CardDescription ,CardTitle  ,Card } from "./ui/card"
import { CreditCardOutlined, TruckOutlined } from "@ant-design/icons"
import recycle from "@/images/logos&Icons/Sprout.png"
import Image from "next/image"

export function BrandDetails(){
    return(
        <div className="w-full h-96 bg-white justify-center flex text-xl">
            <h3 className="mt-16">What makes our brand different</h3>
            <div className=" branddetailsards flex">
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

export function Productslisthomepage(){
    return(
        <div>
            
        </div>
    )
}