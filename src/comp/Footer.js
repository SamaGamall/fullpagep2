
import React from 'react';
import './Footer.css';
import { Link, NavLink  } from "react-router-dom";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Footer = () => {
  return (
  <footer>
    <div className="container1">
      <div className="contant-footer">
        <div className="logo-profile">
          <div className="logo-area">
            <img src="./images/blood-donation (3).png" alt="" />
            <span className="logo-name">Blood Center</span>
          </div>
          <div className="deskarea">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </div>
        <div className="service-area">
          <ul className="service-header">
            <hr />
            <li className="service-name">Information</li>
            <li>
              <Link to="/">
                <img src="./images/icons8-arrow-30.png" />
                home
              </Link>
            </li>
            <li>
              <Link to="/donationlocation">
                <img src="./images/icons8-arrow-30.png" />
                Donation center location
              </Link>
            </li>
            <li>
              <a href="#">
                <img src="./images/icons8-arrow-30.png" />
                contact us
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icons8-arrow-30.png" /> about us
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icons8-arrow-30.png" /> donate
              </a>
            </li>
          </ul>
          <ul className="service-header">
            <hr />
            <li className="service-name">connect us</li>
            <p>
              Washington, USA 6036 Richmond,
              <br />
              hwy., Alexandria, VA, 2233
              <br />
            <PhoneIphoneIcon /> Phone +1(409)987 5874
            </p>
            <li>
              <a href="#" style={{ color: "white" }}>
                @samagamal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="service-name2">
        <ul className="service-header">
          <li>
            <a href="#">
              <i className="bx bxl-linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-facebook-square" />
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-button">
        <hr />
        <div className="copy-right">
          <i className="bx bx-copyright" />
          <span>2023 bloode center</span>
        </div>
      </div>
    </div>
  </footer>    
  );
}

export default Footer;


