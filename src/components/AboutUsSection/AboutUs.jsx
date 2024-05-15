import React from "react";
import "./AboutUs.css";
import "./AboutStn.css";
import AboutUsImg from "../../assets/about-us-img.png";

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="left-content-about-us-page">
                    <p className="tag">ABOUT COMPANY</p>
                    <div className="about-heading">
                        <p>Discover Techy Software</p>
                    </div>
                    <div className="about-company-about-us">
                        <p>Techy Software, driven by visionary leaders, fosters a dynamic team skilled in navigating tech trends. Committed to excellence, we leverage cutting-edge tech to enhance your business with tailored software solutions. Our goal craft bespoke solutions, cementing your digital footprint in your industry.</p>
                    </div>
                </div>

                <div className="right-content">
                    <div className="about-img">
                        <img src={AboutUsImg} alt="" />
                    </div>
                    <div className="btnstyle">
                        <button className="know-more-btn ">Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;