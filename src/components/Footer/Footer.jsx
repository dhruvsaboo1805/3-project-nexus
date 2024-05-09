import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import company_logo from "../../assets/company_logo.png";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section">
                <div className="footer-left">
                    <div className="site-links">
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                    <div className="company-details">
                        <div className="company-logo">
                            <img src={company_logo} alt="Company Logo" />
                        </div>
                        <div className="contact-info">
                            <p><FaPhone /> +1 123 456 7890</p>
                            <p><FaEnvelope /> info@example.com</p>
                            <p><FaLocationDot />12 Main Street, City, Country</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="feedback-form">
                        <h3>Feedback Form</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p><FaRegCopyright /> 2024 Techy Software. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
