import React from 'react';
import './CoverSection.css';
import CoverSectionContent from '../CoverSectionContent/CoverSectionContent';

const CoverSection = () => {
    return (
        <section className='coverSection relative w-full h-[500px] md:h-[400px] flex items-center justify-center mt-10'>
            <div className='container absolute  mx-auto px-8 w-full md:w-[600px]'>
                <div className='bg-black/40 py-10 px-6'>
                <CoverSectionContent title="Bistro Boss" description="Bistro Boss is a modern restaurant website showcasing a variety of delicious cuisines with an elegant design. It features a user-friendly interface for browsing menus, booking tables, and exploring special offers, ensuring a delightful dining experience online." />
                </div>
            </div>
        </section>
    );
};

export default CoverSection;