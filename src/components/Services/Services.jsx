import React from "react";
import "./Services.css";
import servicesData from '../../serviceData';
import Card from "../Card/Card";

const Services = () => {
    return (
        <div className="service-section">
            <div className="service-content">
                <div className="service-tag">
                    <p>Why Choose Us ??</p>
                </div>
                <div className="service-heading">
                    <p>Design the Concept <br />of Your Business Idea Now</p>
                </div>
                <div className="cards">
                    {servicesData.map(service => (
                        <Card
                            key={service.id}
                            title={service.title}
                            body={service.body}
                            image={service.image}
                            id={service.id}
                        />
                    ))}
                </div>
            </div>
            <div className="customer-cards-below">
                 {/* Additional card for number of customers */}
                 <div className="service-card customer-card">
                        <div className="card-box1">
                            <h3>23K+</h3>
                            <p>Discover how many satisfied customers we have served globally.</p>
                        </div>
                    </div>
                    {/* Additional card for number of countries */}
                    <div className="service-card country-card">
                        <div className="card-box1">
                            <h3>10+</h3>
                            <p>Explore the diverse range of countries where we have provided our services.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services