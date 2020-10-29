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
        { id: 0, link: "About", url: "/about" },
        { id: 1, link: "How It Works", url: "/HIW" },
        { id: 2, link: "Support", url: "/support" },
        { id: 3, link: "Privacy & Legals", url: "/P&L" },
        { id: 4, link: "Contact", url: "/contact" },
        { id: 4, link: <GrFacebookOption/>, url: "www.facebook.com/gidigruv" },
        { id: 4, link: <GrTwitter/> , url: "www.twitter.com/gidigruv" },
        { id: 4, link: <GrInstagram/>, url: "www.instagram.com/gidigruv" },

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
            return <Link to={list.url}>{list.link}</Link>;
          })}
        </div>
      </div>
    );
  }
}
