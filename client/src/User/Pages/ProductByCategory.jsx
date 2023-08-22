import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AppRoute } from '../../App'

export default function ProductByCategory() {

    const {catname} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`/api/productbycategory/${catname}`)
            .then(json => console.log(json.data.products))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    products?.map((val, key) => <ProductCard key={key} image={val.thumb} title={val.title} price={val.price} url={`/products/${val.catname}`} />)
                }

            </div>
        </div>
    )
}