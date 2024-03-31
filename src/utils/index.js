import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const BASE_URL = "http://127.0.0.1:8000"

export const setToken = (token) => {
    localStorage.setItem("token", token)
}

export const getToken = () => {
    return localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
}

export const removeToken = () => {
    localStorage.removeItem("token");
}

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token =  await getToken()
        // console.log(config, "config")
        console.log(token, "token")
        if (token) {
            config.headers['Authorization'] = `Bearer ${token.access}`
        } 
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && Number(error.response.status) === 401) {
            // removeToken()
            toast.error("Login in your account");
            // window.alert('session expired')
            window.location.replace('/emp-login/')
            // <Navigate to="/employee-login/" />;
            return error.response
        }
        return Promise.reject(error)
    }
)



const get = (url, params, config = {}) => {
    return axiosInstance.get(url, { params, ...config })
};
const post = (url, data, config = {}) => {
    return axiosInstance.post(url, data, config)
};

export {get, post}