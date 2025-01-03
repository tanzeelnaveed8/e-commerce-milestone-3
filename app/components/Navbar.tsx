'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" bg- shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Text and Image */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/store.jpg" 
            alt="Logo"
            className="h-16 w-auto"
          />
          <h1 className="text-2xl font-bold text-black font-serif">Vibe Matchz.</h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-black hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-black hover:text-yellow-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-300"></span>
            <span className="block w-6 h-0.5 bg-gray-300"></span>
            <span className="block w-6 h-0.5 bg-gray-300"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4">
          <ul className="space-y-4 text-lg text-center">
            <li>
              <Link
                href="/"
                className="text-black hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-black hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
