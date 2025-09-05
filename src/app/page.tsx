import Link from "next/link";
import Category from "./components/category";
import Hero from "./components/Hero";
import ProductsCom from "./components/productsCom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto" >
      <Hero/>
      <Category/>
      <div className="text-center mb-10">
          <Link href="/categories">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer">
              View All Categories
            </button>
          </Link>
      </div>
        <ProductsCom/>
    </div>
  );
}

