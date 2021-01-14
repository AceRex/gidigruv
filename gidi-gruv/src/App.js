import React, { Component } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";
import WWD from "./whatwedo/whatwedo";
import HIW from "./HowItWorks/HIW";
import Contact from "./contact/contact"
import HowItWorks from "./HowItWorks/HowItWorks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="App">
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
// const history = useHistory ();
//     console.log(history);

export default App;
