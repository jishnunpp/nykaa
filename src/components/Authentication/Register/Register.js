import React from 'react';
import './Register.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <div className="register-box">
        <div className="register-heading">
          <div className="register-close-btn">
          <Link to={'sigin'}><GrClose /></Link>
          </div>

          <div className="register-heading_text">
            <h4>LOGIN / REGISTER</h4>
          </div>
        </div>
        <div className="register-text">
           <p>Register to Earn<span>2000  Reward Points!</span></p>
          </div>
        
        <form>
                   
                    <div className="register-input-section">
                      <label for="fname">Name</label>
                      <br />

                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="register-input-section ">
                      <label for="lname">Phone</label>
                      <br />

                      <input type="number" id="lname" name="lname" />
                    </div>
                    <div className="register-input-section ">
                    <label for="lname">Email Address</label>
                      <br />
                      
                      

                      <input
                        type="email"
                        placeholder="E-mail Address"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    
                    <div className="register-form-button">
                      <button >REGISTER</button>
                    </div>
                  </form>
      </div>
    </div>
  );
};

export default Register;
