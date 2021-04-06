import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
// import {Switch} from 'antd'
// import 'antd/dist/antd.css'

function ScrollToToponMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null
}

function Overview() {
  const user = useSelector(selectUser)

  const [categoryInterest, setCategoryInterest] = useState(user.categoryInterest)
  const [eventInterest, setEventInterest] = useState(user.eventInterest)

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        categoryInterest,
        eventInterest
        
      })
    )
  }
  return (
    <div className='account__'>
          <ScrollToToponMount />

      <div className="profile">
        <form>
          <h3>Interest</h3>

          <div className="form-group">
            <label>Category Interest</label>
            <input className='db-input'
              value={categoryInterest}
              onChange={(e) => setCategoryInterest(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Event Interest</label>
            <input className='db-input'
              value={eventInterest}
              onChange={(e) => setEventInterest(e.target.value)}
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