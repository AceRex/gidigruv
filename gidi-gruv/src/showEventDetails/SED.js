import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./SED.css";
import Img from "./11.jpg";
import { TiLocationOutline } from "react-icons/ti";
import { WiTime10 } from "react-icons/wi";
import { AiOutlineLink } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import TabSelect from "./Tabs";

class ShowEventDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      isLoggedin: true,
      attendees: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
      ],
      selectedPlace: { name: "ketu" },
    };
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
            <div className="title">
              <p className="COE">Entertainment</p>
              <div className="des">
                <h2>
                  Ask me Anything session with Marty Cagan Christian Idiodi
                </h2>
              </div>
            </div>
          </div>

          {/* Check if user is logged in */}
          {this.state.isLoggedin ? (
            <div className="details">
              <div className="more-des">
                <div className="event-date">
                  <p>
                    <WiTime10 />
                  </p>
                  <span>
                    <p>Thursday, November 18, 2020</p>
                    7:00 PM to 8:00 PM GMT+1
                  </span>
                </div>
                <div className="event-date">
                  <p>
                    <TiLocationOutline />
                  </p>
                  <span>
                    <p>Kuje, Abuja. NG</p>
                    <a href="#map">
                      Get location to physical event on Map here
                    </a>
                  </span>
                </div>
                <div className="event-date">
                  <p>
                    <AiOutlineLink />
                  </p>
                  <span>
                    <p>Link to online Event</p>
                    <a href="https://meet.google.com/xgp-hixs-nrc" target='_blank'>
                      https://meet.google.com/xgp-hixs-nrc
                    </a>
                  </span>
                </div>
                <div className="event-date">
                  <p className="attendees">
                    {this.state.attendees.length} will be attending
                  </p>
                </div>
                <h3> About This Event</h3>
                <div className="About-event">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, nec
                  curabitur aptent nullam facilisis sodales nam laoreet,
                  dignissim netus lobortis nulla tellus cras. Gravida mi libero
                  potenti faucibus montes dictumst, quis eget vitae ac mattis
                  himenaeos varius,
                </div>
                <div className="share-link">
                  <div className="share">
                    <span>
                      {this.state.clicked ? <BsHeart /> : <BsHeartFill />}
                    </span>
                    <button>Register for this Event</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="details">
              <div className="more-des">
                <div className="event-date">
                  <p>
                    <WiTime10 />
                  </p>
                  <span>
                    <p>Thursday, November 18, 2020</p>
                    7:00 PM to 8:00 PM GMT+1
                  </span>
                </div>
                <div className="event-date">
                  <p>
                    <TiLocationOutline />
                  </p>
                  <span>
                    <p>Kuje, Abuja. NG</p>
                    {/* <a href="#map">
                      Get location to physical event on Map here
                    </a> */}
                  </span>
                </div>
                <div className="event-date">
                  <p>
                    <AiOutlineLink />
                  </p>
                  <span>
                    <p>Event will be online</p>
                  </span>
                </div>{" "}
                <div className="event-date">
                  <p className="attendees">
                    {this.state.attendees.length} will be attending
                  </p>
                </div>
                <h3> About This Event</h3>
                <div className="About-event">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, nec
                  curabitur aptent nullam facilisis sodales nam laoreet,
                  dignissim netus lobortis nulla tellus cras. Gravida mi libero
                  potenti faucibus montes dictumst, quis eget vitae ac mattis
                  himenaeos varius,
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="map" id="map">
          <div className="map-view">
            <Map
              containerStyle={containerStyle}
              google={this.props.google}
              zoom={14}
            >
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
        <TabSelect />
        <Footer />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQr_LU-7L9jgRgulUYOtK6itkHHveUs4Y",
})(ShowEventDetails);
