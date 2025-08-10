import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, userSignOut } = use(AuthContext);

    const navigate = useNavigate();

    const handleUserSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "user sign out successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                console.log('error');
            })
    }

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookshelf">Bookshelf</NavLink>
        {user && <NavLink to="/addbook">Add Book</NavLink>}
        {user && <NavLink to="/mybooks">My Books</NavLink>}
        <NavLink to="/contact-us">Contact</NavLink>
        <button onClick={handleUserSignOut} className='px-3 py-2 font-medium text-primary hover:bg-secondary rounded-lg transition-all duration-300 border-2 border-secondary block md:hidden mt-2 w-6/12'>Logout</button>
    </>

    return (
        <div className='fixed top-0 z-50 w-full backdrop-blur-md bg-primary place-content-center'>
            <div className="navbar text-white px-4 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn bg-transparent lg:hidden border border-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-primary">
                            {links}
                        </ul>
                    </div>
                    <button className='w-40 md:w-56 ml-3 md:ml-0 hidden md:block' onClick={() => navigate('/')}>
                        <img className='w-full' src="/assets/logo.png" alt="" />
                    </button>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-base">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end hidden md:flex">
                    {
                        user ?
                            <div className='flex items-center gap-6 cursor-pointer'>
                                <button onClick={()=>navigate('/profile')} className='w-12 h-12 rounded-full overflow-hidden hidden md:block'>
                                    <img className='w-full h-full object-cover' src={user.photoURL} alt="" />
                                </button>
                                <button onClick={handleUserSignOut} className='px-6 py-2 font-medium text-xl hover:bg-secondary hover:rounded-lg transition-all duration-300 border-2 border-secondary hidden md:block'>Logout</button>
                            </div>
                            :
                            <button onClick={() => navigate('/auth/login')} className='bg-secondary px-8 py-3 font-medium text-xl hover:bg-transparent hover:rounded-2xl transition-all duration-300 border-2 border-secondary'>Login</button>
                    }
                </div>
                <div className='navbar-end md:hidden'>
                    <button className='w-46 md:w-56 ml-3 md:ml-0 md:hidden' onClick={() => navigate('/')}>
                        <img className='w-full' src="/assets/logo.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;