import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, userSignOut } = use(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookshelf">Bookshelf</NavLink>
        {user && <NavLink to="/addbook">Add Book</NavLink>}
        {user && <NavLink to="/mybooks">My Books</NavLink>}
        {user && <NavLink to="/profile">Profile</NavLink>}
        <NavLink to="/contact">Contact</NavLink>
    </>

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
            .catch(()=>{
                console.log('error');
            })
    }

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
                    <button onClick={() => navigate('/')}>
                        <img className='h-14' src="/public/assets/logo.png" alt="" />
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex items-center gap-6 cursor-pointer'>
                                <div className='w-12 h-12 rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={user.photoURL} alt="" />
                                </div>
                                <button onClick={handleUserSignOut} className='px-6 py-2 font-medium text-xl hover:bg-secondary hover:rounded-lg transition-all duration-300 border-2 border-secondary'>Logout</button>
                            </div>
                            :
                            <button onClick={() => navigate('/auth/login')} className='bg-secondary px-12 py-4 font-medium text-xl hover:bg-transparent hover:rounded-2xl transition-all duration-300 border-2 border-secondary'>Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;