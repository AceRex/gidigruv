import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Page.css";
import { Link } from "react-router-dom";

export default function card(props) {
    
  return (
    <Link to={props.Link} className="cat-card">
      {/* <FontAwesomeIcon icon={props.icon}/> */}
      {props.category}
    </Link>
  );
}
