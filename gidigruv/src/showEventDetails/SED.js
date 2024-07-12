import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./SED.css";
import Img from "./11.jpg";
import Livecard from "../LiveNow/Livecard";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import TabSelect from "./Tabs";
import Data from "../Data/data.json";

class ShowEventDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      Items: Data["All "],
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
        <section className="SED-container">
          <div className="img-container">
            <img src={Img} alt="Image" />
          </div>
          <div className="SED-details">
            <p>Replib Live;</p>
            <table>
              <tr>
                <td className="td1">Description</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, nec
                  curabitur aptent nullam facilisis sodales nam laoreet,
                  dignissim netus lobortis nulla tellus cras. Gravida mi libero
                  potenti faucibus montes dictumst, quis eget vitae ac mattis
                  himenaeos varius,
                </td>
              </tr>
              <tr>
                <td className="td1">Date</td>
                <td>9/02/2021</td>
              </tr>
              <tr>
                <td className="td1">Time</td>
                <td>08:00pm</td>
              </tr>
              <tr>
                <td className="td1">Address</td>
                <td>Time</td>
              </tr>
            </table>
          </div>

          <div className="map">
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
          <div className="btn-container">
            <button>I am interested</button>
          </div>
          <div className="more">
            {this.state.Items.map((items) => {
              return (
                <Livecard
                  id={items.id}
                  pay={items.pay}
                  img={items.img}
                  MM={items.MM}
                  DD={items.DD}
                  title={items.title}
                  location={items.location}
                  time={items.time}
                />
              );
            })}
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQr_LU-7L9jgRgulUYOtK6itkHHveUs4Y",
})(ShowEventDetails);
