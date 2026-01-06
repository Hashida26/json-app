import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import Swal from 'sweetalert2';



function ProductDetailes() {

    const{id}=useParams()
    const[items,setitems]=useState({})
    const[loading,setloading]=useState(true)

    useEffect(()=>{
        const fetchdata=async()=>{
            try{
         const response=await axios.get(`https://json-backend-qcci.onrender.com/laptops/${id}`)
            setitems(response.data)

            console.log(response);
            

            }
            catch(error){
                console.log(error);
                
            }finally{
                setloading(false)
            }

        }
        fetchdata()
    },[])

    const handleaddtoCart=async()=>{
      try {
        const check=await axios.get(`https://json-backend-qcci.onrender.com/cart?id=${items.id}`)
      if(check.data.length>0){
         Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'item already in your cart',
              showConfirmButton: false,
              timer: 1500,
              toast: true
      })

      }
      else{
        await axios.post('https://json-backend-qcci.onrender.com/cart',items)
        Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'item added to cart succefully',
              showConfirmButton: false,
              timer: 1500,
              toast: true
      })

      }  } catch (error) {
        Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'error adding to cart',
              showConfirmButton: false,
              timer: 1500,
              toast: true
      })
        
      }
      
    
     

    }
  return (
    <div>
        {loading?<Loader/>:(
       

  
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full hover:shadow-2xl transition-shadow duration-300">
        {/* Laptop Name */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900 drop-shadow-sm">
          {items.brand} {items.model}
        </h2>

        {/* Price */}
        <p className="text-blue-600 font-extrabold text-xl mb-4 drop-shadow-md">
          ₹{items.price}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-6">
          This is a high-quality {items.brand} laptop model {items.model}. 
          Perfect for work, study, and entertainment. Sleek design and durable build.
        </p>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button onClick={handleaddtoCart}
          className="flex-1 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md hover:shadow-lg">
            Add to Cart
          </button>
          <Link
            to="/"
            className="flex-1 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition shadow-md hover:shadow-lg text-center"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  






        )}
      
    </div>
  )
}

export default ProductDetailes
