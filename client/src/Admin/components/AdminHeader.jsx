import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/context'

export default function AdminHeader() {
    const {state, dispatch} = useContext(GlobalContext)

  const logOutUser = () =>{
    dispatch({
      type: "USER_LOGOUT"
    })
  }
  return (
    <div className='AppHeader'>
        <h1>Glamour City</h1>
        <h4 className='fs-5 '> Admin Dashboard</h4>
        <button className='btn btn-outline-light bg-dark text-white' onClick={logOutUser}>Logout</button>
    </div>
  )
}
