
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto mt-8 px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">

        {/* Background Image */}
        <Image
          src="/newArrival/clothes.png"
          alt="Hero"
          width={1200}
          height={1200}
          priority
          className="w-full h-[260px] sm:h-[380px] md:h-[520px] lg:h-[640px] object-cover object-center transition-transform duration-700 hover:scale-105 bg-transparent"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Elevate Your Style
          </h1>
          <p className="text-white/90 mt-4 max-w-xl text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            Discover timeless essentials and modern classics designed to make every moment unforgettable.
          </p>

          <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-gray-900 to-black text-white text-sm sm:text-lg font-semibold shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
