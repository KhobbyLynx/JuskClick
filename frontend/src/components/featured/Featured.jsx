import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>How work <br className='br'/> should work</h1>
            <h4>
              Forget the old rules. You can have the best people. <br />
              Right now. Right here.
            </h4>
          </div>
          {/* <Link to='account' className='link'><button className='featuredBtn'>Get Started</button></Link> */}
          <div className="search">
            <input type="search" name="search" id="search" placeholder='Try "Building a Web App"'/>
            <button className='searchBtn'>Search</button>
          </div>
        </div>
        <div className="right">
          <img src={images.featured} alt="art" />
        </div>
      </div>
    </div>
  )
}

export default Featured