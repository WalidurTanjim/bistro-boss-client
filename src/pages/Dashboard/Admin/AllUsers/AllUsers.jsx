import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAllUsers from '../../../../hooks/useAllUsers';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import Spinner from '../../../../components/Spinner/Spinner';
import UserRow from '../../../../components/UserRow/UserRow';

const AllUsers = () => {
    const [all_users, isPending, isError, error, refetch] = useAllUsers();

    return (
        <section className='all-users'>
            <DashboardRoutes />

            <div className='container mx-auto px-6 py-12'>
                <SectionTitle sub_title="All Users" title="Manage Users Here" />

                <section className="container px-4 mx-auto">
                    {/* header with user count */}
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total users</h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{all_users?.length > 0 ? all_users?.length : 0} users</span>
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
                                                <p className='text-2xl font-medium text-red-500'>{error?.message}</p>
                                            </div>
                                        ) : (
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        {/* name */}
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <div className="flex items-center gap-x-3">
                                                                <span>Name</span>
                                                            </div>
                                                        </th>

                                                        {/* status */}
                                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button className="flex items-center gap-x-2">
                                                                <span>Status</span>
                                                            </button>
                                                        </th>

                                                        {/* role */}
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button className="flex items-center gap-x-2">
                                                                <span>Role</span>
                                                            </button>
                                                        </th>

                                                        {/* email address */}
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>

                                                        {/* edit */}
                                                        <th scope="col" className="relative py-3.5 px-4">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {
                                                        all_users?.map(user => <UserRow key={user?._id} user={user} />)
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default AllUsers;