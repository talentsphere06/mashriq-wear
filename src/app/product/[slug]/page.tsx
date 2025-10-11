
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
};

const getProduct = async (slug: string): Promise<Product> => {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      description,
      price,
      stock,
      variants[] {
        color,
        images[]
      }
    }`,
    { slug }
  );
};

const ProductCart = ({ params }: ProductPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      const { slug } = await params;
      const productData = await getProduct(slug);
      setProduct(productData);

      if (productData?.variants?.length > 0) {
        setSelectedColor(productData.variants[0].color);
        const firstImg = urlFor(productData.variants[0].images[0]).url();
        setSelectedImage(firstImg);
      }
    }
    getProducts();
  }, [params]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 2000,
    });
    addToCart(product);
  };

  if (!product) return <p>Loading product...</p>;

  const activeVariant =
    product.variants.find((v) => v.color === selectedColor) ||
    product.variants[0];

  return (
    <div className="max-w-6xl mx-auto my-20 px-4 flex flex-col lg:flex-row gap-12">

      <div className="w-full lg:w-1/2 flex flex-col items-center">

        {selectedImage && (
          <div className="w-full aspect-square relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-6 grid grid-cols-4 sm:grid-cols-5 gap-3 w-full">
          {activeVariant.images.map((img, i) => {
            const imgUrl = urlFor(img).url();
            return (
              <button
                key={i}
                onClick={() => setSelectedImage(imgUrl)}
                className={`relative aspect-square rounded-md overflow-hidden border ${
                  selectedImage === imgUrl
                    ? "border-black ring-2 ring-black"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={imgUrl}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover cursor-pointer"
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-bold">${product.price}</p>

        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-3">
            {product.variants.map((variant, i) => (
              <button
                key={i}
                aria-label={variant.color}
                onClick={() => {
                  setSelectedColor(variant.color);
                  const firstImg = urlFor(variant.images[0]).url();
                  setSelectedImage(firstImg);
                }}
                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition ${
                  selectedColor === variant.color
                    ? "ring-2 ring-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: variant.color }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={(e) => handleAddToCart(e, product)}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-md cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
