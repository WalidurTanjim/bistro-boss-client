import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CoverSection from '../../../components/CoverSection/CoverSection';

const Home = () => {
    return (
        <section className='home'>
            <Banner />
            <Category />
            <CoverSection />
        </section>
    );
};

export default Home;