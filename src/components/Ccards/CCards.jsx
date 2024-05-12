import React from 'react'
import "./CCards.css";

const CCards = ({ title, description, icon }) => {
    return (
        <div className="card-cmp">
            <img src={icon} alt={title} className="card-icon" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default CCards
