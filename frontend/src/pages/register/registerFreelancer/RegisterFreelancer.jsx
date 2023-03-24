import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterFreelancer = () => {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checked: false
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    setFormData(
      {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false
      }
    )    
  }
  return (
    <div className='reg--container'>
      <h2>Sign up to find work you love</h2>
      <form className="content" onSubmit={handleSubmit}>
        <input 
          required 
          autoComplete='on' 
          value={formData.firstName}
          onChange={handleChange} 
          className='input' 
          type="text" 
          name="firstName" 
          id="firstname" 
          placeholder='First name'
        />
        <input 
          required 
          autoComplete='on' 
          value={formData.lastName} 
          onChange={handleChange} 
          className='input' 
          type="text" 
          name="lastName" 
          id="lastName" 
          placeholder='Last name'
        />
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
        <input 
          required 
          autoComplete='on' 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          className='input' 
          type="password" 
          name="confirmPassword" 
          id="confirmpassword" 
          placeholder='Confirm Password'
        />
        <div className="agree">
          <input 
            required 
            checked={formData.checked}
            onChange={handleChange} 
            type="checkbox" 
            name="checked" 
            id="check" 
            className='check' 
          />
          <label htmlFor='check'>I agree to the <Link to='/terms-and-conditions' className='link tc'>terms and conditions</Link> and <Link to='/privacy-policy' className='link tc'>privacy policy</Link> </label>
        </div>
        <button>Join Our Team</button>
      </form>
      <div className="links">
        <Link className='link redirect' to='/account/register-client'>Apply as Client</Link>
        <Link className='link redirect' to='/account/log-in'>Log In</Link>
      </div>
    </div>
  )
}

export default RegisterFreelancer