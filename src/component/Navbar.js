import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
        <div className='navbar-container'>
            <div className='navbar-section-1'>

                <ul className='nav-contact'>
                    <li className='nav-contact-detail'>
                        <img src='/images/call-icon.svg' alt='error' />
                        +91 1234567890</li>

                    <li className='nav-contact-detail'>
                        <img src='/images/mail-icon.svg' alt='error' />shinemitra@gmail.com</li>
                </ul>

                <ul className="scrolling-text-container">
                    <div key={index} className="scrolling-text">
                        {messages[index]}
                    </div>
                </ul>

                <ul className='nav-social'>
                    <li className='nav-social-icon'>
                        <img src='/images/facebook-icon.svg' alt='error' />
                    </li>
                    <li className='nav-social-icon'>
                        <img src='/images/instagram-icon.svg' alt='error' />
                    </li>
                    <li className='nav-social-icon'>
                        <img src='/images/twitter-icon.svg' alt='error' />
                    </li>
                    <li className='nav-social-icon'>
                        <img src='/images/linkedin-icon.svg' alt='error' />
                    </li>
                </ul>
            </div>
            <div className='navbar-section-2'>
                <ul className='nav-logo'>
                    <img src='/images/shinemitra-logo.png' alt='error' />
                </ul>
                <ul className='nav-list'>
                    <Link to='/'><li className='nav-links'>Pricing</li></Link>
                    <Link to='/'><li className='nav-links'>Features</li></Link>
                    <Link to='/'><li className='nav-links'>Solution</li></Link>
                    <Link to='/'><li className='nav-links'>Blog</li></Link>
                    <Link to='/'><li className='nav-links'>Contact</li></Link>
                </ul>
                <ul className='nav-button'>
                    <Link to='/'><li className='nav-btn'>Login</li></Link>
                    <Link to='/'><li className='nav-btn'>Free Trial</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
