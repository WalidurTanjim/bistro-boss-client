import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import { useForm } from "react-hook-form"

const AddItem = () => {
    const [errMsg, setErrMsg] = useState('');
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        setErrMsg('');
        console.log(data)
    }

    return (
        <section className='add-item'>
            <DashboardRoutes />

            <div className="container mx-auto px-6 py-12">
                <SectionTitle sub_title="What's new" title="Add an item" />

                <div className="bg-white dark:bg-gray-900">
                    <div className="container flex items-center justify-center h-auto px-6 mx-auto">
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
                                <button className={` w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddItem;