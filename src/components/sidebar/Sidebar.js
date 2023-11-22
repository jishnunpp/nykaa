import React from 'react';
import './sidebar.css';
import { CgProfile } from 'react-icons/cg';
import { IoWallet } from 'react-icons/io5';
import { CiDeliveryTruck } from 'react-icons/ci';
import { BsFillHeartFill } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
        <div className="sidebar-section active">
          <Link to={'Myprofile'}>
            <a>
              <i>
                <CgProfile className="sidebar-icon" />
              </i>
              My Profile
            </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <Link to={'wallet'}>
            <a>
              <i>
                <IoWallet className="sidebar-icon" />
              </i>
              My Wallet
            </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <Link to={'orders'}>
            <a>
              <i>
                <CiDeliveryTruck className="sidebar-icon" />
              </i>
              My Orders
            </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <Link to={'whishlist'}>
            <a>
              <i>
                <BsFillHeartFill className="sidebar-icon" />
              </i>
              My Wishlist
            </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <Link to={'savedpayment'}>
            <a>
              <i>
                <GiWallet className="sidebar-icon" />
              </i>
              My Saved Payment
            </a>
          </Link>
        </div>
        <div className="sidebar-section">
          <Link to={'logout'}>
            <a>
              <i>
                <IoMdLogOut className="sidebar-icon" />
              </i>
              Log Out
            </a>
          </Link>
        </div>
      
    </div>
  );
};

export default Sidebar;
