import React, { Component } from "react";
import Header from "../components/header";
import FilterHeader from "../components/filterHeader";
import LiveNowCard from "./liveNowCards";
import "./live.css";

class LiveNow extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <Header />
        <FilterHeader />
        <div>
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
