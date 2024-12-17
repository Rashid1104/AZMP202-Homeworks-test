import Form from '../Form'
import { useState } from "react";
import Table from '../Table';
const Students = () => {
    const [students, setstudents] = useState([])
  return (
    <div>
        <Form students = {students} setstudents = {setstudents}/>
        <hr />
        <Table students = {students} setstudents = {setstudents}/>
    </div>
  )
}

export default Students