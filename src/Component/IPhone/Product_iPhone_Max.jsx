import React, { useState } from 'react';
import styled from 'styled-components';
// Import just the one image we know works'
import iPhone12Image from '../../assets/ProMax/iPhone_12_Pro_Max_Front&Back_View.png'
import iPhone13Image from '../../assets/ProMax/13_Pro_Max_F&B_Blue.jpg'
import iPhone14Image from '../../assets/ProMax/14_Pro_Max_F&B.jpeg'
import iPhone15Image from '../../assets/ProMax/15_Pro_Max_F&B.jpg';

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
const ProductCard = ({ image, title, price, colors }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <Card>
      <ImageContainer>
        {image && <ProductImage src={image} alt={title} />}
      </ImageContainer>
      <ProductTitle>{title}</ProductTitle>
      
      <ColorOptions>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            selected={selectedColor === index}
            onClick={() => setSelectedColor(index)}
            aria-label={`Select ${color} color`}
          />
        ))}
      </ColorOptions>
      
      <Price>R {price}</Price>
    </Card>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      id: 4,
      image: iPhone15Image,
      title: "iPhone 15 Pro Max 64/256/512GB",
      price: "8,800.00",
      colors: ["#000000", "#D4AF37", "#F4F4F4", "#F8C8C8", "#FFFFFF"]
    },
    {
      id: 1,
      image: iPhone12Image,
      title: "iPhone 12 Pro Max",
      price: "399.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8", "#FFFFFF"]
    },
    {
      id: 2,
      image: iPhone13Image,
      title: "iPhone 13 Pro Max",
      price: "249.99",
      colors: ["#000000", "#FFFFFF"]
    },
    {
      id: 3,
      image: iPhone14Image,
      title: "iPhone 14 Pro Max",
      price: "599.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8"]
    }
  ];

  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Featured Accessories</ShowcaseTitle>
      <ProductGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            colors={product.colors}
          />
        ))}
      </ProductGrid>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;