import React from 'react';
import './AboutMission.css';

const AboutMission = () => {
  return (
    <div className="team-container">
      <div className="image-section">
        <div className="blue-blob"></div>
        <div className="profile-image-container">
          <img 
            src="/path-to-team-member-image.jpg" 
            alt="Team member portrait" 
            className="profile-image" 
          />
        </div>
        <div className="blue-circle"></div>
        
        <div className="name-badge">
          <h3 className="team-member-name">Firstname<br />Lastname</h3>
          <p className="team-member-title">Lorem ipsum dolor sit amet,<br />consectetur</p>
        </div>
      </div>
      
      <div className="content-section">
        <h1 className="main-heading">Meet the<br />Team</h1>
        
        <h2 className="subheading">Subheading</h2>
        
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
      </div>
    </div>
  );
};

export default AboutMission;