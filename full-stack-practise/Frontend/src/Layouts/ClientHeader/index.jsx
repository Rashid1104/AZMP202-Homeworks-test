import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import './index.css';

const ClientHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h3>
            We believe we help people <br />
            for happier lives
          </h3>

          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp"
              alt="Company Logo"
            />
          </div>

          <div className="phone-icon">
            <h4>+880 123 12 658 439</h4>
            <div className="logo-icon">
              <FaPhone />
            </div>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              Favorites<sup>0</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/basket"}>
              Basket<sup>0</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ClientHeader;
