import React from "react";
import PrivateRoute from './comp/PrivateRoute';
import { useState } from 'react';
import { AuthProvider } from './comp/AuthContext';
import Home from "./pages/home";
import Profile from "./pages/profile";
import { Routes, Route } from 'react-router-dom';

import Signupage from './pages/Signupage';
import Pagelogin from './pages/Pagelogin';

import Editep from './pages/editep';
import 'bootstrap/dist/css/bootstrap.css';
import InsideHome from './pages/insideHome';
import Donationlocation from './pages/donationlocation';
import ViewAllUsersPages from './pages/ViewAllUsersPages';

function App() {
  const [userProfile, setUserProfile] = useState({
    id: null,
    name: "",
    role: "",
    location: "",
    email: "",
    phone: "",
    mobile: "",
    address: null,
    bloodType: "",
    isActive: false,
    Photo: "",
  });

  return (
    <AuthProvider>
      <Routes>
        <Route path="/Pagelogin" element={<Pagelogin />} />
        <Route path="/Signupage" element={<Signupage />} />
        <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/InsideHome" element={<PrivateRoute><InsideHome /></PrivateRoute>} />
        <Route path="/donationlocation" element={<PrivateRoute><Donationlocation /></PrivateRoute>} />
        <Route path="/ViewAllUsersPages" element={<PrivateRoute><ViewAllUsersPages /></PrivateRoute>} />
        <Route path="/editep" element={<PrivateRoute><Editep /></PrivateRoute>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
