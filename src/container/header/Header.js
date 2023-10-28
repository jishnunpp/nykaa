import React from 'react'
import Topbar from '../../components/Navbars/topbar/Topbar'
import Navbar from '../../components/Navbars/navbar/Navbar'
import Menubar from '../../components/Navbars/menubar/Menubar'

const Header = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Menubar/>
    </div>
  )
}

export default Header
