import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";


export default function EventByCategory({Events}) {
  // console.log(Events)
    return (
      <div className="container">
        <div className="evn-container">
          <p>
            Coming <span>Events</span>
          </p>
          <div className="cards">
            {Events.map((Events,index) => {
              return (
                
                <LiveCard
                  id={index}
                  pay={Events.pay}
                  img={Events.img}
                  MM={Events.date.MM}
                  DD={Events.date.DD}
                  title={Events.title}
                  location={Events.location}
                  time={Events.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
