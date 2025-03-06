import React from 'react';
import './AboutTop.css';

const AboutTop = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">
          ABOUT US
        </h1>
        <p className="about-us-text">
        As the Tacit Group Supply Co, we specialize in providing 
        top-notch gadgets and phones to meet all your tech needs. 
        With a keen eye for quality, we meticulously curate our inventory 
        to ensure that every product we offer is nothing short of excellent. 
        As trusted consignors, we pride ourselves on delivering reliability and 
        satisfaction with every purchase. Whether you're searching for the latest 
        smartphone or cutting-edge gadgets, we're here to provide unparalleled 
        service and exceptional products.
        </p>
      </div>
      <div className="about-us-image-container">
        <img 
          src="/image/New_Logo.png" 
          alt="Person holding laptop taking selfie" 
          className="about-us-image" 
        />
      </div>
    </div>
  );
};

export default AboutTop;