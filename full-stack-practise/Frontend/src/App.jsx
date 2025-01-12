import { useState } from 'react'
import './App.css'
import NotFound from './pages/Client/NotFound'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Client/Home'
import Basket from './pages/Client/Basket'
import Favorites from './pages/Client/Favorites'
import ClientLayout from './components/ClientLayut'
import AdminLayouts from './components/adminlayout'
import Dashboard from './pages/Admin/Dashboard'
import AddProduct from '../src/pages/Admin/AddProduct'
import Tableproducts from './pages/Admin/TableProducts'
import Products from './pages/Client/Products'
import Details from './pages/Client/Details'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      
      <Route path='/' element={<ClientLayout />}>
      <Route index element= {<Home />}/>
      <Route path ="products" element= {<Products />}>
      <Route path =":id" element= {<Details/>}/>
      </Route>
        <Route path ="basket" element= {<Basket/>}/>
        <Route path ="favorites" element= {<Favorites />}/>
      </Route>
      <Route path='/admin' element={<AdminLayouts />}>
      <Route index element= {<Dashboard />}/>
      <Route path='addproduct' element= {<AddProduct />}/>
      <Route path='tableproducts' element= {<Tableproducts />}/>
      </Route>
      <Route path ="*" element= {<NotFound />}/>
    </Routes>
    
    </>
  )
}

export default App
