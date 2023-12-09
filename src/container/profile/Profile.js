import React from 'react';
import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-bigscreen">
        <Header />
        <div className="profile-section">
          <div>
            <ul className="profile-heading">
              <li>Home</li>
              <li>Profile</li>
            </ul>
          </div>
          <div className="profile-container">
            <div className="profile-sidebar">
              <Sidebar />
            </div>
            <div className="profile-data">
              <Outlet />
            </div>
          </div>
        </div>
        
      </div>
      <div className="profile-smallscreen">
          <Outlet />
          
        </div>
    </div>
  );
};

export default Profile;
