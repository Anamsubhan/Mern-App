import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppRoute } from '../../App';

export default function Update() {
    const {_id} = useParams();
    const [values, setValues] = useState({
        _id : _id,
        title : '',
        price : '',
        catname : '',
        brandname: '',
        desription : '' 
    })
    axios.get(`/api/updateproduct/${_id}`)
    .then(res => {
        setValues({...values, title: res.data.title , price : res.data.price, catname: res.data.catname, brandname: res.data.brandname, desription: res.data.desription})
    })
    .catch(err => console.log(err))

    useEffect(()=>{


    }, [])
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="price">
                        Price
                    </label>
                    <input
                        type="price"
                        className="form-control"
                        id="price"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category">
                        Category Name
                    </label>
                    <input
                        type="price"
                        className="form-control"
                        id="category"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand">
                        Brand Name
                    </label>
                    <input
                        type="brand"
                        className="form-control"
                        id="brand"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        type="description"
                        className="form-control"
                        id="description"
                        placeholder='enter email'
                    />
                </div>
                <button type="submit" className="btn btn-info">
                    Update
                </button>
            </form>
            </div>


        </div>
    )
}
