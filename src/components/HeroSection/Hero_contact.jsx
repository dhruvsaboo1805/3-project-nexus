import React from 'react'
import hero_contact_img from "../../assets/hero_contact_img.png";
import "./Hero.css";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Hero_contact = ({ isContactPage }) => {
    const imgClassHero = isContactPage ? "hero-img-contact" : "hero-img";
    const sub_headingClass = isContactPage ? "main-content-contact" : "main-content";
    const sub_headingParaClass = isContactPage ? "main-content-3-contact" : "main-content-3";

    const imgRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.5 });
    });

    const contentRef = useGSAP((element) => {
        gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });
    });


    return (
        <div className="hero">
            <div className="hero-content">
                <div className={imgClassHero}>
                    <img src={hero_contact_img} ref={imgRef} alt="hero_contact_img" />
                </div>
                <div className="content" ref={contentRef}>
                    <div className={sub_headingClass}>
                        <h2>Reach Us</h2>
                    </div>
                    <div className="line"></div>
                    <div className={sub_headingParaClass}>
                        <p>Embark on a transformative journey with Techy Software and together, let's architect the blueprint of your success in the digital realm. Reach out to us and empower your vision with our expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_contact
