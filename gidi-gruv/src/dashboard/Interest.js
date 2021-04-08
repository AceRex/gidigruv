import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import { FaBars, FaTimes } from 'react-icons/fa'
import Select from 'react-select';

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
  const [saveAlert, setSaveAlert] = useState(false)

  console.log(categoryInterest)
  const options = [
    { value: 'music', label: 'Music' },
    { value: 'business', label: 'Business' },
    { value: 'religious', label: 'Religious' },
    { value: 'festival', label: 'Festival' },
    { value: 'health', label: 'Health' },
    { value: 'seminar', label: 'Seminar' }
  ]
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
            <Select
            options={options}
            isMulti
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