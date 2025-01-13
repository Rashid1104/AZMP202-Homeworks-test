import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const DB_URL = "http://localhost:8080";

  const getProductDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${DB_URL}/products/${id}`);
      setProduct(res.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <div className="container my-5">
      <div className="card">
            <img 
              src={product.imageUrl} 
              className="card-img-top" 
              alt={product.title} 
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Country:</strong>{product.country}</p>
            </div>
          </div>
    </div>
  );
};

export default Details;
