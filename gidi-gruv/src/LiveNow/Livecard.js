import React, { useState } from "react";
import "./LiveNow.css";
import { GrLocationPin } from "react-icons/gr";
import { HiOutlineUpload } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import { TiTime } from "react-icons/ti";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

export default function Card(props) {
  const [color, setColor] = useState(" ");

  return (
    <Bounce>
      <div className="LiveCard" key={props.id}>
        <div className="top-details">
          <div className="sub">
            <p>{props.pay}</p>
          </div>
          {/* {Datas.IsLoggedIn ? (
            <div className="share-like">
              <span>
                <HiOutlineUpload />
              </span>
              <span
                style={{ color: `${color}` }}
                onClick={() =>
                  setColor(Datas.IsLiked ? "var(--ColorPink)" : `${color}`)
                }
              >
                <IoIosHeart />
              </span>
            </div>
          ) : (
            ""
          )} */}
        </div>

        <Link to={`/showeventdetails/${props.title}`} className="Card" key={props.id}>
          <div className="image-container">
            <img src={props.img} />
          </div>
          <div className="details">
            <div className="date">
              <p>{props.MM}</p>
              <span>{props.DD}</span>
            </div>
            <div className="title-details">
              <p>{props.title} </p>
              <span>
                <GrLocationPin /> {props.location} - <TiTime /> {props.time.HH}{" : "}{props.time.MM}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Bounce>
  );
}
