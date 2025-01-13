import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const DB_URL = "http://localhost:8080";

const TableProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${DB_URL}/products`);
      setProducts(res.data.products); 
    } catch (error) {
      console.log("Ошибка получения данных:", error);
    } finally {
      setLoading(false);
    }
  };
  const DeleteProduct = async (productId) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (confirmed.isConfirmed) {
      try {
        await axios.delete(`${DB_URL}/products/${productId}`);
        Swal.fire('Deleted!', 'The product has been deleted.', 'success');
        getProducts(); 
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the product.', 'error');
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div className="container my-5">
      <h2>Список продуктов</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Загрузка...</span>
          </div>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>imageUrl</th>
              <th>title</th>
              <th>description</th>
              <th>price</th>
              <th>country</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td><img src={product.imageUrl} alt="" width={100}/></td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>           
                <td>{product.country}</td>   
                <th><button className='btn' onClick={() => DeleteProduct(product._id)}><FaTrashAlt/></button></th>        
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableProducts;
