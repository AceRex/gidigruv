import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { Component } from "react";
import { FiAlertTriangle } from "react-icons/fi";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phoneNumber: "",
      password: "",
      alert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        alert: true,
      });
    } else {
      this.setState({
        alert: false,
        success: true,
      });
    }
  }
  render() {
    return (
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
          <form>
            <div className={this.state.alert ? "alert" : "hidden"}>
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
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Enter Phone Number.."
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password here..."
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <button className="regbtn" onClick={this.handleSubmit}>
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
    );
  }
}

export default Register;
