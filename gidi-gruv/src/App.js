import React from 'react';
import './App.css';
import Header from './components/header'
import Carousel from './carousel/carousel'
import LiveNowCard from './card/liveNow'
import EventCard from './card/eventcard'

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>   
      <LiveNowCard/>
      <div className="cover">
      <EventCard />
      </div>
    </div>
  );
}

export default App;
