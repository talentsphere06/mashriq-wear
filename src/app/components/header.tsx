"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <Link href="/">Style Hub</Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/newArrival" className="hover:text-gray-600">New Arrivals</Link>
            <Link href="/sale" className="hover:text-gray-600">Sale</Link>
            <Link href="/pages/about" className="hover:text-gray-600">About</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>

            <button className="hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href={'/cart'} className="hover:text-gray-600 cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/newArrival" className="hover:text-gray-600">New Arrivals</Link>
            <Link href="/sale" className="hover:text-gray-600">Sale</Link>
            <Link href="/pages/about" className="hover:text-gray-600">About</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>
            <button className="flex items-center space-x-2 hover:text-gray-600">
              <Search className="h-5 w-5" /> <span>Search</span>
            </button>
            <Link href={'/cart'} className="flex items-center space-x-2 hover:text-gray-600 ">
              <ShoppingCart className="h-5 w-5 cursor-pointer" /> <span>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
 
