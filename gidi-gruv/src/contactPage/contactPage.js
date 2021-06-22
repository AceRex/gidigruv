import React, { useState } from "react";
import "./contactPage.css";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

export default function ContactPage() {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contactus__">
      <div className="contact-contains">
        <div className="contained">
          <h2>Contact Us</h2>
          <p>Write to us about your complaints, support, informations and suggestions we are always available to respond</p>
        </div>
        <div className="contact__form">
          <div className="form_brief">
            <img src="https://img.icons8.com/nolan/640/filled-sent.png" />
            <p>Leave us a Message</p>
          </div>
          <form>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message here"
            />
            <div className="btn-send">
              <button>
                Send
            </button>
            <small>You can also connect with us on all our social media platforms or via email links provided</small>
            </div>
          </form>
        </div>
      </div>
      <div className="our-contacts">
        <div className="contacts">
        <p>Connect with us all our social media pages</p>
          <div className="social-media-links">
            <p>Our Social Media Links</p>
            <a href="https://www.facebook.com/Gidigruv"><GrFacebookOption /></a>
            <a href="www.twitter.com/gidigruv"><GrTwitter /></a>
            <a href="https://www.instagram.com/gidigruv/"><GrInstagram /></a>
          </div>
          <div className="contact-addresses">
            <p>Our Call Lines</p>
            <a>+234 813 659 1944</a>
          </div>
          <div className="contact-addresses">
            <p>Send us an email</p>
            <a href="mailto:info@gidigruv.com">For informations</a>
            <a href="mailto:support@gidigruv.com">For support</a>

          </div>
        </div>
      </div>

    </div>
  );
}
