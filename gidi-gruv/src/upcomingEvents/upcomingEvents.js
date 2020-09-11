import React, { Component } from "react";
import Header from "../components/header";
import FilterHeader from "../components/UpcomingFilterHeader";
import LiveNowCard from "./upcomingEventsCard";
import "./upcomingEvents.css";

class LiveNow extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <Header />
        <FilterHeader />
        <div className="container">
          <LiveNowCard />
        </div>
      </div>
    );
  }
}

const mainStyle = {
  backgroundColor: "#fff",
};

export default LiveNow;
