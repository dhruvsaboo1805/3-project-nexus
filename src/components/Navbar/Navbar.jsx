import React from 'react'
import "./Navbar.css";
import logo from '../../assets/company_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navbar-section">
        <Link to="/">
          <img src={logo} alt="" className='logo' />
        </Link>
        <div className='navbar-heading'>
          <Link to="/" >
            <p className='section-heading'>Home</p>
          </Link>
          <Link to="/about-us">
            <p className='section-heading'>About Us</p>
          </Link>
          <Link to="/services">
            <p className='section-heading'>Services</p>
          </Link>
          <Link to="/contact">
            <p className='section-heading'>Contact Us</p>
          </Link>
        </div>
        <div className='navbar-btn'>
          <Link to="/contact">
            <button className='btn'>Call Now</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Navbar
