import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import{ ValidationSchema } from "./Validation";
import axios from "axios";




function AddProduct() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Laptop
        </h2>

        <Formik
          initialValues={{ brand: "", model: "", price: "" }}
          validationSchema={ValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await axios.post("https://json-backend-qcci.onrender.com/laptops", values);
              alert("Laptop added successfully!");

              console.log(values);
              

              resetForm();
            } catch (error) {
              console.error("Error adding laptop:", error);
              alert("Something went wrong!");
            }
          }}

        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Brand */}
              <div>
                <label className="block text-gray-700 font-medium">Brand</label>
                <Field
                  name="brand"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter brand"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Model */}
              <div>
                <label className="block text-gray-700 font-medium">Model</label>
                <Field
                  name="model"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter model"
                />
                <ErrorMessage
                  name="model"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 font-medium">Price</label>
                <Field
                  name="price"
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter price"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Adding..." : "Add Laptop"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddProduct;
