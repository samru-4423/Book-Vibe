import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border-2 border-green-500 bg-white shadow-none' : ''}`}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border-2 border-green-500 bg-white shadow-none' : ''}`} to={"/books"} >Listed Books</NavLink></li>
        <li><NavLink to={"/pages-to-read"} className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border-2 border-green-500 bg-white shadow-none' : ''}`}>Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold p-0">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-success text-white">Sign In</button>
                <button className="btn btn-info text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;