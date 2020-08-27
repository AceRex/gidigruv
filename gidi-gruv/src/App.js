import React from 'react';
import './App.css';
import Header from './components/header'
import Carousel from './carousel/carousel'
import SearchBar from './searchBar/searchBar'
import LiveNowCard from './card/liveNow'

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>      
      <SearchBar/>
      <LiveNowCard/>
    </div>
  );
}

export default App;
