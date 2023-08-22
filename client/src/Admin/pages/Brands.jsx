import React, { useEffect, useState } from 'react'
import BrandModal from '../components/BrandModal'
import axios from 'axios'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { json } from 'react-router-dom'
import { AppRoute } from '../../App'

export default function Brands() {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    axios.get('/api/getallbrands')
      .then((json) => {
      setBrands(json.data.brands)
  })
      .catch((err) => console.log(err))
  }, [brands])

  const deletebrand = (_id) => {
    console.log(_id)
    const payload = { _id }


    let config = {
        method: 'delete',
        url: '/api/deletebrand',
        data: payload
    };


    axios(config).then(json => console.log(json.data)).catch(err => console.log(err))

}


  return (

    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-5 rounded" >
        <span className='fs-4 fw-bold text-white'>Brands</span>
        <BrandModal recallData ={setBrands}/>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Brands Name</th>
              <th scope="col">Brands Image</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              brands?.map((val, key) =>
            <tr key={key}>
              <th scope="row">{key+1}</th>
              <td>{val.brandname}</td>
              <td><img src={val.brandImage} className='img-fluid' style={{height:'5vh' , objectFit : 'contain'}} /></td>
              <td>
              <button className='btn btn-dark mx-1' onClick={()=> deletebrand(val._id)}><AiFillDelete/></button>
              </td>
            </tr>)
    }


          </tbody>
        </table>

      </div>
    </div>


  )
}
