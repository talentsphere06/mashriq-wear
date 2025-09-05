"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/productCard";
import { Category } from "@/sanity/lib/type";
import { client } from "@/sanity/lib/client";
import { categoryPro } from "@/sanity/lib/queries";
import { groq } from "next-sanity";

type ProductPageProps = {
params: Promise<{ slug: string }>;
}

// Fetch product details
const getProduct = async (slug: string): Promise<Category[]> => {
  slug = slug.split("-").join(" ");
return await client.fetch(
  groq`*[_type == "product" && lower(category) == $slug]{
    _id,
    name,
    slug,
    image,
    category
  }`,
  { slug }
);
};

const CategoryDetails = ({params}: ProductPageProps) => {

  const [prod, setProd] = useState<Category[]>([])
  const [categoryName, setCategoryName] = useState<string>('')

  useEffect(() => {
    async function getProducts() {
      const {slug} = await params;
      setCategoryName(slug)
      const productData = await getProduct(slug)
      setProd(productData)
    }
    getProducts()
  }, [params])

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
  }, [])

  // Use products directly since they're already filtered by category
  const filteredProducts = prod || [];

  return (
    <section className="body-font">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-14 capitalize">
          {categoryName} Collection
        </h1>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No products found for <span className="font-semibold">{categoryName}</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default CategoryDetails;
