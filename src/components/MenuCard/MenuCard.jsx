import React from 'react';
import Spinner from '../Spinner/Spinner';

const MenuCard = ({ meals, isPending, isError, error }) => {
    return (
        <>
            <div>
                {
                    isPending ? (
                        <Spinner />
                    ) : isError ? (
                        <div className='w-full py-14 flex items-center justify-center'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl text-red-500 font-medium'>{error?.message}</h1>
                        </div>
                    ) :
                        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            {
                                meals?.map(item => {
                                    const { _id, image, name, price, recipe } = item;

                                    return (
                                        <div key={_id} className="card bg-base-100 w-full border shadow-md hover:shadow-lg">
                                            <figure className="relative px-7 pt-7">
                                                <img src={image} alt="" className="rounded-lg" />
                                                <p className='absolute top-7 right-7 inline-block px-4 py-1 rounded-md bg-orange-500 text-white text-sm'>${price}</p>
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{name}</h2>
                                                <p>{recipe.length > 45 ? recipe.slice(0, 45)+'...' : recipe}</p>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary">Add To Card</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default MenuCard;