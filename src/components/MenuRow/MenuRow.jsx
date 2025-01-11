import React from 'react';
import useMenu from '../../hooks/useMenu';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const MenuRow = ({ menu_item }) => {
    const { _id, name, recipe, image, category, price } = menu_item || {};
    const [ menu, isPending, isError, error, refetch ] = useMenu();
    const axiosSecure = useAxiosSecure();

    return (
        <tr>
            {/* image */}
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <img className="object-cover w-10 h-7 rounded-md" src={image} alt="" />
            </td>

            {/* name */}
            <td className="px-4 py-4 text-sm text-slate-700 dark:text-gray-300 whitespace-nowrap">
                <h2 className="font-medium text-gray-800 dark:text-white ">{name}</h2>
            </td>

            {/* price */}
            <td className="px-4 py-4 text-xs text-slate-700 dark:text-gray-300 whitespace-nowrap">
                <span className='px-4 py-1 rounded-full border'>{price}</span>
            </td>

            {/* category */}
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{category}</td>

            {/* edit */}
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    {/* delete button */}
                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 active:text-red-300 focus:outline-none">
                        <TrashIcon className='w-5 h-7' />
                    </button>

                    {/* edit button */}
                    <Link to={`/dashboard/update-item/${_id}`}>
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-blue-500 dark:text-gray-300 hover:text-blue-500 active:text-blue-300 focus:outline-none">
                            <PencilSquareIcon className='w-5 h-7' />
                        </button>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default MenuRow;