import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";
import TextLoop from "react-text-loop";
import { RiSearch2Line } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import Banner from "./bbn.png";
import Datas from "../Data/data";

function MainCarousel() {
  return (
    <div className="carousel">
      <div className="textSlider">
        <div className="text-loop">
          <TextLoop>
            <span>Broadcast your</span>
            <span>Register an</span>
            <span>Watch Live</span>
            <span>See </span>
            <span>We give you all kinds of</span>
          </TextLoop>{" "}
          Events{" "}
          <TextLoop>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> in your Location </span>
            <span> </span>
          </TextLoop>
        </div>
        <div className="create-button">
          {Datas.IsLoggedIn ? (
            <div className="search">
            <p>
              <RiSearch2Line />
            </p>
            <input type="text" placeholder="Search For Events Near you" />
            <button>
              <p>
                <CgArrowLongRight />
              </p>
            </button>
          </div>

            
          ) : (
            <Link to="/not-available">
              Create An Event <CgArrowLongRight />{" "}
            </Link> 
          )}{" "}
        </div>
      </div>
      <div className="slider">
        <img src={Banner} />
      </div>
    </div>
  );
}
export default MainCarousel;
