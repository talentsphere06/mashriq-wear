"use client";

export default function Hero() {
  return (
    <section className="container mt-8">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">

        <img
          src="/hero.png" 
          alt="Hero"
          className="w-full h-[240px] sm:h-[360px] md:h-[480px] lg:h-[560px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />


        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Elevate Your Style
          </h1>
          <p className="text-white/90 mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
            Discover timeless essentials and modern classics designed to make every moment unforgettable.
          </p>
          

          <button className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900 to-black text-white text-sm sm:text-base font-medium shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
