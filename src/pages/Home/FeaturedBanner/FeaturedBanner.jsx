import React from 'react';
import './FeaturedBanner.css';
import featured from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const FeaturedBanner = () => {
    return (
        <section className='featured-banner relative h-[850px] md:h-[600px]'>
            <div className='absolute top-0 left-0 w-full h-full bg-black/45 pt-14 flex items-center justify-center'>
                <div>
                    <SectionTitle sub_title="Check It Out" title="From Our Menu" />

                    <div className='container mx-auto px-6 grid gap-6 grid-cols-1 md:grid-cols-2'>
                        <img src={featured} alt="" className='w-full rounded-md h-[250px]' />
                        
                        <div className="w-full">
                            <h1 className='text-lg font-medium text-white'>March 20, 2024 <br />
                            WHERE CAN I GET SOME?</h1>
                            <p className='py-4 text-gray-300 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quos velit, qui ab libero sapiente fugit! Omnis et, optio illo consequuntur incidunt quam repudiandae a dicta quo aliquam, quasi tempora debitis eligendi quas alias tenetur ut. Neque deserunt fuga molestiae optio illum eveniet quasi error reprehenderit accusamus odit repudiandae rerum corrupti.</p>
                            <button className='font-medium text-white py-3 px-5 rounded-md border-b-2 border-orange-500 hover:bg-slate-800/60 active:bg-slate-800/80'>View All Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBanner;