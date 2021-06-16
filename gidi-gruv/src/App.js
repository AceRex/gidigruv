import React, { Component } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import "./App.css";
import Header from "./components/header";
import Carousel from "./carousel/carousel";
import EventsNearYou from "./EventsNearYou/EventsNearYou";
import Footer from "./components/footer";
import AboutUs from "./About/About";
import SED from "./showEventDetails/SED";
import Dashboard from "./dashboard/dashboard";
import NotAvailable from './NotAvailable'
import CreateEvent from "./createEvent/createEvent";
import CategoryPage from "./categoryPage/categoryPage";
import contactPage from "./contactPage/contactPage";
import WWD from "./whatwedo/whatwedo";
import HIW from "./HowItWorks/HIW";
import Contact from "./contact/contact";
import HowItWorks from "./HowItWorks/HowItWorks";
import { Link } from 'react-router-dom'
import Data from './Data/data.json'
import SignIn from "./Sign/SignIn";
import Register from "./Sign/register";
import Verification from "./UserVerificationPage/Verification"
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/UserAction";
import { useAuth } from "./authentication/AuthO";
import { getStorageData } from "./authentication/AuthData";
import axios from 'axios'
import "antd/dist/antd.css";


function Main() {
  let Auth = useAuth()

  React.useEffect(() => {
    axios.get('https://api.gidigruv.com/api/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  })



  const [envList, setEnvList] = React.useState([])
  const EventData = Data["All "]
  console.log(envList)
  return (
    <>
      <Carousel />
      <WWD />
      <HowItWorks />
      {/* <HIW /> */}
      <EventsNearYou Events={envList} />
      <Contact />
    </>
  )

}

function App() {
  const [loading, setLoading] = React.useState(true)
  const user = useSelector(selectUser);


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact-us" component={contactPage} />
        <Route path="/not-available" component={NotAvailable} />
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/verification" component={Verification} />
        <Route path="/category-page" component={CategoryPage} />
        <Route path="/showeventdetails/:title">
          <SED ED={Data["All "]} />
        </Route>
        <Route path="/signin" >
          {user ? <Redirect to="/" /> : <SignIn />}
        </Route>
        <Route path="/register" >
          {user ? <Redirect to="/dashboard" /> : <Register />}
        </Route>
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
