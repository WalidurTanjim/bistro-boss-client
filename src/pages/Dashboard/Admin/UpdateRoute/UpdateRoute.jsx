import React, { useState } from 'react';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useForm } from "react-hook-form"
import Spinner from '../../../../components/Spinner/Spinner';

const UpdateRoute = () => {
    const { id } = useParams();
    const [errMsg, setErrMsg] = useState('');
    const { register, handleSubmit, setValue, watch, formState: { errors }, } = useForm()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const { data: update_menu_item = {}, isPending, isError, error, refetch } = useQuery({
        queryKey: ['update_menu_item', id, axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get(`/menu/${id}`);
            const data = await res?.data;

            if(data){
                setValue("name", data?.name);
                setValue("category", data?.category);
                setValue("price", data?.price);
                setValue("recipe", data?.recipe);
            }
            return data;
        }
    })

    const onSubmit = (data) => {
        setErrMsg('');
        console.log(data)
    }

    return (
        <section className='update-route'>
            <DashboardRoutes />

            <div className="container mx-auto px-6 py-12">
                <SectionTitle sub_title="Update unique item" title="Update Item" />

                <div className="bg-white dark:bg-gray-900">
                    <div className="container flex items-center justify-center h-auto px-6 mx-auto">
                        {
                            isPending ? (
                                <Spinner />
                            ) : isError ? (
                                <div className='py-14 flex items-center justify-center text-xl md:text-2xl font-medium text-red-500'>{error ? error?.response?.data?.message : ''}</div>
                            ) : (
                                <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                                    {/* recipe name field */}
                                    <div className="relative flex items-center">
                                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recipe Name" {...register("name", { required: true })} />
                                    </div>

                                    {/* recipe category field */}
                                    <select className="select select-bordered border-gray-200 w-full mt-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("category", { required: true })}>
                                        {/* <option disabled selected>Select Category</option> */}
                                        <option value="salad">Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soup">Soup</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="offered">Offered</option>
                                    </select>

                                    {/* recipe price field */}
                                    <div className="relative flex items-center mt-3">
                                        <input type="number" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recipe Price" {...register("price", { required: true })} />
                                    </div>

                                    {/* recipe details field */}
                                    <div className="relative flex items-center mt-3">
                                        <textarea type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" row={3} placeholder="Recipe Details" {...register("recipe", { required: true })} />
                                    </div>

                                    {/* recipe image field */}
                                    <div className='relative flex items-center mt-3'>
                                        <input type="file" className="file-input file-input-bordered border-gray-200 w-full text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("image", { required: true })} />
                                    </div>

                                    {/* errMsg */}
                                    {errMsg ? <p className='text-xs text-red-500 ps-4 mt-4'>{errMsg}</p> : undefined}

                                    <div className="mt-6">
                                        <button className={` w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>Update Item</button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateRoute;