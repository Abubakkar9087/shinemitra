import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HomeSection from './HomeSection';
import ScrollEffect from './Card';
import Footer from './Footer';
import Brand from './Brand';
  
  const Home = () =>  {
	return (
	  <div>
        <Navbar />
        <HeroSection />
        <Brand />
        <HomeSection />
        {/* <ScrollEffect /> */}
        <Footer />
	  </div>
	);
  }
  
  export default Home;
  