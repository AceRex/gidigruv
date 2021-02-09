import React from "react";
import IMG from "./not.svg";
import "./App.css";
import {Link} from 'react-router-dom'

export default function NotAvailable() {
  return (
    <div className="container">
      <div className="not-av">
        <img src={IMG} />
        <p>This Feature is currently not available</p>
        <span> We promise to make it available to you soon</span> 
        <br />
        <span> <Link to='/'>Back to Home</Link></span>
      </div>
    </div>
  );
}
