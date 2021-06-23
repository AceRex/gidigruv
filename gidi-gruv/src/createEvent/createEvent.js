import React from "react";
import "./createEvent.css";
import ImageUploader from './imageUpload'
import { Skeleton } from 'antd';
import { saveStorageData, getStorageData } from "../authentication/AuthData";
import { useAuth } from "../authentication/AuthO";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";


const previewImage = getStorageData("bannerUrl")
// console.log(previewImage)

const bgImg = getStorageData("bannerUrl")
const EventDate = ""
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

  //Title && Description state starts
  const [title, setTitle] = React.useState("")
  saveStorageData('ThemeText', title)

  const [description, setDesc] = React.useState("")
  saveStorageData('Desc', description) 

  const [ThemeText, setThemetext] = React.useState("")
  const [Desc, setDescrp] = React.useState("")

  React.useEffect(() => {
    setThemetext(getStorageData("ThemeText"))
    setDescrp(getStorageData("Desc"))
    const userID = getStorageData("user")
    setUserId(userID.id)
  })

  //Title && Description state ends


  //Date  state starts
  const [start_date, setStartDate] = React.useState(" ")
  saveStorageData('Date1', start_date)
  const [end_date, setEndDate] = React.useState(" ")
  saveStorageData('Date2', end_date)

  const [Dates, setDates] = React.useState("")
  React.useEffect(() => {
    setDates(getStorageData("Date1") + ` - ` + getStorageData("Date2"))
  })
  // Date state Ends

  

  // time
  const [time, setTime] = React.useState("")
  saveStorageData('Time', time)
  React.useEffect(() => {
    setTime(getStorageData("Time"))
  })

  React.useEffect(() => {
    setCategory(getStorageData("category"))
  }, [])

  
  const [city, setCity] = React.useState("")
  const [country, setCountry] = React.useState("")
  const [state, setState] = React.useState("")
  saveStorageData('Address', city)
  saveStorageData('state', state)
  saveStorageData('country', country)
  const [Address, setAdd] = React.useState("")
  React.useEffect(() => {
    setAdd(getStorageData("Address") + getStorageData("state") + getStorageData("country"))
  })

  

  const [category, setCategory] = React.useState([])
  const [eventType, setEventType] = React.useState("")
  const [user_id, setUserId] = React.useState()
  const [event_category_id, setEventCat] = React.useState()
  const [cover_image, setCoverImage] = React.useState()

  React.useEffect(() => {
    saveStorageData("bannerUrl", cover_image)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createEvents(description, title, state, cover_image, city, country, end_date, start_date, user_id, event_category_id)
  }

  console.log(event_category_id)

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
            {Dates === "" ? <Skeleton active rows='1' /> : Dates}
          </div>
          <div className="desc">
            {Desc === "" ? <Skeleton active round paragraph /> : Desc}
          </div>
          <div className="eventDate">
            {time === "" ? <Skeleton active rows='1' /> : time}
          </div>
          <div className="eventDate">
            {Address === "" ? <Skeleton active rows='1' /> : Address}
          </div>
        </div>
      </div>
      <div className="form__">
        <div className="form_entry__">
          <div className="Page__header"> Create New Event </div>
          <div className="Image__uploader">
            <ImageUploader />
          </div>
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
                placeholder="description of the event..."
              />
            </div>
            <div className="form-group">
              <label>Event Start Date</label>
              <input
                type="date"
                name="start_date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Event End Date</label>
              <input
                type="date"
                name="end_date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Event Category</label>
              {/* <select
                name="event_category_id"
                value={event_category_id}
                onChange={(e) => setEventCat(e.target.value)}
              >
                {category.map(({ id, name }) => {
                  return (
                    <option key={id}>
                      {name}
                    </option>
                  );
                })}

              </select> */}
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
            <label>Full Address</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="eg: 1, gidigruv str,"
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
