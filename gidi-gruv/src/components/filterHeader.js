import React from "react";
import { Link } from "react-router-dom";
import './filterHeader.css'
import SearchIcon from '@material-ui/icons/Search';


const select = [
  {
    id: 0,
    option: "Popular",
  },
  {
    id: 1,
    option: "Most Viewed",
  },
  {
    id: 2,
    option: "Recent",
  },
  {
    id: 3,
    option: "Less Viewed",
  },
];

const Links = [
  {
    id: 0,
    link: "All",
  },
  {
    id: 1,
    link: "Music",
  },
  {
    id: 2,
    link: "Business",
  },
  {
    id: 3,
    link: "Gospel",
  },
  {
    id: 4,
    link: "Comedy",
  },
  {
    id: 5,
    link: "Seminar",
  },
];

function FilterHeader() {
  return (
    <>
      <p style={text}> Live Now</p>
      <div className='mainStyle'>
        <div>
          <select>
            {select.map((option) => (
              <option>{option.option}</option>
            ))}
          </select>
        </div>
        <div style={LinkStyle}>
          {Links.map((link) => (
            <Link to="/" className='nav-style'>
              <li>{link.link}</li>
            </Link>
          ))}
        </div>
        <div className='search'>
            <SearchIcon />
            <input />
        </div>
      </div>
    </>
  );
}
const LinkStyle = {
  display: "flex",
  listStyleType: "none",
};

const text = {
  borderTop: "solid 1px #DCDCDA",
  borderBottom: "solid 1px #DCDCDA",
  backgroundColor: "#fff",
  padding: "30px 10px",
  textAlign: "center",
  fontSize: "20px",
  color: "#A6A5A4",
};

export default FilterHeader;
