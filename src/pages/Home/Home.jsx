import React from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/HeroSection/Hero";
import AboutStn from "../../components/AboutUsSection/AboutStn";
import Services from "../../components/Services/Services";
import CompanyValues from '../../components/CompanyValues/CompanyValues';
import Testimonial from '../../components/TestimonialSection/Testimonial';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutStn></AboutStn>
      <Services></Services>
      <CompanyValues></CompanyValues>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default Home
