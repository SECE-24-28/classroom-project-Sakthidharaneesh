import {Link, Route, Routes} from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import { useEffect, useState } from 'react'
import Cart from './components/Cart';
import BuyNow from './components/BuyNow';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [user, setUser] = useState(localStorage.getItem("user"));
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCart([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            ELECTRO E-COMMERCE
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="relative group text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                  {cart.length}
                </span>
              )}
            </Link>
            
            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Hi, <span className="text-blue-600">{user}</span>
                </span>
                <button 
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full hover:shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-140px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products cart={cart} setCart={setCart}/>} />
          <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart}/>
            </ProtectedRoute>
          } />
          <Route path="/buynow/:id" element={
            <ProtectedRoute>
              <BuyNow />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2025 ELECTRO E-COMMERCE. All rights reserved.</p>
          <p className="text-sm mt-2">Built with MERN Stack & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App