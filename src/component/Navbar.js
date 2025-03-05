import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaHome, FaDollarSign, FaStar, FaBlog, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    const messages = [
        "Your must-have item is calling - Buy Now!",
        "Get up to 50% off on your first purchase!",
        "Hurry! Limited time offer, shop now!"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Change message every 3 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <>
        {/* Top Navbar */}
        <div className='navbar-container'>
          <div className='navbar-section-1'>
            <ul className='nav-contact'>
              <li className='nav-contact-detail'>
                <img src='/images/call-icon.svg' alt='error' /> +91 1234567890
              </li>
              <li className='nav-contact-detail'>
                <img src='/images/mail-icon.svg' alt='error' /> shinemitra@gmail.com
              </li>
            </ul>
  
            <ul className='scrolling-text-container'>
              <div className="scrolling-text">Welcome to ShineMitra! Boost your business with us.</div>
            </ul>
  
            <ul className='nav-social'>
              <li><img src='/images/facebook-icon.svg' alt='error' /></li>
              <li><img src='/images/instagram-icon.svg' alt='error' /></li>
              <li><img src='/images/twitter-icon.svg' alt='error' /></li>
              <li><img src='/images/linkedin-icon.svg' alt='error' /></li>
            </ul>
          </div>
  
          {/* Main Navbar */}
          <div className='navbar-section-2'>
            <ul className='nav-logo'>
              <Link to='/'>
              <img src='/images/shinemitra-logo.png' alt='error' />
              </Link>
            </ul>
  
            {/* Hamburger Button */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
  
            {/* Navbar Links */}
            <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
              <Link to='/price'><li className='nav-links'>Pricing</li></Link>
              <Link to='/feature'><li className='nav-links'>Features</li></Link>
              <Link to='/solution'><li className='nav-links'>Solution</li></Link>
              <Link to='/blog'><li className='nav-links'>Blog</li></Link>
              <Link to='/contact'><li className='nav-links'>Contact</li></Link>
            </ul>
  
            <ul className={`nav-button ${menuOpen ? "active" : ""}`}>
              <Link to='/'><li className='nav-btn'>Login</li></Link>
              <Link to='/'><li className='nav-btn'>Free Trial</li></Link>
            </ul>
          </div>
        </div>
  
        {/* Bottom Navigation for Mobile */}
        <div className="bottom-nav">
          <Link to="/"><FaHome /><span>Home</span></Link>
          <Link to="/price"><FaDollarSign /><span>Pricing</span></Link>
          <Link to="/feature"><FaStar /><span>Features</span></Link>
          <Link to="/blog"><FaBlog /><span>Blog</span></Link>
          <Link to="/contact"><FaPhone /><span>Contact</span></Link>
        </div>
      </> 
    );
}

export default Navbar;
