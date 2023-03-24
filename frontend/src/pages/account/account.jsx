import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { images } from '../../constants'
import './account.scss'

const account = () => {
  return (
    <div className='account--container'>
        <div className="logo">
            <Link to='/' className='link'><img src={images.logo} alt="JuskClick" /></Link> 
        </div>
        <Outlet />
        <div className="footer">
            <p>© 2015 - 2023 JustClick® Global Inc.</p>
        </div>
    </div>
  )
}

export default account