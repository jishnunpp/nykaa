import React from 'react';
import './oders.css';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Orders = () => {
  return <div className="orders">
    <div className="orders-heading">
    <div className='bag-button1'>
            <Link to={'/'}>    <span>< IoArrowBack/></span></Link>
               <a>My Orders</a>
            </div>

    </div>
    <div className="orders-content">
      <div className="orders-content-image">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.72 20.3l3.6-10.72c.19-.52.05-.8-.1-1-.37-.53-1.14-.51-1.29-.51H9.55L9 5.34C8.86 4.74 8.42 4 7.55 4H1.82C1.22 4 1 4.59 1 5.15v1.49c0 .53.22.36.84.36h4.83l3.7 15.87c-.58.63-.9 1.61-.9 2.46a3.44 3.44 0 0 0 3.38 3.46c1.79 0 3.13-1.79 3.35-2.79h7.2c.23 1 1.31 2.87 3.36 2.87a3.4 3.4 0 0 0 3.38-3.4c0-1.84-1.13-3.6-3.36-3.6-.93 0-2.03.13-2.55 1.13h-8.86a2.8 2.8 0 0 0-2.4-1.34l-.13-.66h13.48c1.02 0 1.22-.21 1.4-.7zM11.54 25.5a1.29 1.29 0 1 1 2.57 0 1.29 1.29 0 0 1-2.57 0zm15.24 1.27a1.27 1.27 0 1 1 0-2.54 1.27 1.27 0 0 1 0 2.54z" fill="#515151"></path></svg>

      </div>
      <div className="orders-content-text">
       <p>No Recent Orders</p>
      </div>
      <div className="orders-content-btn">
      <Link to={'/'}>   <button>start shopping</button></Link>
      </div>
    </div>
  </div>;
};

export default Orders;
