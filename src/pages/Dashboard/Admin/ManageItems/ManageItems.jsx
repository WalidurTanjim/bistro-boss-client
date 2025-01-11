import React from 'react';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../../hooks/useMenu';
import Spinner from '../../../../components/Spinner/Spinner';
import MenuRow from '../../../../components/MenuRow/MenuRow';

const ManageItems = () => {
    const [ menu, isPending, isError, error, refetch ] = useMenu();

    return (
        <section className='manage-items'>
            <DashboardRoutes />

            <div className="container mx-auto px-6 py-12">
                <SectionTitle sub_title="Hurry Up" title="Manage All Items" />

                <div className="container mx-auto px-4">
                    {/* header with user count */}
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total menu items</h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{menu?.length > 0 ? menu?.length : 0}</span>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    {
                                        isPending ? (
                                            <Spinner />
                                        ) : isError ? (
                                            <div className='w-full py-12 flex items-center justify-center'>
                                                <p className='text-2xl font-medium text-red-500'>{error?.response?.data?.message}</p>
                                            </div>
                                        ) : (
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        {/* image */}
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <div className="flex items-center gap-x-3">
                                                                <span>Image</span>
                                                            </div>
                                                        </th>

                                                        {/* name */}
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <div className="flex items-center gap-x-3">
                                                                <span>Name</span>
                                                            </div>
                                                        </th>

                                                        {/* price */}
                                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button className="flex items-center gap-x-2">
                                                                <span>Price</span>
                                                            </button>
                                                        </th>

                                                        {/* category */}
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button className="flex items-center gap-x-2">
                                                                <span>Category</span>
                                                            </button>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {  
                                                        menu?.map(menu_item => <MenuRow key={menu_item?._id} menu_item={menu_item} />)
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;