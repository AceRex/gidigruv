import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NotLoggedIn } from "./NotLoggedInHeader";
import { LoggedIn } from "./LoggedInHeader";
import Logo from "../logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import Datas from "../Data/data";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="p-4 px-12 flex flex-col gap-3 border-b border-b-ColorBlack/5">
      <div className="w-[80%] flex items-center gap-4  m-auto">
        <div className="w-[10%]">
          <img src={Logo} alt="Logo" className="w-[60px]" />
        </div>
        <div className="flex items-center w-[90%] p-2 bg-ColorBlack/5 rounded-3xl">
          <FiSearch size={25} className="text-ColorBlack/30 w-[10%]" />
          <input
            type="search"
            className="w-[90%] px-8 p-2 bg-ColorBlack/0 capitalize outline-none caret-ColorPurple placeholder:text-ColorBlack/20 placeholder:tracking-tighter"
            placeholder="search for an event..."
          />
        </div>
      </div>
      <div className="w-[50%] flex justify-between gap-4 text-xs tracking-tight text-ColorBlack m-auto list-none">
        <li className="hover:text-ColorPink hover:underline underline-offset-1 decoration-ColorPink cursor-pointer transition delay-100 ease-linear ">
          Top Events
        </li>
        <li className="hover:text-ColorPink hover:underline underline-offset-1 decoration-ColorPink cursor-pointer transition delay-100 ease-linear ">
          Today's Events
        </li>
        <li className="hover:text-ColorPink hover:underline underline-offset-1 decoration-ColorPink cursor-pointer transition delay-100 ease-linear ">
          Create an Events
        </li>
        <li className="hover:text-ColorPink hover:underline underline-offset-1 decoration-ColorPink cursor-pointer transition delay-100 ease-linear ">
          Happening now
        </li>
        <li className="hover:text-ColorPink hover:underline underline-offset-1 decoration-ColorPink cursor-pointer transition delay-100 ease-linear ">
          New Event
        </li>
      </div>
    </div>
  );
}

export default Navbar;
