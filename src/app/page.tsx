
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import { BrandDetails, Newsletter, PopularProductlist, Productslisthomepage } from "@/components/homepage";


export default function home(){
  return(
    <div>
      <HeroSection/>
      <BrandDetails/>
      <Productslisthomepage/>
      <PopularProductlist/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}