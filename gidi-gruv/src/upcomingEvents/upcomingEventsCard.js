import React, { Component } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {Link} from 'react-router-dom';
import "./upcomingEvents.css";


class LiveNowCard extends Component {
  state = {
    CardItems: [
      {
        id: 0,
        video: "/Images/1.png",
        viewers: "Not Streaming",
        categories: "Paid",
      },
      {
        id: 1,
        video: "/Images/2.png",
        viewers: "100 attending",
        categories: "Paid",
      },
      {
        id: 2,
        video: "/Images/3.png",
        viewers: "50 attending",
        categories: "Paid",
      },
      {
        id: 3,
        video: "/Images/4.png",
        viewers: "1000 attending",
        categories: "Free",
      },
      {
        id: 4,
        video: "/Images/5.png",
        viewers: "10,000 attending",
        categories: "Free",
      },

      {
        id: 5,
        video: "/Images/6.png",
        viewers: "20 attending",
        categories: "Paid",
      },

      {
        id: 6,
        video: "/Images/7.png",
        viewers: "Not Streaming",
        categories: "Free",
      },

      {
        id: 7,
        video: "/Images/8.png",
        viewers: "Not Streaming",
        categories: "Free",
      },

      {
        id: 8,
        video: "/Images/2.png",
        viewers: "10 attending",
        categories: "Paid",
      },

      {
        id: 9,
        video: "/Images/2.png",
        viewers: "657 attending",
        categories: "Paid",
      },
    ],
  };

  render() {

    return (
      <>
        {this.state.CardItems.map((card) => (
          <Link to="/showevent">
            <div className="card">
              <div className="video-container">
                <img src={card.video} />
              </div>
              <div className="details">
                <p>{card.categories}</p>
                <div className="viewer">
                  <div>
                    <VisibilityIcon />
                  </div>
                  <small>{card.viewers}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  }
}

export default LiveNowCard;
