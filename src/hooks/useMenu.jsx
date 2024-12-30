import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const { data: menu = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            const data = await res?.data;
            return data;
        }
    })

    return [ menu, isPending, isError, error, refetch ];
};

export default useMenu;