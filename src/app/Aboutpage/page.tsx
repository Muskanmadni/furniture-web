import Image from "next/image";
import aboutimage1 from "@/images/products/aboutpageImage2.png";
import aboutimage2 from "@/images/products/aboutpageImage1.png";
import { Newsletter } from "@/components/homepage";

export default function About() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <section className="w-full py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A254B] font-[clashdisplay]">
          A brand built on the love of craftsmanship,<br />
          quality and outstanding customer service
        </h2>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-20">
        <div className="flex-1 text-[#2A254B]">
          <h3 className="text-xl font-bold font-[clashdisplay] mb-4">
            From a studio in London to a global brand with <br /> over 400 outlets
          </h3>
          <p className="text-[#505977] text-base mb-4">
            When we started Avion, the idea was simple. Make high quality furniture<br />
            affordable and available for the mass market.
          </p>
          <p className="text-[#505977] text-sm">
            Handmade and lovingly crafted furniture and homeware is what we live,<br />
            breathe and design. Our Chelsea boutique became the hotbed for the<br />
            London interior design community.
          </p>
        </div>
        <div className="flex-1">
          <Image src={aboutimage1} alt="Crafted furniture in studio" width={630} />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-28">
        <div className="flex-1">
          <Image src={aboutimage2} alt="London studio" width={670} />
        </div>
        <div className="flex-1 text-[#2A254B]">
          <h3 className="text-xl font-bold font-[clashdisplay] mb-4">
            From a studio in London to a global brand with <br /> over 400 outlets
          </h3>
          <p className="text-[#505977] text-base mb-4">
            When we started Avion, the idea was simple. Make high quality furniture<br />
            affordable and available for the mass market.
          </p>
          <p className="text-[#505977] text-sm">
            Handmade and lovingly crafted furniture and homeware is what we live,<br />
            breathe and design. Our Chelsea boutique became the hotbed for the<br />
            London interior design community.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
