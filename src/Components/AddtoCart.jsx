import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'


function AddtoCart() {

    const [cartitem,setcartitem]=useState([])
     const [loading, setloading] = useState(true)
    useEffect(()=>{
        fetchCart()
    },[])

    const fetchCart=async()=>{
        try {
            const response=await axios.get("https://json-backend-qcci.onrender.com/cart")
            setcartitem(response.data)
            
        } catch (error) {
              Swal.fire({
      title: "Error!",
      text: "Something went wrong ..",
      icon: "error",
      confirmButtonColor: "#d33",
    });


            
        }finally{
            setloading(false)
        }

    }
    const delateCart=async(id)=>{
        try {
             const response=await axios.delete(`https://json-backend-qcci.onrender.com/cart/${id}`)
        setcartitem(((prev) => prev.filter((item) => item.id !== id)) )

    }

            
         catch (error) {
            console.log("something went wrong")
            
        }
    }
      const total = cartitem.reduce((sum, item) => sum + item.price, 0);

       
  return (
  <>
    {loading ? (
      <Loader />
    ) : (
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🛒 Your Cart
        </h1>

        {cartitem.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty...</p>
        ) : (
          <div className="w-full max-w-md flex flex-col gap-4">
            {/* Cart Items */}
            {cartitem.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-gray-800">
                    {item.brand} {item.model}
                  </h3>
                  <p className="text-gray-500 text-sm">₹{item.price}</p>
                </div>
                <button
                  onClick={() => delateCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Price Box */}
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-md mt-4">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="font-bold text-blue-600">₹{total}</span>
            </div>

            
          </div>
        )}
      </div>
    )}
  </>
);

}

export default AddtoCart
