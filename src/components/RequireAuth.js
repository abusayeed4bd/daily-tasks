import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useLocation, Navigate } from 'react-router-dom'
import Loading from './Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)

    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;