import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NotLoggedIn } from "./NotLoggedInHeader";
import Logo from "../logo.png";
import { FaTimes, FaBars } from 'react-icons/fa'
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";



function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [img, setImg] = useState('./images/5.png')
  const user = useSelector(selectUser);

  
  return (
    <>
      {user ? (
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
                  //  onMouseOver={this.handleOnHover}
                   >
                    <div className='nav-links'>
                    Create Event
                    </div>
                  </Link>
                  <Link to='/dashboard'
                  //  onMouseOver={this.handleOnHover}
                   >
                    <div className='nav-links user'>
                    {user.name} <img src={img} />
                    </div>
                  </Link>
            </>
          </ul>
        </nav>
      ) : (
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
