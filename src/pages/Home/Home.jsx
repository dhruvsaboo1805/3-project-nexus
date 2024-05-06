import React from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/HeroSection/Hero";
import AboutStn from "../../components/AboutUsSection/AboutStn";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutStn></AboutStn>
    </div>
  )
}

export default Home
