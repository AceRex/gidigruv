import React, { useState } from "react";
import LiveCard from "../../LiveNow/Livecard";
import { Link } from "react-router-dom";
import "../../LiveNow/LiveNow.css";

export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Datas: [
        {
          id: 0,
          title: "MUSIC CONCERT",
          img: "/Images/11.jpg",
          pay: "PAID",
          MM: "JUN",
          DD: "12",
          location: "Kuje, Abuja. NG",
          time: "08:00pm",
        },
        {
          id: 1,
          title: "Story Editing: How to Assess and Fix Your First Draft",
          img: "/Images/15.jpg",
          pay: "FREE",
          MM: "SEP",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 2,
          title: "Manifest 2020 Virtual Convention",
          pay: "PAID",
          img: "/Images/16.jpg",
          MM: "AUG",
          DD: "10",
          location: "Dugbe, Oyo. NG",
          time: "08:00pm",
        },
        {
          id: 3,
          title:
            "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
          pay: "PAID",
          img: "/Images/13.jpg",
          MM: "MAR",
          DD: "16",
          location: "Surulere, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 4,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/14.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/10.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "New Karu, Abuja. NG",
          time: "08:00pm",
        },

        {
          id: 6,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/9.jpg",
          pay: "FREE",
          MM: "APR",
          DD: "09",
          location: "Kwamba, Abuja. NG",
          time: "08:00pm",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="Live-container">
          <p>Business seminar</p>
          <div className="cards">
            {this.state.Datas.map((items) => {
              return (
                <LiveCard
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
          <button className="load-more">Load More Events</button>
      </div>
    );
  }
}
