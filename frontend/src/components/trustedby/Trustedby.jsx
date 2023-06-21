import React from 'react'
import './Trustedby.scss'
import { images } from '../../constants'

const Trustedby = () => {
  return (
    <div className='trustedBy'>
        <div className="trustedBy--container">
            <div className="head--text">
                <div className="hr"><hr/></div>
                <span>Trusted By</span>
                <div className="hr"><hr/></div>
            </div>
            <div className="brands">
                <img src={images.microsoft} alt="microsoft" />
                <img className='hide' src={images.amazon} alt="amazon" />
                <img className='hide--smll' src={images.airbnb} alt="airbnb" />
                <img className='hide' src={images.google} alt="google" />
                <img className='hide' src={images.telstra} alt="telstra" />
                <img src={images.nasa} alt="nasa" />
                <img className='hide--smll' src={images.fb} alt="fb" />
                <img className='hide' src={images.airbus} alt="airbus" />
                <img src={images.fujitsu} alt="fujitsu"/>
                <img className='hide' src={images.deloitte} alt="deloitte" />
                <img className='large hide' src={images.ibm} alt="ibm" />
            </div>
        </div>
    </div>
  )
}

export default Trustedby