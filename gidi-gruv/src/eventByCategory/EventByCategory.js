import React, {useState} from "react";
import "./Page.css";
import Card from './card'
import { GiFilmSpool, GiLifeBuoy } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { BiChurch, BiBasketball } from "react-icons/bi";
import { IoIosThermometer } from "react-icons/io";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";







export default class EventByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: [
        { category: "Entertainment", color: "var(--ColorPink)", link: '/',icon: <GiFilmSpool/>},
        { category: "Business Seminar", color: '#9F11E1', link: '/', icon: <MdBusinessCenter />},
        { category: "Life Style", color: '#E99108', link: '/', icon: <GiLifeBuoy/>},
        { category: "Technology", color: '#0817E9', link: '/', icon: <ImConnection/>},
        { category: "Religious", color: 'var(--ColorPurple)', link: '/', icon: <BiChurch/>},
        { category: "Sports", color: '#9F11E1', link: '/', icon: <BiBasketball/>},
        { category: "Health Care and Medical", color: '#0817E9', link: '/', icon: <IoIosThermometer/>},
        { category: "Workshop", color: 'var(--ColorPink)', link: '/', icon: <AiOutlineShop/>},
        { category: "Trade Fair", color: '#E99108', link: '/' , icon: <FaRegHandshake/> }

      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <p>
            Explore
            <br /> By Category
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
