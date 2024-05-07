import React from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/HeroSection/Hero";
import AboutStn from "../../components/AboutUsSection/AboutStn";
import Services from "../../components/Services/Services";
import CompanyValues from '../../components/CompanyValues/CompanyValues';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutStn></AboutStn>
      <Services></Services>
      <CompanyValues></CompanyValues>
    </div>
  )
}

export default Home
