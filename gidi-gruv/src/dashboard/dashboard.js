import React, { useState } from "react";
import "./dashboard.css";
import { Route, NavLink, Link, useHistory } from "react-router-dom";
import Overview from "./Overview";
import Interest from './Interest'
import Events from './Events'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import { logout } from "../Redux/UserAction";
import { useDropzone } from "react-dropzone";
import ProfilePhoto from './profilePicture.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from "../authentication/AuthO";



function Links() {

  const dispatch = useDispatch()
  const history = useHistory()
  let auth = useAuth()

  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout()
  }
  return (
    <>
      <NavLink exact to='/dashboard/'
        activeClassName='active'
      >
        Account
            </NavLink>
      <NavLink to='/dashboard/interest'
        activeClassName='active'
      >
        Interest
      </NavLink>
      <NavLink to='/dashboard/created_events'
        activeClassName='active'
      >
        Events
      </NavLink>
      <Link to='/' onClick={(e) => handleLogout(e)}>
        Logout
      </Link>
    </>
  )
}

function Dashboard() {
  const user = useSelector(selectUser)
  let auth = useAuth()

  const [displayPicture, setDisplayPicture] = useState(ProfilePhoto)
  const [Name, setName] = useState(auth.user.name)
  const [clicked, setClicked] = useState(false)
  const [close, setClose] = useState(false)

  const handleClicked = () => {
    setClicked(!clicked)
  }
  return (
    <div className="db-container">
      <div className={close ? 'hidden' : 'Notification'}>
        <span>Kindly Check your registered email to verify your Account</span>
        <p onClick={() => setClose(true)}> <FaTimes /></p>
      </div>
      <div className="db__container">

      <p
          className={clicked ? 'mobile-menu' : 'mobile-menu-off'}
          onClick={handleClicked}
          >
            <FaBars />
          </p>
        <nav className={clicked ? 'nav' : 'nav nav-active'}
        >
         
          <div className='user_Image'>
            <div className='img__'>
              <div className='img__container'>
                <img src={displayPicture} />
              </div>
            </div>
            <div className='user__name'>
              <p>{Name}</p>
            </div>
          </div>
          <Links />
        </nav>
        <div className='content'>
          <Route exact path="/dashboard/">
            <Overview />
          </Route>
          <Route exact path="/dashboard/interest">
            <Interest />
          </Route>
          <Route exact path="/dashboard/created_events">
            <Events />
          </Route>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
