import React from "react";
import "./dashboard.css";
import axios from 'axios'
import Header from "../components/header";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import ProfilePhoto from './p-photo.png'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        image: {ProfilePhoto},
      }
    };
  }
  // componentDidMount(){
  //   axios
  //   .get('https://jsonplaceholder.typicode.com/photos')
  //   .then(res => this.state.profile.image(res))
  //   .catch(err => console.error(err));
  // }
  render() {
    return (
      <>
        <Header />
        <div className="db-container">
          <div className="profile">
            <div className='img-container'>
            <img src={ProfilePhoto} />
            </div>
            <div className='profile-details'>
              <label className='fullName'> Are Oluwasegun Johnson</label>
              <label className='email'> email@emailprovider.com</label>
              <label className='phone-number'> +234 70 700 7000</label>
              <label className='address'> Lagos state location</label>
            </div>
          </div>
        </div>
      </>
    );
  }
}
