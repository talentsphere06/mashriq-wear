"use client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Category} from "@/sanity/lib/type";
import Link from "next/link";


const ProductCard: React.FC<Category> = ({name, variants, slug }) => {
  return (
    <Link href={`/product/${slug.current}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
      {/* Image */}
      <div className="relative h-40 sm:h-56 lg:h-64 w-full">
        {variants[0].images[0] ? (
          <Image
            src={urlFor(variants[0].images[0]).url()}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;
