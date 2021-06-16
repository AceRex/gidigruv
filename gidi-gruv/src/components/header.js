import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NotLoggedIn } from "./NotLoggedInHeader";
import Logo from "../logo.png";
import { FaTimes, FaBars } from 'react-icons/fa'
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import { useAuth } from "../authentication/AuthO";



function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [img, setImg] = useState('./images/5.png')

  let auth = useAuth()
  
  return (
    <>
      {auth.user ? 

      // if User is exist
      (
        <nav className="NavbarItems">
          <nav className="navbar-logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </nav>
          <div className="menu-icon" onClick={() => setClicked(!clicked)}>
            <li>
              {clicked ? (
                <FaTimes />
              ) : (
                  <FaBars />
                )}
            </li>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <>
              
                  <Link to='/create-event'
                  onClick={() => setClicked(!clicked)}
                   >
                    <div className='nav-links'>
                    Create Event
                    </div>
                  </Link>
                  <Link to='/dashboard'
                  onClick={() => setClicked(!clicked)}
                   >
                    <div className='nav-links user'>
                    {auth.user.name} <img src={img} />
                    </div>
                  </Link>
            </>
          </ul>
        </nav>
      ):

      // if User is Doesnt exist

      (
          <nav className="NavbarItems">
            <nav className="navbar-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </nav>
            <div className="menu-icon"
             onClick={() => setClicked(!clicked)}
             >
              <li>
                {clicked ? (
                  <FaTimes />
                ) : (
                    <FaBars />
                  )}
              </li>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>

              {NotLoggedIn.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.url} className={item.cName}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
    </>
  );
}

export default Navbar;
