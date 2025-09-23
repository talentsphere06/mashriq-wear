import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const fourProducts = groq`*[_type == "product"][0..3]`;

export const categoryPro = groq`*[_type == "category"][0..3]`;
export const allCategory = groq`*[_type == "category"]`;
