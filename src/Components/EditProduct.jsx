  import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ValidationSchema} from "./Validation";

function EditProduct() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [initialValues, setInitialValues] = useState({
    brand: "",
    price: "",
    model: "",
    
  });
    
    useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://json-backend-qcci.onrender.com/laptops/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
    

 
  const handleSubmit = async (values,{resetForm}) => {
    try {
      await axios.put(`https://json-backend-qcci.onrender.com/laptops/${id}`, values);
      alert("Product updated successfully!");
      navigate("/");
      resetForm();

      
    } catch (error) {
      console.log(error);
      alert("Error updating product");
    }
  };

    




  return (
    <>
  




  
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>

      
      <Formik
        enableReinitialize={true}  
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3">
            <div>
              <Field
                type="text"
                name="brand"
                placeholder="Brand"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="brand" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                type="text"
                name="price"
                placeholder="Price"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                type="text"
                name="model"
                placeholder="Model"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="model" component="div" className="text-red-500 text-sm" />
            </div>

            

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Update Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  




      
    </>
  )
}


export default EditProduct
