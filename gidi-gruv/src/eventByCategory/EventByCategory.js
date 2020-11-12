import React, {useState} from "react";
import "./Page.css";
import Card from './card'
import { GiFilmSpool, GiLifeBuoy, GiMusicalNotes } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { BiChurch, BiBasketball } from "react-icons/bi";
import { IoIosThermometer } from "react-icons/io";
import { AiOutlineShop } from "react-icons/ai";
import { FaDrawPolygon } from "react-icons/fa";







export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: [
        { category: "Entertainment", color: "var(--ColorPink)", link: '/',icon: <GiFilmSpool/>},
        { category: "Business Seminar", color: '#9F11E1', link: '/', icon: <MdBusinessCenter />},
        { category: "Art", color: '#9F11E1', link: '/', icon: <FaDrawPolygon />},
        { category: "Music", color: '#9F11E1', link: '/', icon: <GiMusicalNotes />},
        { category: "Life Style", color: '#E99108', link: '/', icon: <GiLifeBuoy/>},
        { category: "Technology", color: '#0817E9', link: '/', icon: <ImConnection/>},
        { category: "Religious", color: 'var(--ColorPurple)', link: '/', icon: <BiChurch/>},
        { category: "Sports", color: '#9F11E1', link: '/', icon: <BiBasketball/>},
        { category: "Health Care and Medical", color: '#0817E9', link: '/', icon: <IoIosThermometer/>},
        { category: "Workshop", color: 'var(--ColorPink)', link: '/', icon: <AiOutlineShop/>},

      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <p>
            <span>Explore Events</span> by category
          </p>
          <div className="category-cards">
              {this.state.Categories.map((items) => {
                  return(
                    <Card category={items.category} link={items.link} color={items.color} icon={items.icon}/>
                   
                  )
              })}
          </div>
        </div>
      </div>
    );
  }
}
