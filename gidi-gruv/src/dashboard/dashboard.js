import React from "react";
import "./dashboard.css";
import axios from 'axios'
import Header from "../components/header";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import ProfilePhoto from './p-photo.png'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Datas from '../Data/data'

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        image: {ProfilePhoto},
      }
    };
  }
  
  render() {
    return (
      <>
        <div className="db-container">
          <div className="profile">
            <div className='img-container'>
            <img src={ProfilePhoto} />
            </div>
            <div className='profile-details'>
              <form action='get'>
                <div className='f-group'>
                  <label>Fullname</label>
                  <input className='db-input' value={Datas.Userdata.Fullname} /> 
                </div>
                <div className='f-group'>
                  <label>Phone Number</label>
                  <input className='db-input' value={Datas.Userdata.PhoneNumber} /> 
                </div>
                <div className='f-group'>
                  <label>Street</label>
                  <input className='db-input' value={Datas.Userdata.Street} /> 
                </div>
                <div className='f-group'>
                  <label>L.G.A</label>
                  <input className='db-input' value={Datas.Userdata.LGA} /> 
                </div>
                <div className='f-group'>
                  <label>Country</label>
                  <input className='db-input' value={Datas.Userdata.Country} /> 
                </div>
                <div className='f-group'>
                  <label>Interest</label>
                  <input className='db-input'  /> 
                </div>
                <div className='f-group'>
                  <button className='db-btn'>Save Details</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
