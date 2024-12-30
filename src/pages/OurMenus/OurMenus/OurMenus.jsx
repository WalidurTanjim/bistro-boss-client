import React from 'react';
import bannerImage from '../../../assets/menu/banner3.jpg';
import CoverSection from '../../../components/CoverSection/CoverSection';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurMenus = () => {


    return (
        <section className='ourMenus'>
            <CoverSection title="Our Menu" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />

            <div className='container mx-auto px-6 py-10'>
                <SectionTitle sub_title="Don't Miss" title="TODAY'S OFFER" />
                
            </div>
        </section>
    );
};

export default OurMenus;