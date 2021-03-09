import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";

export default class EventByCategory extends React.Component {
 

  render() {
    return (
      <div className="container">
        <div className="evn-container">
          <p>
            Coming <span>Events</span>
          </p>
          <div className="cards">
            {this.props.Events.map((Events) => {
              return (
                
                <LiveCard
                  id={Events.id}
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
}
