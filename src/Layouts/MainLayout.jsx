import React, { useEffect, useState } from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Header/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
 import { ToastContainer } from 'react-toastify';
import Loading from '../components/Loading/Loading';


const MainLayout = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500); // simulate loading
        return () => clearTimeout(timeout);
    }, [location]);
    
    return (
        <>
            <ToastContainer />
            {loading && <Loading />}
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;