import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Rating from 'react-rating';

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();

    const { data: testimonials = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonials');
            const data = await res?.data;
            return data;
        }
    })

    return (
        <section className='testimonials container mx-auto px-6 py-10'>
            <SectionTitle sub_title="What Out Clients Say" title="Testimonials" />

            <div className='testimonials '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-[250px]">
                    {
                        testimonials?.map(review => {
                            return (
                                <SwiperSlide className='h-full w-full'>
                                    <div className='h-full w-full flex items-center justify-center px-6 md:px-14'>
                                        <div>
                                            <div className="flex items-center justify-center">
                                                <Rating className='text-orange-500'
                                                    readonly
                                                    placeholderRating={review?.rating}
                                                    emptySymbol={<ion-icon size="large" name="star-outline"></ion-icon>}
                                                    placeholderSymbol={<ion-icon size="large" name="star"></ion-icon>}
                                                    fullSymbol={<ion-icon size="large" name="star"></ion-icon>}
                                                />
                                            </div>

                                            <div className='pt-5 text-center'>
                                                <p className='text-sm text-gray-500'>{review?.details}</p>
                                                <h1 className='text-xl md:text-2xl font-medium text-orange-500 mt-1'>{review?.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;