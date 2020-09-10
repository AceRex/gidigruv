import React from "react";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";

const Card = [
  {
    id: 0,
    video: "/Images/1.png",
  },
  {
    id: 1,
    video: "/Images/2.png",
  },
  {
    id: 2,
    video: "/Images/3.png",
  },
  {
    id: 3,
    video: "/Images/4.png",
  },
  {
    id: 4,
    video: "/Images/5.png",
  },

  {
    id: 5,
    video: "/Images/6.png",
  },

  {
    id: 6,
    video: "/Images/7.png",
  },

  {
    id: 7,
    video: "/Images/8.png",
  },

  {
    id: 8,
    video: "/Images/2.png",
  },

  {
    id: 9,
    video: "/Images/2.png",
  },
];

function LiveNowCard() {
  return (
    <div className="card">
      {Card.map((card) => (
        <>
          <div className="video-container">
            <img src={card.video} />
          </div>
          <div className="details">
            <VoiceChatIcon />
          </div>
        </>
      ))}
    </div>
  );
}

export default LiveNowCard;
