import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { AppRoute } from '../../App'

export default function Category() {

  const [category, setCategory] = useState([])
  useEffect(() => {
    axios.get('/api/getallcategories')
      .then((json) => setCategory(json.data.categories))
      .catch((err) => console.log(err))
  }, [category])

  const deletecategory = (_id) => {
    console.log(_id)
    const payload = { _id }


    let config = {
        method: 'delete',
        url: '/api/deletecategory',
        data: payload
    };


    axios(config).then(json => console.log(json.data)).catch(err => console.log(err))

}



  return (

    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-5 rounded" >
        <span className='fs-4 fw-bold text-white'>Categories</span>
        <CategoryModal recallData ={setCategory}/>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              category?.map((val, key) =>
            <tr key={key}>
              <th scope="row">{key+1}</th>
              <td>{val.catname}</td>
              <td><img src={val.catImage} className='img-fluid' style={{height:'5vh' , objectFit : 'contain'}} /></td>
              <td>
              <button className='btn btn-dark mx-1' onClick={()=> deletecategory(val._id)}><AiFillDelete/></button>
              </td>
            </tr>)
    }


          </tbody>
        </table>

      </div>
    </div>


  )
}
