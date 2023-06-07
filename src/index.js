import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Signupage from './pages/Signupage';
import Pagelogin from './pages/Pagelogin';
import Profile from './pages/profile';
import Editep from './pages/editep';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import InsideHome from './pages/insideHome';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Userprofile from './comp/Userprofile';
import Donationlocation from './pages/donationlocation';
import ViewAllUsersPages from './pages/ViewAllUsersPages';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
