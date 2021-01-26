import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";

export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      All: [
        {
          id: 0,
          title: "Best Of Kiss Daniel Mixtape",
          img: "/Images/mixtape.jpeg",
          pay: "PAID",
          MM: "JUN",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 1,
          title: "The Spiritual Generation",
          img: "/Images/churchevent.jpg",
          pay: "FREE",
          MM: "JUN",
          DD: "19",
          location: "Ikeja, Lagos. NG",
          time: "06:00pm",
        },
        {
          id: 2,
          title: "Replib Live",
          pay: "PAID",
          img: "/Images/chrcuh.jpg",
          MM: "AUG",
          DD: "10",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 3,
          title: "Special Carols and Drama Night",
          pay: "PAID",
          img: "/Images/anotherevents.jpg",
          MM: "MAR",
          DD: "16",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 4,
          title: "The Mashup concert with Efe Oraka",
          img: "/Images/events.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Raising Intelligent Kids in Times Like This!",
          img: "/Images/business.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 6,
          title: "Raising Intelligent Kids in Times Like This!",
          img: "/Images/business.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 7,
          title: "Raising Intelligent Kids in Times Like This!",
          img: "/Images/business.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="evn-container">
          <p>
            Upcoming <span>Events</span>
          </p>
          <div className="cards">
            {this.state.All.map((items) => {
              return (
                <LiveCard
                  id={items.id}
                  pay={items.pay}
                  img={items.img}
                  MM={items.MM}
                  DD={items.DD}
                  title={items.title}
                  location={items.location}
                  time={items.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
