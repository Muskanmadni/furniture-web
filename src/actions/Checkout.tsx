// import { types } from "util";
// import { client } from "../../sanityClient";

// interface Product {
//     _id: string;
    
//     imageURL: string;
//     name: string;
//     price: number;
//     description: string;
//     quantity: number; // Optional, defaults to 1
// }
// interface CustomerInfo {
//     name: string;
//     email: string;
//     address: string;
//     phone: string;
// }

// const CreateCustomerInSanity = async (customerInfo: CustomerInfo) => {
//     try {
//         const customerObject = {
//             _type: "customer",
//             Email: customerInfo.email,
//             phone: customerInfo.phone,
//             name: customerInfo.name,
//             address: customerInfo.address
//         }

//         const response = client.create(customerObject)
//         console.log("user create in sanity", response)
//     }
//     catch (error) {
//         console.error("Error creating customer in Sanity:", error);
//     }
// }

// const CreateOrderInSanity = async (CartData: Product[] , customer: customer_id:string) => {
//     try {
//         const  OrderObject= {
//             _type: "Order",
//             customer: {
//                 _type: "reference",
//                 _ref: customer._id
            
//         },
//         items: CartData.map((item: Product) => ({
//             _type: "OrderItem",
//             product_name:item.name,
//             product_description: item.description,
//             product_Price: item.price,
//             product_quantity:item.quantity

//         }))
//         Order_date: new Date().toISOString(),
//         }

//         const response = client.create(OrderObject)
//         console.log("order create in sanity", response)
//     }
//     catch (error) {
//         console.error("Error creating order in Sanity:", error);
//         throw error
//     }
// }

// export default function Checkout(CartData: Product, CustomerInfo: CustomerInfo) {
//     try{
//         const customer = CreateCustomerInSanity(CustomerInfo)
//         await 
//     }
//     catch(error)
//     {
//         console.error("Error creating order in Sanity:", error);
//         throw error
//     }
    
// }