"use client"
import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity/lib/type";
import { groq } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProductPageProps = {
params: Promise<{ slug: string }>;
}

// Fetch product details
const getProduct = async (slug: string): Promise<Product> => {
return await client.fetch(
  groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    _type,
    slug,
    image,
    price,
    description,
    stock
  }`,
  { slug }
);
};
const ProductCart = ({params}: ProductPageProps) => {
    const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function getProducts() {
      const {slug} = await params;
      const productData = await getProduct(slug)
      setProduct(productData)
    }
    getProducts()
  }, [params])

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    addToCart(product)
  }
 
if (!product) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-gray-600">Loading product...</p>
    </div>
  );
}
  return (
    <div className="max-w-6xl mx-auto my-20 px-4 flex flex-col lg:flex-row gap-10">

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">

        <div className="w-full">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name || "Product image"}
              width={1000}
              height={1000}
              className="w-fit h-fit object-cover rounded-lg shadow-md"
            />
          )}
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex flex-col gap-6">

        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            {product?.name || "Loading..."}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Inventory: {product.stock || "N/A"}</p>
        </div>


        <p className="text-gray-700 leading-relaxed">
          {product.description || "No description available."}
        </p>

        <p className="text-2xl font-bold text-gray-900">${product.price || 0}</p>


        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex gap-2 flex-wrap">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-3">
            {[
              { color: "bg-black", name: "Black" },
              { color: "bg-white", name: "White" },
              { color: "bg-orange-300", name: "Orange" },
            ].map(({ color, name }, i) => (
              <button
                key={i}
                aria-label={name}
                className={`${color} w-7 h-7 rounded-full border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-black transition`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={(e) =>  handleAddToCart(e, product)}
          className="bg-black text-white px-6 py-3 rounded-md cursor-pointer hover:bg-gray-800 transition w-full sm:w-fit shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;