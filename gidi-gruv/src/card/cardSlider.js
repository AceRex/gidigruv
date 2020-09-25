import React from "react";
import styles from "styled-components";
import "./cardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  state = {
    items: [
      {
        id: 0,
        title: "Story Editing: How to Assess and Fix Your First Draft",
        image: "/Images/1.png",
      },
      {
        id: 1,
        title: "Story Editing: How to Assess and Fix Your First Draft",
        image: "/Images/2.png",
      },
      {
        id: 2,
        title: "Manifest 2020 Virtual Convention",
        image: "/Images/3.png",
      },
      {
        id: 3,
        title: "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
        image: "/Images/4.png",
      },
      {
        id: 4,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        image: "/Images/5.png",
      },
      {
        id: 5,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        image: "/Images/6.png",
      },

      {
        id: 6,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        image: "/Images/7.png",
      },

      {
        id: 7,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        image: "/Images/8.png",
      },

      {
        id: 8,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        image: "/Images/3.png",
      },

      {
        id: 9,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        image: "/Images/2.png",
      },

      {
        id: 10,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        image: "/Images/1.png",
      },
    ],
  };
  render() {
    function Show() {
      handleShow = true;
    }
    function handleShow() {
      handleShow = false;
    }

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel
        autoPlay={true}
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlaySpeed={2000}
      >
        {this.state.items.map((data) => (
          
          <div className="sliderCard" onMouseEnter={Show}>
            <div className="details">
              <span className="liveNowHidden" handleShow={handleShow}>
                <p>LIVE NOW </p>
                <VideocamIcon />
              </span>
              <div className="title">{data.title}</div>
              <Link to="/">
                <button className="detailsBtn">
                  <p>Show details</p>
                </button>
              </Link>
            </div>
            
            <div className="image-container">
              <img src={data.image} />
            </div>

            
          </div>
        ))}
      </Carousel>
    );
  }
}
export default Gallery;
