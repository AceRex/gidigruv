import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
import Logo from './crio.png'
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";


const list=  [
    { id: 0, link: "Become a partner", url: "/not-available" },
    { id: 1, link: "How It Works", url: "#HIW" },
    { id: 2, link: "Sponsor your event", url: "/not-available" },
    { id: 3, link: "Privacy & Legals", url: "/not-available" },
    { id: 4, link: "Contact", url: "/not-available" },
    { id: 5, link: <GrFacebookOption/>, url: "https://www.facebook.com/Gidigruv" },
    { id: 6, link: <GrTwitter/> , url: "www.twitter.com/gidigruv" },
    { id: 7, link: <GrInstagram/>, url: "https://www.instagram.com/gidigruv/" },

  ]

export default function Footer () {
  
    return (
      <div className="footer">
        <div className="logo">
            <img src={Logo}/>
        </div>
        <div className="list">
          {list.map((list) => {
            return <a href={list.url}>{list.link}</a>;
          })}
        </div>
      </div>
    );
  }