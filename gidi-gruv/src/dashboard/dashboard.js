import React, { useState } from "react";
import "./dashboard.css";
import { Route, NavLink, Link, useHistory } from "react-router-dom";
import Overview from "./Overview";
import Interest from './Interest'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import { logout } from "../Redux/UserAction";
import { useDropzone } from "react-dropzone";
import ProfilePhoto from './profilePicture.jpg'

function Links() {

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (event) => {
    event.preventDefault();
    history.push('/')
    dispatch(
      logout()
    )
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
        Created Events
      </NavLink>
      <Link to='/' onClick={(e) => handleLogout(e)}>
        Logout
      </Link>
    </>
  )
}

function Dashboard() {
  const user = useSelector(selectUser)

  const [displayPicture, setDisplayPicture] = useState(ProfilePhoto)
  const [Name, setName] = useState(user.Name)
  return (
    <div className="db-container">
      <div className="db__container">

        <nav>
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
            <Overview />
          </Route>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
