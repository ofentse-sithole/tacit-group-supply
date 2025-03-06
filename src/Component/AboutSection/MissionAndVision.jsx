import React from 'react';
import './MissionAndVision.css';

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="mission-section">
        <div className="header-container">
          <h2 className="section-header">OUR MISSION</h2>
        </div>
        <p className="section-text">
        Our mission is to provide high-quality, cutting-edge technology 
        products that enhance and simplify daily life. We aim to be a 
        trusted source for the latest smartphones and gadgets by 
        ensuring that every product in our inventory meets the highest 
        standards of reliability and performance. 
        
        Customer satisfaction is at the heart of what we do, and we are 
        committed to delivering exceptional service and value with every purchase.
        </p>
        <p className="section-text">
          It isn't merely a description of the activities undertaken by the organization
          either, but it also provides the analysis on the results of these activities.
        </p>
      </div>

      <div className="vision-section">
        <div className="header-container">
          <h2 className="section-header">OUR VISION</h2>
        </div>
        <p className="section-text">
        Our vision is to establish Tacit Group Supply Co as a 
        globally recognized leader in the tech industry, renowned 
        for delivering top-tier gadgets and smartphones. We aspire 
        to set new standards in quality, innovation, and customer 
        satisfaction by continuously evolving with the latest technological 
        advancements. Through strong partnerships and a commitment to excellence, 
        we aim to create a seamless shopping experience that ensures trust, 
        reliability, and long-term value for our customers.
        </p>
        <p className="section-text">
          Beyond just selling products, we envision a future 
          where technology enhances everyday life effortlessly. 
          By staying ahead of market trends and consumer needs, we strive 
          to bridge the gap between innovation and accessibility, 
          making high-quality tech solutions available to everyone.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;