"use client"
import { client } from '@/sanity/lib/client'
import {fourProducts } from '@/sanity/lib/queries'
import { Product } from '@/sanity/lib/type'
import React, { useEffect, useState } from 'react'
import ProCard from './productCard'

const ProductsCom = () => {
  const [products, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(fourProducts)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProduct()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 p-4 my-10 px-8">
      {products.map((item: Product) => (
        <ProCard key={item._id} {...item}/>
      ))}
    </div>
  )
}

export default ProductsCom


        // <Link href={`/product/${item.slug.current}`}
        //   key={item._id} 
        //   className="flex flex-col items-center rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
        // >
        //   <div className="w-full aspect-square relative">
        //     {item.variants[0].images[0] && ( <Image
        //       src={urlFor(item.variants[0].images[0]).url()}
        //       alt={item.name}
        //       fill
        //       className="object-cover"
        //     />)}
        //   </div>
        //   <p className="p-2 text-center text-lg font-medium">{item.name}</p>
        // </Link>
