// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { UserRole } from '../types';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
    const { session } = useAppContext();
    const location = useLocation();

    if (!session) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRole === 'servant' && session.role !== 'servant') {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;


