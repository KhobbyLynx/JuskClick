import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="links">
        <Link className='link redirect' to='/account'>Register</Link>
        <Link className='link redirect' to='/account/reset'>Reset Password</Link>
      </div>
    </div>
  )
}

export default Login