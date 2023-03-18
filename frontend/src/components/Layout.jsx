import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'
import Navbar from './navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout