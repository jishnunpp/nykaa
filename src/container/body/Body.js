import React from 'react'
import body from '../../assets/body.avif'

import './body.css'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Menubar from '../../components/menubar/Menubar'


const Body = () => {
  return (
    <div className='body'>
        <Topbar/>
        <Navbar/>
        <Menubar/>
        <div className='body-image'>
         <img src={body} alt='img'/>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Body
