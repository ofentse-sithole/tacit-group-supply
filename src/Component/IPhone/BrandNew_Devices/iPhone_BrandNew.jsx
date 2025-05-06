import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate, Routes, Route, useLocation } from 'react-router-dom';

//iPhone6/6s
import iPhone6Rose from '../../../assets/iPhone6/6_Rose_Gold.jpg';
import iPhone6Gold from '../../../assets/iPhone6/6_Gold.jpeg';
import iPhone6Silver from '../../../assets/iPhone6/6_Silver.jpeg';

//iPhone 7
import iPhone7PlusGold from '../../../assets/iPhone7/iPhone7_Plus_Gold-removebg-preview.png';
import iPhone7PlusRoseGold from '../../../assets/iPhone7/iPhone7_Plus_Rose_Gold-removebg-preview.png';
import iPhone7PlusBlack from '../../../assets/iPhone7/iPhone7_Plus_Black-removebg-preview.png';

import iPhone7Silver from '../../../assets/iPhone7/iPhone7_Silver.jpg';
import iPhone7Gold from '../../../assets/iPhone7/iPhone7_Gold.jpg';
import iPhone7RoseGold from '../../../assets/iPhone7/iPhone7_RoseGold.jpg';

//iPhone 8
import iPhone8White from '../../../assets/iPhone8/iPhone8_Normal_White.jpg';
import iPhone8Black from '../../../assets/iPhone8/iPhone8_Normal_Black.jpg';
import iPhone8Gold from '../../../assets/iPhone8/iPhone8_Normal_Gold.jpg';

import iPhone8PlusBlack from '../../../assets/iPhone8/iPhone8_Plus_Black.jpg';
import iPhone8PlusWhite from '../../../assets/iPhone8/iPhone8_Plus_White.jpg';
import iPhone8PlusGold from '../../../assets/iPhone8/iPhone8_Plus_Gold.jpg';
import iPhone8PlusRed from '../../../assets/iPhone8/iPhone8_Plus_Red.jpg';

//iPhone XR
import iPhoneXImageXRBlue from '../../../assets/iPhoneX/XR_NORMAL.jpg';
import iPhoneXImageXRRed from '../../../assets/iPhoneX/XR_NORMAL_RED.jpg';
import iPhoneXImageXRWhite from '../../../assets/iPhoneX/XR_NORMAL_WHITE.jpg';
import iPhoneXImageXRBlack from '../../../assets/iPhoneX/XR_NORMAL_BLACK.jpg';

//iPhone XS
import iPhoneXImageXSMaxGold from '../../../assets/iPhoneX/XS_NORMAL.jpg';
import iPhoneXImageXSBlack from '../../../assets/iPhoneX/XS_NORMAL_BLACK.jpg';
import iPhoneXImageXSWhite from '../../../assets/iPhoneX/XS_NORMAL_WHITE.jpg';

//iPhone 11
import iPhone11Green from '../../../assets/iPhone11/iPhone11_Normal_Green.jpg';
import iPhone11Purple from '../../../assets/iPhone11/iPhone11_Normal_Purple.jpg';
import iPhone11White from '../../../assets/iPhone11/iPhone11_Normal_White.jpg';
import iPhone11Black from '../../../assets/iPhone11/11_Normal_Black.jpg';
import iPhone11Red from '../../../assets/iPhone11/iPhone11_Normal_Red.jpg';
import iPhone11Yellow from '../../../assets/iPhone11/iPhone11_Normal_Yellow.jpg';

import iPhone11ProMaxGold from '../../../assets/iPhone11/iPhone11_ProMax_Gold.jpg';
import iPhone11ProMaxGray from '../../../assets/iPhone11/iPhone11_ProMax_Dark.jpg';
import iPhone11ProMaxWhite from '../../../assets/iPhone11/iPhone11_ProMax_Silver.jpg';
import iPhone11DarkGreen from '../../../assets/iPhone11/iPhone11_ProMax_DarkGreen.jpg';

//iPhone 12
import iPhone12ImageBlack from '../../../assets/iPhone12/12_Normal_Black.jpeg';
import iPhone12ImageBlue from '../../../assets/iPhone12/12_Normal_Blue.jpeg';
import iPhone12ImageWhite from '../../../assets/iPhone12/12_Normal_White.jpeg';
import iPhone12ImageRed from '../../../assets/iPhone12/12_Normal_Red.jpeg';
import iPhone12ImagePurple from '../../../assets/iPhone12/12_Normal_Purple.jpeg';
import iPhone12ImageGreen from '../../../assets/iPhone12/12_Normal_Green.jpeg';

//iPhone 12 Pro
import iPhone12ImageProBlue from '../../../assets/iPhone12/12_Pro_Max_Blue.jpeg'
import iPhone12ImageProGold from '../../../assets/iPhone12/12_Pro_Max_Gold.jpeg'
import iPhone12ImageProWhite from '../../../assets/iPhone12/12_Pro_Max_White.jpeg'
import iPhone12ImageProBlack from '../../../assets/iPhone12/12_Pro_Max_Black.jpeg'

//iPhone 12 Pro Max
import iPhone12ImageProMaxBlue from '../../../assets/iPhone12/12_Pro_Max_Blue.jpeg'
import iPhone12ImageProMaxGold from '../../../assets/iPhone12/12_Pro_Max_Gold.jpeg'
import iPhone12ImageProMaxWhite from '../../../assets/iPhone12/12_Pro_Max_White.jpeg'
import iPhone12ImageProMaxBlack from '../../../assets/iPhone12/12_Pro_Max_Black.jpeg'

//iPhone 13
import iPhone13ImageBlack from '../../../assets/iPhone13/13_Normal_Black.jpg';
import iPhone13ImagePink from '../../../assets/iPhone13/13_Normal_Pink.jpeg';
import iPhone13ImageWhite from '../../../assets/iPhone13/13_Normal_White.jpg';
import iPhone13ImageDarkGreen from '../../../assets/iPhone13/13_Normal_Dark_Green.jpg';
import iPhone13ImageRed from '../../../assets/iPhone13/13_Normal_Red.jpeg';
import iPhone13ImageBlue from '../../../assets/iPhone13/13_Normal_Blue.jpeg';

//iPhone 13 Pro Max
import iPhone13ImageProMaxBlue from '../../../assets/iPhone13/13_Pro_Max_Blue.jpg';
import iPhone13ImageProMaxWhite from '../../../assets/iPhone13/13_Pro_Max_White.jpg';
import iPhone13ImageProMaxGold from '../../../assets/iPhone13/13_Pro_Max_Gold.jpg';

//iPhone 14 Plus
import iPhone14ImageMidnight from '../../../assets/iPhone14/14_Plus_Midnight.jpg';
import iPhone14ImageBlue from '../../../assets/iPhone14/14_Normal_Blue.jpg';
import iPhone14ImageWhite from '../../../assets/iPhone14/14_Plus_White.jpg';
import iPhoneImageBlack from '../../../assets/iPhone14/14_Normal_Black.jpg';

//iPhone 14 Pro Max
import iPhone14ImageProMaxPurple from '../../../assets/iPhone14/14_Pro_Max_Purple.jpg';
import iPhone14ImageProMaxGold from '../../../assets/iPhone14/14_Pro_Max_Gold.jpg';
import iPhone14ImageProMaxGray from '../../../assets/iPhone14/14_Pro_Max_Gray.jpeg';
import iPhone14ImageProMaxWhite from '../../../assets/iPhone14/14_Pro_Max_White.jpg';

//iPhone 15 Plus
import iPhone15ImageBlue from '../../../assets/iPhone15/15_Plus_Blue.jpg';
import iPhone15ImageGreen from '../../../assets/iPhone15/15_Plus_Green.jpg';
import iPhone15ImageYellow from '../../../assets/iPhone15/15_Plus_Yellow.png';
import iPhone15ImageWhite from '../../../assets/iPhone15/15_Plus_White.jpg';

//iPhone 15 Pro
import iPhone15ImageProMaxBlack from '../../../assets/iPhone15/15_Pro_Max_Black.jpg';
import iPhone15ImageProMaxGold from '../../../assets/iPhone15/15_Pro_Max_Gold.jpeg';
import iPhone15ImageProMaxTitanium from '../../../assets/iPhone15/15_Pro_Max_Titanium.jpg';
import iPhone15ImageProMaxWhite from '../../../assets/iPhone15/15_Pro_Max_White.png'

//iPhone 16 Plus
import iPhone16ImageBlack from '../../../assets/iPhone16/16_Plus_Black.jpg'
import iPhone16ImagePink from '../../../assets/iPhone16/16_Plus_Pink.jpg'
import iPhone16ImageScarcelle from '../../../assets/iPhone16/16_Plus_Scarcelle.jpg'
import iPhone16ImageUltramarine from '../../../assets/iPhone16/16_Plus_Ultramarine.jpg'
import iPhone16ImageWhite from '../../../assets/iPhone16/16_Plus_White.jpg'

import iPhone16ProMaxGray from '../../../assets/iPhone16/iPhone16_ProMax_Gray.jpg'
import iPhone16ProMaxTitanium from '../../../assets/iPhone16/iPhone16_ProMax_Titanium.jpg'
import iPhone16ProMaxWhite from '../../../assets/iPhone16/iPhone16_ProMax_White.jpg'
import iPhone16ProMaxBlack from '../../../assets/iPhone16/iPhone16_ProMax_Black.jpg'

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
  border-radius: 50%; // This is already set to 50% which makes a perfect circle
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
  border-radius: 50%; // This is already set to 50% which makes a perfect circle
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
  6: [
    {
      variant: '6/6s',
      title: 'iPhone ',
      price: '2 200.00',
      colors: ['#ff9999', '#eee8aa', '#c0c0c0'],
      colorNames: ['Rose Gold', 'Gold', 'Silver'],
      images: [
        iPhone6Rose,
        iPhone6Gold,
        iPhone6Silver
      ],
      id: '6-standard'
    },
    {
      variant: '6s Plus',
      title: 'iPhone ',
      price: '3 3800.00',
      colors: ['#ff9999', '#eee8aa', '#c0c0c0'],
      colorNames: ['Rose Gold', 'Gold', 'Silver'],
      images: [
        iPhone6Rose,
        iPhone6Gold,
        iPhone6Silver
      ],
      id: '6-plus'
    }
  ],
  7: [
    {
          variant: 'Standard',
          title: 'iPhone 7',
          price: '4 000.00',
          colors: ['#daa520', '#F7C3C3', '#c0c0c0'],
          colorNames: ['Gold', 'Rose Gold', 'Silver'],
          images: [
            iPhone7Gold,
            iPhone7RoseGold,
            iPhone7Silver
          ],
          id: '7-standard'
        },
    {
          variant: 'Plus',
          title: 'iPhone 7',
          price: '4 000.00',
          colors: ['#daa520', '#F7C3C3', '#000000'],
          colorNames: ['Gold', 'Rose Gold', 'Black'],
          images: [
            iPhone7PlusGold,
            iPhone7PlusRoseGold,
            iPhone7PlusBlack
          ],
          id: '7-plus'
        }
      ],
  8: [
    {
      variant: 'Standard',
      title: 'iPhone 8',
      price: '4 300.00',
      colors: [ '#deb887', '#ffffff', '#000000'],
      colorNames: [ 'Gold', 'White', 'Black'],
      images: [
        iPhone8Gold,
        iPhone8White,
        iPhone8Black
      ],
      id: '8-standard' // Adding IDs for routing
    },
    {
      variant: 'Plus',
      title: 'iPhone 8',
      price: '4 800.00',
      colors: ['#daa520', '#000000', '#ffffff', '#ff0000'],
            colorNames: ['Gold', 'Black', 'White', 'Red'],
            images: [
              iPhone8PlusGold,
              iPhone8PlusBlack,
              iPhone8PlusWhite,
              iPhone8PlusRed
            ],
            id: '8-plus'
    }
  ],
  10: [
    {
      variant: 'XR',
      title: 'iPhone',
      price: '6 800.00',
      colors: ['#5f9ea0', '#ff0000', '#ffffff', '#000000'],
      colorNames: ['Blue', 'Red', 'White', 'Black'],
      images: [
        iPhoneXImageXRBlue,
        iPhoneXImageXRRed,
        iPhoneXImageXRWhite,
        iPhoneXImageXRBlack
      ],
      id: '10-xr' // Adding IDs for routing
    },
    {
      variant: 'X',
      title: 'iPhone',
      price: '5 700.00',
      colors: ['#daa520', '#000000', '#ffffff'],
      colorNames: ['Gold', 'Black', 'White'],
      images: [
        iPhoneXImageXSMaxGold,
        iPhoneXImageXSBlack,
        iPhoneXImageXSWhite
      ],
      id: '10-x'
    },
    {
      variant: 'XS',
      title: 'iPhone',
      price: '6 200.00',
      colors: ['#daa520', '#000000', '#ffffff'],
      colorNames: ['Gold', 'Black', 'White'],
      images: [
        iPhoneXImageXSMaxGold,
        iPhoneXImageXSBlack,
        iPhoneXImageXSWhite
      ],
      id: '10-xs'
    },
    {
      variant: 'XS Max',
      title: 'iPhone',
      price: '6 700.00',
      colors: ['#daa520', '#000000', '#ffffff'],
      colorNames: ['Gold', 'Black', 'White'],
      images: [
        iPhoneXImageXSMaxGold,
        iPhoneXImageXSBlack,
        iPhoneXImageXSWhite
      ],
      id: '10-xs-max'
    }
  ],
11:[
    {
      variant: 'Standard',
      title: 'iPhone 11',
      price: '8 500.00',
      colors: ['#7fff00', '#dda0dd', '#ffffff', '#000000', '#ff0000', '#eee600'],
            colorNames: ['Green', 'Purple', 'White', 'Black', 'Red','Yellow'],
            images: [
              iPhone11Green,
              iPhone11Purple,
              iPhone11White,
              iPhone11Black,
              iPhone11Red,
              iPhone11Yellow
            ],
      id: '11-standard' // Adding IDs for routing
    },
    {
      variant: 'Pro',
      title: 'iPhone 11',
      price: '8 800.00',
      colors: ['#daa520', '#555555', '#ffffff','#006400'],
            colorNames: ['Gold', 'Gray', 'White', 'Dark Green'],
            images: [
              iPhone11ProMaxGold,
              iPhone11ProMaxGray,
              iPhone11ProMaxWhite,
              iPhone11DarkGreen
            ],
      id: '11-pro'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 11',
      price: '9 600.00',
      colors: ['#daa520', '#555555', '#ffffff','#006400'],
            colorNames: ['Gold', 'Gray', 'White', 'Dark Green'],
            images: [
              iPhone11ProMaxGold,
              iPhone11ProMaxGray,
              iPhone11ProMaxWhite,
              iPhone11DarkGreen
            ],
      id: '11-pro-max'
    }
  ],

  12: [
    {
      variant: 'Standard',
      title: 'iPhone 12',
      price: '9 000.00',
      colors: ['#000000', '#dda0dd', '#0000cd', '#ff0000', '#8fbc8f', '#FFFFFF'],
      colorNames: ['Black', 'Purple', 'Blue', 'Red', 'Green', 'White'],
      images: [
        iPhone12ImageBlack,
        iPhone12ImagePurple,
        iPhone12ImageBlue,
        iPhone12ImageRed,
        iPhone12ImageGreen,
        iPhone12ImageWhite
      ],
      id: '12-standard'
    },
    {
      variant: 'Pro',
      title: 'iPhone 12',
      price: '12 000.00',
      colors: ['#add8e6', '#deb887', '#f8f8ff', '#000000'],
      colorNames: ['Blue', 'Gold', 'White', 'Black'],
      images: [
        iPhone12ImageProBlue,
        iPhone12ImageProGold,
        iPhone12ImageProWhite,
        iPhone12ImageProBlack
      ],
      id: '12-pro'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 12',
      price: '13 500.00',
      colors: ['#add8e6', '#deb887', '#f8f8ff', '#000000'],
      colorNames: ['Blue', 'Gold', 'White', 'Black'],
      images: [
        iPhone12ImageProMaxBlue,
        iPhone12ImageProMaxGold,
        iPhone12ImageProMaxWhite,
        iPhone12ImageProMaxBlack
      ],
      id: '12-pro-max'
    }
  ],
  // Rest of your phone data with IDs added
  13: [
    {/*
      variant: 'Mini',
      title: 'iPhone 13',
      price: '6 500.00',
      colors: ['#000000', '#FFFFFF'],
      colorNames: ['Black', 'White'],
      images: [
        iPhone13ImageBlack,
        iPhone13ImageWhite
      ],
      id: '13-mini'
    */},
    {
      variant: 'Standard',
      title: 'iPhone 13',
      price: '10 700.00',
      colors: ['#000000', '#FFFFFF', '#ffb6c1', '#18453b'],
      colorNames: ['Black', 'White', 'Pink', 'Dark Green'],
      images: [
        iPhone13ImageBlack,
        iPhone13ImageWhite,
        iPhone13ImagePink,
        iPhone13ImageDarkGreen
      ],
      id: '13-standard'
    },
    {
      variant: 'Pro',
      title: 'iPhone 13',
      price: '12 800.00',
      colors: ['#87cefa', '#daa520', '#fffff'],
      colorNames: ['Blue', 'Gold', 'White'],
      images: [
        iPhone13ImageProMaxBlue,
        iPhone13ImageProMaxGold,
        iPhone13ImageProMaxWhite
      ],
      id: '13-pro'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 13',
      price: '15 000.00',
      colors: ['#87cefa', '#daa520', '#fffff'],
      colorNames: ['Blue', 'Gold', 'White'],
      images: [
        iPhone13ImageProMaxBlue,
        iPhone13ImageProMaxGold,
        iPhone13ImageProMaxWhite
      ],
      id: '13-pro-max'
    },
  ],
  14: [
    {
      variant: 'Standard',
      title: 'iPhone 14',
      price: '13 800.00',
      colors: ['#4682b4', '#ffffff'],
      colorNames: ['Blue', 'White'],
      images: [
        iPhone14ImageBlue,
        iPhone14ImageWhite
      ],
      id: '14-standard'
    },
    {
      variant: 'Plus',
      title: 'iPhone 14',
      price: '15 000.00',
      colors: ['#4682b4', '#ffffff'],
      colorNames: ['Blue', 'White'],
      images: [
        iPhone14ImageBlue,
        iPhone14ImageWhite
      ],
      id: '14-plus'
    },
    {
      variant: 'Pro',
      title: 'iPhone 14',
      price: '15 800.00',
      colors: ['#800080', '#daa520', '#808080', '#fffafa'],
      colorNames: ['Purple', 'Gold', 'Gray', 'White'],
      images: [
        iPhone14ImageProMaxPurple,
        iPhone14ImageProMaxGold,
        iPhone14ImageProMaxGray,
        iPhone14ImageProMaxWhite
      ],
      id: '14-pro'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 14',
      price: '16 900.00',
      colors: ['#800080', '#daa520', '#808080', '#fffafa'],
      colorNames: ['Purple', 'Gold', 'Gray', 'White'],
      images: [
        iPhone14ImageProMaxPurple,
        iPhone14ImageProMaxGold,
        iPhone14ImageProMaxGray,
        iPhone14ImageProMaxWhite
      ],
      id: '14-pro-max'
    }
  ],
  15: [
    {
      variant: 'Standard',
      title: 'iPhone 15',
      price: '16 000.00',
      colors: ['#5f9ea0', '#d1e189', '#f0e68c', '#ffffff'],
      colorNames: ['Blue', 'Green', 'Yellow', 'White'],
      images: [
        iPhone15ImageBlue,
        iPhone15ImageGreen,
        iPhone15ImageYellow,
        iPhone15ImageWhite
      ],
      id: '15-standard'
    },
    {
      variant: 'Plus',
      title: 'iPhone 15',
      price: '17 000.00',
      colors: ['#5f9ea0', '#d1e189', '#f0e68c', '#ffffff'],
      colorNames: ['Blue', 'Green', 'Yellow', 'White'],
      images: [
        iPhone15ImageBlue,
        iPhone15ImageGreen,
        iPhone15ImageYellow,
        iPhone15ImageWhite
      ],
      id: '15-plus'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 15',
      price: '25 500.00',
      colors: ['#000000', '#1a2421', '#daa520', '#ffffff'],
      colorNames: ['Black', 'Grey', 'Titanium', 'White'],
      images: [
        iPhone15ImageProMaxBlack,
        iPhone15ImageProMaxGold,
        iPhone15ImageProMaxTitanium,
        iPhone15ImageProMaxWhite,
      ],
      id: '15-pro'
    },
  ],
  16: [
    {
      variant: 'Standard',
      title: 'iPhone 16',
      price: '17 500.00',
      colors: ['#1b1b1b', '#317873', '#ffb6c1', '#7b68ee', '#f8f8ff'],
      colorNames: ['Black', 'Scarcelle', 'Pink', 'Ultramarine', 'White'],
      images: [
        iPhone16ImageBlack,
        iPhone16ImageScarcelle,
        iPhone16ImagePink,
        iPhone16ImageUltramarine,
        iPhone16ImageWhite
      ],
      id: '16-standard'
    },
    {
      variant: 'Plus',
      title: 'iPhone 16',
      price: '19 500.00',
      colors: ['#1b1b1b', '#317873', '#ffb6c1', '#7b68ee', '#f8f8ff'],
      colorNames: ['Black', 'Scarcelle', 'Pink', 'Ultramarine', 'White'],
      images: [
        iPhone16ImageBlack,
        iPhone16ImageScarcelle,
        iPhone16ImagePink,
        iPhone16ImageUltramarine,
        iPhone16ImageWhite
      ],
      id: '16-plus'
    },
    {
      variant: 'Pro',
      title: 'iPhone 16',
      price: '24 500.00',
      colors: ['#1b1b1b', '#eee8aa', '#f8f8ff', '#808080'],
      colorNames: ['Black', 'Titanium', 'White', 'Gray'],
      images: [
        iPhone16ProMaxBlack,
        iPhone16ProMaxTitanium,
        iPhone16ProMaxWhite,
        iPhone16ProMaxGray
      ],
      id: '16-pro'
    },
    {
      variant: 'Pro Max',
      title: 'iPhone 16',
      price: '26 600.00',
      colors: ['#1b1b1b', '#eee8aa', '#f8f8ff', '#808080'],
      colorNames: ['Black', 'Titanium', 'White', 'Gray'],
      images: [
        iPhone16ProMaxBlack,
        iPhone16ProMaxTitanium,
        iPhone16ProMaxWhite,
        iPhone16ProMaxGray
      ],
      id: '16-pro-max'
    },

  ]
};


export const findPhoneById = (id) => {
  // Check each generation of phones
  for (const generation in phoneData) {
    // Look through each variant in the generation
    const foundPhone = phoneData[generation].find(phone => phone.id === id);
    if (foundPhone) {
      return foundPhone;
    }
  }
  return null; // Return null if no phone is found
};

export const getAllPhones = () => {
  return Object.values(phoneData).flat();
}


// Components
const PhoneCard = ({ phone }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  
  return (
    <StyledLink to={`/product/brandnew/${phone.id}?color=${selectedColor}`}>
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
    <SectionTitle>iPhone {generation}</SectionTitle>
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

// ScrollToTop component to handle page scrolling to top
const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render anything
};


// ProductListPage component (main phones listing)
const ProductListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use the ScrollToTop component at the top level
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
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
          <MainTitle>Brand New iPhones</MainTitle>
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
const iPhoneBrandNew = () => {
  return (
  <>
  <ScrollToTop />
  <ProductListPage />
  </>
  );
};

export default iPhoneBrandNew;
