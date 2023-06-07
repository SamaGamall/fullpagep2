import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbarinside.css';
import PersonIcon from '@mui/icons-material/Person'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Mock function for fetching userID, replace this with actual API request
async function getUserID() {
  return Promise.resolve('user-id');
}

const Navbarinside = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUserID().then(fetchedUserId => {
      setUserId(fetchedUserId);
    });
  }, []);

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "iconbar") {
      x.className += " responsive";
    } else {
      x.className = "iconbar";
    }
  }

  return (
    <div className="iconbar" id="myTopnav">
      <Link to="/" className="leftsidenav">Home</Link>
      <Link to="/ViewAllUsersPages" className="leftsidenav">available donors</Link>
      <Link to="/Donationlocation" className="leftsidenav">donor center location</Link>
      <Link href="" className="leftsidenav"><NotificationsIcon/>private blood request</Link>
      {userId && <Link to={`/profile/${userId}`} className='icon3'><PersonIcon/></Link>}
      <a href="javascript:void(0);" className="icon4" onClick={myFunction}>
        <MenuIcon/>
      </a>
    </div>
  );
}

export default Navbarinside;
