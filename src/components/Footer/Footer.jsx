import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-left">
                <div className="social-links">
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.linkedin.com"><FaLinkedin /></a>
                </div>
                <div className="company-details">
                    <div className="company-logo">
                        <img src="/path/to/company_logo.png" alt="Company Logo" />
                    </div>
                    <div className="contact-info">
                        <p><FaPhone /> Phone: +1 123 456 7890</p>
                        <p><FaEnvelope /> Email: info@example.com</p>
                        <p>Address: 1234 Main Street, City, Country</p>
                    </div>
                </div>
                <div className="site-links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
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
    )
}

export default Footer;
