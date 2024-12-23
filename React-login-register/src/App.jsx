
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import SignUp from './Components/register';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
