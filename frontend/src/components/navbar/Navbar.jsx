import {useEffect, useState} from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  //This state Changes the navbar view on scroll
  const [active, setActive] = useState(false)
  
  const isActive = () => {
    //On vertical scroll, the state of active is set to true
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener('scroll', isActive);
    //A clean up funtion, runs when the navbar component is not been displayed
    return ()=> {
      window.removeEventListener('scroll', isActive)
    }
  },[])

  let currentUser= {
    id: 1,
    username: "Samuel Tetteh",
    isSeller: true
  }

  // let currentUser;

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to='/' className='link'>
            <img src={logo} alt="juskclick logo"/>
          </Link>
        </div>
        <nav>
          {["How It Works", "Post A Job", "Hire A Professional", "About Us", "Why JuskClick"].map(link => (
              <Link to={link} className="link">
                <span key={link}>{link}</span>
              </Link>
          ))}
        </nav>
        <div className="account">
          {!currentUser &&
          <>
            <span className='login'>Log In</span>
            <button>Sign In</button>
          </>
          }
          {currentUser && 
          <div className='user'>
            <img src="https://samueltetteh.netlify.app/static/media/aboutImg.b2c6393a6bb40b3e6d60.jpg" alt="user image" />
            <span>{currentUser.username}</span>
            <div className="options">
              {currentUser?.isSeller &&
                (
                  <>
                    <Link to='mygigs' className='link'><span>Gigs</span></Link>
                    <Link to='add' className='link'><span>Add New Gig</span></Link>
                  </>
                )
              }
              <Link to='orders' className='link'><span>Orders</span></Link>
              <Link to='messages' className='link'><span>Messages</span></Link>
              <Link to='login' className='link'><span>Log Out</span></Link>
            </div>
          </div>
          }
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Cat 1</span>
            <span>Cat 1</span>
            <span>Cat 1</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar