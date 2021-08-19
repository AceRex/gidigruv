import React from "react";
import { Component } from "react";
import "./style.css";

export default function HowItWorks() {
  
  
  const [Fullname, setFullName] = React.useState()
  const [email, setEmail] = React.useState()
  const [msg, setMsg] =  React.useState()
  const [mailSent, setMailSent] = React.useState()
  const [error, setError] = React.useState()

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
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
              value={Fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="msg"
              name="msg"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              type="submit"
              value="Submit"
              onChange={handleFormSubmit}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  }
