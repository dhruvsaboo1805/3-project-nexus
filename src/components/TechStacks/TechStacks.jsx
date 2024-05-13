import React from 'react'
import "./TechStacks.css";
import php from "../../assets/php.png";
import nodejs from "../../assets/NodeJs.svg";
import express from "../../assets/Express.png";
import python from "../../assets/python.webp";
import Typescript from "../../assets/Typescript.svg";
import Bootstrap from "../../assets/Bootstrap.svg";
import Docker from "../../assets/Docker.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Saas from "../../assets/Saas.svg";
import React_icon from "../../assets/React.png";
import angular from "../../assets/Angular.png";
import aws from "../../assets/aws.png";
import dotNet from "../../assets/dotNet.jpeg";


const TechStacks = () => {
    return (
        <div className="tech-stack-section">
          <div className="section-heading-techstack">Technology Stack</div>
          <div className="sub-heading-techstack">
            We approach every project with a carefully selected platform/technology and assign an <br />appropriate team of designers, solutions specialists, developers, and testers. <br />Here are some of the technologies and platforms we excel at:
          </div>
          <div className="animated-icon"> {/* Add animation to this div */}
            <img src={React_icon} alt="Tech Stack Icon" />
            <img src={angular} alt="Tech Stack Icon" />
            <img src={aws} alt="Tech Stack Icon" />
            <img src={nodejs} alt="Tech Stack Icon" />
            <img src={python} alt="Tech Stack Icon" />
            <img src={Bootstrap} alt="Tech Stack Icon" />
            <img src={dotNet} alt="Tech Stack Icon" />
            <img src={php} alt="Tech Stack Icon" />
            <img src={Docker} alt="Tech Stack Icon" />
            <img src={MongoDB} alt="Tech Stack Icon" />
            <img src={Saas} alt="Tech Stack Icon" />
            <img src={Typescript} alt="Tech Stack Icon" />
            <img src={express} alt="Tech Stack Icon" />
          </div>
        </div>
      );
}

export default TechStacks
