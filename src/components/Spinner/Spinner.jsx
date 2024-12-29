import React from 'react';

const Spinner = () => {
    return (
        <div className='spinner w-full py-14 flex items-center justify-center'>
            <h1 className='text-2xl font-medium text-gray-700 me-1'>Loading</h1>
            <span className="loading loading-dots loading-md"></span>
        </div>
    );
};

export default Spinner;