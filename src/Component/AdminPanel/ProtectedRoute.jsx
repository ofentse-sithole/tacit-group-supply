// context/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AdminAuth';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;