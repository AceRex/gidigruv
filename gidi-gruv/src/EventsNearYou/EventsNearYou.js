import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";


export default function EventByCategory({Events}) { 
    return (
      <div className="container">
        <div className="evn-container">
          <p>
            Coming <span>Events</span>
          </p>
          <div className="cards">
            {Events?.data?.map((e,index) => {
              return ( 
                <LiveCard
                  id={e.id}
                  pay={e.pay}
                  img={e.cover_image}
                  start_date={e.start_date}
                  end_date={e.end_date}
                  title={e.title}
                  location={e.location}
                  time={e.time}
                  city={e.city}
                  state={e.state}
                  country={e.country}
                  description={e.description}
                  street_address={e.street_address}
                  map_coord={e.map_coord}
                  attendees={e.attendees}
                  created_by={e.created_by}
                  short_description={e.short_description}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
