import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import {AiOutlineShoppingCart } from 'react-icons/ai'

export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Link className='navbar-brand text-white' style={{fontSize: 40}} to='/'>Glamour City</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link text-white'>Brands</Link>
                        <Link to='/products' className='nav-link text-white'>Products</Link>
                        <Link to='/category' className='nav-link text-white'>Category</Link>
                    </Nav>

                    <div className="d-flex gap-3 mx-2">
                        <Link to='/profile' className="btn btn-outline-dark d-flex align-items-center gap-3 text-white">
                            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                            Profile
                        </Link>
                        <Link to='/cart' className='nav-link text-white' style={{padding: 20}}><AiOutlineShoppingCart/>Cart</Link>

                        <button className="btn btn-dark mx-2"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}

                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}