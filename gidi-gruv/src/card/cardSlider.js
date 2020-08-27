import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./cardSlider.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from '../previewImages/1.png'
import Image2 from '../previewImages/2.png'


function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
          <img src={props.src} className='img'/>
      </div>
      <div className="details">
          {/* <div className='time'>01:02:09</div> */}
          <div className='livenow'>Live Now</div>
          <div className='date'>22-07-2020</div>
          <div className='location'>Idinmu, Lagos</div>
          <button className='detailsBtn'><p>Show details</p></button>
      </div>
    </div>
  );
}

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
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={0}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <Card src={Image1}/>
        <Card src={Image2}/>
        <Card src={Image1}/>
        <Card src={Image2}/>
        <Card src={Image1}/>
        <Card src={Image2}/>

      </AliceCarousel>
    );
  }
}
