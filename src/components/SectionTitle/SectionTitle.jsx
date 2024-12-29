import React from 'react';

const SectionTitle = ({ sub_title, title }) => {
    return (
        <div className='w-full pb-10 text-center'>
            <p className='text-sm italic text-yellow-500 pb-2'>--- {sub_title} ---</p>
            <h1 className='inline-block text-xl md:text-2xl lg:text-3xl font-medium text-slate-900 border-t border-b border-gray-500 py-2 uppercase'>{title}</h1>
        </div>
    );
};

export default SectionTitle;