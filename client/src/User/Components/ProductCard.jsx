import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ title, price, image, url }) {


    return (
        <div className="col-md-3">
            <Link to={url} className='text-decoration-none'>
                <div className="card bg-dark m-2">
                    <img src={image} className="card-img-top p-5" alt={title} style={{ height: '40vh', objectFit: 'contain' }} />
                    <div className="card-body text-white">
                        <h5 className="card-title text-center">{title}</h5>
                        <h6 className="card-price text-center">RS {price}</h6>
                        <hr />
                        <div className='button'><button className="w-100 btn text-white">Add to Cart</button></div>


                    </div>
                </div>
            </Link>
        </div>
    )
}