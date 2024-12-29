import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Spinner from '../../../components/Spinner/Spinner';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const FeaturedMenu = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featured_menu = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['featured_menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/featured-menu');
            const data = await res?.data;
            return data;
        }
    })

    return (
        <section className='featured-menu container mx-auto px-6 py-10'>
            <SectionTitle sub_title="Check It Out" title="FROM OUR MENU" />

            <div className="pb-10">
                {
                    isPending ? (
                        <Spinner />
                    ) : isError ? (
                        <div className='w-full py-14 flex items-center justify-center'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl text-red-500 font-medium'>{error?.message}</h1>
                        </div>
                    ) : 
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                        {
                            featured_menu?.map(menu => {
                                return (
                                    <div key={menu?._id} className='p-2 border flex gap-x-3 rounded-md shadow-sm'>
                                        <img src={menu?.image} alt="" className='w-[90px] h-[90px] rounded-r-full rounded-b-full' />

                                        <div>
                                            <h1 className='text-lg font-medium'>{menu?.name}</h1>
                                            <p className='text-sm text-gray-500'>{menu?.recipe.slice(0, 40)}...</p>
                                        </div>

                                        <h1 className='text-orange-600 font-medium'>${menu?.price}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>

            <div className="flex items-center justify-center">
                <button className='font-medium py-3 px-5 rounded-md border-b-2 border-orange-500 hover:bg-gray-100 active:bg-white'>View All Menu</button>
            </div>
        </section>
    );
};

export default FeaturedMenu;