import React from "react";
import styles from "styled-components";
import { Link } from "react-router-dom";
import Image1 from "../previewImages/1.png";
import Image2 from "../previewImages/2.png";
import Image3 from "../previewImages/3.png";
import Image4 from "../previewImages/4.png";
import Image5 from "../previewImages/5.png";

function Card(props) {
  return (
    <SingleCard>
      <div className="image-container">
        <img src={props.src} className="img" />
      </div>
      <div className="details">
        <div className="title">{props.title}</div>
        <div className="date">Sun, Aug 30, 2020 12:00 AM WAT</div>
        <Link to="/">
          <button className="detailsBtn">
            <p>Show details</p>
          </button>
        </Link>
      </div>
    </SingleCard>
  );
}

const SingleCard = styles.div`
width: 300px;
margin: auto;
border: transparent;
border-radius: 10px;
overflow: hidden;
color: var(--ColorPurple);

:hover{  
   box-shadow: 2px 2px 15px rgba(75, 75, 75, 0.296) ;
    transition: all 0.3s ease-in;
.img{
  opacity: 1;
  transition: all 0.4s ease-in;
}

.detailsBtn{
background-color: var(--ColorPink);
color: var(--ColorPurple);
cursor: pointer;
}
}
//hover Ends

.details{
padding: 10px;

.title{
  font-size: 20px;
  font-weight: bold;
}
}

.date{
font-size: 12px;
color: var(--ColorPink);
font-weight: bold;
}
.location{
display: flex;
}
.image-container{
width: 300px;
height: 300px;
border-radius: 10px;
overflow: hidden;
background-color: #000000;
}
.img{
width: 300px;
height: 300px;
opacity: 0.6;
}
.detailsBtn{
width: 120px;
background-color: var(--ColorPink);
color: var(--ColorWhite);
padding: 10px;
font-size: 12px ;
box-shadow: 1px 1px 10px #ff149183;
}

@media screen and (max-width: 600px) {
width: 85px;
margin: auto;
border-radius: 10px;
overflow: hidden;

.image-container{
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000000;
}
.img{
  width: 100px;
  height: 100px;

}
.detailsBtn{
    width: 70px;
    margin: auto;
}
.title{
    font-size: 10px;
    font-weight: bold;
}
.location{
    font-size: 10px;
}
`;

function Events(props) {
  return (
    <Container>
      <p className="header">Upcoming Events</p>
      <Row>
        <Card src={Image1} title='Events details goes Here' />
        <Card src={Image2} title='Events details goes Here' />
        <Card src={Image3} title='Events details goes Here'/>
      </Row>
      <Row>
        <Card src={Image5} title='Events details goes Here'/>
        <Card src={Image1} title='Events details goes Here'/>
        <Card src={Image4} title='Events details goes Here'/>
      </Row>
      <Row>
        <Card src={Image3} title='Events details goes Here'/>
        <Card src={Image2} title='Events details goes Here'/>
        <Card src={Image5} title='Events details goes Here'/>
      </Row>
      <Row>
        <Card src={Image5} title='Events details goes Here'/>
        <Card src={Image4} title='Events details goes Here'/>
        <Card src={Image3} title='Events details goes Here'/>
      </Row>
      <Row>
        <Link to="/" className='morebtn'>
          See More
        </Link>
      </Row>
    </Container>
  );
}

const Container = styles.div`
padding: 10px 0;
width: 95vw;
margin: auto;

.header{
padding: 20px 37px;
color: var(--ColorPurple);

}
`;

const Row = styles.div`
display: flex;
width: 95vw;
margin: auto;
padding: 10px 0px;
.morebtn{
    color: var(--ColorPurple);
    padding: 10px;
    border: solid 1px var(--ColorPurple);
    font-weight: 700;
    width: 100px;
    margin: auto;
  }

`;

export default Events;
