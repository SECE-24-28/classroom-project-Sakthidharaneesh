import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    "Smartphones", "Laptops", "Audio", "Wearables", "Gaming"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 px-8 py-24 md:py-32 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Welcome to <span className="text-blue-400">ELECTRO E-COMMERCE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Your one-stop destination for premium electronics, gadgets, and lifestyle accessories. Experience the future of shopping today.
          </p>
          <Link 
            to="/shop" 
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">About ELECTRO E-COMMERCE</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2025, ELECTRO E-COMMERCE has established itself as a leader in the e-commerce space, dedicated to providing the latest technology and exceptional customer service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make premium technology accessible to everyone. We carefully curate our collection to ensure quality, durability, and performance. Whether you're a tech enthusiast, a professional, or just looking for an upgrade, we have something for you.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-900 text-xl mb-1">10k+</h3>
              <p className="text-blue-700 text-sm">Happy Customers</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h3 className="font-bold text-purple-900 text-xl mb-1">100%</h3>
              <p className="text-purple-700 text-sm">Quality Guarantee</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
          <img 
            src="https://help.iubenda.com/wp-content/uploads/2025/06/ecommerce.jpg" 
            alt="About Us" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </section>

      {/* Categories Preview */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-gray-600">Browse our extensive collection by category</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat} 
              to={`/shop?category=${cat}`}
              className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 text-center transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="text-xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
