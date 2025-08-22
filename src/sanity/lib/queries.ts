import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;

// export const allProducts = groq`*[_type == "product"]{
//     _id,
//     name,
//     "image": image.asset->url
// }`;