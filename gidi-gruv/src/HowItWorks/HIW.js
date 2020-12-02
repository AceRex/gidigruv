import React from "react";
import './HIW.css'

export default function HowItWorks() {
  return (
    <div className="container">
      <div className="search-event">
        <div className="search-text">
          <span>You can see all events around you</span>
          <p>Search for Events near you</p>
        </div>
        <div className='search-input'>
        <input type="text" placeholder="Enter the Location you want to search for event" />
        <button type='submit'>Search</button>
        </div>
      </div>
    </div>
  );
}
