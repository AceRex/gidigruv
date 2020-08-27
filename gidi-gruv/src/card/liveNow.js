import React from "react";
import "./liveNow.css";

function Card() {
  return (
    <div className='card'>
      <div className='imageContainer'>Image</div>
      <div className='details'>details</div>
    </div>
  );
}

function LiveNow() {
  return (
    <div className="liveNow">
      <div className="header">
        <p>Recommended for you</p>
        <p className="right">Live Now</p>
      </div>
      <div className="card-list">
        <Card />
      </div>
    </div>
  );
}

export default LiveNow;
