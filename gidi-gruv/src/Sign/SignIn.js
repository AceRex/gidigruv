import React, { Component } from "react";
import "./sign.css";
import Logo from "../logo.png";
import Logo2 from "../headerLogo.png";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phoneNumber: "",
      password: "",
      alert: false,
      wrongInput: false,
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
        wrongInput: false,
      });
    } else if (
      this.state.email !== "testing" ||
      this.state.password !== "12345678"
    ) {
      this.setState({
        alert: false,
        wrongInput: true,
      });
    } else {
      this.setState({
        alert: false,
        wrongInput: false,
        email: "",
        password: "",
      });
    }
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
          
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className={this.state.alert ? "alert" : "hidden"}>
            <p className="icon">
              <FiAlertTriangle />
            </p>
            The Feilds below cannot be empty
          </div>
          <div className={this.state.wrongInput ? "alert" : "hidden"}>
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
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email / Username here..."
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password here..."
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="signin-btn"
                onClick={this.handleSubmit}
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
}

export default SignIn;
