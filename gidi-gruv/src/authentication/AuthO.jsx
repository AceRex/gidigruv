import React, { useState, useEffect, useContext, createContext } from "react";
import axios from './axios-config'
import { useHistory } from 'react-router-dom'
import { getStorageData, saveStorageData, setStorageData, StorageKeys } from './AuthData'
import { toast } from 'react-toastify';
import { Button, message } from 'antd';


// Axios credentials 
let URL = 'https://www.api.gidigruv.com';
// if (process.env.NODE_ENV === "production") {
//     URL = "https://api.gidigruv.com"
// } else {
//     URL = "http://127.0.0.1:8000/v1"
// }
export const BASEURL = URL;
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + getStorageData(StorageKeys.tokenkey)

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
    const key = 'updatable';
    useEffect(() => {
        initApp()
    }, []);

    function initApp() {
        const userStored = getStorageData(StorageKeys.User);
        if (userStored) {
            setUser(userStored);
        }
        setLoading(false);
    }

    let history = useHistory()

    const createEvents = (description, title, state, cover_image, city, country, end_date, start_date, user_id, event_category_id) => {
        return (
            axios.post(`${BASEURL}/event`, { description, title, state, cover_image, street_address: city, city, country, end_date, start_date, user_id, event_category_id })
                .then(
                    (response => {
                        console.log(response)
                        setLoading(true)
                    })
                )
                .catch(
                    (err => {
                        console.log(err)
                        setLoading(true)
                    }
                    )
                )
        )
    };
    const meFn = () => {
        setLoading(true)
        axios.get(`/me`)
            .then(
                (response => {
                    setLoading(false)
                    // message.loading({ content: 'Loading...', key });
                    saveStorageData('user', response.data.user)
                    setUser(response.data)
                    saveStorageData(StorageKeys.tokenkey, response.data.token)
                    // document.cookie = `${response.data.token}; secure`
                }))
            .catch(
                (err => {
                    if (err.response) {
                        // if (err.response.status === 401) window.location.href = '/signin'
                        setLoading(false)
                        // message.loading({ content: 'Loading...', key });
                        // setTimeout(() => {
                        //     message.error({ content: err.response.data, key, duration: 2 });
                        // }, 1000);
                        setTimeout(() =>
                            setLoading(false), 3500)

                    } else if (err.request) {

                        console.log(err)
                        setLoading(true)
                        // message.loading({ content: 'Loading...', key });
                        // setTimeout(() => {
                        //     message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                        // }, 1000);
                        setTimeout(() =>
                            setLoading(false), 3500)

                    } else {
                        // history.push("/")
                    }
                })
            )
    };
    const signin = (email, password) => {
        return (
            axios.post(`${BASEURL}/login`, { email, password })
                .then(
                    (response => {
                        setLoading(true)
                        message.loading({ content: 'Loading...', key });
                        setTimeout(() => {
                            message.success({ content: 'Login Successful', key, duration: 2 });
                        }, 1000);
                        saveStorageData('user',response.data.user)
                        saveStorageData(StorageKeys.tokenkey, response.data.token)
                        setTimeout(() =>
                            setUser(response.data.user), 3000)
                        setTimeout(() =>
                            setLoading(false), 2500)
                        setTimeout(() =>
                            history.push('/'), 3000)
                    }))
                .catch(
                    (err => {
                        if (err.response) {

                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.error({ content: err.response.data, key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else if (err.request) {

                            console.log(err)
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else {
                            history.push("/")
                        }
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
                    saveStorageData(StorageKeys.tokenkey, response.data.token)
                    message.loading({ content: 'Loading...', key });
                    setTimeout(() => {
                        message.success({ content: 'Registration Successful', key, duration: 2 });
                    }, 2000);

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
                        if (err.response) {
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.error({ content: "ERROR: Confirm the details supplied" });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else if (err.request) {

                            console.log(err)
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else {
                            history.push("/")
                        }
                    })
                )
        )
    };
    const logout = () => {
        return (
            axios.post(`${BASEURL}/logout`)
                .then((response => {
                    setTimeout(() => {
                        history.push('/')
                    }, 1000);
                    setUser(null)
                    localStorage.clear()
                }))
        )
    };
    const forgotpassword = (email) => {
        return (
            axios.post(`${BASEURL}/sendPasswordResetLinkEmail`, { email })
                .then(
                    (response => {
                        setLoading(true)
                        message.loading({ content: 'Loading...', key });
                        setTimeout(() => {
                            message.success({ content: 'Registration Successful', key, duration: 2 });
                        }, 2000);
                        setTimeout(() =>
                            setLoading(false), 2500)
                        setTimeout(() =>
                            history.push('/passwordreset'), 3000)
                    }))
                .catch(
                    (err => {
                        if (err.response) {
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.error({ content: err.response.data.message, key, duration: 2 });
                            }, 3000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else if (err.request) {
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                            }, 3000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else {
                            history.push("/")
                        }
                    })
                )
        )
    };
    const passwordreset = (password, new_password) => {
        return (
            axios.post(`${BASEURL}/resetPassword`, { password, new_password })
                .then(
                    (response => {
                        setLoading(true)
                        message.loading({ content: 'Loading...', key });
                        setTimeout(() => {
                            message.success({ content: 'Registration Successful', key, duration: 2 });
                        }, 2000);
                        setTimeout(() =>
                            setLoading(false), 2500)
                        setTimeout(() =>
                            history.push('/'), 3000)
                    }))
                .catch(
                    (err => {
                        if (err.response) {

                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.error({ content: err.response.data, key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else if (err.request) {

                            console.log(err)
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else {
                            history.push("/")
                        }
                    })
                )
        )
    };
    const category = () => {
        axios.get(`${BASEURL}/admin/event/category`)
            .then(res => {
                saveStorageData('category', res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const allEvents = () => {
        axios.get(`${BASEURL}/all`)
            .then((resp) => {
                console.log(resp)
            })
    }
    const videoProps = {
        multiple: false,
        action: BASEURL + '/event/uploadMedia',
        headers: {
            Authorization: `Bearer ${document.cookie}`,
            'Access-Control-Allow-Origin': '*'
        },
    }

    return {
        user,
        loading,
        videoProps,
        allEvents,
        signin,
        meFn,
        register,
        logout,
        createEvents,
        forgotpassword,
        passwordreset,
        category
    };
}