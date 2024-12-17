import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const Table = ({students, setstudents}) => {
    const deletest = (sId) =>{
setstudents(students.filter((q) =>
    q.id !== sId
))
    }
  return (
    <table>
<thead>
    <tr style={{textAlign: "left", paddingLeft: "2px"}}>
        <th>ID</th>
        <th>NAME</th>
        <th>GPA</th>
        <th>FACULTY</th>
        <th>ACTIONS</th>
    </tr>
</thead>
<tbody>
    {students &&
students.map((st) => {
return (
     <tr key={st.id}>
        <td>{st.id}</td>
        <td>{st.studentName}</td>
        <td>{st.gpa}</td>
        <td>{st.faculty}</td>      
        <td style={{ color: "red", cursor: "pointer"}}><FaTrash onClick={() => deletest(st.id)}/></td>
    </tr>

);
    })}   
</tbody>
    </table>
  )
}
Table.propTypes = {
    students: PropTypes.array,
    setstudents: PropTypes.func,
  };

export default Table