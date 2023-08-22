import React from 'react'
import GuestNav from './Components/GuestNav'
import {Navigate,Route,Routes,} from "react-router-dom";
import Login from './Pages/Login'
import Home from './Pages/Home'
import Signup from './Pages/Signup'


export default function Guest() {

  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to='/login' replace={true} />} />
    </Routes>
</>
  )
}
