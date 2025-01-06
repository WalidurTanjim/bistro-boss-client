import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { data: cart = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosSecure.get('/carts');
            const data = await res?.data;
            if(data){
                return data;
            }
        }
    })

    return [ cart, isPending, isError, error, refetch ];
};

export default useCart;