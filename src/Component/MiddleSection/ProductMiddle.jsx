import React, { useState } from 'react';
import styled from 'styled-components';

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
`;

const ProductImage = styled.img`
  max-height: 100%;
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
        <ProductImage src="/api/placeholder/160/160" alt={title} />
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
      
      <Price>${price}</Price>
    </Card>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      image: "galaxy-protector.jpg",
      title: "Galaxy S7 Edge Screen Protector Curved Crystal HD",
      price: "24.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8", "#FFFFFF"]
    },
    {
      id: 2,
      image: "style-ring.jpg",
      title: "Style Ring",
      price: "24.99",
      colors: ["#000000", "#D4AF37", "#4F4F4F", "#F8C8C8", "#FFFFFF"]
    },
    {
      id: 3,
      image: "apple-watch-case.jpg",
      title: "Rugged Armor Apple Watch 1 & 2 (42mm) Case",
      price: "14.99",
      colors: ["#000000", "#FFFFFF"]
    },
    {
      id: 4,
      image: "iphone-case.jpg",
      title: "iPhone 6s Case Tough Armor",
      price: "34.99",
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