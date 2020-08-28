import React, { useState } from "react";
import styles from "styled-components";
import { Link } from "react-router-dom";
import { EventcardData } from "./eventcardData";

//modal
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

import Alert from "@material-ui/lab/Alert";

//icons
import ShareIcon from "@material-ui/icons/Share";

//dummy Images
import Image1 from "../previewImages/1.png";
import Image2 from "../previewImages/2.png";
import Image3 from "../previewImages/3.png";
import Image4 from "../previewImages/4.png";
import Image5 from "../previewImages/5.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Card(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(false);


  const FunctionClick = () =>{
   setShow(false);
  }

  return (
    <>
      <SingleCard>
        <div className="image-container">
          <img src={props.src} className="img" />
        </div>
        <div className="details">
          <div className="title">{props.title}</div>
          <div className="date">Sun, Aug 30, 2020 12:00 AM WAT</div>
          <Link to="/">
            <button className="detailsBtn" onClick={handleOpen}>
              <p>Show details</p>
            </button>
            <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 300,
              }}
            >
              <Fade in={open}>
                <MyModal>
                  <div className="image-container">
                    <img src={Image4} />
                  </div>
                  <div className="details">
                    <p className="title">
                      A FEMINIST'S GUIDE TO BOTANY Online Botanical Painting
                      Session
                    </p>
                    <p className="time">Sun, Aug 30, 2020 12:00 AM WAT</p>
                    <div className="btn">
                      <button>
                        <i class="far fa-share-square"></i> Share Event link
                      </button>
                      <button>
                        <i class="far fa-heart" onClick={FunctionClick}></i> Save Event
                      </button>
                    </div>
                  </div>
                  <div show={show}>
                  {FunctionClick ? <Alert variant="filled" className="success">
                    This Event has been saved, you will be notified when event
                    is about to start
                  </Alert> : <div></div>}
                  </div>
                </MyModal>
              </Fade>
            </Modal>
          </Link>
        </div>
      </SingleCard>
    </>
  );
}

const MyModal = styles.div`
background-color: white;
width: 90vw;
height: 70vh;
border-radius: 15px;
outline: none;
display: flex;
overflow: hidden;
padding: 10px;
.success{
  position:absolute;
  bottom: 0;
  right: 0;
  background-color: var(--ColorPink);
}
.image-container{
  overflow: hidden;
  margin: auto;
  border-radius: 10px;
  img{
    width: 400px;
    height: 400px;
  }

}
.details{
  width: 50%;
  margin: auto;
  color: var(--ColorPurple);
  overflow: hidden;
  .title{
    width: 90%;
    margin: auto;
    height:50%;
    font-size: 30px;
    font-weight: bolder;
    padding: 10px;

  }
  .time{
    width: 90%;
    margin: auto;
    color: var(--ColorBlack);
    padding: 10px;

  }
  .btn{
    width: 90%;
    margin: auto;
    display: flex;
    padding: 10px;
    button{
      width: 45%;
      margin: auto;
    }
  }
}

`;

const SingleCard = styles.div`
width: 30vw;
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
width: 100%;
height: 300px;
border-radius: 10px;
overflow: hidden;
background-color: #000000;
}
.img{
width: 400px;
height: 400px;
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
width: 90vw;
margin: auto;
border-radius: 10px;
overflow: hidden;
display: flex;
margin-top: 20px;

.image-container{
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000000;
}
.img{
  width: 120px;
  height: 120px;

}
.detailsBtn{
    width: 100px;
    margin: auto;
}
.title{
    font-size: 10px;
    font-weight: bold;
    padding:5px;
}
.date{
    
  padding:5px;
}
`;

function Events(props) {
  return (
    <Container>
      <p className="header">Upcoming Events</p>
      <Row>
        <Card src={Image1} title="Events details goes Here" />
        <Card src={Image2} title="Events details goes Here" />
        <Card src={Image3} title="Events details goes Here" />
      </Row>
      <Row>
        <Card src={Image5} title="Events details goes Here" />
        <Card src={Image1} title="Events details goes Here" />
        <Card src={Image4} title="Events details goes Here" />
      </Row>
      <Row>
        <Card src={Image3} title="Events details goes Here" />
        <Card src={Image2} title="Events details goes Here" />
        <Card src={Image5} title="Events details goes Here" />
      </Row>
      <Row>
        <Card src={Image5} title="Events details goes Here" />
        <Card src={Image4} title="Events details goes Here" />
        <Card src={Image3} title="Events details goes Here" />
      </Row>
      <Row>
        <Link to="/" className="morebtn">
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
flex-wrap: wrap;
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
  @media screen and (max-width: 600px) {
    flex-direction: column;

  }

`;

export default Events;
