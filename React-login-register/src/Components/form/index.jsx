import React from 'react'
import "./index.scss"
import { nanoid } from 'nanoid';
import { useState } from 'react'
import { GoEyeClosed } from "react-icons/go";
import Swal from 'sweetalert2';

const Form = ({register, setregister}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const AddUser = (e) =>{
        e.preventDefault();
    if (email && password) {
        const regist = {
         id: nanoid(),
        email,
        password  
        }     
        setregister([...register,regist])
        setemail("")
        setpassword("")
    }else{
Swal.fire({
icon: "error",
title: "err",
text: "error please fill all fields"
})
    }
}
  return (
   <form onSubmit= {AddUser}>
    <fieldset>
        <legend><h2>Register</h2></legend>
        <div className='input'>
             <input type="email" id='email' placeholder='Enter email' value={email} onChange={(e) =>{
setemail(e.target.value.trim())
            }}/>
            <div className='for-icons'>
            <input type="password" id='password' placeholder='Enter password' value={password}
        onChange={(e) =>{
            setpassword(e.target.value.trim())
                        }}
        /><GoEyeClosed />
            </div>
        <button type={"submit"}>Send</button>
        </div>      
    </fieldset>
   </form>
  )
}

export default Form