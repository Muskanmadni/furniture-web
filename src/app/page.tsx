
import { HeroSection } from "@/components/herosection";
import { BrandDetails, Newsletter } from "@/components/homepage";
import { CeramicProducts } from "@/components/ceramicproduct";
import { PopularProductlist } from "@/components/popularproducts"
import { ClerkProvider } from "@clerk/nextjs";






export default  function Home(){
  return(
    <div>
      <HeroSection/>
      <BrandDetails/>
      <CeramicProducts/>
      <PopularProductlist/>
      <Newsletter/>
    </div>
  )
}