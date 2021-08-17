import React, { useEffect, useState } from "react";
import "./SED.css";
import Livecard from "../LiveNow/Livecard";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Data from "../Data/data.json";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdNotifications, IoMdCheckmarkCircleOutline } from "react-icons/io";
import Zoom from "react-reveal/HeadShake";
import Flash from "react-reveal/Flash";
import { FiAlertTriangle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from '../authentication/axios-config'
import { useAuth} from '../authentication/AuthO.jsx'
function ScrollToToponMount() {
  let Auth = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0);
    Auth.meFn()
  }, []);
  return null
}
function EventDetail() {
  const { id } = useParams();
  const Events = Data["All "]
  const [eventDetail, setEventDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const getEvent = () => {
    setLoading(true)
    axios.get(`event/${id}`).then(event => {
      setLoading(false)
      setEventDetail(event.data)
    })
      .catch(err => {
        setLoading(false);
        setError(err)
      })
  }
  const attendEvent = () => {
    setLoading(true)
    axios.get(`event/attend/${id}`).then(event => {
      setLoading(false)
      console.log(event.data)
    })
      .catch(err => {
        setLoading(false);
        setError(err)
      })
  }
  useEffect(() => {
    getEvent()
  }, [id])

  return (
    <div className="grp">
      {loading ? <p>loading</p> : <>
        <ScrollToToponMount />
        <div className="img-container">
          <img src={eventDetail.img} alt="Image" />
        </div>
        <div className="SED-details">
          <p>{eventDetail.title}</p>
          <table>
            <tr>
              <td className="td1">Description</td>
              <td>
                {eventDetail.description}
              </td>
            </tr>
            <tr>
              <td className="td1">Date</td>
              <td>{eventDetail.start_date}   / {eventDetail.end_date}</td>
            </tr>
            <tr>
              <td className="td1">Time</td>
              <td>{eventDetail.time}</td>
            </tr>
            <tr>
              <td className="td1">Address</td>
              <td>{`${eventDetail.street_address}, ${eventDetail.city}, ${eventDetail.state}, ${eventDetail.country}`}</td>
            </tr>
          </table>
        </div>
      </>
      }


    </div>
  )
}
class ShowEventDetails extends React.Component {
  constructor(props) {
    super(props);
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
    // attendEvent()
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
          <EventDetail />
          {/* <div className="map">
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
          </div> */}
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
                  // MM={items.date.MM}
                  // DD={items.date.DD}
                  title={items.title}
                  location={items.location}
                // time={items.time}
                />
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQr_LU-7L9jgRgulUYOtK6itkHHveUs4Y",
})(ShowEventDetails);
