import React, { useContext } from 'react'
import { GlobalContext } from '../Context/context'
import UserNav from './Components/UserNav'
import Brands from './Pages/Brands'
import Category from './Pages/Category'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductsByBrand from './Pages/ProductsByBrand'
import ProductByCategory from './Pages/ProductByCategory'
import ProductPage from './Pages/ProductPage'
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from './Pages/Cart'


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/brands/:brandname" element={<ProductsByBrand />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/:category" element={<ProductByCategory />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />

            </Routes>

        </>
    )
}