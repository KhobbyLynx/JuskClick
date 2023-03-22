import React from 'react'
import { images } from '../../../constants'
import './section1.scss'
import Data from '../../../data'

// import { {icon} } from 'react-icons/bs'
const Section1 = () => {
    const icon = Data[4].map(data => data.icon)
    console.log(icon)
  return (
    <div className='container'>
        <div className="img">
            <img src={images.service} alt="services" />
        </div>
        <div className="text--content">
            <h2>Up your work game, it’s free.</h2> 
            {/* <div className="content"> */}
                {/* {Data[4].map(data => (
                   <div>{data.text}</div> 
                ))} */}
            {/* </div>        */}
        </div>
    </div>
  )
}

export default Section1