import React from 'react';
import './AboutTop.css';

const AboutTop = () => {
  return (
    <div className="about-container">
      <div className="content-container">
        <h1 className="main-heading">About Company</h1>
        
        <h2 className="subheading">Subheading</h2>
        
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
      </div>
      
      <div className="image-container">
        <div className="image-frame">
          <img 
            src="/image/New_Logo.png" 
            alt="Tacit Group Supply Logo" 
            className="main-image" 
          />
        </div>
        <div className="circle-accent"></div>
      </div>
    </div>
  );
};

export default AboutTop;