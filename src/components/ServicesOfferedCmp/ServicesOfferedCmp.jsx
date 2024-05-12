import React from 'react'
import Card from '../Card/Card';
import ServiceOffered from "../../ServicesOffered";
import "./ServicesOfferedCmp.css";

const ServicesOfferedCmp = () => {
    return (
        <div className="services-offer-section">
            <div className="headings-container">
                <h2 className="offer-section-heading">Glimpse of Our Services</h2>
                <h3 className="offer-sub-heading">Explore possibilities with Techy Software’s services—transforming <br />businesses online and providing tailored solutions for digital success.</h3>
            </div>
            <div className="offer-services-list">
                {ServiceOffered.map((service) => (
                    <Card key={service.id} image={service.image} title={service.heading} description={service.description} />
                ))}
            </div>
        </div>
    )
}

export default ServicesOfferedCmp
