import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-beige-50 to-orange-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Nude Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm text-gray-700">
            Welcome to <span className="text-blue-400">Shopey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Explore premium laptops for every need — stylish, powerful, and affordable.
          </p>

          {/* Shop Now Button → navigates to /products */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/products"
              className="px-6 py-3 bg-rose-400 text-white font-semibold rounded-lg shadow-md hover:bg-rose-500 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-16 px-6 md:px-20 bg-white text-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At <span className="font-semibold text-rose-500">Shopey</span>, we
            curate the finest laptops for work, creativity, and gaming.  
            Our mission is to provide a seamless shopping experience with
            reliability, elegance, and care.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
