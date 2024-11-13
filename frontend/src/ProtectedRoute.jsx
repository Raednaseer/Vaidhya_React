import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component to protect routes that require authentication
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('access');  // Check if the user is authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  return element;  // If authenticated, render the passed element (cart page)
};

export default ProtectedRoute;
