import React, { Component } from "react";
import "./App.css";
import {useHistory } from  "react-router-dom"
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventByCategory from "./eventByCategory/EventByCategory";
import About from './About/About'
import LiveNow from "./LiveNow/livenow";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";
import Loading from './loading'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading : true,
    }
  }
  
  componentDidMount(){
    console.log(123)
    
  }

  render(){
    
  return (
    <div className="App">
      {/* <Loading /> */}
      <Header />
      <Carousel />
      <EventByCategory />
      <EventsNearYou />      
      <Footer />
    </div>
  );
}
}
// const history = useHistory ();
//     console.log(history);

export default App;
