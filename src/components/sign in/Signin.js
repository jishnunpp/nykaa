import React from 'react'
import './signin.css'
import { GrClose} from "react-icons/gr";





const Signin = () => {
  return (
    <div className='sign'>
        <div className='signin-box'>
            <div className='heading'>
                <div className='close-btn'>
                  <GrClose/>
                </div>
               
                <div className='heading_text'>
                  <h4 >LOGIN / REGISTER</h4>
                </div>
                
              
            </div>
            <div className='input'>
              <input placeholder='Enter Email Id or Phone Number'/>
              <p className='text'>REQUIRED</p>
            </div>
            <div className='btn'>
              <button type='button'>PROCEED</button>
            </div>

        </div>
      
    </div>
  )
}

export default Signin
