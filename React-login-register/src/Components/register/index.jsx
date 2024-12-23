import React from 'react';
import Swal from 'sweetalert2'; 
import './index.css';

const SignUp = () => {
  const register = () => {
    Swal.fire({
      title: 'Sign Up Successful!',
      text: 'Welcome to our platform.',
      icon: 'success', 
      confirmButtonText: 'Cool' 
    });
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <p>
        Already a member? <a href="/login">Log In</a>
      </p>
      <input type="email" id="InputEmail1" placeholder="Email" required />
      <input type="password" id="InputPassword1" placeholder="Password" required />
      <button onClick={register}>Sign Up</button>
      <div className="divider">or sign up with</div>
      <div className="social-login">
        <i className="fa-brands fa-square-facebook icon" style={{ color: '#74C0FC' }}></i>
        <i className="fa-brands fa-google icon" style={{ color: '#ff1900' }}></i>
      </div>
    </div>
  );
};

export default SignUp;
