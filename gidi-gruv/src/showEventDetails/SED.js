import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./SED.css";
import Img from "./11.jpg";
import Livecard from "../LiveNow/Livecard";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import TabSelect from "./Tabs";
import Data from "../Data/data.json";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdNotifications, IoMdCheckmarkCircleOutline } from "react-icons/io";
import Zoom from "react-reveal/HeadShake";
import Flash from "react-reveal/Flash";
import { FiAlertTriangle } from "react-icons/fi";

class ShowEventDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      Items: Data["All "],
      email: "",
      phoneNumber: "",
      alert: false,
      success: false,
      selectedPlace: { name: "ketu" },
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleClick() {
    this.setState({
      clicked: true,
    });
  }
  handleClose() {
    this.setState({
      clicked: false,
      alert: false,
      success: false,
      email: '',
      phoneNumber: '',
      
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email === "" && this.state.phoneNumber === "") {
      this.setState({
        alert: true,
      });
    } else {
      this.setState({
        alert: false,
        success: true,
      });
    }
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
        <section className={this.state.clicked ? "modal" : "hidden"}>
          <Zoom>
            <div className="feeback-form">
              <div className={this.state.success ? "hidden" : ""}>
                <div className="close" onClick={this.handleClose}>
                  <AiFillCloseCircle />
                </div>
                <div className="notify">
                  <IoMdNotifications />
                </div>
                <p>
                  We can Send you notification on this event simply enter the
                  email and phone number you want to receive notifications,
                  Thanks.
                </p>
                <div className={this.state.alert ? "alert" : "hidden"}>
                  <p className="icon">
                    <FiAlertTriangle />
                  </p>
                  Kindly fill atleast one of the columns below
                </div>
                <form>
                  <input
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    placeholder="Enter Your Email....."
                  />
                  <input
                    name="phoneNumber"
                    onChange={this.handleChange}
                    value={this.state.phoneNumber}
                    placeholder="Enter Phone Number....."
                  />
                  <button type="submit" onClick={this.handleSubmit}>
                    Send Me Notification
                  </button>
                </form>
              </div>

              <div className={this.state.success ? "success" : "hidden"}>
                <div className="close" onClick={this.handleClose}>
                  <AiFillCloseCircle />
                </div>
                <Flash>
                  <div className="icon">
                    <IoMdCheckmarkCircleOutline />
                  </div>
                </Flash>
                  <p>You Will Receive Notification Soon</p>
              </div>
            </div>
          </Zoom>
        </section>

        <section className="SED-container">
          <div className="grp">
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
                    dignissim netus lobortis nulla tellus cras. Gravida mi
                    libero potenti faucibus montes dictumst, quis eget vitae ac
                    mattis himenaeos varius,
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
            <button onClick={this.handleClick}>I am interested</button>
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
