// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Menu } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// function Header() {
//   return (
//     <header className="h-[65px] border-b border-[#E5E8EB] py-3 px-6 md:px-10 flex items-center justify-between w-full">
//       {/* Logo */}
//       <Link
//         href="/"
//         className="flex items-center gap-2 h-auto w-fit hover:opacity-80"
//       >
//         <Image src="/images/logo.png" alt="logo" height={23} width={23} />
//         <h1 className="text-[18px] font-bold">StyleHub</h1>
//       </Link>

//       {/* Desktop Menu */}
//       <nav className="hidden md:flex items-center gap-6">
//         <NavigationMenu>
//           <NavigationMenuList className="flex items-center gap-5 text-sm font-medium">
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/">Home</NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/newArrival">New Arrivals</NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/sale">Sale</NavigationMenuLink>
//             </NavigationMenuItem>

//             {/* Icons */}
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/search" className="rounded-md bg-[#EDEDDE] h-[40px] w-[40px] flex items-center justify-center">
//                 <Image src="/images/search.png" alt="search" width={20} height={20} />
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/fav" className="rounded-md bg-[#EDEDDE] h-[40px] w-[40px] flex items-center justify-center">
//                 <Image src="/images/fav.png" alt="fav" width={20} height={20} />
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/cart" className="rounded-md bg-[#EDEDDE] h-[40px] w-[40px] flex items-center justify-center">
//                 <Image src="/images/cart.png" alt="cart" width={20} height={20} />
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* More Dropdown */}
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="cursor-pointer">More</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="p-4 w-48 space-y-2 text-sm">
//                   <li>
//                     <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
//                   </li>
//                   <li>
//                     <NavigationMenuLink href="/pages/about">About</NavigationMenuLink>
//                   </li>
//                   <li>
//                     <NavigationMenuLink href="/pages/terms">Terms & Conditions</NavigationMenuLink>
//                   </li>
//                   <li>
//                     <NavigationMenuLink href="/pages/privacy">Privacy Policy</NavigationMenuLink>
//                   </li>
//                   <li>
//                     <NavigationMenuLink href="/profile">Profile</NavigationMenuLink>
//                   </li>
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//           <NavigationMenuViewport />
//         </NavigationMenu>
//       </nav>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex items-center gap-3">
//         <Link
//           href="/cart"
//           className="rounded-md bg-[#EDEDDE] h-[30px] w-[30px] flex items-center justify-center"
//         >
//           <Image src="/images/cart.png" alt="cart" width={20} height={20} />
//         </Link>

//         <Sheet>
//           <SheetTrigger>
//             <Menu className="h-6 w-6" />
//           </SheetTrigger>
//           <SheetContent
//             side="right"
//             className="w-full bg-white text-black text-base font-medium"
//           >
//             <NavigationMenu>
//               <NavigationMenuList className="flex flex-col space-y-3">
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/">Home</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/newArrival">New Arrivals</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/sale">Sale</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/fav">Fav</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/pages/about">About</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/pages/services">Services</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="/pages/contact">Contact</NavigationMenuLink>
//                 </NavigationMenuItem>

//                 {/* Social Icons */}
//                 <div className="flex gap-4 mt-4">
//                   <Link href="/">
//                     <Image src="/images/fb.png" alt="fb" width={20} height={20} />
//                   </Link>
//                   <Link href="/">
//                     <Image src="/images/ins.png" alt="insta" width={20} height={20} />
//                   </Link>
//                   <Link href="/">
//                     <Image src="/images/linkedin.png" alt="linkedin" width={20} height={20} />
//                   </Link>
//                 </div>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }

// export default Header;

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
          {/* Left side - Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <Link href="/">Style Hub</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/newArrival" className="hover:text-gray-600">New Arrivals</Link>
            <Link href="/sale" className="hover:text-gray-600">Sale</Link>
            <Link href="/pages/about" className="hover:text-gray-600">About</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>

            {/* Icons */}
            <button className="hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href={'/cart'} className="hover:text-gray-600 cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
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
