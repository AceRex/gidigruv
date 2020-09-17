import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../previewImages/6.png";
import TextLoop from "react-text-loop";
import HomeIcon from '@material-ui/icons/Home';

function SignIn() {
  return (
    <div className="regcontainer">
      <div className="slider">
      <div className='home'>
          <Link to='/'>
          <p>Back to home <HomeIcon style={{fontSize:'15px'}}/></p>
          </Link>
        </div>
        <div className="logo">
          <Link to="/">
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
            Already a Member? <Link to="/signin">Sign in Here</Link>
          </p>
        </div>
        <div className="registerform">
          <form >
              <div className="form-group">
                <label className="label">Username</label>
                <input type="text" placeholder="Email / Username here..." />
              </div>
            <div className="form-group">
              <label className="label">Email</label>
              <input type="email" placeholder="Email / Username here..." />
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input type="password" placeholder="Password here..." />
            </div>
            <div className="form-group">
              <button className="regbtn">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
