import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'

import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </HelmetProvider>
,
)
