import React, { useState } from "react";
import "./sign.css";
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

function SignIn () {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("")
      const [alert, setAlert] = useState(false)
      const [wrongInput, setWrongInput] = useState(false)

      const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true
      })
    )
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
          
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className={alert ? "alert" : "hidden"}>
            <p className="icon">
              <FiAlertTriangle />
            </p>
            The Feilds below cannot be empty
          </div>
          <div className={wrongInput ? "alert" : "hidden"}>
            <p className="icon">
              <FiAlertTriangle />
            </p>
            Wrong Email or Password
          </div>
          <form action="/">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email / Username here..."
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password here..."
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="signin-btn"
                onClick={(e) => handleSubmit(e)}
              >
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

export default SignIn;
