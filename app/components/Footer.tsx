'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              MyStore is your one-stop shop for premium products. We aim to provide top-notch service and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-yellow-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
