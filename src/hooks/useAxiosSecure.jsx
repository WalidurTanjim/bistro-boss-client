import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth() || {};

    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, err => {
            if(err?.status === 401 || err?.status === 403){
                logOut?.()
                .then(() => {
                    console.log('Logout from interceptor')
                }).catch(err => {
                    toast.error(err?.message);
                })
            }
    
            return Promise.reject(err);
        })
    }, [logOut])

    return axiosSecure;
};

export default useAxiosSecure;