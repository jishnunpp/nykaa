import React from 'react';
import './signin.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="sign">
      <div className="signin-box">
        <div className="heading">
          <div className="close-btn">
          <Link to={'/'}>  <GrClose /></Link>
          </div>

          <div className="heading_text">
            <h4>LOGIN / REGISTER</h4>
          </div>
        </div>
        <div className="input">
          <input placeholder="Enter Email Id or Phone Number" />
          <p className="text">REQUIRED</p>
        </div>
        <div className="btn">
        <Link to={'register'}>  <button type="button">PROCEED</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
