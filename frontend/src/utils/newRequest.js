import axios from "axios"

const newRequest = axios.create({
    baseURL: "https://justclickapi.onrender.com/api",
    withCredentials: true
})

export default newRequest