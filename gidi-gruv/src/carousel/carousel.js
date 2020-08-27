import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './carousel.css'
import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";

function MainCarousel() {
  return (
    <div className="carousel">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        showStatus={false}
      >
        <div>
          <img src={Image1} />
        </div>
        <div>
          <img src={Image2} />
        </div>
        <div>
          <img src={Image3} />
        </div>
      </Carousel>
    </div>
  );
}
export default MainCarousel;
