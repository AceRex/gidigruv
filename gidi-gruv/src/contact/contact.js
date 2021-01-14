import React from "react";
import { Component } from "react";
import "./style.css";
import Rotate from "react-reveal/Rotate";

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container contact-container">
        <div className="contact-contain">
        <div className="contact-card">
          <div className="title">
            Contact
          </div>
          <div className="contacts">
            <p>info@gidigruv.com</p>
            <p>support@gidigruv.com</p>
            <p>+234 813 659 1944</p>


          </div>
        </div>

          <form>
            <div className="title">Leave us a Message</div>
            <p>
              Feel free to contact us any time, we will get back to you as soon
              as we can!
            </p>
            <input placeholder="Name" />
            <input placeholder="Email"/>
            <input placeholder="Message"/>
            <button type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  }
}
