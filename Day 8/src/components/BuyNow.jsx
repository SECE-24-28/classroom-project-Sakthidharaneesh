import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { products } from '../utils/Api';

export default function BuyNow() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  
  if (!product) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Home</Link>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden text-center p-12 border border-gray-100">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
      <p className="text-gray-500 mb-8">Thank you for your purchase. Your order is being processed.</p>
      
      <div className="bg-gray-50 rounded-xl p-6 mb-8 flex items-center gap-6 text-left">
        <img src={product.image} alt={product.name} className="w-20 h-20 object-contain bg-white rounded-lg p-2" />
        <div>
          <h3 className="font-bold text-gray-900">{product.name}</h3>
          <p className="text-blue-600 font-bold">₹{product.price.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">Qty: 1</p>
        </div>
      </div>
      
      <Link 
        to="/"
        className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg"
      >
        Continue Shopping
      </Link>
    </div>
  )
}