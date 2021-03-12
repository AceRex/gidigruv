import React, { Component, useState } from "react";
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
import Overview from "./dashboard/Overview"
import Password from "./dashboard/Password"
import Contact from "./contact/contact";
import HowItWorks from "./HowItWorks/HowItWorks";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'
import Data from './Data/data.json'
import SignIn from "./Sign/SignIn";
import Register from "./Sign/register";
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/UserAction";

function Main() {
  const EventData = Data["All "]
  return (
    <>
      <Carousel />
      <WWD />
      <HowItWorks />
      <HIW />
      <EventsNearYou Events={EventData} />
      <Contact />
    </>
  )

}

function App() {
  const [loading, setLoading] = useState(true)
  const user = useSelector(selectUser);


  // const handleClose = () => {
  //   setLoading
  // }
  // componentDidMount() {
  //   setTimeout(
  //     function () {
  //       setLoading({
  //         loading: false,
  //       });
  //     }.bind(this),
  //     7000
  //   );
  // };
  return (
    <div className="App">
      <Fade bottom>
        <div className={loading ? "hidden" : "pop-up"}>
          <div className='close'
          //  onClick={handleClose}
          >
            X
            </div>
          <div className="buttons">
            Click the button to
              <Link to='/register'>Register</Link>
              /
              <Link to='/signin'>Login</Link>
          </div>
        </div>
      </Fade>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact-us" component={contactPage} />
        <Route path="/not-available" component={NotAvailable} />
        <Route path="/create-event" component={CreateEvent} />
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
        <Route path="/dashboard" component={Dashboard}/>
          
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
