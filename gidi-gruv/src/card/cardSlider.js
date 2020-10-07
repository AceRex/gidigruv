import React, { useState } from "react";
import "./cardSlider.css";
import Datas  from './cardData';
import Carousel from "react-multi-carousel";
import SingleCard from './singleCArd';
import "react-multi-carousel/lib/styles.css";

class Gallery extends React.Component {
  constructor(){
    super();
    this.state = {
      items : Datas
    }
  }
 
  render() { 
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    }

    const liveCard = this.state.items.map(data =>  <SingleCard title={data.title} image={data.image} />   )

      return (
        <Carousel
          autoPlay={true}
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlaySpeed={2000}
        >
          {liveCard}
        </Carousel>
      );
  }
}
export default Gallery;
