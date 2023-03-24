import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
import './RegisterOpt.scss'

const RegisterOpt = () => {
  return (
    <div className='regopt--container'>
        <div className="content">
            <div className="register">
                <h2>Join as a Client or Freelancer</h2>
                <div className="input">
                  <div className="button">
                    <Link to='register-client' className='link btn'><button>Join as a Client</button></Link>
                    <Link to='register-freelancer' className='link btn'><button>Apply as a Freelancer</button></Link>
                    <p>
                        Already have an account? <Link to='Log-in' className='link log-in'>Log In</Link>
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterOpt