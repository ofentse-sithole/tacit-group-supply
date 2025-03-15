import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="wave-section">
        <div className="content-wrapper">
          <div className="social-links">
            {/*<a href="#" className="social-icon"><Facebook size={24} /></a>
            <a href="#" className="social-icon"><Twitter size={24} /></a>
            <a href="#" className="social-icon"><Linkedin size={24} /></a>*/}
            <a href="https://www.instagram.com/tacitgroupsupply_co/?hl=en" className="social-icon"><Instagram size={24} /></a>
          </div>
          <div className="footer-navigation">
            <Link to="/" className="footer-nav-link">Home</Link>
            <Link to="/product" className="footer-nav-link">Products</Link>
            <Link to="/about" className="footer-nav-link">About Us</Link>
            <Link to="/contact" className="footer-nav-link">Contact</Link>
          </div>
          <div className="copyright">
            ©2025 Tacit Supply Group Co. | All Rights Reserved | 
            <span> Designed & Developed by </span>
            <a 
              href="https://www.erencedevelopers.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-link"
            >
              Erence Developers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
