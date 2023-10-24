import React from 'react'
import body from '../../assets/body.avif'

import './body.css'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Menubar from '../../components/menubar/Menubar'
import Carosuel_card from '../../components/carousel_card/Carosuel_card'


const Body = () => {
  return (
    <div className='body'>
        <Topbar/>
        <Navbar/>
        <Menubar/>
        <Carosuel_card/>
        
        
    
        <div className='body-image'>
         <img src={body} alt='img'/>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Body
