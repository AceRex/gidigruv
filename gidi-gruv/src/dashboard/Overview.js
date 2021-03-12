import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import ProfilePhoto from './p-photo.png'

function Overview() {
  const user = useSelector(selectUser)

  const [displayPicture, setDisplayPicture] = useState(ProfilePhoto)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
  const [street, setStreet] = useState("")
  const [LGA, setLGA] = useState("")
  const [country, setCountry] = useState("")


  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        displayPicture: displayPicture,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        street: street,
        LGA: LGA,
        country: country,
        loggedIn: true
      })
    )
  }
  return (
    <div className="profile">
      <div className='img-container'>
        <img src={displayPicture} />
      </div>
      <form>
        <div className="form-group">
          <div className='input__group'>
            <label>Fullname</label>
            <input className='db-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input__group'>
            <label>Email</label>
            <input className='db-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input__group'>
            <label>Phone Number</label>
            <input className='db-input'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='input__group'>
            <label>Street</label>
            <input className='db-input'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>

        <div className='form-group'>
          <div className='input__group'>
            <label>L.G.A</label>
            <input className='db-input'
              value={LGA}
              onChange={(e) => setLGA(e.target.value)}
            />
          </div>
          <div className='input__group'>
            <label>Country</label>
            <input className='db-input'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <button className='db-btn' onClick={(e) => handleSubmit(e)}>Save Details</button>
        </div>
      </form>
    </div>
  )
}

export default Overview;