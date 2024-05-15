import React from 'react'
import CCards from "../Ccards/CCards";
import companyData from "../../CmpData";
import "./CmpCards.css";

const CmpCards = () => {
    return (
        <div className='cmp-cards-section-about-page'>
            <div className="cmp-cards-heading">
                <h2>Journey of Techy Software</h2>
            </div>
            <div className="comapny-cards-section">
                <div className="company-cards">
                    {companyData.map((item) => (
                        <CCards key={item.id} title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CmpCards
