import React from "react";
import { Component } from "react";
import "./style.css";

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: " ",
      email: "",
      msg: "",
      mailSent: false,
      error: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.Fullname);
  }
  render() {
    return (
      <div id="#contact-us" className="container contact-container">
        <div className="contact-contain">
          <div className="contact-card">
            <div className="title">Contact</div>
            <div className="contacts">
              <p>info@gidigruv.com</p>
              <p>support@gidigruv.com</p>
              <p>+234 813 659 1944</p>
            </div>
          </div>

          <form action="#">
            <div className="title">Leave us a Message</div>
            <p>
              Feel free to contact us any time, we will get back to you as soon
              as we can!
            </p>
            <input
              id="fullname"
              name="Fullname"
              placeholder="Name"
              value={this.state.Fullname}
              onChange={(e) => this.setState({ Fullname: e.target.value })}
            />
            <input
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              id="msg"
              name="msg"
              placeholder="Message"
              value={this.state.msg}
              onChange={(e) => this.setState({ msg: e.target.value })}
            />
            <button
              type="submit"
              value="Submit"
              onChange={e => this.handleFormSubmit(e)}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  }
}
