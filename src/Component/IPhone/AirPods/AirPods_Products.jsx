import React, { useState} from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate, Routes, Route } from 'react-router-dom';

//iPhone6/6s
import first_Gen_AirPods from '../../../assets/AirPods/1st_Gen_Airpods.jpeg';
import second_Gen_AirPods from '../../../assets/AirPods/2nd_Gen_Airpods.jpeg';
import third_Gen_AirPods from '../../../assets/AirPods/3rd_Gen_Airpods.jpeg';
import fourth_Gen_AirPods from '../../../assets/AirPods/4th_Gen_Airpods.jpeg';
import Pro_Gen_AirPods from '../../../assets/AirPods/Pro_Gen_Airpods.jpeg';

// Styled Components
// Styled Components (existing ones remain the same)
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
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: contents;
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

// Product detail page components
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

// Define phone data outside components for global access
const phoneData = {
  1: [
    {
      variant: '1st Gen',
      title: 'AirPods ',
      price: '1 500.00',
      colors: ['#ffffff'],
      colorNames: ['White'],
      images: [
        first_Gen_AirPods
      ],
      id: '1-Generation'
    },
  ],
  2: [
    {
      variant: '2nd Generation',
      title: 'AirPods Pro',
      price: '1 800.00',
      colors: ['#ffffff'],
      colorNames: ['White'],
      images: [
        second_Gen_AirPods
      ],
      id: '2-Generation'
    }
  ],
  3: [
    {
      variant: '3rd Generation',
      title: 'AirPods',
      price: '2 000.00',
      colors: ['#ffffff'],
      colorNames: ['White'],
      images: [
        third_Gen_AirPods
      ],
      id: '3-Generation' // Adding IDs for routing
    },
  ],
  4: [
    {
      variant: '4th-Generation',
      title: 'AirPods',
      price: '2 300.00',
      colors: ['#ffffff'],
      colorNames: ['White'],
      images: [
        fourth_Gen_AirPods
      ],
      id: '4-Generation' // Adding IDs for routing
    },
    
  ],
  5:[
    {
      variant: 'Max',
      title: 'AirPods',
      price: '6 500.00',
      colors: ['#ffffff'],
      colorNames: ['White'],
      images: [
        Pro_Gen_AirPods
      ],
      id: '5-Max' // Adding IDs for routing
    },
  ],
};


// Utility functions
export const findPhoneById = (id) => {
  for (const generation in phoneData) {
    const found = phoneData[generation].find(phone => phone.id === id);
    if (found) return found;
  }
  return null;
};

export const getAllPhones = () => {
  return Object.values(phoneData).flat();
}


// Components
const PhoneCard = ({ phone }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <StyledLink to={`/product/iphone/${phone.id}?color=${selectedColor}`}>
      <Card>
        <ImageContainer>
          <ProductImage src={phone.images[selectedColor]} alt={`${phone.title} ${phone.variant} in ${phone.colorNames[selectedColor]}`} />
        </ImageContainer>
        <ProductTitle>{phone.title} {phone.variant}</ProductTitle>
        <ColorOptions>
          {phone.colors.map((color, index) => (
            <ColorButton
              key={index}
              color={color}
              selected={selectedColor === index}
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor(index);
              }}
              aria-label={`Select ${phone.colorNames[index]} color`}
            />
          ))}
        </ColorOptions>
        <Price>R {phone.price}</Price>
      </Card>
    </StyledLink>
  );
};

const PhoneSection = ({ generation, phones }) => (
  <SectionContainer>
    <SectionTitle>AirPods {generation}</SectionTitle>
    <ProductGrid>
      {phones.map((phone) => (
        <PhoneCard 
          key={`${phone.title}-${phone.variant}`} 
          phone={phone}
        />
      ))}
    </ProductGrid>
  </SectionContainer>
);

// ProductListPage component (main phones listing)
const ProductListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPhones = Object.entries(phoneData).reduce((acc, [generation, phones]) => {
    const filtered = phones.filter(phone => 
        phone?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone?.variant?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone?.colorNames?.some(color => color?.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <MainTitle>Brand New AirPods</MainTitle>
          <SearchInput
            type="text"
            placeholder="Search by model, variant, or color"
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


// Main component that renders the iPhone product showcase
const AirPods_Products = () => {
  return <ProductListPage />;
};

export default AirPods_Products;
