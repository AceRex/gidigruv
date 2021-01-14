import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
import Logo from './crio.png'
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";


export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 0, link: "Become a partner", url: "/" },
        { id: 1, link: "How It Works", url: "/HIW" },
        { id: 2, link: "Sponsor your event", url: "/support" },
        { id: 3, link: "Privacy & Legals", url: "/P&L" },
        { id: 4, link: "Contact", url: "/contact" },
        { id: 5, link: <GrFacebookOption/>, url: "https://www.facebook.com/Gidigruv" },
        { id: 6, link: <GrTwitter/> , url: "www.twitter.com/gidigruv" },
        { id: 7, link: <GrInstagram/>, url: "https://www.instagram.com/gidigruv/" },

      ],
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="logo">
            <img src={Logo}/>
        </div>
        <div className="list">
          {this.state.list.map((list) => {
            return <a href={list.url}>{list.link}</a>;
          })}
        </div>
      </div>
    );
  }
}
