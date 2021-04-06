import React, { useState } from "react";
import axios from 'axios'
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { FiAlertTriangle } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";



function Register(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("")
  const [region, setRegion] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        Name,
        password,
        phoneNumber,
        email,
        country,
        region
      })
      .then(res =>
        dispatch(login(res.data))
      )
      .catch(err => console.error(err));

  }
  dispatch(login(Name, email, country))
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
          <form >
            <h3>Register</h3>
            <p>
              Already have an account? <Link to="/signin">Click Here to Log in</Link>
            </p>
            <div className={errorPass ? "alert" : "hidden"}>
              <p className="icon">
                <FiAlertTriangle />
              </p>
              <span>
                Password does not match
              </span>
            </div>
            <div className={alert ? "alert" : "hidden"}>
              <p className="icon">
                <FiAlertTriangle />
              </p>
              <span>
                The Fields below cannot be empty
              </span>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter First Name and Last Name"
                name="Name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email or Preffered Username"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Phone NO</label>
              <input
                type="tel"
                placeholder="Enter Phone Number.."
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)} />
            </div>
            <div className="form-group">
              <label>State</label>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password here..."
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Retype Password</label>
              <input
                type="password"
                placeholder="Password here..."
                name="password"
                onChange={(e) => setRetypePassword(e.target.value)}
                value={retypePassword}
              />
            </div>
            <button className="regbtn" onClick={handleSubmit}>
              REGISTER
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
    </>
  );
}



export default Register;
