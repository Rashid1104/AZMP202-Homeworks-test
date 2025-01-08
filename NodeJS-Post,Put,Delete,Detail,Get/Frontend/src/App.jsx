import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"

import './App.css'

function App() {
  const [fakeApiData, setFakeApiData] = useState([])
  const [loading, setLoading] = useState(false)
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
  });
  const BASE_URL = "http://localhost:8080"


  const GetfakeApiData = async () => {
    try {
      setLoading(true)
      const res = await axios(`${BASE_URL}/fakeApiData`)
    
      setFakeApiData(res.data.fakeApiData)
      

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/fakeApiData/${pId}`)

      console.log(res);

      if (res.status === 200) {
      
        setFakeApiData([...fakeApiData.filter((p) => p.id !== pId)])
      } else {
        throw new Error("failed to delete")
      }

    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetails = async (pId) => {
    try {
      const res = await axios.get(`${BASE_URL}/fakeApiData/details/${pId}`);
      // console.log(res.data);       
      const FAD = res.data.FAD;
      
      Swal.fire({
        title: FAD.title,
        html: `
         <p>${FAD.description}</p>
          <h4>${FAD.category}</h4>
          <span><strong>Price:</strong> $${FAD.price}</span>         
        `,
        icon: 'info',
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Unable to fetch details', 'error');
    }
  };
  
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/fakeApiData`, newProduct);
      if (res.status === 200) {
        Swal.fire('Success', 'Product added successfully!', 'success');
        setFakeApiData((prev) => [...prev, res.data]); // Add the new product to the state
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Unable to add the product', 'error');
    }
  };

  useEffect(() => {
    GetfakeApiData();
 
  }, [])
  
  const confirmDelete = (pId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(pId)
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } 
    })
  }
  return (
    <>
     <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {fakeApiData.length > 0 && fakeApiData.map((p) => {
          return <li key={p.id}><span>{p.title}</span><button onClick={()=> handleDetails(p.id)} >Details</button> <button onClick={() => {         
            confirmDelete(p.id) 
          }}>delete</button></li>
        })}
      </ul>
    </>
  )
}

export default App
