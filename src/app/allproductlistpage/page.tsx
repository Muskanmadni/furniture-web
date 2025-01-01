'use client'
import { CeramicProducts } from "@/components/ceramicproduct"
import { Card, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'


//this page is for productlist page whcih is when we click on view collection button for vierwing the single product details   



interface Product {
  _id: string
  imageURL: string
  listproduct: string
  listproductprice: string
  listproductdescription: string
}

export default function ProductList() {
  const searchParams = useSearchParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const productParam = searchParams.get('product')
    if (productParam) {
      setProduct(JSON.parse(productParam))
    }
  }, [searchParams])

  if (!product) return <div>Loading...</div>

  return (
    <section>
      <Card className="flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col md:flex-row w-full">
          <CardHeader className="w-full md:w-1/2 h-auto">
            {product.imageURL && (
              <img src={product.imageURL} alt="image" className="w-full h-auto object-cover" />
            )}
          </CardHeader>
          <div className="flex flex-col md:w-1/2 mt-10">
            <CardTitle className='px-4 md:px-10 py-6 flex flex-col justify-center'>
              <p className="text-xl md:text-2xl font-semibold">{product.listproduct}</p>
              <p className="py-2 text-lg md:text-xl">${product.listproductprice}</p>
            </CardTitle>
            <CardDescription className="text-[#505977] text-sm md:text-base ml-10">
                <h1 className="font-semibold">Description</h1>
                <p className="my-4 md:my-6">{product.listproductdescription}</p>
            </CardDescription>
            <button  className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0 ml-10">
                Add to cart
            </button>
          </div>
        </div>
        <CeramicProducts/>
      </Card>
    </section>
  )
}