import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import  AuthContext  from './AuthContext';

const PrivateRoute = ({ children, ...props }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext.user) {
    // if the user is not authenticated, redirect to the login page
    navigate('/Pagelogin');
  }

  // else, render the children components
  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;