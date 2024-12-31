import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetproductData() {
    return sanityClient.fetch(
        groq`
        *[_type=="productData"]{
        name,
        description,
        price,
        "imageURL": image.asset->url
        }
        `
    )
}
export async function GetproductListData() {
    return sanityClient.fetch(
        groq`
        *[_type=="ListData"]{
        listproduct,
        listproductdescription,
        listproductprice,
        "imageURL": listproductimage.asset->url
        }
        `
    )
}
export async function GetpopularproductListData() {
    return sanityClient.fetch(
        groq`
        *[_type=="popularproductList"]{
        prduct,
        description,
        price,
        "imageURL": image.asset->url
        }
        `
    )
}

