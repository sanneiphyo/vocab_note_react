import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../redux/services/AuthSlice'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const token = localStorage.getItem('token')

    console.log(isAuthenticated);
    
  
    return isAuthenticated || token ? children : <Navigate to="/login" />
  };

export default ProtectedRoute