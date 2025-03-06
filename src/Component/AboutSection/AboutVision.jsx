import React from 'react';
import './AboutVision.css';

const AboutVision = () => {
  return (
    <div className="vision-container">
      <div className="left-section">
        <div className="blue-circle">
          <h1 className="vision-heading">Our<br />Vision</h1>
        </div>
        
        <div className="vision-text">
          <h2 className="subheading">Subheading</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      
      <div className="right-section">
        <div className="top-text">
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        </div>
        
        <div className="light-blue-circle"></div>
        
        <div className="image-container">
          <img 
            src="/path-to-succulent-image.jpg" 
            alt="Succulent plant in a concrete pot" 
            className="plant-image" 
          />
        </div>
      </div>
      
      <div className="expand-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 3H21V9" stroke="#4A87B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21H3V15" stroke="#4A87B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3L14 10" stroke="#4A87B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21L10 14" stroke="#4A87B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default AboutVision;