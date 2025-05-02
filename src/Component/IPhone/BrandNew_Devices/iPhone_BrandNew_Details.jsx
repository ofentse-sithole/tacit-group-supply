import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { findPhoneById } from './iPhone_BrandNew'; // CHANGED: Import from iPhone_BrandNew instead of iPhone_Products


const DetailPageContainer = styled.div`
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
`;

const DetailHeader = styled.div`
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
`;

const DetailLeft = styled.div`
  flex: 1;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DetailRight = styled.div`
  flex: 1;
`;

const DetailImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 16px;
`;

const DetailProductImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const DetailTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
`;

const DetailPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 24px;
`;

const DetailColorTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`;

const DetailColorOptions = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const DetailColorButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: none;
  cursor: pointer;
  ${props => props.selected && `
    box-shadow: 0 0 0 2px #3b82f6;
  `}
`;

const SpecificationsContainer = styled.div`
  margin: 32px 0;
  border-top: 1px solid #e5e7eb;
  padding-top: 24px;
`;

const SpecificationsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`;

const SpecificationsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SpecificationItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecificationLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
`;

const SpecificationValue = styled.span`
  font-weight: 600;
  color: #111827;
`;

const TermsContainer = styled.div`
  margin: 32px 0;
  padding: 24px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

const TermsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`;

const TermsList = styled.ul`
  padding-left: 20px;
  margin-bottom: 0;
`;

const TermsListItem = styled.li`
  margin-bottom: 8px;
  color: #4b5563;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PurchaseButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2563eb;
  }
`;

// BrandNew_Details component
export const BrandNew_Details = () => {
  const { productId  } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [phone, setPhone] = useState(null);
  
  // Find the phone by ID on component mount
  useEffect(() => {
    // Check for color in URL query parameters
    const params = new URLSearchParams(window.location.search);
    const colorParam = params.get('color');
    if (colorParam !== null) {
      setSelectedColor(parseInt(colorParam));
    }
    
    const foundPhone = findPhoneById(productId );
    if (foundPhone) {
      setPhone(foundPhone);
    } else {
      // Handle phone not found
      navigate('/products/new');
    }
  }, [productId , navigate]);
  
  if (!phone) {
    return <div>Loading...</div>;
  }
  
  const specifications = {
    'Condition': 'Brand New - Sealed',
    'Storage': phone.storage || '128GB',
    'Network': 'Unlocked',
    'Warranty': '12 Months Apple Warranty',
    'Box Contents': 'All original accessories included',
    'Model': phone.model || phone.variant
  };
  
  const handlePurchase = () => {
    alert(`Thank you for purchasing the ${phone.title} ${phone.variant} in ${phone.colorNames[selectedColor]}!`);
    // In a real app, this would add to cart or redirect to checkout
    navigate('/products/new');
  };
  
  return (
    <DetailPageContainer>
      <DetailHeader>
        <BackButton onClick={() => navigate('/products/new')}>
          ← Back to Brand New iPhones
        </BackButton>
        <MainTitle>Brand New iPhones</MainTitle>
      </DetailHeader>
      
      <DetailContent>
        <DetailLeft>
          <DetailImageContainer>
            <DetailProductImage 
              src={phone.images[selectedColor]} 
              alt={`${phone.title} ${phone.variant} in ${phone.colorNames[selectedColor]}`} 
            />
          </DetailImageContainer>
          
          <DetailColorTitle>Available Colors</DetailColorTitle>
          <DetailColorOptions>
            {phone.colors.map((color, index) => (
              <DetailColorButton
                key={index}
                color={color}
                selected={selectedColor === index}
                onClick={() => {
                  setSelectedColor(index);
                  // Update URL with selected color
                  navigate(`/product/brandnew/${productId }?color=${index}`);
                }}
                aria-label={`Select ${phone.colorNames[index]} color`}
              />
            ))}
          </DetailColorOptions>
        </DetailLeft>
        
        <DetailRight>
          <DetailTitle>{phone.title} {phone.variant}</DetailTitle>
          <DetailPrice>R {phone.price}</DetailPrice>
          
          <div>
            <p>Color: <strong>{phone.colorNames[selectedColor]}</strong></p>
          </div>
          
          <SpecificationsContainer>
            <SpecificationsTitle>Specifications</SpecificationsTitle>
            <SpecificationsList>
              {Object.entries(specifications).map(([label, value]) => (
                <SpecificationItem key={label}>
                  <SpecificationLabel>{label}</SpecificationLabel>
                  <SpecificationValue>{value}</SpecificationValue>
                </SpecificationItem>
              ))}
            </SpecificationsList>
          </SpecificationsContainer>
          
          <TermsContainer>
            <TermsTitle>Terms & Conditions</TermsTitle>
            <TermsList>
              <TermsListItem>14-day return policy for unopened devices</TermsListItem>
              <TermsListItem>All brand new devices come with full manufacturer warranty</TermsListItem>
              <TermsListItem>Free shipping on all brand new devices</TermsListItem>
              <TermsListItem>Payment processed securely through our payment gateway</TermsListItem>
              <TermsListItem>All devices are 100% authentic and sourced directly from authorized channels</TermsListItem>
            </TermsList>
          </TermsContainer>
          
          <PurchaseButton onClick={handlePurchase}>
            Purchase Now
          </PurchaseButton>
        </DetailRight>
      </DetailContent>
    </DetailPageContainer>
  );
};