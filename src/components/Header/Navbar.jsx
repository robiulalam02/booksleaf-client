import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {

    const navigate = useNavigate();

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookshelf">Bookshelf</NavLink>
        <NavLink to="/addbook">Add Book</NavLink>
        <NavLink to="/mybooks">My Books</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </>

    return (
        <div className='bg-primary'>
            <div className="navbar text-white py-6 px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <button onClick={()=>navigate('/')}>
                        <img className='h-14' src="/public/assets/logo.png" alt="" />
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='bg-secondary px-12 py-4 font-medium text-xl hover:bg-transparent hover:rounded-2xl transition-all duration-300 border-2 border-secondary'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;