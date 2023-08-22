import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import { Link, json } from 'react-router-dom'
import { AppRoute } from '../../App'


export default function Products() {

  const [products, setProducts] = useState([])

  

  useEffect(() => {
    axios.get('/api/getallproducts')
      .then((json) => {
        setProducts(json.data.products)
      })
      .catch((err) => console.log(err))
  }, [products])


  const deleteproduct = (_id) => {
    console.log(_id)
    const payload = { _id }


    let config = {
        method: 'delete',
        url: '/api/deleteproduct',
        data: payload
    };


    axios(config).then(json => console.log(json.data)).catch(err => console.log(err))

}
  return (

    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-5 rounded" >
        <span className='fs-4 fw-bold text-white'>Products</span>
        <ProductModal/>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">category</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>



            </tr>
          </thead>
          <tbody>
            {
              products?.map((val, key) =>
            <tr key={key}>
              <td><img src={val.thumb} className='img-fluid' style={{height:'5vh' , objectFit : 'contain'}} /></td>
              <td>{val.title}</td>
              <td>{val.catname}</td>
              <td>{val.brandname}</td>
              <td>{val.price}</td>
              <td>{val.description.length < 20 ? val.description : val.description.substring(0, 20) + "..."}</td>
              <td>
              <button className='btn btn-dark' onClick={()=> deleteproduct(val._id)}><AiFillDelete/></button>
              </td>
              <td>
              <Link className='btn btn-dark' to ={'/update/${_id}'}><BsFillPencilFill/></Link>
              </td>
            </tr>)
    }


          </tbody>
        </table>

      </div>
    </div>


  )
}
