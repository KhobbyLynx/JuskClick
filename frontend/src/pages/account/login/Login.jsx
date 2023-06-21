import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../../utils/newRequest'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
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
      const res = await newRequest.post(
        "/auth/login", 
        {
          email: formData.email,
          password: formData.password  
        }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
      
    } catch (error) {
      console.log(error)
      setError(error.response.data)
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
        {error && <p className="error">{error}</p>}

      <div className="links">
        <Link className='link redirect' to='/account'>Register</Link>
        <Link className='link redirect' to='/account/reset'>Reset Password</Link>
      </div>
    </div>
  )
}

export default Login