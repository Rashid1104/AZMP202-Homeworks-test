import React from 'react';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom'; 
import './index.css'; 

const Login = () => {
    const navigate = useNavigate();

  const login = () => {
    Swal.fire({
      title: 'Login Successful!',
      text: 'Welcome back!',
      icon: 'success',
      confirmButtonText: 'Cool'
    }).then(() => {
       
        navigate('/login');
      });
  };

  return (
    <div className="form-container">
      <h2 className="welcome">Welcome</h2>
      <div className="a">
        <h2>A</h2>
      </div>
      <input type="email" id="loginEmail" placeholder="Email" required />
      <input type="password" id="loginPassword" placeholder="Password" required />
      <button onClick={login}>Login</button>
      <p className="text">Not a Member? <a href="/singup" className="link">Sign Up</a></p>
    </div>
  );
};

export default Login;
