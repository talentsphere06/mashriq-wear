import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-8xl mx-auto px-6 py-10 grid gap-10">
        
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:gap-4 items-center justify-center md:items-start space-y-3">
          <a
            href="/pages/contact"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </a>
          <a
            href="/pages/about"
            className="text-gray-600 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="/pages/terms"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="/pages/privacy"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
        </nav>

        {/* Social Media */}
        <div className="flex justify-center gap-6 md:justify-center">
          <a href="/" aria-label="Facebook" className="hover:opacity-70">
            <Image src="/images/fb.png" alt="Facebook" width={28} height={28} />
          </a>
          <a href="/" aria-label="Instagram" className="hover:opacity-70">
            <Image src="/images/ins.png" alt="Instagram" width={28} height={28} />
          </a>
          <a href="/" aria-label="LinkedIn" className="hover:opacity-70">
            <Image src="/images/linkedin.png" alt="LinkedIn" width={28} height={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center ">
          <p className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Fashion Forward. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
