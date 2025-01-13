import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Products/index.css"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [basket, setBasket] = useState([]);
  const DB_URL = "http://localhost:8080";


  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${DB_URL}/products`);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
    getProducts();
  }, []);

  const updateBasketInLocalStorage = (newBasket) => {
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  const handleAddToCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to add ${product.title} to your cart?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add to cart",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBasket = [...basket];
        const existingProductIndex = updatedBasket.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex >= 0) {
          updatedBasket[existingProductIndex].quantity += 1;
        } else {
          updatedBasket.push({ ...product, quantity: 1 });
        }

        updateBasketInLocalStorage(updatedBasket);

        Swal.fire(
          "Added to Cart!",
          `${product.title} has been added to your cart.`,
          "success"
        );
      }
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Products</h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {products.map(product => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card h-100">
                <div className='image-container'>
                   <img src={product.imageUrl} className="card-img-top product-image" alt={product.title} />
                   
                </div>              
                <div className="card-body">
                <button className="country">{product.country}</button>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text description">{product.description}</p>
                </div>
                <div>
                   <button
                    onClick={() => handleAddToCart(product)}
                   >Add to Cart</button>
                   <button><Link to={`/Details/${product._id}`}>Details</Link></button>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
