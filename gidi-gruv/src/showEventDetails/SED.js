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
import Datas from "../Data/data";

class ShowEventDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
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
                <td className='td1'>Description</td>
                <td>
                  sampkpkj nsjsjsjs jsjsjsjsjs sjssjssjsjsjbss jsnsjdhjshdshdjsd
                  sd sjds dsjdbsjd djb dj
                </td>
              </tr>
              <tr>
                <td className='td1'>Date</td>
                <td>9/02/2021</td>
              </tr>
              <tr>
                <td className='td1'>Time</td>
                <td>08:00pm</td>
              </tr>
              <tr>
                <td className='td1'>Address</td>
                <td>Time</td>
              </tr>
            </table>
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
