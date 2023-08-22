import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCards({ name, image, url }) {
    return (
        <div className="col-md-3">
            <Link to={url} className='text-decoration-none'>
                <div className="card bg-dark m-2">
                    <img src={image} className="card-img-top p-5" alt={name} style={{ height: '40vh', objectFit: 'contain' }} />
                    <div className="card-body">
                        <h5 className="card-title text-white">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}