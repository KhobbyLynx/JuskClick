import {useEffect, useState} from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import Data from '../../navData'
import './Navbar.scss'

const Navbar = () => {
  //This state Changes the navbar view on scroll
  const [active, setActive] = useState(false)
  const [toggle, setToggle ] = useState(false)
  const { pathname } = useLocation()
  
  useEffect(()=>{
    window.addEventListener('scroll', isActive);
    //A clean up funtion, runs when the navbar component is not been displayed
    return ()=> {
      window.removeEventListener('scroll', isActive)
    }
  },[])
  
  const isActive = () => {
    //On vertical scroll, the state of active is set to true
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }



  function addNav() {
    setToggle(true)
  }

  function removeNav() {
    setToggle(false)
  }

  const activeStyles = {
    color: "#4ac836",
  }

  // let currentUser= {
  //   id: 1,
  //   username: "Samuel Tetteh",
  //   isSeller: true
  // }

  let currentUser;

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
      <div className="container">

        { toggle ?
          <AiOutlineClose className='toggle--nav-icon' onClick={removeNav}/>:
          <AiOutlineMenuUnfold className='toggle--nav-icon' onClick={addNav}/> 
        }

        <div className="logo">
          <Link to='/' className='link' onClick={removeNav}>
            <img src={logo} alt="juskclick logo"/>
          </Link>
        </div>
        <nav>
          {Data[0].map(linkObj => (
            <NavLink to={linkObj.link} className='link' style={({isActive}) => isActive ? activeStyles : null}key={linkObj.link}>{linkObj.title}</NavLink>
          ))}
        </nav>
        <div className="account">
          {!currentUser &&
          <>
            <Link to='account/log-in' className='login link'>
              Log In
            </Link>
            <Link to='account' className='link'>
              <button>Sign In</button>
            </Link>   
          </>
          }
          {currentUser && 
          <div className='user'>
            <img src="https://samueltetteh.netlify.app/static/media/aboutImg.b2c6393a6bb40b3e6d60.jpg" alt="user image" />
            <span className='username'>{currentUser.username}</span>
            <Link to='messages' className='link'><FiMessageSquare className='message--icon'/></Link>
            <div className="options">
              {currentUser?.isSeller &&
                (
                  <>
                    {Data[2].map(linkObj => (
                      <Link to={linkObj.link} className='link span' key={linkObj.link}>{linkObj.title}</Link>
                    ))}
                  </>
                )
              }
              {Data[1].map(linkObj => (
                <Link to={linkObj.link} className='link span' key={linkObj.link}>{linkObj.title}</Link>
              ))}
            </div>
          </div>
          }
        </div>
      </div>

      
      
      {(active || pathname !== '/')  && (
        <>
          <hr />
          <div className="menu scroll">
          {Data[3].map(dataObj => (
            <Link to={dataObj.link} className='link' key={dataObj.link}>{dataObj.title}</Link>
          ))}
          </div>
        </>
      )}

      { toggle && 
        <nav className='toggle--nav'>
          { currentUser &&
            <div className='user'>
              <img src="https://samueltetteh.netlify.app/static/media/aboutImg.b2c6393a6bb40b3e6d60.jpg" alt="user image" />
              <span className='username'>{currentUser.username}</span>
              { currentUser?.isSeller ?
                <span className='freelancer'>Freelancer</span> :
                <span className='freelancer'>Client</span>
              }
            </div>
          }
          {!currentUser ? 
          (
            <>
              {Data[0].map(linkObj => (
                <>
                  <hr />
                  <Link to={linkObj.link} className='link' onClick={removeNav} key={linkObj.link}>{linkObj.title}</Link>
                </>
              ))}
              <div className='btn'>
                <hr />
                <Link to='log-in'><button>Log In</button></Link>
              </div>
            </>
          ):
          (
            <>
              <Link to='orders' className='link' onClick={removeNav}>Orders</Link>
              <hr />
              <Link to='messages' className='link' onClick={removeNav}>Messages</Link>
              <hr />
            {currentUser?.isSeller ? (     
                <>
                  {Data[2].map(linkObj => (
                    <>
                    <Link to={linkObj.link} className='link' onClick={removeNav}>{linkObj.title}</Link>
                    <hr />
                    </>
                  ))}
                </>
              ): 
              (
                <>
                <Link to='post-a-job' className='link' onClick={removeNav}>Post A Job</Link>
                <hr />
                </>
              )
            }
              <Link to='why-juskclick' className='link' onClick={removeNav}>Why JuskClick</Link>
              <Link to='login' className='link btn' onClick={removeNav}>
                <button>Log Out</button>
              </Link>
            </>
          )
          }
        </nav>
      }

    </div>
  )
}

export default Navbar