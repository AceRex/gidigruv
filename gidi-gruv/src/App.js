import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventByCategory from "./eventByCategory/EventByCategory";
import About from './About/About'
import LiveNow from "./LiveNow/livenow";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading : true,
    }
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Carousel />
      <EventByCategory />
      {/* <LiveNow/> */}
      <EventsNearYou />
      <About />
      <Footer />
    </div>
  );
}
}

export default App;
