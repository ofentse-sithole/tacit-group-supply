import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQgKGgVPG38utsgj24sdztSsGEWlIql18",
  authDomain: "tacit-group-supply.firebaseapp.com",
  projectId: "tacit-group-supply",
  storageBucket: "tacit-group-supply.firebasestorage.app",
  messagingSenderId: "316012645594",
  appId: "1:316012645594:web:98d172a056d5acb1cba9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  margin: 8px 0;
`;

const CategoryBadge = styled.span`
  background-color: #e5e7eb;
  color: #4b5563;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 9999px;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-weight: 700;
  color: #111827;
  margin-top: 8px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  font-size: 18px;
  color: #6b7280;
`;

const ErrorContainer = styled.div`
  padding: 24px;
  background-color: #fee2e2;
  border-radius: 8px;
  color: #b91c1c;
  text-align: center;
  margin: 32px 0;
`;

const NoItemsContainer = styled.div`
  padding: 32px;
  text-align: center;
  color: #6b7280;
  font-size: 18px;
`;

// Product card component
const ProductCard = ({ item }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const hasMultipleImages = item.images && item.images.length > 1;
  
  const handleNextImage = (e) => {
    e.preventDefault();
    if (hasMultipleImages) {
      setActiveImageIndex((prev) => (prev + 1) % item.images.length);
    }
  };
  
  // Get the thumbnail image URL
  const getOptimizedImageUrl = (url) => {
    if (!url || !url.includes('cloudinary.com')) return url;
    
    // Transform URL to request a smaller version from Cloudinary
    const parts = url.split('/upload/');
    if (parts.length !== 2) return url;
    
    return `${parts[0]}/upload/c_thumb,w_160,h_160/${parts[1]}`;
  };
  
  const currentImageUrl = item.images && item.images.length > 0
    ? getOptimizedImageUrl(item.images[activeImageIndex])
    : '';
  
  return (
    <StyledLink to={`/product/${item.id}`}>
      <Card>
        <ImageContainer onClick={hasMultipleImages ? handleNextImage : undefined}>
          {currentImageUrl ? (
            <ProductImage 
              src={currentImageUrl} 
              alt={item.name} 
            />
          ) : (
            <div>No Image</div>
          )}
        </ImageContainer>
        <CategoryBadge>{item.category}</CategoryBadge>
        <ProductTitle>{item.name}</ProductTitle>
        {hasMultipleImages && (
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
            {activeImageIndex + 1}/{item.images.length} • Tap to view more
          </div>
        )}
        <Price>R {parseFloat(item.salePrice).toFixed(2)}</Price>
        {item.originalPrice !== item.salePrice && (
          <div style={{ fontSize: '12px', textDecoration: 'line-through', color: '#6b7280' }}>
            R {parseFloat(item.originalPrice).toFixed(2)}
          </div>
        )}
      </Card>
    </StyledLink>
  );
};

// Main component
const SalesProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Fetch items from Firestore
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const saleItemsCollection = collection(db, "saleItems");
        const snapshot = await getDocs(saleItemsCollection);
        const fetchedItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(fetchedItems);
      } catch (err) {
        console.error("Error fetching sale items:", err);
        setError("Failed to load sale items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);
  
  // Group items by category
  const groupedItems = items.reduce((groups, item) => {
    const category = item.category || 'Uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
  
  // Filter items based on search query
  const filteredGroups = Object.entries(groupedItems).reduce((acc, [category, categoryItems]) => {
    if (searchQuery) {
      const filteredItems = categoryItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
    } else {
      acc[category] = categoryItems;
    }
    
    return acc;
  }, {});
  
  if (loading) {
    return (
      <ShowcaseContainer>
        <ContentWrapper>
          <LoadingContainer>Loading products...</LoadingContainer>
        </ContentWrapper>
      </ShowcaseContainer>
    );
  }
  
  if (error) {
    return (
      <ShowcaseContainer>
        <ContentWrapper>
          <ErrorContainer>{error}</ErrorContainer>
        </ContentWrapper>
      </ShowcaseContainer>
    );
  }
  
  if (items.length === 0) {
    return (
      <ShowcaseContainer>
        <ContentWrapper>
          <NoItemsContainer>No products available at this time.</NoItemsContainer>
        </ContentWrapper>
      </ShowcaseContainer>
    );
  }
  
  return (
    <ShowcaseContainer>
      <ContentWrapper>
        <Header>
          <MainTitle>Featured Products</MainTitle>
          <SearchInput
            type="text"
            placeholder="Search products by name or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Header>
        
        {Object.keys(filteredGroups).length === 0 && searchQuery ? (
          <NoItemsContainer>No products match your search.</NoItemsContainer>
        ) : (
          Object.entries(filteredGroups).map(([category, categoryItems]) => (
            <SectionContainer key={category}>
              <SectionTitle>{category}</SectionTitle>
              <ProductGrid>
                {categoryItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </ProductGrid>
            </SectionContainer>
          ))
        )}
      </ContentWrapper>
    </ShowcaseContainer>
  );
};

export default SalesProduct;