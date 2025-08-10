import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => {
    const {profile, userSignOut} = use(AuthContext);

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${profile.accessToken}`
        return config
    });

    axiosInstance.interceptors.response.use(response=>{
        return response
    }, error => {
        if (error.status === 401 || error.status === 403) {
            console.log('bad work baby, you are kicked of');
            userSignOut();
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;