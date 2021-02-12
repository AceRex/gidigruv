import React, { Component } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";
import WWD from "./whatwedo/whatwedo";
import HIW from "./HowItWorks/HIW";
import Contact from "./contact/contact";
import HowItWorks from "./HowItWorks/HowItWorks";
import Fade from "react-reveal/Fade";
import {Link} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      LoggedIn: true,
    };
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose(){
    this.setState({
      loading: true,
    })
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({
          loading: false,
        });
      }.bind(this),
      7000
    );
  }

  render() {
    return (
      <div className="App">
        <Fade bottom>
          <div className={this.state.loading ? "hidden" : "pop-up"}>
            <div className='close' onClick={this.handleClose}>
              X
            </div>
            <div className="buttons">
              Click the button to
              <Link to='/register'>Register</Link>
              /
              <Link to='/signin'>Login</Link>
            </div>
          </div>
        </Fade>
        <Header />
        <Carousel />
        <WWD />
        <HowItWorks />
        <HIW />
        <EventsNearYou />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
