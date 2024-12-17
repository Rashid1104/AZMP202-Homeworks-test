
import { useState } from "react";
import { nanoid } from "nanoid";
import Swal from 'sweetalert2';
import "./index.scss";

const Form = ({ students, setstudents }) => {
    const [studentName, setstudentName] = useState("")
    const [gpa, setgpa] = useState(0)
    const [faculty, setfaculty] = useState("")

    const addst = (event) =>{
        event.preventDefault();
    
    if (studentName && gpa && faculty) {
        const student = {
           id: nanoid(),
        studentName,
        gpa,
        faculty   
        }    

        setstudents([...students, student]);

  setstudentName("");
      setfaculty("");
      setgpa(0);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните все поля.',
            confirmButtonText: 'OK'
        });
    }
}
  return (
    <form onSubmit={addst}>
        <fieldset>
            <legend>Students Form</legend>
            <div className='input'>
            <input
             type="text" 
             id='name' 
             placeholder='Enter name'
             value={studentName}
             onChange={(e) =>{
                setstudentName(e.target.value.trim());    
             }}
             />
            <input 
            type="number" 
            id='gpa' 
            placeholder='gpa' 
            value={gpa}
            onChange={(e) =>{
                setgpa(+e.target.value)
            }}
            />
            <input 
            type="text" 
            id='faculty' 
            placeholder='Enter faculty' 
            value={faculty}
            onChange={(e) =>{
               setfaculty(e.target.value.trim());    
            }}
            />
            <button type={"submit"}>Submit</button>
            </div> 
        </fieldset>
    </form>
  )
}

export default Form