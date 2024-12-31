"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {CeramicProducts}from "@/components/ceramicproduct";

//this page is for ceramicproduct page which on homepage for vierwing the single product details   

interface CeramicProducts {
    imageURL: string
    name: string
    price: string
    description: string
    _id: string
  }

export default function ProductList() {
    const searchParams = useSearchParams()
  const [ceramicpage, setCeramicpage] = useState<CeramicProducts | null>(null)

  useEffect(() => {
    const productParam = searchParams.get('product')
    if (productParam) {
      setCeramicpage(JSON.parse(productParam))
    }
  }, [searchParams])

  if (!ceramicpage) return <div>Loading...</div>

    return(
        <>
        <section>
            
                <Card  className="flex-col md:flex-row gap-8 items-center ">
                    <div className="flex flex-col md:flex-row w-full">
                        <CardHeader className="w-full md:w-1/2 h-auto">
                            {ceramicpage.imageURL  && <img src={ceramicpage.imageURL} alt="image" className="w-full h-auto object-cover" />}
                        </CardHeader>
                        <div className="flex flex-col md:w-1/2 mt-10">
                            <CardTitle className='px-4 md:px-10 py-6 flex flex-col justify-center'>
                                <p className="text-xl md:text-2xl font-semibold">{ceramicpage.name}</p>
                                <p className="py-2 text-lg md:text-xl">{ceramicpage.price}</p>
                            </CardTitle>
                            <CardDescription className="text-[#505977] text-sm md:text-base ml-10">
                                <h1 className="font-semibold">Description</h1>
                                <p className="my-4 md:my-6 block">{ceramicpage.description}</p>
                            </CardDescription>
                            <button  className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 ml-10">
                              Add to cart
                            </button>
                        </div>
                    </div>
                    <CardFooter>
                        <p></p>
                    </CardFooter>
                    <CeramicProducts/>
                </Card>
                
        </section>
    </>
    )
}