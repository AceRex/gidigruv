import React, { Component } from "react";
import LiveCard from "./liveCard";
import CardData from "./liveNowData";
import "./live.css";

class LiveNowCard extends Component {
  constructor() {
    super();
    this.state = {
      card: CardData,
    };
  }

  render() {
    const Card = this.state.card.map((items) => (
      <LiveCard
        video={items.video}
        categories={items.categories}
        viewers={items.viewers}
      />
    ));
    return <div className="live-card-class">{Card}</div>;
  }
}

export default LiveNowCard;
