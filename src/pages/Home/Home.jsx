import React, { useState } from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/HeroSection/Hero";
import AboutStn from "../../components/AboutUsSection/AboutStn";
import Services from "../../components/Services/Services";
import CompanyValues from '../../components/CompanyValues/CompanyValues';
import Testimonial from '../../components/TestimonialSection/Testimonial';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [isHomePage , setHomePage] = useState(true);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutStn></AboutStn>
      <Services forHomePage={isHomePage}></Services>
      <CompanyValues forHomePage={isHomePage}></CompanyValues>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default Home
