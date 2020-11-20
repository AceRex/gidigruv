import React, { useState } from "react";
import LiveCard from "../LiveNow/Livecard";
import "./EventsNear.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class EventByCategory extends React.Component {
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
          img: "/Images/1.jpg",
          pay: "FREE",
          MM: "JUL",
          DD: "30",
          location: "Ikeja, Lagos. NG",
          time: "08:00pm",
        },
        {
          id: 5,
          title: "Avec la chaîne de blocs, imaginons le Québec de demain",
          img: "/Images/2.jpg",
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
      <div className="container">
        <div className="evn-container">
          <p>Upcoming Events <span>Near You</span></p>
          <div className="cards">
            <Tabs>
              <TabList>
              <Tab>All Categories</Tab>
              <Tab>Paid</Tab>
              <Tab>Free</Tab>
              <Tab>Today</Tab>
              <Tab>Tommorrow</Tab>

            </TabList>
            <TabPanel>
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
            <div className="load-more-btn">
          <button>Load More</button>
        </div>
            </TabPanel>
            <TabPanel>
              {this.state.Paid.map((items) => {
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
            <div className="load-more-btn">
          <button>Load More</button>
        </div>
            </TabPanel>
            <TabPanel>
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
            <div className="load-more-btn">
          <button>Load More</button>
        </div>
            </TabPanel>
            <TabPanel>
              No Events Available
            </TabPanel>
            <TabPanel>
              No Events Available
            </TabPanel>
            </Tabs>
            
          </div>
        </div>
        
      </div>
    );
  }
}
