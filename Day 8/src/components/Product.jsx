import React from 'react'
import { products } from '../utils/Api'
import { Link, useParams } from 'react-router-dom'

export default function Product({ cart, setCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  
  if (!product) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Home</Link>
    </div>
  );

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-[500px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500" 
          />
        </div>
        
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
              Premium Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h2>
            <p className="text-4xl font-bold text-blue-600 mb-6">₹{product.price.toLocaleString()}</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button 
              onClick={addToCart}
              className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Add to Cart
            </button>
            <Link 
              to={`/buynow/${product.id}`}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
            >
              Buy Now
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-bold text-gray-900">Free Delivery</p>
              <p className="text-xs text-gray-500">On orders over ₹500</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Return Policy</p>
              <p className="text-xs text-gray-500">30 days return</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Secure Payment</p>
              <p className="text-xs text-gray-500">100% secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}