import { useState } from 'react'
import './App.css'
import Register from './Components/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register />
    </>
  )
}

export default App
