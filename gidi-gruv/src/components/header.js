import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NotLoggedIn } from "./NotLoggedInHeader";
import { LoggedIn } from "./LoggedInHeader";
import Logo from "../logo.png";
import { FaTimes, FaBars } from 'react-icons/fa'
import "./Navbar.css";
// import Datas from '../Data/data'



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      LoggedIn : this.props.LoggedIn
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        {this.state.LoggedIn ? (
          <nav className="NavbarItems">
            <nav className="navbar-logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
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
                {LoggedIn.map((item, index) => {
                  return (
                    <Link to={item.link} key={index} onMouseOver={this.handleOnHover}>
                      <div className={item.cName}>
                        {item.username} <img src={item.image} />
                      </div>
                    </Link>
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
