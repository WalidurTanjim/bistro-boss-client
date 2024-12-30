import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Spinner from '../../../components/Spinner/Spinner';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import CategoryMenuWithButton from '../../../components/CategoryMenuWithButton/CategoryMenuWithButton';

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

            <div className="menu-button-container">
                <CategoryMenuWithButton meals={featured_menu} isPending={isPending} isError={isError} buttonText="View All Menu" />
            </div>
        </section>
    );
};

export default FeaturedMenu;