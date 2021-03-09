import React, { Component } from "react";
import {
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
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'
import Data from './Data/data.json'


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      LoggedIn: true,
    };
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.setState({
      loading: true,
    })
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({
          loading: false,
        });
      }.bind(this),
      7000
    );
  };

  render() {
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
    return (
      <div className="App">
        <Fade bottom>
          <div className={this.state.loading ? "hidden" : "pop-up"}>
            <div className='close' onClick={this.handleClose}>
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
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
