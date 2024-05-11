import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Hero_about from '../../components/HeroSection/Hero_about';
import AboutUs from "../../components/AboutUsSection/AboutUs"
import CmpCards from '../../components/CompanyCards/CmpCards';

const Aboutus = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero_about></Hero_about>
      <AboutUs></AboutUs>
      <CmpCards></CmpCards>
    </div>
  )
}

export default Aboutus
