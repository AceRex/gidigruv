import React, { Component } from "react";
import "./sign.css";
import Logo from '../logo.png'
import Logo2 from '../headerLogo.png'

import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import Datas from "../Data/data";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sigincontainer">
        <div className="slider">
          <div className="logo">
            <Link to="/">
              <img src={Logo2} alt="logo" />
            </Link>
          </div>
          <div className="textSlider">
            <TextLoop>
              <span>We Broadcast Your</span>
              <span>Register your</span>
              <span>We bring Updates On</span>

            </TextLoop>
            <p>Events</p>
          </div>
          <div className="socialLinks">
            follows us on our social media platforms
          </div>
        </div>
        <div className="form">
          <div className='Logo'>
            <img src={Logo} alt="Logo" />
          </div>
          <form action="/">
            <div className="form-group">
              <label>Email / Username</label>
              <input
                type="email"
                name="email"
                value="user@user.com"
                placeholder="Email / Username here..."
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value="userpass"
                placeholder="Password here..."
              />
            </div>
            <div className="form-group">
              <button className="signin-btn" onClick={this.onChange}>
                SIGN IN
              </button>
            </div>
          </form>
          <div className="reg-link">
            <p>
              Not registered? <Link to="/register">Sign Up Here</Link>
            </p>
          </div>
          
        <div className="home">
          <Link to="/">
            <p>
              Back to home <AiOutlineHome />
            </p>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
