import React from 'react';
import useAllUsers from '../../hooks/useAllUsers';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { TrashIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const UserRow = ({ user }) => {
    const { _id, userName, userEmail, role } = user;
    const [all_users, isPending, isError, error, refetch] = useAllUsers();
    const axiosSecure = useAxiosSecure();

    // handleDeleteUser
    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/users/${id}`);
                    const data = await res?.data;

                    if (data?.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                } catch (err) {
                    console.error(err);
                    toast.error(err?.message);
                }
            }
        });
    }

    // handleMakeAdmin
    const handleMakeAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you wanna make admin this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                try{
                    const res = await axiosSecure.patch(`/users/make-admin/${id}`);
                    const data = await res?.data;

                    if(data?.modifiedCount > 0){
                        Swal.fire({
                            title: "Success!",
                            text: "You have make this user admin.",
                            icon: "success"
                        });
                        refetch();
                    }
                }catch(err){
                    console.error(err);
                    toast.error(err?.message);
                }
            }
        });
    }

    return (
        <tr>
            {/* name */}
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">{userName}</h2>
                        </div>
                    </div>
                </div>
            </td>

            {/* status */}
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                </div>
            </td>

            {/* role */}
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{role}</td>

            {/* email address */}
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{userEmail}</td>

            {/* edit */}
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button onClick={() => handleDeleteUser(_id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 active:text-red-300 focus:outline-none">
                        <TrashIcon className='w-5 h-7' />
                    </button>

                    <button onClick={() => handleMakeAdmin(_id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 active:text-green-300 focus:outline-none">
                        <ShieldCheckIcon className='w-5 h-5' />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserRow;