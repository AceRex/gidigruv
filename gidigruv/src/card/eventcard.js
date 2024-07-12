import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardSlider.css";
import Datas from '../Data/data'

export default class EventCard extends React.Component {
  
  render() {
    return (
      <div className="Event-cards-container">
        {Datas.EventcardData.map((data) => (
          <Link to='/'>
          <div className="EventCard">
            <div className="image-container">
              <img src={data.image} />
            </div>
            <div className="Eventdetails">
              <p>{data.title}</p>
              <div className="date">{data.date}</div>
              <div className="bottom">
                <span>{data.type}</span>
                <div className="share-save"></div>
              </div>
            </div>
          </div>
          </Link>
        ))}
        ;
      </div>
    );
  }
}
