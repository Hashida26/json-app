import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ValidationSchema } from "./Validation"; // Yup schema
import Swal from 'sweetalert2';


function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    brand: "",
    model: "",
    price: "",
  });

  // fetch product for edit
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:10000/laptops/${id}`)
        .then((res) => setInitialValues(res.data))
        .catch((err) => console.error("Error fetching:", err));
    }
  }, [id]);

  // submit handler
  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (id) {
        await axios.put(`http://localhost:10000/laptops/${id}`, values);
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Laptop updated successfully!',
        showConfirmButton: false,
        timer: 1500,
        toast: true
      });
      } else {
        await axios.post("http://localhost:10000/laptops", values);
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Laptop added successfully!',
        showConfirmButton: false,
        timer: 1500,
        toast: true
      });
        resetForm();
      }
      navigate("/");
    } catch (error) {
      console.error(error);
       Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong!',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {id ? "✏️ Edit Laptop" : "➕ Add New Laptop"}
        </h2>

        {/* Formik Form */}
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Brand */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Brand
                </label>
                <Field
                  name="brand"
                  type="text"
                  placeholder="Enter brand"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

              </div>

              {/* Model */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Model
                </label>
                <Field
                  name="model"
                  type="text"
                  placeholder="Enter model"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="model"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Price
                </label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                {isSubmitting
                  ? id
                    ? "Updating..."
                    : "Adding..."
                  : id
                  ? "Update Laptop"
                  : "Add Laptop"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ProductForm;
