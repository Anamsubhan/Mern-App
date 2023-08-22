import React, { useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import {GlobalContext} from '../../Context/context'
import {BiLogoProductHunt} from 'react-icons/bi'
import {TbBrandAbstract} from 'react-icons/tb'

export default function Sidebar() {
  

  const location = useLocation()

  const NavItems = [
    {
      tab: "Home",
      url: "/",
      icon: <FiHome />
    },
    {
      tab: "Products",
      url: "/products",
      icon: <BiLogoProductHunt />
    },
    {
      tab: "Categories",
      url: "/category",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Brands",
      url: "/brands",
      icon: <TbBrandAbstract />
    },

  ]

  

  return (
    <>
      <ul className="nav flex-column pt-3">
        {
          NavItems.map((val,key)=>
          
          <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-dark rounded' : null}`}>
          
          <Link className='nav-link text-white d-flex align-items-center gap-2' to={val.url}> 
          <span>{val.icon}</span>
          
        <span>{val.tab}</span>          
          </Link>
        </li>)
        }
        
      </ul>


    </>
  )
}
