import React from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const Profile = () => {
  return (
    <div className='profile-container'>
       <div className='profile-sidebar'>
        <Sidebar/>

       </div>
       <div className='profile-data'>
          
          <Outlet/>
       </div>
      
    </div>
  )
}

export default Profile
