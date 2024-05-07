import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, position, message, image }) => {
    return (
        <div className="testimonial">
            <div className="testimonial-image">
                <img src={image} alt={name} />
            </div>
            <div className="testimonial-content">
                <p className="testimonial-message">{message}</p>
                <p className="testimonial-author">{name}, {position}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;
