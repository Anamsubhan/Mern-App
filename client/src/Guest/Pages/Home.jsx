import React from 'react'
import Brand from '../Components/Brands'
import Category from '../Components/Category'
import GuestNav from '../Components/GuestNav'
import Banner from '../../User/Components/Banner'

export default function Home() {
    return (
        <div>
            <GuestNav/>
            <Banner/>
            <Category />
            <Brand />
        </div>
    )
}