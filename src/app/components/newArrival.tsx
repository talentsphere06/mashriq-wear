
import React from "react"
import ProductsCom from "./productsCom"

const NewArrival = () => {
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
      <ProductsCom />
    </section>
  )
}

export default NewArrival
