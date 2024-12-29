import React from 'react';
import './CoverSection.css';

const CoverSection = ({ title, sub_title}) => {
    return (
        <section className='coverSection relative w-full h-[500px] md:h-[400px] flex items-center justify-center mt-10'>
            <div className="absolute mx-auto px-8 w-full md:w-[600px] lg:w-[750px]">
                <div className='bg-black/40 py-10 px-6 text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2'>{title}</h1>
                    <p className='text-gray-200 text-sm text-center'>{sub_title}</p>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;