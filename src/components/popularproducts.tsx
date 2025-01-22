"use client";
import { useState, useEffect } from 'react';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import {ProductData } from "@/sanity/sanity.query"
import Image from 'next/image'
export function PopularProductlist(){

    interface CeramicData {
        _id: string;
        imageURL: string;
        name:string
        price: number;
        description:string;
        features:string
        dimensions:string
      }
      const [Popularproducts, setPopularproducts] = useState<CeramicData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const popularproductData = await ProductData();
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
          <div className='flex flex-col md:flex-col xl:flex-row mt-8 md:gap-12'>
            {/* Product 1 */}
              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[3] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[3]) }
                }}
                >
                <Card key={Popularproducts[3]._id} className="lg:h-[200px] w-[200px] lg:w-[200px] mb-[100px] lg:mb-[200px] sm:mb-[250px]  h-48 border-none text-justify  ">
                  <CardHeader className=" lg:w-[700px]  sm:w-[500px] xl:w-[450px] md:w-[400px]">
                    {Popularproducts[3].imageURL && <Image width={800} height={600} src={Popularproducts[3].imageURL} alt="image" className='xl:h-[230px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 whitespace-nowrap  text-ellipsis">{Popularproducts[3].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[3].description}</CardDescription>
                  <CardFooter>
                    <p>{Popularproducts[3].price}</p>
                  </CardFooter>
                </Card>
                </Link>          
              )}
              {/* Product 2 */}

              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[2] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[2]) }
                }}
                >
                <Card key={Popularproducts[2]._id} className="h-[200px] w-[200px]  lg:mb-[150px] sm:mb-[300px] border-none text-justify lg:ml-[0px]  xl:ml-[200px]  ">
                  <CardHeader className=" lg:w-[700px] xl:w-[700px] md:w-[300px] w-[250px] sm:w-[300px] ">
                    {Popularproducts[2].imageURL && <Image width={400} height={300} src={Popularproducts[2].imageURL} alt="image" ></Image>}
                  </CardHeader>
                  <CardTitle ><p  className="ml-6 whitespace-nowrap  text-ellipsis">{Popularproducts[2].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[2].description}</CardDescription>                  
                  <CardFooter>
                    <p>{Popularproducts[2].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {/* Product 2 */}

              {Array.isArray(Popularproducts) && Popularproducts.length > 0 && Popularproducts[8] && (
                <Link 
                href={{
                  pathname: '/productlist',
                  query: { product: JSON.stringify(Popularproducts[8]) }
                }}
                >
                <Card key={Popularproducts[8]._id} className="h-[200px] w-[200px] mb-[200px] lg:mb-[150px] sm:mb-[300px] border-none text-justify lg:ml-[0px]  xl:ml-[200px]  ">
                  <CardHeader className=" lg:w-[700px] xl:w-[700px] md:w-[300px] w-[250px] sm:w-[300px] ">
                    {Popularproducts[2].imageURL && <Image width={350} height={300} src={Popularproducts[8].imageURL} alt="image" ></Image>}
                  </CardHeader>
                  <CardTitle ><p  className="ml-6 whitespace-nowrap  text-ellipsis">{Popularproducts[8].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Popularproducts[8].description}</CardDescription>                  
                  <CardFooter>
                    <p>{Popularproducts[8].price}</p>
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