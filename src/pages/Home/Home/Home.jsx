import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CoverSection from '../../../components/CoverSection/CoverSection';
import FeaturedMenu from '../FeaturedMenu/FeaturedMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import FeaturedBanner from '../FeaturedBanner/FeaturedBanner';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <section className='home'>
            <Banner />
            <Category />
            <CoverSection title="Bistro Boss" sub_title="Bistro Boss is a modern restaurant website showcasing a variety of delicious cuisines with an elegant design. It features a user-friendly interface for browsing menus, booking tables, and exploring special offers, ensuring a delightful dining experience online." />
            <FeaturedMenu />
            <CallUs />
            <ChefRecommends />
            <FeaturedBanner />
            <Testimonials />
        </section>
    );
};

export default Home;