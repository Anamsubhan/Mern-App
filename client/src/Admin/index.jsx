import React from 'react'
import Sidebar from './components/Sidebar'
import Home from '../Admin/pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import {Route,Routes} from "react-router-dom";
import Brands from './pages/Brands'
import AdminHeader from './components/AdminHeader'
import AdminFooter from './components/AdminFooter'
import Update from './pages/Update'

export default function Admin() {
  return (
   <>
   <AdminHeader/>
    <div className="row m-0 p-0">
      <div className="col-md-3 m-0 p-0 bg-primary" style = {{height : '100vh'}}>
        <Sidebar/>
      </div>
      <div className="col-md-9">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      </div>
    </div>
    <AdminFooter/>

   </>
    
  )
}
