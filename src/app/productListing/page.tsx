"use client";
import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"

import headerImage from "@/images/products/productlistingpageHeader.jpg"
import { CaretDownOutlined } from "@ant-design/icons";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GetproductListData} from "@/sanity/sanity.query";


export default  function ProductList(){
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await GetproductListData();
            setProducts(data);
        }
        fetchData();
    }, []);
    
    console.log(products);
    return (
        <div>
            <div className="relative w-full h-[200px]">
                <Image src={headerImage} alt="image" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 flex items-center justify-start sm:justify-center md:justify-center lg:justify-start">
                    <h1 className="text-white text-4xl">Our Products</h1>
                </div>
            </div>
            <div>
                <table className="w-full text-gray-500 px-4 py-4">
                    <thead className="bg-gray-100">
                        <tr >
                            <th colSpan={4} className="text-left text-sm font-medium text-gray-700 px-4 py-4 ">
                                <div className="flex items-center">
                                    <span>category</span><CaretDownOutlined className="text-black mr-2" />
                                    <span className="pl-7">Product Type</span><CaretDownOutlined className="text-black mr-2" />
                                    <span className="pl-7">Price</span><CaretDownOutlined className="text-black mr-2" />
                                    <span className="pl-7">Brand</span><CaretDownOutlined className="text-black mr-2" />
                                </div>
                            </th>
                            <th colSpan={2} className="text-left text-sm font-medium text-gray-700 ">
                                <div className="flex justify-end">
                                    <span className="mr-4">Sorting by</span>
                                    <span>Date added</span><CaretDownOutlined className="text-black mr-2" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add table rows here */}
                    </tbody>
                </table>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 text-justify">
                {Array.isArray(products) &&  products.map((product:any)  => (
                    <Link 
                    key={product._id}
                    href={{
                      pathname: '/allproductlistpage',
                      query: { product: JSON.stringify(product) }
                    }}
                    >
                    <Card key={product._id} className="h-[200px] w-[200px] mb-[200px] border-none text-justify">
                        
                        <CardHeader className=" w-[250px]">
                            {product.imageURL && <img src={product.imageURL} alt="image"  />}
    
                        </CardHeader>

                        <CardTitle><p className="ml-6">{product.listproduct}</p></CardTitle>
                        <CardDescription className='my-4 md:my-6 hidden'>{product.listproductdescription}</CardDescription>
                        <CardFooter>
                            
                            
                            <p>${product.listproductprice}</p>
                        </CardFooter>
                    </Card>
                    </Link>
                ))}
            </div> 
            <div className='my-10 flex justify-center items-center pt-[100px]'>
            <Link href={'productListing'}>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]'>
              View products
            </button>
            </Link>
          </div>
        </div>
    );
};

