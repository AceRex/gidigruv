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
import WWD from './whatwedo/whatwedo'
import Datas from './Data/data'
import HIW from './HowItWorks/HIW'


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
      <WWD/>
      {Datas.IsLoggedIn ? '' : <HIW /> }       
      <Footer />
    </div>
  );
}
}
// const history = useHistory ();
//     console.log(history);

export default App;
