import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAllUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: all_users = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['all_users'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`);
            const data = await res?.data;
            if(data){
                return data;
            }
        }
    })

    return [ all_users, isPending, isError, error, refetch ];
};

export default useAllUsers;