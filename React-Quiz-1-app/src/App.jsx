import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Client/Home";
import Dashboaard from "./pages/Admin/Dashboard";
import Contact from "./pages/Client/Contact";
import Products from "./pages/Client/Products";
import AdminProducts from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import ProductDetails from "./pages/Client/ProductDetails";
import NotFound from "./components/NotFound";
import ClientLayout from "./components/Client/ClientLayout";
import AdminLayout from "./components/Admin/AdminLayout";
import AddProduct from "./pages/Admin/AddProduct";

function App() {
  return (
    <>
      <Routes>
      
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
       
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboaard />} />

          <Route path="products">
            <Route index element={<AdminProducts />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
