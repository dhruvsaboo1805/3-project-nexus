import React from "react";
import TestimonialCard from "./TestimonialCard"; 
import TestimonialData from "../../TestimonialData";
import "./Testimonial.css";

const Testimonial = () => {
    return (
        <div className="testimonial-section">
            <div className="testimonial-heading">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonials">
                {TestimonialData.map(testimonial => (
                    <TestimonialCard
                        key={testimonial.id}
                        name={testimonial.name}
                        position={testimonial.position}
                        message={testimonial.message}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonial;
