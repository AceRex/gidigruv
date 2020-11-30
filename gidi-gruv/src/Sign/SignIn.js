import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../previewImages/7.png";
import TextLoop from "react-text-loop";
import HomeIcon from '@material-ui/icons/Home';

function SignIn() {
  return (
    <div className="sigincontainer">
      <div className="slider">
        <div className="logo">
            <Link to='/'>
            <img src={Logo} />
            </Link>
        </div>
        <div className="textSlider">
          <TextLoop>
            <span>Live Stream</span>
            <span>Register your</span>
            <span>Watch Live</span>
            <span>We give you all kinds of</span>
          </TextLoop>{" "}
          Events
        </div>
        <div className="socialLinks">
          follows us on our social media platforms
        </div>
      </div>
      <div className="form">
        <div className='home'>
          <Link to='/'>
          <p>Back to home <HomeIcon style={{fontSize:'15px'}}/></p>
          </Link>
        </div>
        <div className="register">
          <p>
            Not registered? <Link to="/register">Sign Up Here</Link>
          </p>
        </div>
        <div className="signinform">
          <form>
            <div className="form-group">
              <label>Email / Username</label>
              <input type='email' placeholder="Email / Username here..." />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type='password' placeholder="Password here..." />
            </div>
            <div className="form-group">
            <button className="btn">SIGN IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
