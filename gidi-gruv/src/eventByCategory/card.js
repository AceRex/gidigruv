import React, { useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import styles from "styled-components";

export default function card(props) {
 
  const Icon = styles.div`
  color: ${props.color};
  font-size: 3rem;
  :hover{
    color: #fff
  }
  `;
  return (
    <Link to={props.Link} className="cat-card">
      <Icon>{props.icon}</Icon>
      {props.category}
    </Link>
  );
}
