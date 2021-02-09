import React from "react";
import { Component } from "react";
import "./style.css";
import Rotate from 'react-reveal/Rotate'

export default class HowItWorks extends Component {
 

  render() {
    return (
      <div className="container HIW-container">
        <div className="HIW-contain">
          <div className="title">How It works</div>
          <div className="content-container">
              <Rotate top left delay='500'>
            <div className="content">
              <p>1.</p>
              <div className="content-content">
                <p>Plan your event</p>
                <small>
                  We take all events, think of any category of event we are here to push to your target audience.
                </small>
              </div>
            </div>
            </Rotate>
            <Rotate top center delay='500'>
            <div className="content">
              <p>2.</p>
              <div className="content-content">
                <p>Register the Event with us</p>
                <small>
                  Register your event on this platform for us to have the event you want to broadcast.
                </small>
              </div>
            </div>
            </Rotate>
            <Rotate top right delay='500'>
            <div className="content">
              <p>3.</p>
              <div className="content-content">
                <p>We Broadcast</p>
                <small>
                  We broadcast your events by location, by category to all
                  registered users on our platform and not registered users you
                  can't imagine to reach
                </small>
              </div>
            </div>
            </Rotate>
          </div>
        </div>
      </div>
    );
  }
}
