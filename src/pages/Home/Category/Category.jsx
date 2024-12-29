import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image01 from '../../../assets/home/slide1.jpg'
import image02 from '../../../assets/home/slide2.jpg'
import image03 from '../../../assets/home/slide3.jpg'
import image04 from '../../../assets/home/slide4.jpg'
import image05 from '../../../assets/home/slide5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='container mx-auto px-6 py-10 mb-10'>
            <SectionTitle sub_title="From 11:00 am to 10:00 pm" title="Order Online" />

            <Swiper
                breakpoints={{
                    // Tailwind's small screen equivalent
                    640: {
                        slidesPerView: 2, // For screens >= 640px
                    },
                    // Tailwind's medium screen equivalent
                    768: {
                        slidesPerView: 3, // For screens >= 768px
                    },
                    // Tailwind's large screen equivalent
                    1024: {
                        slidesPerView: 4, // For screens >= 1024px
                    },
                }}
                spaceBetween={25}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[325px]"
            >
                <SwiperSlide className="relative h-full w-full">
                    <img src={image01} alt="" className="h-full w-full" />
                    <div className="absolute bg-black/25 top-0 left-0 w-full h-full">
                        <h1 className='text-center text-white text-xl md:text-2xl uppercase pt-5'>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative h-full w-full">
                    <img src={image02} alt="" className="h-full w-full" />
                    <div className="absolute bg-black/25 top-0 left-0 w-full h-full">
                        <h1 className='text-center text-white text-xl md:text-2xl uppercase pt-5'>Soups</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative h-full w-full">
                    <img src={image03} alt="" className="h-full w-full" />
                    <div className="absolute bg-black/25 top-0 left-0 w-full h-full">
                        <h1 className='text-center text-white text-xl md:text-2xl uppercase pt-5'>Pizzas</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative h-full w-full">
                    <img src={image04} alt="" className="h-full w-full" />
                    <div className="absolute bg-black/25 top-0 left-0 w-full h-full">
                        <h1 className='text-center text-white text-xl md:text-2xl uppercase pt-5'>Desserts</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative h-full w-full">
                    <img src={image05} alt="" className="h-full w-full" />
                    <div className="absolute bg-black/25 top-0 left-0 w-full h-full">
                        <h1 className='text-center text-white text-xl md:text-2xl uppercase pt-5'>Salad</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;