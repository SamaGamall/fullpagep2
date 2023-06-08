import {React, useState } from 'react';
import  { createContext } from 'react';

const initialState = {};
const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, user: null });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;