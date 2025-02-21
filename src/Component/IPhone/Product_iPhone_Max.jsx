import React, { useState } from 'react';
import styled from 'styled-components';
// Import just the one image we know works'
import iPhone12ImageBlack from '../../assets/ProMax/iPhone_12_Pro_Max_Black.png';
import iPhone12ImageGold from '../../assets/ProMax/iPhone_12_Pro_Max_Gold.png';
import iPhone12ImageGray from '../../assets/ProMax/iPhone_12_Pro_Max_Gray.png';
import iPhone12ImagePink from '../../assets/ProMax/iPhone_12_Pro_Max_Pink.png';
import iPhone12ImageWhite from '../../assets/ProMax/iPhone_12_Pro_Max_White.png';

import iPhone13ImageBlack from '../../assets/ProMax/13_Pro_Max_Black.jpg';
import iPhone13ImageWhite from '../../assets/ProMax/13_Pro_Max_White.jpg';

import iPhone14ImagePurple from '../../assets/ProMax/14_Pro_Max_Purple.jpeg';
import iPhone14ImageGold from '../../assets/ProMax/14_Pro_Max_Gold.jpeg';
import iPhone14ImageGray from '../../assets/ProMax/14_Pro_Max_Gray.jpeg';
import iPhone14ImagePink from '../../assets/ProMax/14_Pro_Max_Pink.jpeg';

import iPhone15ImageBlack from '../../assets/ProMax/15_Pro_Max_Black.jpg';
import iPhone15ImageGold from '../../assets/ProMax/15_Pro_Max_Gold.jpg';
import iPhone15ImageGray from '../../assets/ProMax/15_Pro_Max_Gray.jpg';
import iPhone15ImagePink from '../../assets/ProMax/15_Pro_Max_Pink.jpg';
import iPhone15ImageWhite from '../../assets/ProMax/15_Pro_Max_White.jpg';

// Styled Components
const ShowcaseContainer = styled.div`
  padding: 24px;
  background-color: #f9fafb;
`;

const ShowcaseTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1f2937;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  text-align: center;
  font-weight: 500;
  color: #374151;
  height: 48px;
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
const ProductCard = ({ images, title, price, colors, colorNames }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <Card>
      <ImageContainer>
        {images && <ProductImage src={images[selectedColor]} alt={`${title} in ${colorNames[selectedColor]}`} />}
      </ImageContainer>
      <ProductTitle>{title}</ProductTitle>
      
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

const iPhonePro = () => {
  const colorNameMap = {
    "#000000": "Black",
    "#D4AF37": "Gold",
    "#4F4F4F": "Gray",
    "#F8C8C8": "Pink",
    "#FFFFFF": "White"
  };

  const products = [
    {
      id: 1,
      images: [
        iPhone12ImageBlack,
        iPhone12ImageGold,
        iPhone12ImageGray,
        iPhone12ImagePink,
        iPhone12ImageWhite
      ],
      title: "iPhone 12 Pro Max",
      price: "399.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8", "#FFFFFF"],
      colorNames: ["Black", "Gold", "Gray", "Pink", "White"]
    },
    {
      id: 2,
      images: [
        iPhone13ImageBlack,
        iPhone13ImageWhite
      ],
      title: "iPhone 13 Pro Max",
      price: "249.99",
      colors: ["#000000", "#FFFFFF"],
      colorNames: ["Black", "White"]
    },
    {
      id: 3,
      images: [
        iPhone14ImagePurple,
        iPhone14ImageGold,
        iPhone14ImageGray,
        iPhone14ImagePink
      ],
      title: "iPhone 14 Pro Max",
      price: "599.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8"],
      colorNames: ["Black", "Gold", "Gray", "Pink"]
    },
    {
      id: 4,
      images: [
        iPhone15ImageBlack,
        iPhone15ImageGold,
        iPhone15ImageGray,
        iPhone15ImagePink,
        iPhone15ImageWhite
      ],
      title: "iPhone 15 Pro Max 64/256/512GB",
      price: "8,800.00",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8", "#FFFFFF"],
      colorNames: ["Black", "Gold", "Gray", "Pink", "White"]
    }
  ];

  return (
    <ShowcaseContainer>
      <br/>
      <br/>
      <br/>
      <ShowcaseTitle>Pre-Owned iPhone Pro Max</ShowcaseTitle>
      <ProductGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
            colors={product.colors}
            colorNames={product.colorNames}
          />
        ))}
      </ProductGrid>
    </ShowcaseContainer>
  );
};

export default iPhonePro;