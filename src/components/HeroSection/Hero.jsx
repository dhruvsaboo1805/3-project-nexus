import React from "react";
import "./Hero.css";
import logo from '../../assets/company_logo.png';
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-content">
                <div className="hero-img">
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className="content">
                    <div className="main-content">
                        <h2>Empowering Your Digital Future</h2>
                    </div>
                    <div className="main-content-2">
                        <h4>Innovating Solutions</h4>
                    </div>
                    <div className="line"></div>
                    <div className="main-content-3">
                        <p>Techy Software Innovating digital solutions to meet global business needs with creativity, expertise, and cutting-edge technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;