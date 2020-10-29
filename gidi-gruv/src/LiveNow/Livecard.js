import React from "react";
import "./LiveNow.css";
import { GrLocationPin } from "react-icons/gr";
import { HiOutlineUpload } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import { TiTime } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to='/showeventdetails' className="LiveCard">
      <div className="top-details">
        <div className="sub">
          <p>{props.pay}</p>
        </div>
        <div className="share-like">
          <span>
            <HiOutlineUpload />
          </span>
          <span>
            <IoIosHeart />
          </span>
        </div>
      </div>
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
            <GrLocationPin /> {props.location} - <TiTime /> {props.time}
          </span>
        </div>
      </div>
    </Link>
  );
}
