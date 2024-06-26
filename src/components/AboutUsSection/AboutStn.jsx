import React from "react";
import "./AboutStn.css";
import { FaMedal } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import AboutUsImg from "../../assets/about-us-img.png";
import { NavLink } from "react-router-dom";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const AboutStn = () => {
    const leftContentRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, x: -100 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 2, 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });
    });

    const rightContentRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, x: 100 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 2, 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });
    });

    return (
        <div className="about-section">
            <div className="about-content">
                <div className="left-content" ref={leftContentRef}>
                    <p className="tag">ABOUT COMPANY</p>
                    <div className="about-heading">
                        <p>Your Partner for <br />Software Innovation</p>
                    </div>
                    <div className="about-company">
                        <p>Discover Techy Software, where innovation meets expertise. We specialize in crafting tailored digital solutions to propel businesses forward. With a focus on creativity and cutting-edge technology.</p>
                    </div>
                    <div className="about-logo-content">
                        <div className="logo-content">
                            <div className="logo-exp">
                                <FaMedal size={35} />
                            </div>
                            <p>Experience</p>
                        </div>

                        <div className="logo-content">
                            <div className="logo-exp">
                                <IoSettings size={35} />
                            </div>
                            <p>Quick Support</p>
                        </div>
                    </div>
                    <div className="seperate"></div>
                    <div className="last-content-p">
                        <p>Experience the Future through close collaboration, we swiftly harness expertise and technology, providing transformative solutions.</p>
                    </div>
                </div>

                <div className="right-content" ref={rightContentRef}>
                    <div className="about-img">
                        <img src={AboutUsImg} alt="About Us" />
                    </div>
                    <div className="btnstyle">
                        <NavLink to="/about-us">
                            <button className="know-more-btn">Know More</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStn;
