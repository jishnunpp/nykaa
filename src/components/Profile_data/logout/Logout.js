import React from 'react';
import './logout.css';
const Logout = () => {
  return <div className="logout">
    <div className="logout-section">
    <div className="logout-heading">
      <p>Are you sure you want to logout?</p>

    </div>
    <div className="logout-btn">
      <button>Logout</button>

    </div>
    <div className="logout-btn">
    <button>Logout All Devices</button>

    </div>
    <div className="logout-btn">
    <button>Logout</button>

    </div>
    </div>
    
  </div>;
};

export default Logout;
