import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: all_users = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['all_users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            const data = await res?.data;
            if(data){
                return data;
            }
        }
    })

    return [ all_users, isPending, isError, error, refetch ];
};

export default useAllUsers;