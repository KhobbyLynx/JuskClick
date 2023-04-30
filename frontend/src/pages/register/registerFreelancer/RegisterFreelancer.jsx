import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md'
import newRequest from '../../../utils/newRequest.js'
import upload from '../../../utils/upload.js';

const RegisterFreelancer = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState(null)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checked: false,
      file: ''
    }
  )

  useEffect( ()=> {
    if(!formData.file) return;
    
    let imageUrl = URL.craeteObjectURL(formData.file)
    setPreviewUrl(imageUrl)

    return () => {
      URL.revokeObjectURL(imageUrl)
    }
  }, [formData.file])

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: type === 'checkbox' ? checked : type === 'file' ? event.target.files[0] : value
      }
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = await upload(formData.file)
    
    try {
      const res = await newRequest.post(
        "/auth/register",
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.confirmPassword,
          isSeller: true,
          img: url
        }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='reg--container'>
      <h2>Sign up to find work you love</h2>
      <form className="content" onSubmit={handleSubmit}>
        <label 
          htmlFor="profile" 
          className='profile--preview'
        >
          {previewUrl ? <img src={previewUrl} className="profile--image"/> :
          <MdAccountCircle className='profile--icon'/>
          }
          <span>Profile</span>
        </label>
        <input 
          id='profile'
          className='profile'
          type="file" 
          name='file' 
          onChange={handleChange}
          required
        />
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
        {error && error}

      <div className="links">
        <Link className='link redirect' to='/account/register-client'>Apply as Client</Link>
        <Link className='link redirect' to='/account/log-in'>Log In</Link>
      </div>
    </div>
  )
}

export default RegisterFreelancer