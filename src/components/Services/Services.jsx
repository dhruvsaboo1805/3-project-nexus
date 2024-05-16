import React from "react";
import "./Services.css";
import servicesData from '../../serviceData';
import Card from "../Card/Card";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Services = ({ forHomePage }) => {
    const serviceTagRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            }}
        );
    });

    const serviceHeadingRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            }}
        );
    });

    return (
        <div className="service-section">
            <div className="service-content">
                <div className="service-tag" ref={serviceTagRef}>
                    <p>Why Choose Us ??</p>
                </div>
                <div className="service-heading" ref={serviceHeadingRef}>
                    <p>Design the Concept <br />of Your Business Idea Now</p>
                </div>
                <div className="cards">
                    {servicesData.map(service => (
                        <Card
                            key={service.id}
                            title={service.title}
                            description={service.body}
                            image={service.image}
                            id={service.id}
                            forHomePage={forHomePage}
                        />
                    ))}
                </div>
            </div>
            <div className="customer-cards-below">
                <div className="service-card customer-card">
                    <div className="card-box1">
                        <h3>23K+ Happy Customers</h3>
                        <p>Discover how many satisfied customers we have served globally.</p>
                    </div>
                </div>
                <div className="service-card country-card">
                    <div className="card-box1">
                        <h3>10+ Countries</h3>
                        <p>Explore the diverse range of countries where we have provided our services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
