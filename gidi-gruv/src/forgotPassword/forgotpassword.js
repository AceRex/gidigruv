import React, { useState } from "react";
import axios from 'axios'
import "./forgotPassword.css"
import Logo from "../logo.png";
import Logo2 from "../headerLogo.png";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from "../authentication/AuthO";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ForgotPassword() {
  let auth = useAuth()

  const [email, setEmail] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.forgotpassword(email)

  }
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
        <h3>Forgot Password</h3>
        <p>
          You will be set up in few minutes, kindly enter your registered email below.
        </p>
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>

        <form style={{width: "80%", margin: "auto"}}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter registered email here"
            />
          </div>
          <ToastContainer />
          <button
            type="submit"
            className="signin-btn"
            disabled={auth.loading ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            {auth.loading ?
              <CircularProgress style={{ color: '#fff', padding: '10px', margin: 0 }} />
              :
              'Send Password Reset Email'
            }
             </button>     
        </form>


        <div className="home">
          <Link to="/">
            <p>
              Back to home <AiOutlineHome />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;