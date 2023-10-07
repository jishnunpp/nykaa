import React from 'react'
import logo from '../../assets/logo1.png'
import './navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt='logo'/>
             
         <ul className='navbar-links'>
            <li><a>Categories</a></li>
            <li><a>Brand</a></li>
            <li><a>Luxe</a></li>
            <li><a>Nykaa Fashion</a></li>
            <li><a>Beauty Advice</a></li>
         </ul>
        </div>
        <div className='navbar-sign'>
            <input type='text' placeholder='🔍 Search on Nykaa'/> 
            <button type='button'>Sign in</button>
            <HiOutlineShoppingBag/>
        </div>
      
    </div>
  )
}

export default Navbar
