import React from 'react'
import CompanyCultureCard from '../Card/CompanyCultureCard';
import companyCultureData from "../../CompanyCulture";
import "./AboutValuesStn.css";

const AboutValuesStn = () => {
  return (
    <div className='cmp-about-values-section'>
      <div className="about-section-culture-heading">
        <h2 className="culture-heading">Our Fundamental Culture</h2>
      </div>
      <div className="company-culture-section">
        {companyCultureData.map((item) => (
          <CompanyCultureCard title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default AboutValuesStn
