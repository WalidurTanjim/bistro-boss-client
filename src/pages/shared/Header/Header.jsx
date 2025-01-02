import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [navLinks, setNavLinks] = useState(false);
    const { user, logOut } = useAuth();

    // signOutHandler
    const signOutHandler = () => {
        logOut()
        .then(() => {
            setNavLinks(false);
            console.log('Logout successfully');
        })
        .catch(err => {
            toast.error(err?.message);
        })
    }
    
    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-y-2">
                            <NavLink to='/'><li>Home</li></NavLink>
                            <NavLink to='/our-menu'><li>Our Menu</li></NavLink>
                            <NavLink to='/our-shop'><li>Our Shop</li></NavLink>
                            <NavLink to='/contact-us'><li>Contact Us</li></NavLink>
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost text-xl">Bistro Boss</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-3">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/our-menu'><li>Our Menu</li></NavLink>
                        <NavLink to='/our-shop'><li>Our Shop</li></NavLink>
                        <NavLink to='/contact-us'><li>Contact Us</li></NavLink>
                    </ul>
                </div>

                <div className="navbar-end relative">
                    <div className="flex items-center gap-x-1 px-1 py-2 hover:bg-gray-100 cursor-pointer rounded-md border me-2">
                        <ShoppingCartIcon className="size-5 text-slate-800" />
                        <div className="badge badge-neutral">+ {user ? 99 : 0}</div>
                    </div>
                    {
                        user ? 
                        <>
                            <div className="avatar placeholder cursor-pointer">
                                <div className="bg-neutral text-neutral-content w-8 rounded-full" onClick={() => setNavLinks(!navLinks)}>
                                    <span className='uppercase'>{user?.displayName.charAt(0)}</span>
                                </div>
                            </div>
                            {
                                navLinks ? 
                                <div className='absolute top-12 right-0 z-10 w-44 p-1.5 rounded-md bg-white border'>
                                    <Link to='/my-profile'>
                                        <p className="py-1.5 ps-2 rounded-md text-sm hover:bg-gray-100 cursor-default mb-1">My Profile</p>
                                    </Link>
                                    <p className="py-1.5 ps-2 rounded-md text-sm hover:bg-gray-100 cursor-default" onClick={signOutHandler}>Sign Out</p>
                                </div>
                                : undefined
                            }
                        </> :
                        <Link to='/sign-in' className="btn">Sign In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;