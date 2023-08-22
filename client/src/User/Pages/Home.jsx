import React from 'react'
import Products from './Products'
import Brands from './Brands'
import Category from './Category'
import Banner from '../Components/Banner'
import AdminFooter from '../../Admin/components/AdminFooter'
export default function Home() {
    return (
        <>
           <Banner/>
            <Products/>
            <Brands/>
            <Category/>
            <AdminFooter/>

            </>

            )
}