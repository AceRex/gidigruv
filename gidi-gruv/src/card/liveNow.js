import React from "react";
import "./liveNow.css";
import CardSlider from'./cardSlider'


function LiveNow() {
  return (
    <div className="liveNow">
      <div className="header">
        <p>Recommended for you</p>
        <p className="right">Live Now</p>
      </div>
      <div className="card-list">
        <CardSlider />
      </div>
    </div>
  );
}

export default LiveNow;
