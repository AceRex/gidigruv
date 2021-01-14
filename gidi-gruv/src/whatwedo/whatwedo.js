import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { Component } from "react";

export default class WWD extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
    };
  }
  render() {
    return (
      <div className="container" style={{paddingTop:80,paddingBottom:80}}>
        <div className="wwd">
          <div className="left-class">
            <Fade right>
              <h2>What We Do </h2>
            </Fade>
            <Slide opposite duration="2000" right>

            <p>
              We provide a strong broadcast for your events, we broadcast all
              kinds of events to people you cannot reach, to homes, to offices
              and every corner.
            </p>
            </Slide>
          </div>
          <div className="right-class">
          </div>
        </div>
      </div>
    );
  }
}
