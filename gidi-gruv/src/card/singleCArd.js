import React, {useState} from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Link } from "react-router-dom";


export default function Card(props) {
  const [show, setShow] = useState(' ')

  const handleShow = () => {
      setShow('anim')
  }
  const handleShowOut = () => {
    setShow('anim-out')
}

  return (
    <>
        <div className="sliderCard" onMouseEnter={handleShow} onMouseLeave={handleShowOut}>
          {/* Hoover Part */}

          <div className="details">
            <div className="title">{props.title}</div>
            <span className="liveNowHidden">
              <p>
                <span>LIVE NOW</span>
                <VideocamIcon />
              </p>
              <Link to="/">
                <button>
                  <p>View this Event</p>
                </button>
              </Link>
            </span>
          </div>
          {/* Image Part */}

          <div className={`image-container ${show}`} >
            <img src={props.image} />
          </div>
        </div>
    </>
  );
}
