import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/context'
import Cookies from 'js-cookie';
import axios from 'axios';
import { AppRoute } from '../../../App';

export default function LoginForm() {


    const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const { state, dispatch }= useContext(GlobalContext)

  const loginUser = (e) =>{
    e.preventDefault();

    const payload = { email, password }
    console.log(payload)
    axios.post('/api/login', payload)
    .then((json)=> {
            console.log(json.data.token)
          Cookies.set('token', json.data.token)
          dispatch({
            type : "USER_LOGIN",
            token : json.data.token
          })
          
            
    })
    .catch(err=> console.log(err.message))
  }
  return (
    <div className="container">
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
    <div className='p-5 bg-dark rounded text-white'>
      <form onSubmit={loginUser}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder='Enter Email'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

    </div>
    </div>
  </div>
  )
}
