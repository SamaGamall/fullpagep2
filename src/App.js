import React from "react";

import  { useState } from 'react';

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Pagelogin" element={<Pagelogin />} />
      <Route path="/Signupage" element={<Signupage />} />
      <Route path="/donationlocation" element={<Donationlocation/>} />
      <Route path="/ViewAllUsersPages" element={<ViewAllUsersPages />} />
      <Route path="/editep" element={<Editep />} />
      <Route path="/InsideHome" element={<InsideHome />} />
    </Routes>
  );
}

export default App;
