"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Category} from "@/sanity/lib/type";

const CategoryCom: React.FC<Category> = ({ name, slug, variants}) => {
  return (
    <Link href={`/categories/${slug.current}`} key={slug.current}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer">
        {/* Image */}
        <div className="relative h-36 sm:h-48 lg:h-64 w-full">
          {variants[0].images[0] ? (
            <Image
              src={urlFor(variants[0].images[0]).url()}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="bg-gray-100 h-full w-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Name */}
        <div className="p-4 text-center">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCom;
