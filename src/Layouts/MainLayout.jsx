import React, { use } from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../provider/AuthContext';
import Loading from '../components/Loading/Loading';

const MainLayout = () => {
    const {user} = use(AuthContext);

    if (!user) {
        return <Loading />
    }
    
    return (
        <>
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