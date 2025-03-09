import React from 'react';
import './Customer.css';

const Customer = () => {
  return (
    <div className="feature-section">
      <div className="feature-container">

      <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h3 className="feature-title">Customer Satsifaction</h3>
          <p className="feature-description">
          We ensure top-quality products and services to exceed your expectations and guarantee satisfaction.
          </p>
        </div>


        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <h3 className="feature-title">Worldwide</h3>
          <p className="feature-description">
            Our team of experts will help you get the best product for your needs.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="8" x2="8" y2="8"></line>
              <line x1="16" y1="12" x2="8" y2="12"></line>
              <line x1="16" y1="16" x2="8" y2="16"></line>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M11 3L12 8 13 3"></path>
            </svg>
          </div>
          <h3 className="feature-title">Delivery</h3>
          <p className="feature-description">
          We guarantee timely and reliable delivery for your convenience and satisfaction.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Customer;