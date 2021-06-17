import React from "react";
import "./createEvent.css";
import ImageUploader from './imageUpload'
import { Skeleton } from 'antd';
import { saveStorageData, getStorageData } from "../authentication/AuthData";
import { useAuth } from "../authentication/AuthO";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";


const previewImage = getStorageData("bannerUrl")

// console.log(previewImage[0])

const bgImg = getStorageData("bannerUrl")
const EventDate = ""
const EventCategory = [
  {
    id: 0,
    category: "Art"
  },
  {
    id: 1,
    category: "Music"
  },
  {
    id: 2,
    category: "Business"
  },
  {
    id: 3,
    category: "Concert"
  },
  {
    id: 4,
    category: "Religious"
  },
  {
    id: 5,
    category: "Workshop"
  },
  {
    id: 6,
    category: "Seminar"
  },
  {
    id: 7,
    category: "Lifestyle"
  },
  {
    id: 8,
    category: "Technology"
  },
  {
    id: 9,
    category: "Sports"
  },
  {
    id: 10,
    category: "Health Care and Medical"
  }]
const ImageCont = {
  backgroundImage: bgImg,
  height: "30%",
}
const event_details_preview = {
  width: "80%",
  margin: "auto",
  position: "relative",
  top: "-1rem",
  textAlign: "center"
}

export default function CreateEvent() {
 
  let auth = useAuth()
  const [title, setTitle] = React.useState("")
  saveStorageData('ThemeText', title)


  const [ThemeText, setThemetext] = React.useState("")
  React.useEffect(() => {
    setThemetext(getStorageData("ThemeText"))
    const userID = getStorageData("user")
    setUserId(userID.id)

  })

  const [description, setDesc] = React.useState("")
  const [start_date, setStartDate] = React.useState("")
  const [end_date, setEndDate] = React.useState("")
  const [time, setTime] = React.useState("")
  const [eventType, setEventType] = React.useState("")
  const [state, setState] = React.useState("")
  const [city, setCity] = React.useState("")
  const [country, setCountry] = React.useState("")
  const [user_id, setUserId] = React.useState()
  const [cover_image, setCoverImage] = React.useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createEvents(description, title, state, cover_image, city, country, end_date, start_date, user_id)
  }


  return (
    <div className="create__event__container">
      <div className="preview">
        <div style={ImageCont}>
        </div>
        <div style={event_details_preview}>
          <div className="theme-text">
            {title === "" ? <Skeleton active round paragraph /> : ThemeText}
          </div>
          <div className="eventDate">
            {EventDate === "" ? <Skeleton active rows='1' /> : EventDate}
          </div>
        </div>
      </div>
      <div className="form__">
        <div className="form_entry__">
          <div className="Page__header"> Create New Event </div>
          <div className="Image__uploader"> <ImageUploader /> </div>
          <div className="button">
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
            <div className="form-group">
              <label>Event Description</label>
              <textarea
                name="description"
                value={description}
                rows="4"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
            <div className="form-group">
              <label>Event Start Date</label>
              <input
                type="date"
                name="start_date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
            <div className="form-group">
              <label>Event End Date</label>
              <input
                type="date"
                name="end_date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
            <div className="form-group">
              <label>Event Category</label>
              <select>
                {EventCategory.map((Events) => {
                  return (
                    <option>
                      {Events.category}
                    </option>
                  );
                })}
              </select>
            </div>
            
            <div className='form-radio'>
              <p>kindly choose one of the options</p>

              <div className="radio">
                <label>
                  Free
              </label>
                <input
                  type="radio"
                  name="eventType"
                  value="free"
                  checked={eventType === "free"}
                  onChange={(e) => setEventType(e.target.value)}
                />
              </div>
              <div className="radio">
                <label>
                  Paid
              </label>
                <input
                  type="radio"
                  name="eventType"
                  value="paid"
                  checked={eventType === "paid"}
                  onChange={(e) => setEventType(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="eg: Gidigruv Events 2021"
              />
            </div>
          <div className="form-group">
              <label>Country</label>
              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)} />
            </div>
            <div className="form-group">
              <label>State</label>
              <RegionDropdown
                country={country}
                value={state}
                name='state'
                onChange={(val) => setState(val)} />
            </div>
          <div className='btn'>
            <button
              onClick={(e) => handleSubmit(e)}
            >
              Post Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
