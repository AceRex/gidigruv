import React from "react";
import "./searchbar.css";


function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for events around you, Enter Theme here..."
      />
      <select>
        <option>Agege </option>
        <option>Ajeromi-Ifelodun</option>
        <option>Alimosho</option>
        <option>Amuwo-Odofin</option>
        <option>Apapa</option>
        <option>Badagry</option>
        <option>Epe</option>
        <option>Eti Osa</option>
        <option>Ibeju-Lekki</option>
        <option>Ifako-Ijaiye</option>
        <option>Ikeja</option>
        <option>Ikorodu</option>
        <option>Kosofe</option>
        <option>Lagos Island</option>
        <option>Lagos Mainland</option>
        <option>Mushin</option>
        <option>Ojo</option>
        <option>Oshodi-Isolo</option>
        <option>Shomolu</option>
        <option>Surulere</option>
      </select>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
