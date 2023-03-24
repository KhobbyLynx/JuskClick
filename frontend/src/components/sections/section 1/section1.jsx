import React from 'react'
import { BsPinAngle } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { MdStars } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
import './section1.scss'

const Section1 = () => {
  return (
    <div className='section1--container'>
        <div className="img">
            <img src={images.service} alt="services" />
        </div>
        <div className="content--container">
            <h2>Up your work game, it’s free.</h2> 
            <div className="content">
                <div className="item">
                    <HiOutlinePencilAlt className='icon'/>
                    <div className="text">
                        <h4>No cost to join.</h4>
                        <p>Register and browse professionals, explore projects, or even book a consultation.</p>
                    </div>
                </div>
                <div className="item">
                    <BsPinAngle className='icon'/>
                    <div className="text">
                        <h4>Post a job and hire top talent.</h4>
                        <p>Finding talent doesn't have to be a chore. Post a job and we can search for you!</p>
                    </div>
                </div>
                <div className="item">
                    <MdStars className='icon'/>
                    <div className="text">
                        <h4>Work with the best - without breaking the bank.</h4>
                        <p>JustClick makes it affordable to up your work and take advantage of low transaction rates.</p>
                    </div>
                </div>
            </div> 
            <div className="btns">
                <Link to='account' className='link'><button className='btn1'>Sign up for free</button></Link>
                <Link to='/how-it-works' className='link'><button className='btn2'>Learn how to hire</button></Link>
            </div>    
        </div>
    </div>
  )
}

export default Section1