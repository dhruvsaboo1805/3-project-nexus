import React from 'react'
import "./Navbar.css";
import logo from '../../assets/company_logo.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navbar-section">
        <img src={logo} alt="" className='logo'/>
        <div className='navbar-heading'>
          <p className='section-heading'>Home</p>
          <p className='section-heading'>About Us</p>
          <p className='section-heading'>Services</p>
          <p className='section-heading'>Contact Us</p>
        </div>
        <div className='navbar-btn'>
          <button className='btn'>Call Now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
