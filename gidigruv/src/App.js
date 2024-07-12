import React from "react";
import "./App.css";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";
import WWD from "./whatwedo/whatwedo";
import HIW from "./HowItWorks/HIW";
import Contact from "./contact/contact";
import HowItWorks from "./HowItWorks/HowItWorks";

function App() {
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

export default App;
