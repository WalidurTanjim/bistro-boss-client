import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: cart = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            const data = await res?.data;
            if(data){
                return data;
            }
        }
    })

    return [ cart, isPending, isError, error, refetch ];
};

export default useCart;