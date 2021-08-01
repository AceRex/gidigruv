import React, { Component, useEffect } from "react";
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
// import WWD from "./whatwedo/whatwedo";
import HIW from "./HowItWorks/HIW";
import HowItWorks from "./HowItWorks/HowItWorks";
import { Link } from 'react-router-dom'
import Data from './Data/data.json'
import SignIn from "./Sign/SignIn";
import Register from "./Sign/register";
import Verification from "./UserVerificationPage/Verification"
import Forgotpassword from "./forgotPassword/forgotpassword"
import PasswordReset from "./forgotPassword/ResetPassword"
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/UserAction";
import { BASEURL, useAuth } from "./authentication/AuthO";
import { getStorageData, StorageKeys } from "./authentication/AuthData";
import axios from 'axios'
import "antd/dist/antd.css";


function Main() {
  let Auth = useAuth()
  const [envList, setEnvList] = React.useState([])
  const EventData = Data["All "]
  useEffect(() => {
    fetch(`${BASEURL}/all`).then(res => res.json().then(data => setEnvList(data)))
  }, [])
  return (
    <>
      <Carousel />
      <HowItWorks />
      {/* <HIW /> */}
      <EventsNearYou Events={envList} />
    </>
  )

}

function App() {
  const [loading, setLoading] = React.useState(true)
  const user = useSelector(selectUser);
  const token = getStorageData(StorageKeys.tokenkey)


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
        <Route path="/forgot-password" component={Forgotpassword} />
        <Route path="/passwordreset" component={PasswordReset} />

        <Route path="/showeventdetails/:title">
          <SED ED={Data["All "]} />
        </Route>
        <Route path="/signin" >
          {token ? <Redirect to="/" /> : <SignIn />}
        </Route>
        <Route path="/register" >
          {token ? <Redirect to="/dashboard" /> : <Register />}
        </Route>
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
