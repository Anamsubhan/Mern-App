import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './Context/context.jsx'
import CartContextProvider from './User/CartContext/context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <CartContextProvider>
      <BrowserRouter>
    <App/>
    </BrowserRouter>
    </CartContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
)
