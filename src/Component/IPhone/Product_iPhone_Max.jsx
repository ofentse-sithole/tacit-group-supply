import React, { useState } from 'react';
import styled from 'styled-components';

import iPhone12ImageBlack from '../../assets/iPhone12/12_Normal_Black.jpeg';
import iPhone12ImageWhite from '../../assets/iPhone12/12_Normal_White.jpeg';
import iPhone12ImagePink from '../../assets/iPhone12/12_Normal_Red.jpeg';
import iPhone12ImageGold from '../../assets/iPhone12/12_Pro_Max_Gold.jpeg';
import iPhone12ImageBlue from '../../assets/iPhone12/12_Pro_Max_Blue.png';


import iPhone13ImageBlack from '../../assets/iPhone13/13_Normal_Black.jpg';
import iPhone13ImageWhite from '../../assets/iPhone13/13_Normal_Pink.jpeg';

import iPhone14ImagePurple from '../../assets/iPhone14/14_Pro_Max_Purple.jpg';
import iPhone14ImageGold from '../../assets/iPhone14/14_Pro_Max_Gold.jpg';
import iPhone14ImageGray from '../../assets/iPhone14/14_Pro_Max_Gray.jpeg';
import iPhone14ImagePink from '../../assets/iPhone14/14_Plus_Midnight.jpg';

import iPhone15ImageBlack from '../../assets/iPhone15/15_Pro_Max_Black.jpg';
import iPhone15ImageGold from '../../assets/iPhone15/15_Pro_Max_Gold.jpeg';
import iPhone15ImageGray from '../../assets/iPhone15/15_Plus_Blue.jpeg';
import iPhone15ImagePink from '../../assets/iPhone15/15_Plus_Yellow.png';
import iPhone15ImageWhite from '../../assets/iPhone15/15_Pro_Max_Titanium.jpg';

// Styled Components
const ShowcaseContainer = styled.div`
  padding: 24px;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 4px;
`;

const ProductImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-align: center;
  height: 36px;
  line-height: 1.25;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 12px 0;
`;

const ColorButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: none;
  cursor: pointer;
  ${props => props.selected && `
    box-shadow: 0 0 0 2px #3b82f6;
  `}
`;

const Price = styled.p`
  font-weight: 700;
  color: #111827;
  margin-top: 8px;
`;

// Components
const PhoneCard = ({ images, title, price, colors, colorNames, variant }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={images[selectedColor]} alt={`${title} ${variant} in ${colorNames[selectedColor]}`} />
      </ImageContainer>
      <ProductTitle>{title} {variant}</ProductTitle>
      <ColorOptions>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            selected={selectedColor === index}
            onClick={() => setSelectedColor(index)}
            aria-label={`Select ${colorNames[index]} color`}
          />
        ))}
      </ColorOptions>
      <Price>R {price}</Price>
    </Card>
  );
};

const PhoneSection = ({ generation, phones }) => (
  <SectionContainer>
    <SectionTitle>iPhone {generation}</SectionTitle>
    <ProductGrid>
      {phones.map((phone) => (
        <PhoneCard key={`${phone.title}-${phone.variant}`} {...phone} />
      ))}
    </ProductGrid>
  </SectionContainer>
);

const iPhoneShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const phoneData = {
    12: [
      {
        variant: 'Mini',
        title: 'iPhone 12',
        price: '299.99',
        colors: ['#000000', '#D4AF37', '#4F4F4F', '#F8C8C8', '#FFFFFF'],
        colorNames: ['Black', 'Gold', 'Gray', 'Pink', 'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImageGold,
          iPhone12ImageBlue,
          iPhone12ImagePink,
          iPhone12ImageWhite
        ]
      },
      {
        variant: 'Standard',
        title: 'iPhone 12',
        price: '349.99',
        colors: ['#000000', '#D4AF37', '#4F4F4F', '#F8C8C8', '#FFFFFF'],
        colorNames: ['Black', 'Gold', 'Gray', 'Pink', 'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImageGold,
          iPhone12ImageBlue,
          iPhone12ImagePink,
          iPhone12ImageWhite
        ]
      },
      {
        variant: 'Pro',
        title: 'iPhone 12',
        price: '399.99',
        colors: ['#000000', '#D4AF37', '#4F4F4F', '#F8C8C8', '#FFFFFF'],
        colorNames: ['Black', 'Gold', 'Gray', 'Pink', 'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImageGold,
          iPhone12ImageBlue,
          iPhone12ImagePink,
          iPhone12ImageWhite
        ]
      },
      {
        variant: 'Pro Max',
        title: 'iPhone 12',
        price: '449.99',
        colors: ['#000000', '#D4AF37', '#4F4F4F', '#F8C8C8', '#FFFFFF'],
        colorNames: ['Black', 'Gold', 'Gray', 'Pink', 'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImageGold,
          iPhone12ImageBlue,
          iPhone12ImagePink,
          iPhone12ImageWhite
        ]
      }
    ],
    13: [
      {
        variant: 'Mini',
        title: 'iPhone 13',
        price: '399.99',
        colors: ['#000000', '#FFFFFF'],
        colorNames: ['Black', 'White'],
        images: [
          iPhone13ImageBlack,
          iPhone13ImageWhite
        ]
      },
      // Add similar objects for Standard, Pro, and Pro Max...
    ],
    14: [
      {
        variant: 'Standard',
        title: 'iPhone 14',
        price: '599.99',
        colors: ['#800080', '#D4AF37', '#4F4F4F', '#F8C8C8'],
        colorNames: ['Purple', 'Gold', 'Gray', 'Pink'],
        images: [
          iPhone14ImagePurple,
          iPhone14ImageGold,
          iPhone14ImageGray,
          iPhone14ImagePink
        ]
      },
      // Add similar objects for Plus, Pro, and Pro Max...
    ],
    15: [
      {
        variant: 'Standard',
        title: 'iPhone 15',
        price: '8800.00',
        colors: ['#000000', '#D4AF37', '#4F4F4F', '#F8C8C8', '#FFFFFF'],
        colorNames: ['Black', 'Gold', 'Gray', 'Pink', 'White'],
        images: [
          iPhone15ImageBlack,
          iPhone15ImageGold,
          iPhone15ImageGray,
          iPhone15ImagePink,
          iPhone15ImageWhite
        ]
      },
      // Add similar objects for Plus, Pro, and Pro Max...
    ]
  };

  const filteredPhones = Object.entries(phoneData).reduce((acc, [generation, phones]) => {
    const filtered = phones.filter(phone => 
      phone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.colorNames.some(color => color.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filtered.length > 0) {
      acc[generation] = filtered;
    }
    return acc;
  }, {});

  return (
    <ShowcaseContainer>
      <ContentWrapper>
      <br/>
          <br/>
          <br/>
        <Header>
          
          <MainTitle>Pre-Owned iPhones</MainTitle>
          <SearchInput
            type="text"
            placeholder="Search by model, variant, or color..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Header>
        
        {Object.entries(filteredPhones).map(([generation, phones]) => (
          <PhoneSection
            key={generation}
            generation={generation}
            phones={phones}
          />
        ))}
      </ContentWrapper>
    </ShowcaseContainer>
  );
};

export default iPhoneShowcase;