import React from 'react'
import body from '../../assets/body.avif'

import './body.css'
import Carosuel_card from '../../components/carousel_card/Carosuel_card'
import Header from '../header/Header'
import Card from '../../components/Brand_card/Card'


const Body = () => {
  return (
    <div className='body'>
        <Header/>
        <Carosuel_card/>
        <Card/>
        
        
    
        {/* <div className='body-image'>
         <img src={body} alt='img'/>
        </div> */}
        <div>

        </div>

    </div>
  )
}

export default Body
