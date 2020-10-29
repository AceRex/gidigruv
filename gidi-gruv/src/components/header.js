import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NotLoggedIn } from "./NotLoggedInHeader";
import { LoggedIn } from "./LoggedInHeader";
import Logo from "../headerLogo.png";
import { FaTimes, FaBars } from 'react-icons/fa'
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      isLoggedin: true,
      StaticMenu: [{menu: 'Live Events', url: '#Live'}, {menu: 'Events Near you', url: '/eventsnearyou'} ]
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        {this.state.isLoggedin ? (
          <nav className="NavbarItems">
            <nav className="navbar-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </nav>
            <nav className="navbar-static-link">
              {this.state.StaticMenu.map((item) => {
                return(
                  <li>
                  <Link to={item.url}>
                  {item.menu}
                  </Link>
                 </li>
                )
               
              })}
            </nav>
            <div className="menu-icon" onClick={this.handleClick}>
              <li>
                {this.state.clicked ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </li>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <>
                <li> Create Event
                </li>
                {LoggedIn.map((item, index) => {
                  return (
                    <li key={index} onMouseOver={this.handleOnHover}>
                      <div className={item.cName}>
                        {item.username} <img src={item.image} />
                      </div>
                    </li>
                  );
                })}
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
            <nav className="navbar-static-link">
              {this.state.StaticMenu.map((item) => {
                return(
                  <li>
                  <Link to={item.url}>
                  {item.menu}
                  </Link>
                 </li>
                )
               
              })}
            </nav>
            <div className="menu-icon" onClick={this.handleClick}>
              <li>
                {this.state.clicked ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </li>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              
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
}

export default Navbar;
