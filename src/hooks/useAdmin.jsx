import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending, isError, error, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            const data = await res?.data;

            if(data){
                return data?.isAdmin;
            }
        }
    })

    return [ isAdmin, isPending, isError, error, refetch ];
};

export default useAdmin;