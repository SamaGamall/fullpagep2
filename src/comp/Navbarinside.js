
import { Link, NavLink  } from "react-router-dom";
import './Navbarinside.css';
import PersonIcon from '@mui/icons-material/Person'

import MenuIcon from '@mui/icons-material/Menu';

import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbarinside = () => {
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
      
      <Link to="/ViewAllUsersPages" className="leftsidenav" >available donors</Link>
      <Link to="/Donationlocation"  className="leftsidenav" > donor center location</Link>
      <Link href=""  className="leftsidenav" ><NotificationsIcon/>private blood request</Link>
    
    <Link href="" className='icon3' to="/profile"><PersonIcon/></Link> 
    <a href="javascript:void(0);" className="icon4" onClick={myFunction}>
      <MenuIcon  />
      </a>
  </div>

        );
      }
  

export default Navbarinside;

