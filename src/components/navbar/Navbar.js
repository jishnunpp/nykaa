
import React,{useState} from 'react'
import logo from '../../assets/logo1.png'
import './navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GrClose} from "react-icons/gr";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    <div className='main_navbar'>

      <div className='section'>
        <div className='navbar-logo'>
        <img src={logo} alt='logo'/>
        <ul className='navbar-links'>
            <li><a>Categories</a></li>    
            <li><a>Brand</a></li>
            <li><a>Luxe</a></li>
            <li><a>Nykaa Fashion</a></li>
            <li><a>Beauty Advice</a></li>
         </ul>
         <input type='text' placeholder='🔍  Search on Nykaa'/> 
        </div>

      </div>
    
        <div className='navbar-sign' >
          <button type='button' onClick={() => setToggleMenu(true)} >Sign in</button>
            {toggleMenu && (
          <div className='popup'>
           <div className='heading_signin'>
           <div className='close-btn' onClick={() => setToggleMenu(false)}> < GrClose/></div>
          <h3>Login / Create Account </h3>
           </div>
           <div>
           <p>Register now and get<b> 2000 Nykaa reward points instantly!</b></p>
           </div>
           <div>
        <Link to='login'>   <button type='button'>Sign in with Mobile / Email<div className='arrow'><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path></svg></div></button></Link> 
            <button>Google<div className='arrow' ><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path></svg></div></button>
           </div>
        
             
       
         </div>
        )}
        <div className='cart'>

        <HiOutlineShoppingBag />
        </div>
        
        
      </div>





        
        
      
    </div>
  )
}

export default Navbar
