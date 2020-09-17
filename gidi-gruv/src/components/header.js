import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./NotLoggedInHeader";
import { LoggedIn } from "./LoggedInHeader";

import Logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false, isLoggedin: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
      {this.state.isLoggedin ? 
      <nav className="NavbarItems">
      <nav className="navbar-logo">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </nav>
      <div className="menu-icon" onClick={this.handleClick}>
       <li>{this.state.clicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}</li> 
      </div>
      <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
        {LoggedIn.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title} {item.username}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    :
      <nav className="NavbarItems">
        <nav className="navbar-logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </nav>
        <div className="menu-icon" onClick={this.handleClick}>
         <li>{this.state.clicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}</li> 
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
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
      
    }
    </>
    );
  }
}

export default Navbar;
