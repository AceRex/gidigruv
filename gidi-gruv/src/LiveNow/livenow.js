import React, {useState} from "react";
import LiveCard from './Livecard'
import { Link } from 'react-router-dom'
import './LiveNow.css'



export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Datas : [
      {
        id: 0,
        title: {},
        img: "/Images/10.jpg",
        pay: 'PAID',
        MM: 'JUN',
        DD: '12',
        location: "Kuje, Abuja. NG",
        time: '08:00pm'
      },
      {
        id: 1,
        title: {},
        img: "/Images/11.jpg",
        pay: 'FREE',
        MM: 'SEP',
        DD: '12',
        location: "Ikeja, Lagos. NG",
        time: '08:00pm'
      },
      {
        id: 2,
        title: {},
        pay: 'PAID',
        img: "/Images/12.jpg",
        MM: 'AUG',
        DD: '10',
        location: "Dugbe, Oyo. NG",
        time: '08:00pm'
      },
      {
        id: 3,
        title: {},
        pay: 'PAID',
        img: "/Images/13.jpg",
        MM: 'MAR',
        DD: '16',
        location: "Surulere, Lagos. NG",
        time: '08:00pm'
      },
      {
        id: 4,
        title: {},
        img: "/Images/14.jpg",
        pay: 'FREE',
        MM: 'JUL',
        DD: '30',
        location: "Ikeja, Lagos. NG",
        time: '08:00pm'
      },
      {
        id: 5,
        title: {},
        img: "/Images/15.jpg",
        pay: 'PAID',
        MM: 'DEC',
        DD: '26',
        location: "New Karu, Abuja. NG",
        time: '08:00pm'
      },
    
      {
        id: 6,
        title: {},
        img: "/Images/9.jpg",
        pay: 'FREE',
        MM: 'APR',
        DD: '09',
        location: "Kwamba, Abuja. NG",
        time: '08:00pm'
      },
    
      {
        id: 7,
        title: {},
        img: "/Images/16.jpg",
        pay: 'FREE',
        MM: 'OCT',
        DD: '05',
        location: "Tafo, Kumasi. GH",
        time: '08:00pm'
      },
    
      {
        id: 8,
        title: {},
        img: "/Images/17.jpg",
        pay: 'PAID',
        MM: 'NOV',
        DD: '12',
        location: "Lekki, Lagos. NG",
        time: '08:00pm'
      },
    
      {
        id: 9,
        title: {},
        img: "/Images/18.jpg",
        pay: 'PAID',
        MM: 'FEB',
        DD: '12',
        location: "Gbawe, Accra. GH",
        time: '08:00pm'
      },
    
      {
        id: 10,
        title: {},
        img: "/Images/19.jpg",
        pay: 'FREE',
        MM: 'MAY',
        DD: '20',
        location: "Molete, Oyo. NG",
        time: '08:00pm'
      },
      {
        id: 11,
        title: {},
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
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then( data =>
      this.setState({
        title: data
      })
    )
  }

  render() {
    return (
      <div className="container">
        <div className="Live-container">
          <p>
            Live Now
          </p>
          <div className="cards">
            {this.state.Datas.map((items) => {
              return(                
              <LiveCard key={items.id} pay={items.pay} img={items.img} MM={items.MM} DD={items.DD} title={items.title.title} location={items.location} time={items.time}/>
              )
            })}
            <Link to='/' className="load-more">
              Load More Events
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
