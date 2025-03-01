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
            {/*<a href="#" className="social-icon" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin />
            </a>*/}
            <a href="https://www.instagram.com/tacitgroupsupply_co/?hl=en" className="social-icon" aria-label="Instagram">
              <Instagram />
            </a>
          </div>

          <nav className="footer-navigation">
            <Link to="/home" className="footer-nav-link">Home</Link>
            <Link to="/product" className="footer-nav-link">Products</Link>
            <Link to="/contact" className="footer-nav-link">Contact</Link>
          </nav>

          <p className="copyright">
            ©2025 Tacit Supply Group Co. | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;