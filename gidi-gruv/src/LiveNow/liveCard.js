import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {Link} from 'react-router-dom';

export default function LiveCard(props) {
  return (
    <Link to="/showevent">
      <div className="card">
        <div className="video-container">
          <img src={props.video} />
        </div>
        <div className="details">
          <p>{props.categories}</p>
          <div className="viewer">
            <div>
              <VisibilityIcon />
            </div>
            <small>{props.viewers}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}
