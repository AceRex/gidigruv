import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import styles from "styled-components";

export default function card(props) {

 
  const Icon = styles.div`
  font-size: 2rem;
  `;
  return (
    <Link to={props.Link} className="cat-card">
      <Icon>{props.icon}</Icon>
      <p>{props.category}</p>
    </Link>
  );
}
