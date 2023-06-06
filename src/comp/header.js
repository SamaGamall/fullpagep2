import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink('');
  }, [location.pathname]);

  function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'nav-bar') {
      x.className += ' responsive';
    } else {
      x.className = 'nav-bar';
    }
  }

  return (
    <>
      <header>
        <nav className="nav-bar" id="myTopnav">
          {location.pathname === '/' ? (
            <Link
              className={`Mainlink ${activeLink === 'home' ? 'active' : ''}`}
              href="#"
              style={{ color: 'black' }}
            >
              home
            </Link>
          ) : (
            <Link
              className="Mainlink"
              to="/"
              style={{ color: 'black' }}
            >
              home
            </Link>
          )}
          <Link
            className={`Mainlink ${activeLink === 'donor-location' ? 'active' : ''}`}
            to="/donationlocation"
            style={{ color: 'black' }}
          >
            Donor Center Location
          </Link>
          {location.pathname === '/' ? (
            <AnchorLink
              className={`Mainlink ${activeLink === 'about' ? 'active' : ''}`}
              href="#about"
              style={{ color: 'black' }}
            >
              About Us
            </AnchorLink>
          ) : (
            <Link
              className="Mainlink"
              to="/"
              style={{ color: 'black' }}
            >
              About Us
            </Link>
          )}
          {location.pathname === '/' ? (
            <AnchorLink
              className={`Mainlink ${activeLink === 'instructions' ? 'active' : ''}`}
              href="#blood"
              style={{ color: 'black' }}
            >
              Instructions
            </AnchorLink>
          ) : (
            <Link
              className="Mainlink"
              to="/"
              style={{ color: 'black' }}
            >
              Instructions
            </Link>
          )}
          <Link className="btn1-1" to="/Pagelogin">
            donate
          </Link>
          <a href="javascript:void(0);" className="icon2" onClick={myFunction}>
            <MenuIcon />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
