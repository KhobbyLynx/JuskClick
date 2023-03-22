import React from 'react'
import { images } from '../../constants'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
          <h1>How work <br /> should work</h1>
          <h4>
            Forget the old rules. You can have the best people. <br />
            Right now. Right here.
          </h4>
          <button>Get Started</button>
        </div>
        <div className="right">
          <img src={images.featured} alt="art" />
        </div>
      </div>
    </div>
  )
}

export default Featured