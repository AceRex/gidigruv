import React, {useState} from "react";

export default class EventByCategory extends React.Component {
  constructor() {
    super();
   
  }

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <p>
            Live
            <br /> Now
          </p>
          <div className="category-cards">
              
          </div>
        </div>
      </div>
    );
  }
}
