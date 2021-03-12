import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { Component } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";



function Register(props) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      setAlert({
        alert: true,
      });
    } else {
      dispatch(
        login({
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          loggedIn: true
        })
      )
    }
  }
  return (
    <>
    <div className="reg-container">
      <div className="slider">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
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
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={alert ? "alert" : "hidden"}>
            <p className="icon">
              <FiAlertTriangle />
            </p>
              The Feilds below cannot be empty
            </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your email or Preffered Username"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Enter Phone Number.."
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password here..."
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <button className="regbtn" onClick={handleSubmit}>
              REGISTER
              </button>
          </div>
        </form>
        <div className="reg-link">
          <p>
            Already a Member? <Link to="/signin">Sign in Here</Link>
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
    </>
  );
}



export default Register;
