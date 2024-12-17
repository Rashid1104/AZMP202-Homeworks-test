import React from 'react'
import Form from '../form'
import { useState } from "react";

const Register = () => {
    const [register, setregister] = useState([])
  return (
    <div>
        <Form register={register} setregister={setregister}/>
        <h3>Users List:</h3>
      <ul>
        {register.map((user) => (
          <li key={user.id} style={{listStyleType: "none"}}>
            {user.email}  {user.password}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Register