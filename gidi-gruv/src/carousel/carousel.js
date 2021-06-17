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
import { useAuth } from "../authentication/AuthO";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function MainCarousel() {
  const user = useSelector(selectUser);

  let auth = useAuth()

  return (
    <div className="carousel">
      {auth.user ?
        <div className="textSlider">
          <div className="text">
            <Fade right>
              <p>Event Broadcast got easy, No more wallpapers on the streets</p>
            </Fade>
            <Slide opposite duration={2000} right>

              <div className="text__text">
                We provide a strong broadcast for your events, we broadcast all kinds of events to people you cannot reach, to homes, to offices and every corner.
</div>
            </Slide>
          </div>
          <div className="create-button">
            <Link to="/create-event">
              Create an Event Now <CgArrowLongRight />{" "}
            </Link>
          </div>
        </div>
        :
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
            <Link to="/register">
              Click to Register <CgArrowLongRight />{" "}
            </Link>
          </div>
        </div>
      }

      <div className="slider">
        <img src={Banner} />
      </div>
    </div>
  );
}
export default MainCarousel;
