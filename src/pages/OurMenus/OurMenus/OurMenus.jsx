import React from 'react';
import bannerImage from '../../../assets/menu/banner3.jpg';
import CoverSection from '../../../components/CoverSection/CoverSection';

const OurMenus = () => {
    return (
        <section className='ourMenus'>
            <CoverSection title="Our Menu" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />
        </section>
    );
};

export default OurMenus;