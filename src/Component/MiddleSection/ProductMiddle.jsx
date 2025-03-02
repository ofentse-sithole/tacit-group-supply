import React from 'react';
import './ProductMid.css';

const ProductMiddle= () => {
  return (
    <div className="showcase-container">
      <div className="showcase-background">
        <div className="showcase-content">
          <div className="showcase-text">
            <h1 className="showcase-title">The New Era of<br/>Tacit Group Supply Co.</h1>
            <p className="showcase-description">
            Bringing you the best in pre-owned and new products. 
            We specialize in quality, affordability, and reliability, 
            ensuring every item meets high standards. Whether you're 
            looking for cost-effective solutions or 
            brand-new essentials, we've got you covered.
            </p>
            
          </div>
          <div className="showcase-image">
            <img src="/image/iPhone-removebg-preview.png" alt="Headphone Pro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMiddle;