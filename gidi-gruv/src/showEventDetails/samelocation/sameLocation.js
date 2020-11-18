import React, {useState} from "react";
import LiveCard from '../../LiveNow/Livecard'
import { Link } from 'react-router-dom'
import '../../LiveNow/LiveNow.css'


export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Datas : [
      
      {
        id: 2,
        title: "Manifest 2020 Virtual Convention",
        pay: 'PAID',
        img: "/Images/12.jpg",
        MM: 'AUG',
        DD: '10',
        location: "Dugbe, Oyo. NG",
        time: '08:00pm'
      },
      {
        id: 3,
        title: "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
        pay: 'PAID',
        img: "/Images/13.jpg",
        MM: 'MAR',
        DD: '16',
        location: "Surulere, Lagos. NG",
        time: '08:00pm'
      },
      {
        id: 4,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        img: "/Images/14.jpg",
        pay: 'FREE',
        MM: 'JUL',
        DD: '30',
        location: "Ikeja, Lagos. NG",
        time: '08:00pm'
      },
      {
        id: 5,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        img: "/Images/15.jpg",
        pay: 'PAID',
        MM: 'DEC',
        DD: '26',
        location: "New Karu, Abuja. NG",
        time: '08:00pm'
      },
    
      {
        id: 6,
        title: "Avec la chaîne de blocs, imaginons le Québec de demain",
        img: "/Images/9.jpg",
        pay: 'FREE',
        MM: 'APR',
        DD: '09',
        location: "Kwamba, Abuja. NG",
        time: '08:00pm'
      },
    
      {
        id: 7,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        img: "/Images/16.jpg",
        pay: 'FREE',
        MM: 'OCT',
        DD: '05',
        location: "Tafo, Kumasi. GH",
        time: '08:00pm'
      },
    
      {
        id: 8,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        img: "/Images/17.jpg",
        pay: 'PAID',
        MM: 'NOV',
        DD: '12',
        location: "Lekki, Lagos. NG",
        time: '08:00pm'
      },
    
      {
        id: 9,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        img: "/Images/18.jpg",
        pay: 'PAID',
        MM: 'FEB',
        DD: '12',
        location: "Gbawe, Accra. GH",
        time: '08:00pm'
      },
    
      {
        id: 10,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        img: "/Images/19.jpg",
        pay: 'FREE',
        MM: 'MAY',
        DD: '20',
        location: "Molete, Oyo. NG",
        time: '08:00pm'
      },
      {
        id: 11,
        title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
        img: "/Images/15.jpg",
        pay: 'FREE',
        MM: 'JAN',
        DD: '01',
        location: "Lapaz, Accra. GH",
        time: '08:00pm'
      }
    ]
  }
   
  }

  render() {
    return (
      <>
      <div className="container">
        <div className="Live-container">
          <div className="cards">
            {this.state.Datas.map((items) => {
              return(                
              <LiveCard pay={items.pay} img={items.img} MM={items.MM} DD={items.DD} title={items.title} location={items.location} time={items.time}/>
              )
            })}
            
          </div>
        </div>
      </div>
      <div className='load-more'>
      <button className="load-more-btn" >Load More Events</button>
      </div>
      </>
    );
  }
}
