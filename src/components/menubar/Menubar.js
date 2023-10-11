import React from 'react'
import './menubar.css'

const Menubar = () => {
  return (
    <div className='menubar'>
          <ul className='menubar-links'>
            <li><a>Makeup</a></li>
            <li><a>Skin</a></li>
            <li><a>Hair</a></li>
            <li><a>Appliances</a></li>
            <li><a>Bath & Body</a></li>
            <li><a>Natural</a></li>
            <li><a>Mom & Baby</a></li>
            <li><a>Health & Wellness</a></li>
            <li><a>Men</a></li>
            <li><a>Fragrance</a></li>
            <li><a>Pop Ups</a></li>
         </ul>
         <div className='sale_btn'>
         <button type='button' >SALE</button>

         </div>
      
    </div>
  )
}

export default Menubar
