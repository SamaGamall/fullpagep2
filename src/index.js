import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Signupage from './pages/Signupage';
import Pagelogin from './pages/Pagelogin';
import Profile from './pages/profile';
import Editep from './pages/editep';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import InsideHome from "./pages/insideHome";
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Userprofile from "./comp/Userprofile";
import Donationlocation from "./pages/donationlocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },
  {
    path: "/pagelogin",
    element: <Pagelogin />,
    
    
  },
  {
    path: "/profile",
    element: <Profile />,
  
  },
  {
    path: "/editep",
    element: <Editep/>,
  
  },
  {
    path: "/donationlocation",
    element: <Donationlocation/>,
  
  },
  {
    path: "/signupage",
    element: <Signupage/>,
  
  },
  {
    path: "/insideHome",
    element: <InsideHome />,
  
  },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


