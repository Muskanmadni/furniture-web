"use client";
import { useState, useEffect } from 'react';
import Link from "next/link"
import { CardHeader , CardFooter,CardTitle  ,Card, CardDescription } from "./ui/card"
import { ProductData} from "@/sanity/sanity.query";
import Image from 'next/image'

export function CeramicProducts(){
    interface  ceramicProducts{
      _id: string;
      imageURL: string;
      name: string;
      price: number;
      description: string;
    }
  
    const [Data, setData] = useState<ceramicProducts[]>([]);
    
        useEffect(() => {
            async function fetchData() {
                const ceramicproductData = await ProductData();
                setData(ceramicproductData);
            }
            fetchData();
        }, []);
        
        console.log(Data);
      return(
          <>
        <section>
          <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12 ">
            {/* Title */}
            <h1 className="text-2xl font-semibold">New Chairs</h1>
  
            {/* Product Items */}
            <div className="lg:grid md:grid-cols-4 gap-8 mt-12  ">
              {Array.isArray(Data) && Data.length > 0 && Data[10] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[10]) }
                }}
                >
                <Card key={Data[10]._id} className="h-[200px] w-[200px] mb-[100px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[10].imageURL && <Image width={300} height={600} src={Data[10].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 whitespace-nowrap  text-ellipsis">{Data[10].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[10].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[10].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {Array.isArray(Data) && Data.length > 0 && Data[23] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[23]) }
                }}
                >
                <Card key={Data[23]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[23].imageURL && <Image width={300} height={600} src={Data[23].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 whitespace-nowrap  text-ellipsis">{Data[23].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[23].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[23].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {Array.isArray(Data) && Data.length > 0 && Data[13] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[13]) }
                }}
                >
                
                <Card key={Data[13]._id} className="lg:h-[200px] lg:w-[200px] xl:h-[200px] xl:w-[200px]  border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[13].imageURL && <Image width={300} height={600} src={Data[13].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]'></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6 whitespace-nowrap  text-ellipsis">{Data[13].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[13].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[13].price}</p>
                  </CardFooter>
                </Card>
                </Link>

              )}
              {Array.isArray(Data) && Data.length > 0 && Data[15] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[15]) }
                }}
                >
                <Card key={Data[15]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[15].imageURL && <Image width={300} height={600} src={Data[15].imageURL} alt="image" className='xl:h-[300px] lg:h-[300px]' ></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Data[15].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[15].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[15].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
            </div>
  
            {/* View Collection Button */}
            <div className="my-10 flex justify-center items-center">
              <Link href={'productListing'}>
              <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
                View collection
              </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
};