import React from "react";
import "./Card.css";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Card = ({ title, description, image, id, forHomePage }) => {
    const cardRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 0.5, scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            }}
        );
    });

    const imageClass = forHomePage ? "card-image-home" : "card-image-services";

    return (
        <div className="card" key={id} ref={cardRef}>
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
