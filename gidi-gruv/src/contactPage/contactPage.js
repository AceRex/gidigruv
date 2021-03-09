import React, { Component } from "react";
import "./contactPage.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default class contactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: " ",
      email: "",
      message: "",
    };
  }
  render() {
    return (
      <>
        <section className="container">
          <div className="hero">
            <p>Contact us</p>
            <span>
              We always Ready and available to reply to all you complaints, and
              we are very attentive to your corrections
            </span>
          </div>
          <div className="form">
          <form action="#">
            <p>
            Leave Us A Message
            </p>
            <input
              id="fullname"
              name="Fullname"
              placeholder="Fullname"
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
            <textarea
              id="message"
              name="message"
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
        </section>
      </>
    );
  }
}
