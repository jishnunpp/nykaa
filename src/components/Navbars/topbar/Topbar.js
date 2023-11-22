import React from 'react';
import './topbar.css';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { BiMap, BiHelpCircle } from 'react-icons/bi';
import { MdCardGiftcard } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_heading">
        <div className="left_message">
          <a>BEAUTY BONANZA Get Your Daily Does Of Amazing Deals!</a>
        </div>
      </div>
      <div className="topbar_menu">
        <ul className="topbar-links">
          <li>
            <a>
              <span className="icon">
                <HiOutlineDevicePhoneMobile />
              </span>
              <span>Get App</span>
            </a>
          </li>
          <div />
          <li>
            <a>
              <span>
                <BiMap />
              </span>
              <span>Store & Events</span>
            </a>
          </li>
          <div />
          <li>
            <a>
              <span>
                <MdCardGiftcard />
              </span>
              <span>Gift Card</span>
            </a>
          </li>
          <div />
          <li>
            <a>
              <span>
                <BiHelpCircle />
              </span>
              <span>Help</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
