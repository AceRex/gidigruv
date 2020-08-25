import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuitems";
import Logo from "../logo.png";
import "./Navbar.css";

class Navbar extends Component {
state = {clicked: false}


  render() {
    return (
      <nav className="NavbarItems">
        <nav className="navbar-logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </nav>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul>
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
    );
  }
}

export default Navbar;
