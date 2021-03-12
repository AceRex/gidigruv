import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/UserAction'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserAction";
import ProfilePhoto from './p-photo.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

function Overview() {
    const user = useSelector(selectUser)
    const [displayPicture, setDisplayPicture] = useState(ProfilePhoto)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [street, setStreet] = useState(user.street)
    const [LGA, setLGA] = useState(user.LGA)
    const [country, setCountry] = useState(user.country)
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [ERRpassword, setERRpassword] = useState(false)

    const dispatch = useDispatch()



    const handleShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

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
                loggedIn: true,
                password: password,
            })
        )
    }
    return (
        <div className="profile">
            <div className='profile-details'>
                <form>
                    <div className="form-group">
                        <div className='input__group'>
                            <label>Change Password</label>
                            <div className="password">
                                <input
                                    value={password}
                                    className="db-input"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div onClick={handleShowPassword} className='icon'>
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <div className='input__group'>
                            <label>Re-type New Password</label>
                            <div className="password">

                                <input className='db-input'
                                    value={retypePassword}
                                    onChange={(e) => setRetypePassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='f-group'>
                        <button className='db-btn' onClick={(e) => handleSubmit(e)}>Save Details</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Overview;