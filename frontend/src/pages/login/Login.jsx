import { auth, googleProvider } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { async } from '@firebase/util'

const Login = () => {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
    }
  )

  function handleChange(event) {
    const {name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: value
      }
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    } catch (error) {
      console.error(error)
    }
    setFormData(
      {
        email: '',
        password: '',
      }
    )    
  }

  const googleAcc =async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='reg--container'>
      <h2>Login Here</h2>
      <form className="content" onSubmit={handleSubmit}>
        <input 
          required 
          autoComplete='on' 
          value={formData.email} 
          onChange={handleChange} 
          className='input' 
          type="email" 
          name="email" 
          id="email" 
          placeholder='Email'
        />
        <input 
          required 
          autoComplete='on' 
          value={formData.password} 
          onChange={handleChange} 
          className='input' 
          type="password" 
          name="password" 
          id="password" 
          placeholder='Password'
        />
        <button>Log In</button>
      </form>
        <button onClick={googleAcc}>Sign In With Google</button>
      <div className="links">
        <Link className='link redirect' to='/account'>Register</Link>
        <Link className='link redirect' to='/account/reset'>Reset Password</Link>
      </div>
    </div>
  )
}

export default Login