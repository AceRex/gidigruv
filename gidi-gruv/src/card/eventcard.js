import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardSlider.css";

export default class EventCard extends React.Component {
  state = {
    EventcardData: [
      {
        image: "./images/1.png",
        title:
          "Events details goes Here, Events details goes Here,Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/2.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/3.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/4.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/5.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/6.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/7.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/8.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/2.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/5.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/1.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Paid",
      },
      {
        image: "./images/4.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
      {
        image: "./images/5.png",
        title: "Events details goes Here",
        date: "Sun, Aug 30, 2020 12:00 AM WAT",
        type: "Free",
      },
    ],
  };
  render() {
    return (
      <div className="Event-cards-container">
        {this.state.EventcardData.map((data) => (
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
