import axios from 'axios'

export const commonApi = axios.create({
    baseURL: 'https://contact-form-backend.vercel.app/',
    // withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json'
    // },
})