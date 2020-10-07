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
        <div style={container}>
          <LiveNowCard />
        </div>
      </div>
    );
  }
}

const mainStyle = {
  backgroundColor: "#fff",
  heigth: '100vh',
};
const container = {
  width: '87%',
  margin: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
}

export default LiveNow;
