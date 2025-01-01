"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {CeramicProducts}from "@/components/ceramicproduct";
import Image from 'next/image'
import { Suspense } from 'react';
//this page is for ceramicproduct page which on homepage for vierwing the single product details   



interface CeramicProduct {
  _id: string
  imageURL: string
  name: string
  description: string
  price: number
}

export default function CeramicProductPage() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <ProductContent />
      </Suspense>
  )
}

function ProductContent() {
  const searchParams = useSearchParams()
  const [ceramicpage, setCeramicpage] = useState<CeramicProduct | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
      try {
          const productData = searchParams.get('product')
          if (productData) {
              setCeramicpage(JSON.parse(productData))
          }
      } catch (err) {
          setError('Failed to load product')
          console.error('Error parsing product:', err)
      }
  }, [searchParams])

  if (error) return <div className="text-red-500 p-4">{error}</div>
  if (!ceramicpage) return <div className="p-4">Loading product...</div>

  return (
    <>
        <section>
            
                <Card  className="flex-col md:flex-row gap-8 items-center ">
                    <div className="flex flex-col md:flex-row w-full">
                        <CardHeader className="w-full md:w-1/2 h-auto">
                            {ceramicpage.imageURL  && <Image width={305} height={375} src={ceramicpage.imageURL} alt="image" className="w-full h-auto object-cover"></Image>}
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
