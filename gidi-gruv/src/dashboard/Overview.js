import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import Switch from '@material-ui/core/Switch';


function ScrollToToponMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null
}


function Overview() {
  const user = useSelector(selectUser)

  const [Name, setName] = useState(user.Name)
  const [email, setEmail] = useState(user.email)
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
  const [gender, setGender] = useState("")
  const [DOB, setDOB] = useState("")
  const [street, setStreet] = useState("")
  const [region, setRegion] = useState(user.region)
  const [country, setCountry] = useState(user.country)
  const [CurrentPassword, setCurrentPassword] = useState(user.password)
  const [newPassword, setNewPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [facebookLink, setFacebookLink] = useState("")
  const [instagramLink, setInstagramLink] = useState("")
  const [twitterLink, setTwitterLink] = useState("")
  // Toggle state
  const [toggle, setToggle] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleToggle = (event) => {
    setToggle({ ...toggle, [event.target.name]: event.target.checked });
  };

  // toggle state Ends

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        Name,
        email,
        phoneNumber,
        gender,
        DOB,
        newPassword,
        street,
        region,
        country,
        loggedIn: true
      })
    )
  }
  return (
    <div className='account__'>
      <ScrollToToponMount />
      <div className="profile">
        <form>
          <h3>Account settings</h3>

          <div className="form-group">
            <label>Fullname</label>
            <input className='db-input'
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className='db-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Phone Number</label>
            <input className='db-input'
              type='tel'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)} >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>D.O.B</label>
            <input className='db-input'
              type='date'
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Street</label>
            <input className='db-input'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Country</label>
            <input className='db-input'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Region</label>
            <input className='db-input'
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="profile">
        <form>
          <div className="form-group">
            <label>Current Password</label>
            <input className='db-input'
              type='password'
              value={CurrentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input className='db-input'
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Retype Password</label>
            <input className='db-input'
              type='password'
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </div>
          <div className='social_media_link'>
            <div className="form-group">
              <label>Facebook link</label>
              <input
                type="text"
                name="facebook_link"
                placeholder='http://linktofacebook.com/user'
                onChange={(e) => setFacebookLink(e.target.value)}
                value={facebookLink}
              />
            </div>
            <div className="form-group">
              <label>Instagram link</label>
              <input
                type="text"
                name="instagram_link"
                placeholder='@username'
                onChange={(e) => setInstagramLink(e.target.value)}
                value={instagramLink}
              />
            </div>
            <div className="form-group">
              <label>Twitter link</label>
              <input
                type="text"
                name="twitter_link"
                placeholder='@username'
                onChange={(e) => setTwitterLink(e.target.value)}
                value={twitterLink}
              />
            </div>
          </div>
          <div className="form-toggle-group">
            <label>Send me notifications of events</label>
            <Switch
              checked={toggle.checkedB}
              onChange={handleToggle}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <div className='account_save_btn'>
            <button className='db-btn' onClick={(e) => handleSubmit(e)}>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Overview;