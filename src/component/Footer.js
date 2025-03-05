import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
	<footer className="footer-container">
    <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide top-notch WhatsApp marketing solutions to help businesses grow and connect with their customers.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
                <li>Automated Messaging</li>
                <li>Bulk Messaging</li>
                <li>Analytics & Reports</li>
                <li>Integration</li>
            </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@shinemitra.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123, Business Hub, India</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
            <h3>Subscribe to Newsletter</h3>
			<form>
            <input type="email" placeholder="Enter your email"  required/>
            <button>Subscribe</button>
			</form>
        </div>
    </div>

    {/* Social Media Icons */}
    <div className="footer-social">
        <img src="/images/facebook-icon.svg" alt="Facebook" />
        <img src="/images/instagram-icon.svg" alt="Instagram" />
        <img src="/images/twitter-icon.svg" alt="Twitter" />
        <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
    </div>

    {/* Copyright Notice */}
    <div className="footer-bottom">
        © 2025 ShineMitra. All rights reserved.
    </div>
</footer>

  );
};

export default Footer;
