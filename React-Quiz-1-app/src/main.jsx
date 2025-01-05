import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {BasketContext} from "../src/context/BasketContext"
import  FavoriteProductsProv from "../src/context/FavoriteProducts"

createRoot(document.getElementById("root")).render(
  <HelmetProvider> 
       <BrowserRouter>
       <BasketContext>
          <FavoriteProductsProv>
      <App />
      </FavoriteProductsProv> 
       </BasketContext>         
    </BrowserRouter>    
  </HelmetProvider>
);

