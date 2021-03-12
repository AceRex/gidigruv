import React, { useState } from "react";
import "./dashboard.css";
import { Route, NavLink, Switch, Link, useHistory } from "react-router-dom";
import Overview from "./Overview";
import Password from './Password'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import { logout } from "../Redux/UserAction";

function Links() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
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
        Overviews
            </NavLink>
      <NavLink to='/dashboard/password'
        activeClassName='active'
      >
        Password
      </NavLink>
      <NavLink to='/dashboard/interest'
        activeClassName='active'
      >
        Interest
      </NavLink>
      <Link to='/' onClick={(e) => handleLogout(e)}>
        Logout
      </Link>
    </>
  )
}

function Dashboard() {
  return (
    <div className="db-container">
      <div className="db__container">
        <div className='link'>
          <Links />
        </div>
        <div className='content'>
          <Route exact path="/dashboard/">
            <Overview />
          </Route>
          <Route path="/dashboard/password">
            <Password />
          </Route>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
