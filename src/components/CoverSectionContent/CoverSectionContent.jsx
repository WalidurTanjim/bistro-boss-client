import React from 'react';

const CoverSectionContent = ({ title, description }) => {
    return (
        <div className='coverSectionContent text-center w-full'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2'>{title}</h1>
            <p className='text-gray-200 text-sm text-center'>{description}</p>
        </div>
    );
};

export default CoverSectionContent;