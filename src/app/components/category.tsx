

"use client";
import React, { useEffect, useState } from "react";
import CategoryCom from "./categoryCom";
import { client } from "@/sanity/lib/client";
import { categoryPro } from "@/sanity/lib/queries";
import type { Category } from "@/sanity/lib/type";

const Category = () => {
  const [products, setProducts] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedData = await client.fetch(categoryPro);
        const formatted = Object.values(fetchedData).filter(Boolean) as Category[];
        setProducts(formatted);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);


  return (
    <section className="body-font">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-14">
          Shop by Category
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
          {products.map((product) => (
            <CategoryCom key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
