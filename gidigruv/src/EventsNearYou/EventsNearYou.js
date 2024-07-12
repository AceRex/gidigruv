import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";
import Data from '../Data/data.json'

export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
     Items: Data["All "]
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
            {this.state.Items.map((items) => {
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
