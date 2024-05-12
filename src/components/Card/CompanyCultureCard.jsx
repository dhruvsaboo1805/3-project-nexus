import React from 'react';
import "./CompanyCultureCard.css";

const CompanyCultureCard = ({ title, description, icon }) => {
    return (
        <div className="company-culture-card">
            <div>
                <img src={icon} alt={title} className="card-icon-values" />
            </div>
            <div className="card-content-values">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CompanyCultureCard;
