import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
const RequireAuth = ({ children, redirectTo }) => {
    const { contextValues } = useAuthContext();
    return contextValues.user ? children : <Navigate to={redirectTo} />

}

export default RequireAuth