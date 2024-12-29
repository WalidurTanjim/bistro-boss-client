import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
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
                            <NavLink to='/out-menu'><li>Our Menu</li></NavLink>
                            <NavLink to='/contact-us'><li>Contact Us</li></NavLink>
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-3">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/out-menu'><li>Our Menu</li></NavLink>
                        <NavLink to='/contact-us'><li>Contact Us</li></NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to='/sign-in' className="btn">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;