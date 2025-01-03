'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    alert('Message sent!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">Contact Us</h1>

      <div className="text-lg text-black mb-6">
        <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form below or via any of the contact methods listed.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Write your message here"
                rows={6}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Address:</strong> 123 Fake Street, Cityville, Country
            </li>
            <li>
              <strong>Phone:</strong> +123-456-7890
            </li>
            <li>
              <strong>Email:</strong> support@vibematchz.com
            </li>
            <li>
              <strong>Social Media:</strong>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600">Facebook</a>
                <a href="#" className="text-blue-400">Twitter</a>
                <a href="#" className="text-red-600">Instagram</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
