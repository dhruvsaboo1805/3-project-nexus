import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero_services from '../../components/HeroSection/Hero_services'
import servicesData2 from "../../serviceData2";
import "./Services.css"
import ServicesOfferedCmp from '../../components/ServicesOfferedCmp/ServicesOfferedCmp';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero_services></Hero_services>
            <div className="services-section2">
                <h3 className="sub-heading2">Why Choose Us?</h3>
                <div className="services-offered">
                    {servicesData2.map((service) => (
                        <div key={service.id} className="service-card2">
                            <img src={service.image} alt={service.heading} />
                            <div className="service-content2">
                                <h3>{service.heading}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ServicesOfferedCmp></ServicesOfferedCmp>
        </div>
    )
}

export default Services
