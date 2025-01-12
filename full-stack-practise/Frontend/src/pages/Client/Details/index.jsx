import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams(); 
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const DB_URL = "http://localhost:8080";

  const getProductDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${DB_URL}/products/${id}`);
      setProducts(res.data.products);
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
    {loading ? (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : (
      product && (
        <div className="card">
          <img src={product.imageUrl} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Country:</strong> {product.country}</p>
          </div>
        </div>
      )
    )}
  </div>
  )
}

export default Details