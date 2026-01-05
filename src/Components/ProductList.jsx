import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'

function ProductList() {
  const [items, setitems] = useState({})
  const [loading, setloading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/laptops")
        setitems(response.data)

      } catch (error) {
        console.log("Something went wrong", error);


      }
      finally {
        setloading(false)
      }
 }
    fetchData()

  },[])
 const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/laptops/${id}`);
    console.log("Deleted:", response.data);
 setitems((prev) => prev.filter((item) => item.id !== id)) 
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
  


  return (
    <>
    {loading?<Loader/>:(
   
    <div className="min-h-screen bg-gray-50 p-6">
  <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 drop-shadow-md">
    LAPTOP COLLECTION
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {items.map((item) => (
      <div
        key={item.id}
        className="bg-gradient-to-tr from-white to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
      >
        <h2 className="text-xl font-bold mb-1 text-gray-900 drop-shadow-sm">
          {item.brand}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{item.model}</p>
        <p className="text-blue-600 font-extrabold text-lg mb-4 drop-shadow-md">
          ₹{item.price}
        </p>
        <div className="flex justify-between gap-3">
            
         
          <Link 
          to={`/laptops/${item.id}`}
  className="flex-1 py-1 px-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md hover:shadow-lg text-center">

          view
          </Link>

          <Link
          to={`/edit/${item.id}`}
           className="flex-1 py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg">
            Edit
            </Link>
          
           <button className="absolute top-2 right-2 text-red-600 font-bold text-lg hover:text-red-800" onClick={()=>deleteProduct(item.id)}>
    ✖
  </button>
        </div>
      </div>
    ))}
  </div>
</div>

    )}
     </>

 
  )
}

export default ProductList
