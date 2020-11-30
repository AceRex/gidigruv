import React, { Component, useState } from "react";
import Header from "../components/header";
import Preview from "./imageUpload";
import Select from "react-select";
import Date from "./DatePicker";
import Datas from '../Data/data'

export default class CreateEvent extends Component {
  
  render() {

    return (
      <>
        <Header />
        <div className="CE-container">
          <form className="CE-form">
            <div className="CE-form-left">
              <Preview />
              <div className="Ev-des ">
                <label>Give us the full details of this Event :</label>
                <textarea cols="5" rows="7" />
              </div>
            </div>
            <div className="CE-form-right">
              <div className="form-group">
                <label>What's the Title/Theme of this Event?</label>
                <input
                  type="text"
                  maxlength="65"
                  placeholder="Enter Title of Event Here"
                  className="Ev-title"
                />
              </div>
              <div className="form-group">
                <label>Select Category of Event</label>
                <Select options={Datas.options} />
              </div>
              <div className="form-group">
                <label>
                  If this Event will be physical, Where will it hold?{" "}
                  <small>(Kindly Enter Address in Full)</small>
                </label>
                <input
                  type="address"
                  maxlength="65"
                  placeholder="Enter Full Address to Event Here"
                  className="Ev-input"
                />
              </div>

              <div className="form-group">
                <label>
                  If this event will be online, Kindly Enter the Link to the
                  Event
                </label>
                <input
                  type="link"
                  maxlength="65"
                  placeholder="Enter Link to Event"
                  className="Ev-input"
                />
              </div>
              <div className="form-group">
                <label>Select the correct date and time of the Event</label>
                <Date />
              </div>
              <div className="form-group">
                <div className="payment">
                  <label>Will this event be; </label>
                  <input type="radio" />
                  Free
                  <input type="radio" />
                  Paid
                </div>
              </div>
              <div className='form-group'>
                <label>Cost for Attending</label>
                <input type='text' placeholder='₦' className='Ev-input' />
              </div>
              <div className='form-group'>
                <div className='payment'>
                  <input type='checkbox' />
                  <label>I agree to Gidi Gruv <a href='/Termsandconditions_201118_154817.pdf'>Terms and Condition.</a></label>
              </div>
                </div>
              <div className="btn">
                <button type="reset" className="reset-btn">
                  Reset
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
