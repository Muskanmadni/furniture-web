"use client";
import { useState, useEffect } from 'react';

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import { GetpopularproductListData } from "@/sanity/sanity.query"
import Image from 'next/image';
export function PopularProductlist(){

    interface ProductData {
        _id: string;
        imageURL: string;
        prduct: string;
        price: number;
      }
      const [Popularproducts, setPopularproducts] = useState<ProductData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const popularproductData = await GetpopularproductListData();
          setPopularproducts(popularproductData);
        }
        fetchData();
        }, []);
        console.log(Popularproducts);

       

            
    return(
        <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            {/* Product 1 */}
              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[1] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[1]) }
                }}
                >
                <Card key={Popularproducts[1]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify ">
                  <CardHeader className=" w-[700px]">
                    {Popularproducts[1].imageURL && <Image src={Popularproducts[1].imageURL} alt="image" />}
                  </CardHeader>
                  <CardTitle><p className="ml-6 whitespace-nowrap  text-ellipsis">{Popularproducts[1].prduct}</p></CardTitle>
                  <CardFooter>
                    <p>{Popularproducts[1].price}</p>
                  </CardFooter>
                </Card>
                </Link>          
              )}
              {/* Product 2 */}

              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[0] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[0]) }
                }}
                >
                <Card key={Popularproducts[0]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify ml-[500px]">
                  <CardHeader className=" w-[350px] ">
                    {Popularproducts[0].imageURL && <img src={Popularproducts[0].imageURL} alt="image" />}
                  </CardHeader>
                  <CardTitle><p className="ml-6 ">{Popularproducts[0].prduct}</p></CardTitle>
                  <CardFooter>
                    <p>{Popularproducts[0].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {/* Product 3 */}
              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[2] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[2]) }
                }}
                >
                
                <Card key={Popularproducts[2]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify ml-[200px]">
                  <CardHeader className=" w-[350px] ">
                    {Popularproducts[2].imageURL && <img src={Popularproducts[2].imageURL} alt="image" />}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Popularproducts[2].prduct}</p></CardTitle>
                  <CardFooter>
                    <p>{Popularproducts[2].price}</p>
                  </CardFooter>
                </Card>
                </Link>     
              )}
            </div>  
          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center pt-[100px]'>
            <Link href={'productListing'}>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
    )
}