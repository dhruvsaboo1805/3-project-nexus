import React from "react";
import "./CompanyValues.css";
import companyValues from "../../companyValues";
import Card from "../Card/Card";

const CompanyValues = ({forHomePage}) => {
    return (
        <div className="company-values-section">
            <div className="company-values-content">
                <div className="values-headings">
                    <div className="company-values-heading">
                        <p>Core Values</p>
                    </div>
                    <div className="company-values-main-heading">
                        <p>We Offer a Wide <br />Variety of IT Services</p>
                    </div>
                </div>
                <div className="company-values-cards">
                    {companyValues.map(value => (
                        <Card
                            key={value.id}
                            title={value.title}
                            description={value.description}
                            image={value.image}
                            id={value.id}
                            forHomePage = {forHomePage}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompanyValues