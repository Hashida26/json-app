import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // ✅ import cart icon

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-50 p-4 shadow-md backdrop-blur-sm">
      {/* Left Section: Logo */}
      <div className="flex-shrink-0 flex items-center space-x-2">
  <Link to="/" className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-pulse">
      S
    </div>
    <h1 className="text-gray-800 text-2xl font-extrabold tracking-wide drop-shadow-sm">
      Shopey
    </h1>
  </Link>
</div>

      {/* Middle Section: Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 relative group font-medium"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/products"
          className="text-gray-600 hover:text-gray-900 relative group font-medium"
        >
          Products
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/add-product"
          className="text-gray-600 hover:text-gray-900 relative group font-medium"
        >
          Add Product
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Right Section: Search + Cart */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* 🛒 Cart Icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl text-gray-700 hover:text-gray-900 transition-all" />
          {/* Optional: small red dot showing items count */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
