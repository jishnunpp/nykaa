import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Menubar from '../../components/menubar/Menubar'

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
