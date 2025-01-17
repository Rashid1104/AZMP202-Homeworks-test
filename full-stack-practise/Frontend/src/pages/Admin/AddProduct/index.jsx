import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import './index.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const DB_URL = "http://localhost:8080";

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
    price: Yup.number().positive('Price must be a positive number').required('Price is required'),
    description: Yup.string().required('Description is required'),
    country: Yup.string().required('Country is required'),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const productData = {
        title: values.title,
        description: values.description,
        price: values.price,
        imageUrl: values.imageUrl,
        country: values.country,
      };

      const response = await axios.post(`${DB_URL}/products`, productData);
      navigate('/admin/TableProducts');
      resetForm();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <Formik
        initialValues={{
          title: "",
          imageUrl: "",
          price: 0,
          description: "",
          country: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange }) => (
          <Form>
            <div>
              <label>Title</label>
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>

            <div>
              <label>Image URL</label>
              <Field type="url" name="imageUrl" className="form-control" />
              <ErrorMessage name="imageUrl" component="div" className="error-message" />
            </div>

            <div>
              <label>Price</label>
              <Field type="number" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>

            <div>
              <label>Description</label>
              <Field type="text" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>

            <div>
              <label>Country</label>
              <Field type="text" name="country" className="form-control" />
              <ErrorMessage name="country" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn btn-primary">Add Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;

