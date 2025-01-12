import React from 'react'
import { NavLink } from 'react-router-dom'
const ClientHeader = () => {
  
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={"/favorites"}>Favorites<sup>0</sup></NavLink>
                </li>
                <li>
                    <NavLink to={"/basket"}>Basket<sup>0</sup></NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default ClientHeader