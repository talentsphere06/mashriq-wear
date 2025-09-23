"use client"
import React, { useEffect, useState } from 'react'
import Category from '../components/category'
import { client } from '@/sanity/lib/client';
import { allCategory } from '@/sanity/lib/queries';
import CategoryCom from '../components/categoryCom';

const Categories = () => {
  const [products, setProducts] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedData = await client.fetch(allCategory);
        const formatted = Object.values(fetchedData).filter(Boolean) as Category[];
        setProducts(formatted);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);
  return (
    <section className='body-font'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-14">
          Shop by Category
        </h1>
        <div className='max-w-6xl mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
              {products.map((product) => (
                <CategoryCom key={product._id} {...product} />
              ))}
            </div>
        </div>
      </div>  
    </section>  
  )
}

export default Categories