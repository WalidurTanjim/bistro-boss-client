import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import salad from '../../../assets/home/slide1.jpg'
import pizza from '../../../assets/home/slide2.jpg'
import soup from '../../../assets/home/slide3.jpg'

const ChefRecommends = () => {
    return (
        <section className='chef-recommends container mx-auto px-6 py-10 mb-10'>
            <SectionTitle sub_title="Should Try" title="Chef Recommends" />

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={salad}
                            alt="Shoes" className='w-full h-[175px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='font-medium py-3 px-5 rounded-md border-b-2 border-orange-500 hover:bg-gray-100 active:bg-white uppercase'>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={pizza}
                            alt="Shoes" className='w-full h-[175px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pizza</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='font-medium py-3 px-5 rounded-md border-b-2 border-orange-500 hover:bg-gray-100 active:bg-white uppercase'>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img
                            src={soup}
                            alt="Shoes" className='w-full h-[175px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Soup</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className='font-medium py-3 px-5 rounded-md border-b-2 border-orange-500 hover:bg-gray-100 active:bg-white uppercase'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;