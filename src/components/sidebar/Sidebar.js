import React from "react";
import "./sidebar.css";
import { CgProfile } from 'react-icons/cg';
import { IoWallet } from 'react-icons/io5';
import {CiDeliveryTruck  } from 'react-icons/ci';
import { BsFillHeartFill } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { IoMdLogOut} from 'react-icons/io';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div  className="sidebar-section ">
       <Link to={'Myprofile'}>
       <a>
            <i >
              <CgProfile className="sidebar-icon"/>
            </i>
           My Profile
            
            
          </a>
       </Link>
        </div>
        <div className="sidebar-section">
        <Link to={'wishlist'}>
          <a >
            <i>
             <IoWallet className="sidebar-icon"/>
            </i>
            My Wallet
          </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <a class="css-vo1tj9">
            <i >
              <CiDeliveryTruck className="sidebar-icon"/>
            </i>
            My Orders
          </a>
        </div>
        <div className="sidebar-section">
          <a class="css-vo1tj9">
            <i>
              <BsFillHeartFill  className="sidebar-icon"/>
            </i>
            My Wishlist
          </a>
        </div>
        <div className="sidebar-section">
          <a >
            <i >
              <GiWallet className="sidebar-icon"/>
            </i>
            My Saved Payment
          </a>
        </div>
        <div className="sidebar-section">
          <a class="css-vo1tj9">
            <i >
             <IoMdLogOut className="sidebar-icon"/>
            </i>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
