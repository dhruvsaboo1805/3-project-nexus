import React from 'react'
import hero_Service_img from "../../assets/services-hero_img.png";
import "./Hero.css";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Hero_services = () => {

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
                    <img src={ hero_Service_img} ref = {imgRef} alt="" className="hero_img_services" />
                </div>
                <div className="content" ref={contentRef}>
                    <div className="main-content">
                        <h2>Empower Your Future, Today</h2>
                    </div>
                    <div className="main-content-2">
                        <h4>Services</h4>
                    </div>
                    <div className="line"></div>
                    <div className="main-content-3">
                    <p>Discover boundless possibilities for your tech-driven enterprise and cement a formidable online footprint with our comprehensive suite of technology services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_services
