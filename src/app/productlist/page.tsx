"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Image from 'next/image'
import { Card, CardDescription, CardHeader , CardTitle } from "@/components/ui/card";

import { CeramicProducts } from '@/components/ceramicproduct';
import { Suspense } from 'react';



  


interface Product {
  imageURL: string
  prduct: string
  price: string
  description: string
  _id: string
}

export default function ProductList() {
  return (
      <Suspense fallback={<div>Loading products...</div>}>
          <ProductContent />
      </Suspense>
  )
}

function ProductContent() {
  const searchParams = useSearchParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
      try {
          const productParam = searchParams.get('product')
          if (productParam) {
              const parsedProduct = JSON.parse(productParam)
              setProduct(parsedProduct)
          }
      } catch (err) {
          setError('Error loading product data')
          console.error('Error parsing product:', err)
      }
  }, [searchParams])

  if (error) return <div className="text-red-500 p-4">{error}</div>
  if (!product) return <div className="p-4">Loading product details...</div>

  return (
    <>
         <section>
            
               <Card  className="flex-col md:flex-row gap-8 items-center ">
                     <div className="flex flex-col md:flex-row w-full">
                        <CardHeader className="w-full md:w-1/2 h-auto">
                             {product.imageURL  && <Image width={305} height={375} src={product.imageURL} alt="image" className="w-full h-auto object-cover"></Image>}
                         </CardHeader>
                         <div className="flex flex-col md:w-1/2 mt-10">
                             <CardTitle className='px-4 md:px-10 py-6 flex flex-col justify-center'>
                                 <p className="text-xl md:text-2xl font-semibold">{product.prduct}</p>
                                 <p className="py-2 text-lg md:text-xl">{product.price}</p>
                             </CardTitle>
                             <CardDescription className="text-[#505977] text-sm md:text-base ml-10">
                                 <h1 className="font-semibold">Description</h1>
                                 <p className="my-4 md:my-6 ">{product.description}</p>
                             </CardDescription>
                             <button  className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 ml-10">
                               Add to cart
                             </button>
                         </div>
                     </div>

                     <CeramicProducts/>
                 </Card>
                
         </section>
     </>
      
  )
}


