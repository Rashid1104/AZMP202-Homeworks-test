import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa';
import './index.css';


const AdminHeader = () => {
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
                    <NavLink to={"/admin/"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/admin/addproduct"}>Add Product</NavLink>
                </li>
                <li>
                    <NavLink to={"/admin/tableproducts"}>Table Products</NavLink>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default AdminHeader