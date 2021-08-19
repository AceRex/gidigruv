import React, { useState } from "react";
import "./Page.css";
import Card from "./card";
import { GiFilmSpool, GiLifeBuoy, GiMusicalNotes } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { BiChurch, BiBasketball } from "react-icons/bi";
import { IoIosThermometer } from "react-icons/io";
import { AiOutlineShop } from "react-icons/ai";
import { FaDrawPolygon } from "react-icons/fa";


const Categories = [
  {
    id: 0,
    category: "Entertainment",
    color: "var(--ColorPink)",
    link: "/category-page",
    icon: <GiFilmSpool />,
  },
  {
    id: 1,
    category: "Business Seminar",
    color: "#9F11E1",
    link: "/category-page",
    icon: <MdBusinessCenter />,
  },
  {
    id: 2,
    category: "Art",
    color: "#9F11E1",
    link: "/category-page",
    icon: <FaDrawPolygon />,
  },
  {
    id: 3,
    category: "Music",
    color: "#9F11E1",
    link: "/category-page",
    icon: <GiMusicalNotes />,
  },
  {
    id: 4,
    category: "Life Style",
    color: "#E99108",
    link: "/category-page",
    icon: <GiLifeBuoy />,
  },
  {
    id: 5,
    category: "Technology",
    color: "#0817E9",
    link: "/category-page",
    icon: <ImConnection />,
  },
  {
    id: 6,
    category: "Religious",
    color: "var(--ColorPurple)",
    link: "/category-page",
    icon: <BiChurch />,
  },
  {
    id: 7,
    category: "Sports",
    color: "#9F11E1",
    link: "/category-page",
    icon: <BiBasketball />,
  },
  {
    id: 8,
    category: "Health Care and Medical",
    color: "#0817E9",
    link: "/category-page",
    icon: <IoIosThermometer />,
  },
  {
    id: 9,
    category: "Workshop",
    color: "var(--ColorPink)",
    link: "/category-page",
    icon: <AiOutlineShop />,
  },
],
export default function EventByCategory() {
    return (
      <div className="container">
        <div className="sub-container">
          <p>
            <span>Explore Events</span> by category
          </p>
          <div className="category-cards">
            {Categories.map((items) => {
              return (
                <Card
                  Key={items.id}
                  category={items.category}
                  Link={items.link}
                  color={items.color}
                  icon={items.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }