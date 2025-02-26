import React, { useState } from 'react';
import styled from 'styled-components';

//iPhone XR
import iPhoneXImageXRBlue from '../../assets/iPhoneX/XR_NORMAL.jpg';
import iPhoneXImageXRRed from '../../assets/iPhoneX/XR_NORMAL_RED.jpg';
import iPhoneXImageXRWhite from '../../assets/iPhoneX/XR_NORMAL_WHITE.jpg';
import iPhoneXImageXRBlack from '../../assets/iPhoneX/XR_NORMAL_BLACK.jpg';

//iPhone XS
import iPhoneXImageXSMaxGold from '../../assets/iPhoneX/XS_NORMAL.jpg';
import iPhoneXImageXSBlack from '../../assets/iPhoneX/XS_NORMAL_BLACK.jpg';
import iPhoneXImageXSWhite from '../../assets/iPhoneX/XS_NORMAL_WHITE.jpg';

//iPhone 12
import iPhone12ImageBlack from '../../assets/iPhone12/12_Normal_Black.jpeg';
import iPhone12ImageBlue from '../../assets/iPhone12/12_Normal_Blue.jpeg';
import iPhone12ImageWhite from '../../assets/iPhone12/12_Normal_White.jpeg';
import iPhone12ImageRed from '../../assets/iPhone12/12_Normal_Red.jpeg';
import iPhone12ImagePurple from '../../assets/iPhone12/12_Normal_Purple.jpeg';
import iPhone12ImageGreen from '../../assets/iPhone12/12_Normal_Green.jpeg';

//iPhone 12 Pro
import iPhone12ImageProBlue from '../../assets/iPhone12/12_Pro_Max_Blue.jpeg'
import iPhone12ImageProGold from '../../assets/iPhone12/12_Pro_Max_Gold.jpeg'
import iPhone12ImageProWhite from '../../assets/iPhone12/12_Pro_Max_White.jpeg'
import iPhone12ImageProBlack from '../../assets/iPhone12/12_Pro_Max_Black.jpeg'

//iPhone 12 Pro Max
import iPhone12ImageProMaxBlue from '../../assets/iPhone12/12_Pro_Max_Blue.jpeg'
import iPhone12ImageProMaxGold from '../../assets/iPhone12/12_Pro_Max_Gold.jpeg'
import iPhone12ImageProMaxWhite from '../../assets/iPhone12/12_Pro_Max_White.jpeg'
import iPhone12ImageProMaxBlack from '../../assets/iPhone12/12_Pro_Max_Black.jpeg'

//iPhone 13
import iPhone13ImageBlack from '../../assets/iPhone13/13_Normal_Black.jpg';
import iPhone13ImagePink from '../../assets/iPhone13/13_Normal_Pink.jpeg';
import iPhone13ImageWhite from '../../assets/iPhone13/13_Normal_White.jpg';
import iPhone13ImageDarkGreen from '../../assets/iPhone13/13_Normal_Dark_Green.jpg';
import iPhone13ImageRed from '../../assets/iPhone13/13_Normal_Red.jpeg';
import iPhone13ImageBlue from '../../assets/iPhone13/13_Normal_Blue.jpeg';

//iPhone 13 Pro Max
import iPhone13ImageProMaxBlue from '../../assets/iPhone13/13_Pro_Max_Blue.jpg';
import iPhone13ImageProMaxWhite from '../../assets/iPhone13/13_Pro_Max_White.jpg';
import iPhone13ImageProMaxGold from '../../assets/iPhone13/13_Pro_Max_Gold.jpg';

//iPhone 14 Plus
import iPhone14ImageMidnight from '../../assets/iPhone14/14_Plus_Midnight.jpg';
import iPhone14ImageBlue from '../../assets/iPhone14/14_Normal_Blue.jpg';
import iPhone14ImageWhite from '../../assets/iPhone14/14_Plus_White.jpg';
import iPhoneImageBlack from '../../assets/iPhone14/14_Normal_Black.jpg';

//iPhone 14 Pro Max
import iPhone14ImageProMaxPurple from '../../assets/iPhone14/14_Pro_Max_Purple.jpg';
import iPhone14ImageProMaxGold from '../../assets/iPhone14/14_Pro_Max_Gold.jpg';
import iPhone14ImageProMaxGray from '../../assets/iPhone14/14_Pro_Max_Gray.jpeg';
import iPhone14ImageProMaxWhite from '../../assets/iPhone14/14_Pro_Max_White.jpg';

//iPhone 15 Plus
import iPhone15ImageBlue from '../../assets/iPhone15/15_Plus_Blue.jpg';
import iPhone15ImageGreen from '../../assets/iPhone15/15_Plus_Green.jpg';
import iPhone15ImageYellow from '../../assets/iPhone15/15_Plus_Yellow.png';
import iPhone15ImageWhite from '../../assets/iPhone15/15_Plus_White.jpg';

//iPhone 15 Pro
import iPhone15ImageProMaxBlack from '../../assets/iPhone15/15_Pro_Max_Black.jpg';
import iPhone15ImageProMaxGold from '../../assets/iPhone15/15_Pro_Max_Gold.jpeg';
import iPhone15ImageProMaxTitanium from '../../assets/iPhone15/15_Pro_Max_Titanium.jpg';
import iPhone15ImageProMaxWhite from '../../assets/iPhone15/15_Pro_Max_White.png'

