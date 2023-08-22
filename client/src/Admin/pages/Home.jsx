import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import {BiLogoProductHunt} from 'react-icons/bi'
import {BiCategoryAlt} from 'react-icons/bi'
import Products from './Products'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='admin-home'>
      <h2>Dashboard</h2>
     <div className="d-flex my-5 ">
      <div className="card d-flex justify-content-center align-items-center" style={{ width: "15rem", cursor: 'pointer' }}>
      <BiLogoProductHunt style={{fontSize : 50}} />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: 25}}>Products</h5>
          <p className="card-text" style={{fontSize: 20}}>
            1,200
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
          </a>
        </div>
      </div>

      <div className="card mx-2 d-flex justify-content-center align-items-center" style={{ width: "15rem", cursor: 'pointer' }}>
      <BiCategoryAlt style={{fontSize: 50}} />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: 25}}>Categories</h5>
          <p className="card-text" style={{fontSize: 20}}>
            1,200
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
          </a>
        </div>
      </div>

      <div className="card mx-2 d-flex justify-content-center align-items-center"style={{ width: "15rem", cursor: 'pointer' }}>
      <AiOutlineShoppingCart style={{fontSize : 50}} />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: 25}}>Orders</h5>
          <p className="card-text" style={{fontSize: 20}}>
            1,200
          </p>
        </div>
        <div className="card-body">
          <a href="" className="card-link">
          </a>
          

        </div>
      </div>

     </div>


    </div>
  )
}
