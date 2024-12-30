import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featured_menu = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['featured_menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            const data = await res?.data;
            return data;
        }
    })

    return [ featured_menu, isPending, isError, error, refetch ];
};

export default useMenu;