import React from "react";
import "./App.css";
import Logo from "./Logopurple.png";

export default function Loading() {
  return (
    <div className="load-container">
      <img src={Logo} />
      <p>Loading...</p>
      <div className='dots'>
          <p></p>
      </div>
    </div>
  );
}