//iPhone 16 Plus
import iPhone16ImageBlack from '../../assets/iPhone16/16_Plus_Black.jpg'
import iPhone16ImagePink from '../../assets/iPhone16/16_Plus_Pink.jpg'
import iPhone16ImageScarcelle from '../../assets/iPhone16/16_Plus_Scarcelle.jpg'
import iPhone16ImageUltramarine from '../../assets/iPhone16/16_Plus_Ultramarine.jpg'
import iPhone16ImageWhite from '../../assets/iPhone16/16_Plus_White.jpg'

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

const iPhoneProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const phoneData = {

    10: [
      {
        variant: 'XR',
        title: 'iPhone ',
        price: '8800.00',
        colors: ['#5f9ea0 ', '#ff0000', '#ffffff', '#000000'],
        colorNames: ['Blue', 'Red', 'White', 'Black'],
        images: [
          iPhoneXImageXRBlue,
          iPhoneXImageXRRed,
          iPhoneXImageXRWhite,
          iPhoneXImageXRBlack
        ]
      },
      {
        variant: 'XS',
        title: 'iPhone ',
        price: '8800.00',
        colors: ['#daa520 ', '#000000', '#ffffff'],
        colorNames: ['Gold', 'Black', 'White'],
        images: [
          iPhoneXImageXSMaxGold,
          iPhoneXImageXSBlack,
          iPhoneXImageXSWhite
        ]
      }
    ],

    12: [
      {
        variant: 'Mini',
        title: 'iPhone 12',
        price: '299.99',
        colors: ['#000000', '#dda0dd', '#0000cd', '#ff0000 ', '#8fbc8f','#FFFFFF'],
        colorNames: ['Black', 'Purple', 'Blue', 'Red', 'Green',  'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImagePurple,
          iPhone12ImageBlue,
          iPhone12ImageRed,
          iPhone12ImageGreen,
          iPhone12ImageWhite
        ]
      },
      {
        variant: 'Standard',
        title: 'iPhone 12',
        price: '349.99',
        colors: ['#000000', '#dda0dd', '#0000cd', '#ff0000 ', '#8fbc8f','#FFFFFF'],
        colorNames: ['Black', 'Purple', 'Blue', 'Red', 'Green',  'White'],
        images: [
          iPhone12ImageBlack,
          iPhone12ImagePurple,
          iPhone12ImageBlue,
          iPhone12ImageRed,
          iPhone12ImageGreen,
          iPhone12ImageWhite
        ]
      },
      {
        variant: 'Pro',
        title: 'iPhone 12',
        price: '399.99',
        colors: ['#add8e6', '#deb887', '#f8f8ff', '#000000'],
        colorNames: ['Blue', 'Gold', 'White', 'Black'],
        images: [
          iPhone12ImageProBlue,
          iPhone12ImageProGold,
          iPhone12ImageProWhite,
          iPhone12ImageProBlack
        ]
      },
      {
        variant: 'Pro Max',
        title: 'iPhone 12',
        price: '449.99',
        colors: ['#add8e6', '#deb887', '#f8f8ff', '#000000'],
        colorNames: ['Blue', 'Gold', 'White', 'Black'],
        images: [
          iPhone12ImageProMaxBlue,
          iPhone12ImageProMaxGold,
          iPhone12ImageProMaxWhite,
          iPhone12ImageProMaxBlack
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
      {
        variant: 'Standard',
        title: 'iPhone 13',
        price: '399.99',
        colors: ['#000000', '#FFFFFF', '#ffb6c1' , '#18453b'],
        colorNames: ['Black', 'White', 'Pink', 'Dark Green'],
        images: [
          iPhone13ImageBlack,
          iPhone13ImageWhite,
          iPhone13ImagePink,
          iPhone13ImageDarkGreen
        ]
      },
    ],
    14: [
      {
        variant: 'Standard',
        title: 'iPhone 14',
        price: '599.99',
        colors: ['#4682b4', '#ffffff'],
        colorNames: [ 'Blue', 'White' ],
        images: [
          iPhone14ImageBlue,
          iPhone14ImageWhite
        ]
      },
      {
        variant: 'Pro Max',
        title: 'iPhone 14',
        price: '599.99',
        colors: ['#800080', '#daa520', '#808080', '#483d8b', '#fffafa'],
        colorNames: ['Purple', 'Gold', 'Gray', 'Purple','White'],
        images: [
          iPhone14ImageProMaxPurple,
          iPhone14ImageProMaxGold,
          iPhone14ImageProMaxGray,
          iPhone14ImageProMaxWhite
        ]
      }
      // Add similar objects for Plus, Pro, and Pro Max...
    ],
    15: [
      {
        variant: 'Plus',
        title: 'iPhone 15',
        price: '8800.00',
        colors: ['#5f9ea0 ', '#d1e189', '#f0e68c', '#ffffff'],
        colorNames: ['Blue', 'Green', 'Yellow', 'White'],
        images: [
          iPhone15ImageBlue,
          iPhone15ImageGreen,
          iPhone15ImageYellow,
          iPhone15ImageWhite
        ]
      },
      // Add similar objects for Plus, Pro, and Pro Max...
    ],
    16: [
      {
        variant: 'Plus',
        title: 'iPhone 16',
        price: '599.99',
        colors: ['#1b1b1b', '#317873', '#ffb6c1', '#7b68ee', '#f8f8ff'],
        colorNames: ['Black','Scarcelle', 'Pink', 'Ultramarine', "White"],
        images: [
          iPhone16ImageBlack,
          iPhone16ImageScarcelle,
          iPhone16ImagePink,
          iPhone16ImageUltramarine,
          iPhone16ImageWhite
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
            placeholder="Search by model"
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

export default iPhoneProducts;