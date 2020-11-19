import React, { Component } from "react";
import Header from "../components/header";
import "./categoryPage.css";
import { GoSearch } from "react-icons/go";
import LiveCard from "../LiveNow/Livecard";
import Footer from "../components/footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      All: [
        {
          id: 0,
          title: "MUSIC CONCERT",
          img: "/Images/10.jpg",
          pay: "PAID",
          MM: "JUN",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 1,
          title: "Story Editing: How to Assess and Fix Your First Draft",
          img: "/Images/11.jpg",
          pay: "FREE",
          MM: "SEP",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 2,
          title: "Manifest 2020 Virtual Convention",
          pay: "PAID",
          img: "/Images/12.jpg",
          MM: "AUG",
          DD: "10",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 3,
          title:
            "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
          pay: "PAID",
          img: "/Images/13.jpg",
          MM: "MAR",
          DD: "16",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 4,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/14.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/15.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
      ],
      Free: [
        {
          id: 0,
          title: "MUSIC CONCERT",
          img: "/Images/16.jpg",
          pay: "PAID",
          MM: "JUN",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 1,
          title: "Story Editing: How to Assess and Fix Your First Draft",
          img: "/Images/17.jpg",
          pay: "FREE",
          MM: "SEP",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 2,
          title: "Manifest 2020 Virtual Convention",
          pay: "PAID",
          img: "/Images/18.jpg",
          MM: "AUG",
          DD: "10",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 3,
          title:
            "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
          pay: "PAID",
          img: "/Images/19.jpg",
          MM: "MAR",
          DD: "16",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 4,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/11.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/10.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
      ],
      Paid: [
        {
          id: 0,
          title: "MUSIC CONCERT",
          img: "/Images/13.jpg",
          pay: "PAID",
          MM: "JUN",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 1,
          title: "Story Editing: How to Assess and Fix Your First Draft",
          img: "/Images/14.jpg",
          pay: "FREE",
          MM: "SEP",
          DD: "12",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 2,
          title: "Manifest 2020 Virtual Convention",
          pay: "PAID",
          img: "/Images/15.jpg",
          MM: "AUG",
          DD: "10",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 3,
          title:
            "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
          pay: "PAID",
          img: "/Images/10.jpg",
          MM: "MAR",
          DD: "16",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 4,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/11.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/12.jpg",
          pay: "PAID",
          MM: "DEC",
          DD: "26",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="cat-container">
          <div className="cat-bg">
            <div className="cat-search">
              <GoSearch className="icon" />
              <input placeholder="Search" maxLength="60" />
            </div>
          </div>
          <section className="cat-content">
            <div className="cat-title">
              <h2>Entertainment</h2>
              <small>Category</small>
            </div>
              <Tabs className='cat-tab-container'>
                <TabList className='cat-tab'>
                  <Tab>All Categories</Tab>
                  <Tab>Paid</Tab>
                  <Tab>Free</Tab>
                  <Tab>This Month</Tab>
                  <Tab>This Week</Tab>
                </TabList>
                <TabPanel className="cat-items">
                  {this.state.Free.map((items) => {
                    return (
                      <LiveCard
                        pay={items.pay}
                        img={items.img}
                        MM={items.MM}
                        DD={items.DD}
                        title={items.title}
                        location={items.location}
                        time={items.time}
                      />
                    );
                  })}
                </TabPanel>
              </Tabs>
            <div className="cat-title">
              <h2>
                By Location - <p>Accra, GH</p>
              </h2>
            </div>
            <div className="cat-items">
              {this.state.All.map((items) => {
                return (
                  <LiveCard
                    pay={items.pay}
                    img={items.img}
                    MM={items.MM}
                    DD={items.DD}
                    title={items.title}
                    location={items.location}
                    time={items.time}
                  />
                );
              })}
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}
