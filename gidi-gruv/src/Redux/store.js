import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserAction"

export default configureStore({
    reducer:{
        user: userReducer
    }
})