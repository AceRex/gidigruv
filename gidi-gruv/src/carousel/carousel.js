import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";
import TextLoop from "react-text-loop";
import { RiSearch2Line } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import Banner from "./bbn.png";
import Datas from "../Data/data";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";

function MainCarousel() {
  const user = useSelector(selectUser);

  return (
    <div className="carousel">
      <div className="textSlider">
        <div className="text-loop">
          <TextLoop>
            <span>Broadcast your</span>
            <span>Register an</span>
            <span>Get Live Updates on </span>
            <span>Get Direction to an</span>
            <span className='lg'>We give you all kinds of</span>
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
          {user ? (
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
            <Link to="/register">
              Click to Register <CgArrowLongRight />{" "}
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
