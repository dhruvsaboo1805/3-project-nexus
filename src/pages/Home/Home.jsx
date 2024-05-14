import React, { useState } from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/HeroSection/Hero";
import AboutStn from "../../components/AboutUsSection/AboutStn";
import Services from "../../components/Services/Services";
import CompanyValues from '../../components/CompanyValues/CompanyValues';
import Testimonial from '../../components/TestimonialSection/Testimonial';
import Footer from '../../components/Footer/Footer';
import { CSSTransition } from 'react-transition-group';

const Home = () => {
  const [isHomePage , setHomePage] = useState(true);

  return (
    <CSSTransition in={true} appear={true} classNames="fade" timeout={300}>
    <div className='main-content-home'>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutStn></AboutStn>
      <Services forHomePage={isHomePage}></Services>
      <CompanyValues forHomePage={isHomePage}></CompanyValues>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
    </CSSTransition>
  )
}

export default Home
