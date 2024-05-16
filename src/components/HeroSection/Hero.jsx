import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero_img.png";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Hero = () => {
    const imgRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    });

    const contentRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });
    });

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-img" ref={imgRef}>
                    <img src={hero_img} alt="Hero" className="hero-img-img" />
                </div>
                <div className="content" ref={contentRef}>
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
    );
};

export default Hero;
