import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import useAdmin from '../../hooks/useAdmin';

const DashboardRoutes = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content absolute top-3 right-3">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button ">
                    <Bars3BottomRightIcon className="size-9 text-slate-700 p-2 rounded-md border bg-slate-200 hover:bg-slate-300 active:bg-slate-200" />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h1 className='text-xl font-medium ps-2 mb-5'>Bistro Boss <br /><span className='text-md'>Restaurant</span></h1>


                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <NavLink to="/dashboard/admin-home"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Admin Home</li></NavLink>
                                <NavLink to="/dashboard/add-item"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Add Item</li></NavLink>
                                <NavLink to="/dashboard/manage-items"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Manage Items</li></NavLink>
                                <NavLink to="/dashboard/manage-orders"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Manage Orders</li></NavLink>
                                <NavLink to="/dashboard/all-users"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>All Users</li></NavLink>
                            </> :
                            <>
                                <NavLink to="/dashboard/user-home"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>User Home</li></NavLink>
                                <NavLink to="/dashboard/reservation"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Reservation</li></NavLink>
                                <NavLink to="/dashboard/payment-history"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Payment History</li></NavLink>
                                <NavLink to="/dashboard/cart"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Cart</li></NavLink>
                                <NavLink to="/dashboard/add-review"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Add Review</li></NavLink>
                                <NavLink to="/dashboard/my-booking"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>My Booking</li></NavLink>
                            </>
                    }

                    <div className="divider"></div>

                    <NavLink to="/"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Home</li></NavLink>
                    <NavLink to="/our-menu"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Menu</li></NavLink>
                    <NavLink to="/our-shop/salad"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Shop</li></NavLink>
                    <NavLink to="/contact-us"><li className='py-1.5 ps-2 mb-1 rounded-md hover:bg-gray-300'>Contact</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default DashboardRoutes;