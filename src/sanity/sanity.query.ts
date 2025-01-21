import { groq} from "next-sanity";

import { client } from "../../sanityClient";



// export async function GetproductListData() {
//     return sanityClient.fetch(
//         groq`
//         *[_type=="ListData"]{
//         listproduct,
//         listproductdescription,
//         listproductprice,
//         "imageURL": listproductimage.asset->url
//         }
//         `
//     )
// }
// export async function GetpopularproductListData() {
//     return sanityClient.fetch(
//         groq`
//         *[_type=="popularproductList"]{
//         prduct,
//         description,
//         price,
//         "imageURL": image.asset->url
//         }
//         `
//     )
// }
export async function ProductData(){
    return client.fetch (
        groq`
        *[_type== "product"]{
        category,    
        name,
        slug,
        price,
        quantity,
        tags,
        description,
        features,
        dimensions,
        "imageURL":image.asset->url
        }
        `

    )
}


