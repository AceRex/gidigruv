import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./SED.css";
import Img from "./10.jpg";
import { TiTime } from "react-icons/ti";
import { GrLocationPin } from "react-icons/gr";
import { BsCalendarFill, BsCameraVideoFill } from "react-icons/bs";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { HiOutlineUpload } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";

class ShowEventDetails extends React.Component {
  constructor() {
    super();
  }
  render() {
    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
      margin: "auto",
    };
    return (
      <>
        <Header />
        <div className="SED-container">
          <div className="eventsDetails">
            <div className="image-container">
              <img src={Img} />
            </div>
            <div className="details">
              <p className="COE">Entertainment</p>
              <div className="des">
                <h2>Music Concert</h2>
                <span> FREE</span>
              </div>
              <div className="more-des">
                <li>
                  <BsCalendarFill className="iconclass" /> <p>SEP 12, 2020</p>
                </li>
                <li>
                  <TiTime className="iconclass" /> <p>08:00PM | 20:00 GMT </p>
                </li>
                <li>
                  <BsCameraVideoFill className="iconclass" />{" "}
                  <p> Event will be Live</p>
                </li>
              </div>
              <div className="button">
                <button>Register For Event</button>
                <div className="share-like">
                  <span>
                    <HiOutlineUpload />
                  </span>
                  <span>
                    <IoIosHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <div className="map-add">
              <h4>
                <GrLocationPin /> Event Center, Ikeja, Lagos. NG
              </h4>
              <p>share location of event</p>
            </div>
            <div className="map-view">
              <Map
                containerStyle={containerStyle}
                google={this.props.google}
                zoom={14}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  {/* <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
                </InfoWindow>
              </Map>
            </div>
          </div>
          
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC5yIoWOoZvzfKIwot1znM466dbuhQsUAs",
})(ShowEventDetails);
