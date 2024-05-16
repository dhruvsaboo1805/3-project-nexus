import React from "react";
import "./Card.css";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Card = ({ title, description, image, id, forHomePage }) => {
    const cardRef = useGSAP((element) => {
        const isMobile = window.innerWidth <= 767;
        const animationConfig = {
            opacity: 0,
            y: 50,
        };
        const animationTo = {
            opacity: 1,
            y: 0,
            duration: isMobile ? 1 : 2,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: isMobile ? "top 60%" : "top 30%",
                scrub: true,
            },
        };
        gsap.fromTo(element, animationConfig, animationTo);
    });

    const imageClass = forHomePage ? "card-image-home" : "card-image-services";

    return (
        <div className="card" key={id} ref={cardRef} style={{ willChange: "transform, opacity" }}>
            <div className="card-box">
                <img src={image} alt={title} className={imageClass} />
                <div className="card-heading">
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <button>Know More</button>
            </div>
        </div>
    );
}

export default Card;
