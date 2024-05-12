import React from 'react'
import CompanyCultureCard from '../Card/CompanyCultureCard';
import companyCultureData from "../../CompanyCulture";
import "./AboutValuesStn.css";

const AboutValuesStn = () => {
    return (
        <>
         <h2 className="culture-heading">Our Fundamental Culture</h2>
        <div className="company-culture-section">
          {companyCultureData.map((item) => (
            <CompanyCultureCard title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
        </>
      );
}

export default AboutValuesStn
