import React from "react";
import "./App.css";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventByCategory from "./eventByCategory/EventByCategory";
import LiveNow from "./LiveNow/livenow";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <EventByCategory />
      <LiveNow/>
      <EventsNearYou />
      <Footer />
    </div>
  );
}

export default App;
