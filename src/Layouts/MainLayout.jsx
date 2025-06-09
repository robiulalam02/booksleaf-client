import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;