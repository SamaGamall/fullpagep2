import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import Login from'../comp/Login';
import Navbarinside from '../comp/Navbarinside';
import API from '../comp/API/API';
import ViewAllUsersPage from '../comp/ViewAllUsersPage';


const InsideHome = () => {
  return (
    <>
    <Navbarinside />
    <API />
    </>
  );
}

export default InsideHome;

