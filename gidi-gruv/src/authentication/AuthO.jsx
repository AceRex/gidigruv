import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { getStorageData, saveStorageData, setStorageData, StorageKeys } from './AuthData'
import { ToastContainer, toast } from 'react-toastify';


// Axios credentials
export const BASEURL = "https://api.gidigruv.com/api"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie


const authContext = createContext();
// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().


export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
   
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object  and re-render when it changes.



export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state


function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        initApp()
    }, []);

    function initApp() {
        const userStored = getStorageData(StorageKeys.User);
        console.log(userStored)
        if (userStored) {
            setUser(userStored);
        }
        setLoading(false);
    }
    
    let history = useHistory()  

    // Wrap any axios methods we want to use making sure to save the user to state.
const events = () => {
    axios.get(`${BASEURL}/login`)
    .then(response  => 
      console.log(response)
      // setEnvList(response.data)
      )
}
    const signin = (email, password) => {
        return (
            axios.post(`${BASEURL}/login`, { email, password })
                .then(
                    (response => {
                        console.log(response)
                        setLoading(true)
                        toast.success('Login Successfully', {
                            position: "bottom-right",
                            autoClose: 3500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        saveStorageData('user', response.data.user)
                        document.cookie = `${response.data.token}; secure`
                        setTimeout(() =>
                            setUser(response.data.user), 3000)
                        setTimeout(() =>
                            setLoading(false), 2500)
                        setTimeout(() =>
                            history.push('/'), 3000)
                    }))
                .catch(
                    (err => {
                        console.log(err)
                        setLoading(true)
                        toast.error(`ERROR: ${err.response.data}`, {
                            position: "bottom-right",
                            autoClose: 3500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        setTimeout(() =>
                            setLoading(false), 3500)
                    })
                )
        )
    };
    const register = (email, password, password_confirmation, phone_number, name, city, country, state, address) => {
        return (
            axios.post(`${BASEURL}/register`, {
                email,
                password,
                password_confirmation,
                name,
                phone_number,
                city,
                state,
                country,
                address
            })
                .then((response => {
                    setUser(response.data.user)
                    toast.success('Registration Successfully', {
                        position: "bottom-right",
                        autoClose: 3500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setLoading(true)
                    saveStorageData('user', response.data.user)
                    document.cookie = `${response.data.token}; secure`
                    setTimeout(() =>
                        setLoading(false), 2500)
                    setTimeout(() =>
                        history.push('/'), 3000)
                }))
                .catch(
                    (err => {
                        console.log(err)
                        setLoading(true)
                        toast.error(`ERROR: Check the details provided.`, {
                            position: "bottom-right",
                            autoClose: 3500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        setTimeout(() =>
                            setLoading(false), 3500)
                    })
                )
        )
    };
    const logout = () => {
        return (
            axios.get(`${BASEURL}/logout`)
                .then((response => {
                    setUser(null)
                    localStorage.clear()
                    history.push('/')
                }))
        )
    };


    return {
        user,
        loading,
        events,
        signin,
        register,
        logout

    };
}