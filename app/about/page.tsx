'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">About Vibe Matchz</h1>

      <div className="text-lg text-black mb-6">
        <p>
          Welcome to <span className="font-semibold">Vibe Matchz</span> – your one-stop shop for all things trendy and stylish! Founded in 2023, our store is committed to offering high-quality fashion items, lifestyle products, and exclusive accessories that will match your unique vibe.
        </p>
        <p className="mt-4">
          Whether you're looking for the latest in fashion, gadgets, or home decor, Vibe Matchz brings you the best of the best. We focus on curating only the finest products to ensure that you feel confident and stylish no matter where you go.
        </p>
      </div>

      {/* Fake Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative">
          <Image
            src="/f1.jpg" // Replace with your fake image URLs
            alt="Product 1"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-2 left-2 text-white font-semibold text-lg"></p>
        </div>

        <div className="relative">
          <Image
            src="/f2.jpg" // Replace with your fake image URLs
            alt="Product 2"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-2 left-2 text-white font-semibold text-lg"></p>
        </div>

        <div className="relative">
          <Image
            src="/f3.jpg" // Replace with your fake image URLs
            alt="Product 3"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-2 left-2 text-white font-semibold text-lg"></p>
        </div>
      </div>

      <div className="mt-8 text-lg text-black">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission at <span className="font-semibold">Vibe Matchz</span> is to provide a shopping experience that empowers individuals to express themselves through fashion and lifestyle products. We believe everyone deserves to feel amazing, and we’re here to help you find the perfect items to enhance your vibe.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>High-quality, stylish products</li>
          <li>Fast and reliable shipping</li>
          <li>Exclusive discounts and deals</li>
          <li>Friendly and helpful customer service</li>
        </ul>
      </div>
    </div>
  );
}
