import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/company_logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className="navbar-section">
        <Link to="/" className='logo-link'>
          <img src={logo} alt="Company Logo" className='logo' />
        </Link>
        <button className='menu-toggle' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className='nav-link' onClick={toggleMenu}>
            <p className='section-heading'>Home</p>
          </Link>
          <Link to="/about-us" className='nav-link' onClick={toggleMenu}>
            <p className='section-heading'>About Us</p>
          </Link>
          <Link to="/services" className='nav-link' onClick={toggleMenu}>
            <p className='section-heading'>Services</p>
          </Link>
          <Link to="/contact" className='nav-link' onClick={toggleMenu}>
            <p className='section-heading'>Contact Us</p>
          </Link>
          <Link to="/contact" className='nav-link' onClick={toggleMenu}>
            <button className='btn'>Call Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
