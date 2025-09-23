"use client"
import React, { useEffect, useState } from "react"
import { Product } from "@/sanity/lib/type"
import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import ProCard from "./productCard"

const NewArrival = () => {
  const [products, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProduct()
  }, [])
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-20 space-y-10">
      {/* Section Heading */}
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          New Arrivals
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Discover our latest products, curated just for you.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <select className="bg-gray-100 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
          <option value="">Size</option>
          <option value="small">Small</option>
          <option value="large">Large</option>
        </select>
        <select className="bg-gray-100 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
        </select>
        <select className="bg-gray-100 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
          <option value="">Price</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        <select className="bg-gray-100 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
          <option value="">Material</option>
          <option value="cotton">Cotton</option>
          <option value="wool">Wool</option>
        </select>
      </div>

      {/* Products Grid */}
      {/* <ProductsCom /> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 p-4 my-10 px-8">
      {products.map((item: Product) => (
        <ProCard key={item._id} {...item}/>
      ))}
    </div>
    </section>
  )
}

export default NewArrival
