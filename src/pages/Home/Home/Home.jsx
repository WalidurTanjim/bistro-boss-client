import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CoverSection from '../../../components/CoverSection/CoverSection';

const Home = () => {
    return (
        <section className='home'>
            <Banner />
            <Category />
            <CoverSection title="Bistro Boss" sub_title="Bistro Boss is a modern restaurant website showcasing a variety of delicious cuisines with an elegant design. It features a user-friendly interface for browsing menus, booking tables, and exploring special offers, ensuring a delightful dining experience online." />
        </section>
    );
};

export default Home;