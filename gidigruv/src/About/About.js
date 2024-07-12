import React from "react";
import "./About.css";
import Img from "./10.jpg";
import Img1 from "./11.jpg";
import Img2 from "./12.jpg";
import Vid from "./Vid.mov";
import ReactPlayer from "react-player";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="about-us-item">
      <div className="about-us-item-left">Find events around you</div>
      <div className="about-us-item-right">
        <img src={Img} />
      </div>
    </div>,
    <div className="about-us-item">
      <div className="about-us-item-right">
        <ReactPlayer width="100%" playing muted url={Vid} />
      </div>
      <div className="about-us-item-left">Find events around you</div>
    </div>,
    <div className="about-us-item">
      <div className="about-us-item-left">Find events around you</div>
      <div className="about-us-item-right">
        <img src={Img2} />
      </div>
    </div>,
  ];
  return (
    <section className="about-us">
      <div className="tag">
        <p>
          What <span>We Offer</span>
        </p>
        <small>Enjoy this super features on GIDIGRUV</small>
      </div>
      {/* <AliceCarousel
        autoPlayInterval={2000}
        disableButtonsControls={true}
        mouseTracking
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableDotsControls={true}
        disableAutoPlayOnAction={true}
        items={items}
      /> */}
    </section>
  );
}

export default About;
