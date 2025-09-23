
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <Link href="/">Style Hub</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/newArrival" className="hover:text-gray-600">
              New Arrivals
            </Link>
            <Link href="/sale" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/pages/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>

            {/* Search & Cart */}
            <button className="hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href={"/cart"} className="hover:text-gray-600 cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* User Profile */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="hover:text-gray-600 flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  {/* <span>Sign in</span> */}
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Search & Cart on mobile (outside menu) */}
            <button className="hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href={"/cart"} className="hover:text-gray-600 cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* User Profile Mobile */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="hover:text-gray-600">
                  <User className="h-5 w-5" />
                </button>
              </SignInButton>
            </SignedOut>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/newArrival" className="hover:text-gray-600">
              New Arrivals
            </Link>
            <Link href="/sale" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/pages/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
