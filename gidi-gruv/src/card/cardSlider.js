import React from "react";
import AliceCarousel from "react-alice-carousel";
import styles from "styled-components";
import "./cardSlider.css";
import "react-alice-carousel/lib/alice-carousel.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Link } from "react-router-dom";

const Datas = [
  {
    id: 0,
    title: "Story Editing: How to Assess and Fix Your First Draft",
    image: "/Images/1.png",
  },
  {
    id: 1,
    title: "Story Editing: How to Assess and Fix Your First Draft",
    image: "/Images/2.png",
  },
  {
    id: 2,
    title: "Manifest 2020 Virtual Convention",
    image: "/Images/3.png",
  },
  {
    id: 3,
    title: "A FEMINISTS GUIDE TO BOTANY Online Botanical Painting Session",
    image: "/Images/4.png",
  },
  {
    id: 4,
    title: "Avec la chaîne de blocs, imaginons le Québec de demain",
    image: "/Images/5.png",
  },
  {
    id: 5,
    title: "Avec la chaîne de blocs, imaginons le Québec de demain",
    image: "/Images/6.png",
  },

  {
    id: 6,
    title: "Avec la chaîne de blocs, imaginons le Québec de demain",
    image: "/Images/7.png",
  },

  {
    id: 7,
    title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
    image: "/Images/8.png",
  },

  {
    id: 8,
    title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
    image: "/Images/3.png",
  },

  {
    id: 9,
    title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
    image: "/Images/2.png",
  },

  {
    id: 10,
    title: "2020 National Police K9 Day - Fallen K9 Memorial Run",
    image: "/Images/1.png",
  },
];

function Card() {
  return (
    <>
      {Datas.map((data) => (
        <SingleCard>
          <div className="image-container">
            <img src={data.image} className="img" />
            <span className="liveNowHidden">
              {" "}
              <p>LIVE NOW </p>
              <VideocamIcon />
            </span>
          </div>
          <div className="details">
            <div className="title">{data.title}</div>
            <Link to="/">
              <button className="detailsBtn">
                <p>Show details</p>
              </button>
            </Link>
          </div>
        </SingleCard>
      ))}
    </>
  );
}
const SingleCard = styles.div`
  width: 290px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;

  .title{
    font-size: 20px;
    height: 80px;
    overflow: hidden;
  }
  .liveNowHidden{
    padding: 3px;
    position:absolute;
    top:15rem;
    left:0px;
    z-index:5;
    width: 100px;
    background-color: var(--ColorPink);
    opacity: 100%;  
    font-size: 9px;
    font-weight: 500;
    display:none;
    p{
      margin:auto;
    }
    
  }
:hover{  
  background-color: #42117e;
    color: var(--ColorPink);  
  transition: all 0.3s ease-in;
  .liveNowHidden{
    display: flex;
    color: var(--ColorWhite); 
    transition: all 1s ease-in;  
    transform: translateX(10px);
    
  }

  .img{
    opacity: 1;
    transition: all 0.4s ease-in;
  }
  
.detailsBtn{
  background-color: var(--ColorPink);
  color: var(--ColorWhite);
  cursor: pointer;
}
}
.details{
  padding: 10px;
}

.date{
  font-size: 13px;
  font-weight: bold;
}
.location{
  display: flex;
}
.image-container{
  width: 290px;
  height: 290px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000000;
}
.img{
  width: 290px;
  height: 290px;
  opacity: 0.6;
}
.detailsBtn{
  width: 120px;
  background-color: var(--ColorWhite);
  color: var(--ColorPink);
  padding: 10px;
  font-size: 12px ;
}

@media screen and (max-width: 600px) {
  width: 140px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  
  .title{
    font-size: 15px;
  }

  .image-container{
    width: 140px;
    height: 140px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #000000;
  }
  .img{
    width: 140px;
    height: 140px;

  }
  :hover{
    .liveNowHidden{
      display: none;
    }

  }
}
`;

export default class CardSlider extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }
  render() {
    const responsive = {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    };

    return (
      <Carousel>
        <AliceCarousel
          duration={300}
          autoPlay={true}
          startIndex={0}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          responsive={responsive}
          swipeDisabled={false}
          mouseDragEnabled={true}
          autoPlayInterval={2000}
          autoPlayDirection="ltr"
          autoPlayActionDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
        >
          <Card />
        </AliceCarousel>
      </Carousel>
    );
  }
}

const Carousel = styles.div`
height: 28rem;
overflow: hidden;


@media screen and (max-width: 600px) {
  width: 99%;
  height: 20rem;
}
`;
