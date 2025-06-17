import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Loading from '../components/Loading/Loading';

const Private_Route = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    return children;
};

export default Private_Route;