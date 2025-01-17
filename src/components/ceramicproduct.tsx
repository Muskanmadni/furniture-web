"use client";
import { useState, useEffect } from 'react';
import Link from "next/link"
import { CardHeader , CardFooter,CardTitle  ,Card, CardDescription } from "./ui/card"
import { GetproductData} from "@/sanity/sanity.query";
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
                const ceramicproductData = await GetproductData();
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
            <h1 className="text-2xl font-semibold">New Ceramics</h1>
  
            {/* Product Items */}
            <div className="lg:grid md:grid-cols-4 gap-8 mt-12  ">
              {Array.isArray(Data) && Data.length > 0 && Data[0] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[0]) }
                }}
                >
                <Card key={Data[0]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[0].imageURL && <Image width={300} height={600} src={Data[0].imageURL} alt="image" ></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Data[0].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[0].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[0].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {Array.isArray(Data) && Data.length > 0 && Data[1] && (
                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[1]) }
                }}
                >
                <Card key={Data[1]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[1].imageURL && <Image width={300} height={600} src={Data[1].imageURL} alt="image"></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Data[1].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[0].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[1].price}</p>
                  </CardFooter>
                </Card>
                </Link>           
              )}
              {Array.isArray(Data) && Data.length > 0 && Data[2] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[2]) }
                }}
                >
                
                <Card key={Data[2]._id} className="lg:h-[200px] lg:w-[200px] xl:h-[200px] xl:w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[1].imageURL && <Image width={300} height={600} src={Data[2].imageURL} alt="image"></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Data[2].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[0].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[2].price}</p>
                  </CardFooter>
                </Card>
                </Link>

              )}
              {Array.isArray(Data) && Data.length > 0 && Data[3] && (

                <Link 
                href={{
                  pathname: '/ceramicproductpage',
                  query: { product: JSON.stringify(Data[3]) }
                }}
                >
                <Card key={Data[3]._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                  <CardHeader className=" w-[250px]">
                    {Data[3].imageURL && <Image width={300} height={600} src={Data[3].imageURL} alt="image"></Image>}
                  </CardHeader>
                  <CardTitle><p className="ml-6">{Data[3].name}</p></CardTitle>
                  <CardDescription className='hidden'>{Data[0].description}</CardDescription>
                  <CardFooter>
                    <p>${Data[3].price}</p>
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