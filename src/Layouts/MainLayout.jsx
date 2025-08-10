import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
 import { ToastContainer } from 'react-toastify';
import Loading from '../components/Loading/Loading';
import { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';


const MainLayout = () => {

    const {loading} = use(AuthContext)

    // const location = useLocation();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const timeout = setTimeout(() => setLoading(false), 500); // simulate loading
    //     return () => clearTimeout(timeout);
    // }, [location]);

    if (loading) {
        return <Loading />
    }

    
    return (
        <>
            <ScrollToTop />
            <ToastContainer />
            <header>
                <Navbar />
            </header>
            <main className=''>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;