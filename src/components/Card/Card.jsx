import React from "react";
import "./Card.css";

const Card = ({ title, body, image, id }) => {
    return (
        <div className="card" key={id}>
            <div className="card-box">
                <img src={image} alt={title} className="img"/>
                <div className="card-heading">
                 <h3>{title}</h3>
                </div>
                <p>{body}</p>
                <button>Know More</button>
            </div>
        </div>
    )
}

export default Card;