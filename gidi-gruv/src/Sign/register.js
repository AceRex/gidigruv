import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from "../authentication/AuthO";
import 'react-toastify/dist/ReactToastify.css';



function Register() {

  let auth = useAuth()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [phone_number, setPhoneNumber] = useState("");
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();



  const handleSubmit = (event) => {
    event.preventDefault();
    auth.register(email, password, password_confirmation, phone_number, name, city, country, state, address)
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
          <form style={{width: "80%", margin: "auto"}}>
            <h3>Register</h3>
            <p>
              Already have an account? <Link to="/signin">Click Here to Log in</Link>
            </p>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter First Name and Last Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
                name="phone_number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phone_number}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="address"
                placeholder="Enter Address.."
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter City of location.."
                name="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
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
                value={state}
                name='state'
                onChange={(val) => setState(val)} />
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
                name="password_confirmation"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                value={password_confirmation}
              />
            </div>
            <button
              className="regbtn"
              onClick={handleSubmit}
              style={{ outline: 'none' }}
              disabled={auth.loading ? true : false}
            >
              {auth.loading ? <CircularProgress style={{ color: '#fff', padding: '10px', margin: 0 }} /> : 'REGISTER'}
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
