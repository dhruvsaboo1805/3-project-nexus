import React from "react";
import "./Card.css";

const Card = ({ title, description, image, id , forHomePage}) => {

    const imageClass = forHomePage ? "card-image-home" : "card-image-services";
    return (
        <div className="card" key={id}>
            <div className="card-box">
                <img src={image} alt={title} className={imageClass}/>
                <div className="card-heading">
                 <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <button>Know More</button>
            </div>
        </div>
    )
}

export default Card;