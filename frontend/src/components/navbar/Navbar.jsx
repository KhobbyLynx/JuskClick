import {useEffect, useState} from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  //This state Changes the navbar view on scroll
  const [active, setActive] = useState(false)
  const [toggle, setToggle ] = useState(false)
  
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

  function addNav() {
    setToggle(true)
  }

  function removeNav() {
    setToggle(false)

  }
  let currentUser= {
    id: 1,
    username: "Samuel Tetteh",
    isSeller: true
  }

  // let currentUser;

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">

        { toggle ?
          <AiOutlineClose className='toggle--nav-icon' onClick={removeNav}/>:
          <AiOutlineMenuUnfold className='toggle--nav-icon' onClick={addNav}/> 
        }

        <div className="logo">
          <Link to='/' className='link'>
            <img src={logo} alt="juskclick logo"/>
          </Link>
        </div>
        <nav>
          <Link to='how-it-works' className='link' >How It Works</Link>
          <Link to='post-a-job' className='link' >Post A Job</Link>
          <Link to='hire-a-professional' className='link' >Hire A Professional</Link>
          <Link to='about-us' className='link' >About Us</Link>
          <Link to='why-juskclick' className='link' >Why JuskClick</Link>
        </nav>
        <div className="account">
          {!currentUser &&
          <>
            <Link to='' className='login link'>
              Log In
            </Link>
            <Link to='' className='link'>
              <button>Sign In</button>
            </Link>   
          </>
          }
          {currentUser && 
          <div className='user'>
            <img src="https://samueltetteh.netlify.app/static/media/aboutImg.b2c6393a6bb40b3e6d60.jpg" alt="user image" />
            <span className='username'>{currentUser.username}</span>
            <div className="options">
              {currentUser?.isSeller &&
                (
                  <>
                    <Link to='mygigs' className='link span'>
                      My Gigs
                    </Link>
                    <Link to='add' className='link span'>
                      Add New Gig
                    </Link>
                  </>
                )
              }
              <Link to='orders' className='link span'>
                Orders
              </Link>
              <Link to='messages' className='link span'>
                Messages
              </Link>
              <Link to='login' className='link span'>
                Log Out
              </Link>
            </div>
          </div>
          }
        </div>
      </div>

      
      
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Web Development</span>
            <span>Graphic Design</span>
            <span>Photography</span>
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
              <Link to='how-it-works' className='link' >How It Works</Link>
              <hr />
              <Link to='post-a-job' className='link' >Post A Job</Link>
              <hr />
              <Link to='hire-a-professional' className='link' >Hire A Professional</Link>
              <hr />
              <Link to='about-us' className='link' >About Us</Link>
              <hr />
              <Link to='why-juskclick' className='link' >Why JuskClick</Link>
            </>
          )
          :
          (
            <>
              <Link to='orders' className='link' >Orders</Link>
              <hr />
              <Link to='messages' className='link' >Messages</Link>
              <hr />
            {currentUser?.isSeller ? (     
              <>
              <Link to='mygigs' className='link' >My Gigs</Link>
              <hr />
              <Link to='add' className='link' >Add New Gig</Link>
              </>
            ): 
            (
              <>
              <Link to='post-a-job' className='link' >Post A Job</Link>
              </>
            )
            }
            <hr />
              <Link to='why-juskclick' className='link' >Why JuskClick</Link>
              <Link to='login' className='link btn' >
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