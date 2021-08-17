import axios from 'axios'
import { getStorageData, StorageKeys } from './AuthData'


const token = getStorageData(StorageKeys.tokenkey)

// 
let baseURL = ''
if (process.env.NODE_ENV === "production") {
    baseURL = "http://api.penwebpos.com/v1"
} else {
    baseURL = "http://127.0.0.1:8000/v1"
}
const instance = axios.create({
    baseURL
}) 
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.common['Allow-Origin'] = 'true'
export default instance