import React from 'react'
import "./Hero.css";
import hero_about_img from "../../assets/hero_about_img.png";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Hero_about = () => {

    const imgRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    });

    const contentRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });
    });

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-img">
                    <img src={ hero_about_img} ref = {imgRef} alt="" className="hero_about_img" />
                </div>
                <div className="content" ref={contentRef}>
                    <div className="main-content">
                        <h2>Empowering Your Tomorrow, Today</h2>
                    </div>
                    <div className="main-content-2">
                        <h4>Revolutionary Solutions</h4>
                    </div>
                    <div className="line"></div>
                    <div className="main-content-3">
                    <p>Embark on an adventure with Techy Software, where creativity intersects with expertise. Explore how we translate concepts into powerful digital solutions tailored for your business needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_about
