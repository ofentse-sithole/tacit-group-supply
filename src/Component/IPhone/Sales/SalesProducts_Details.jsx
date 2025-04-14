import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#3b82f6' : 'transparent'};
  
  &:hover {
    border-color: #93c5fd;
  }
`;

const ThumbnailImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  margin-bottom: 8px;
`;

const OriginalPrice = styled.span`
  font-size: 18px;
  text-decoration: line-through;
  color: #6b7280;
  margin-left: 8px;
`;

const CategoryBadge = styled.span`
  background-color: #e5e7eb;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 24px;
`;

const DescriptionContainer = styled.div`
  margin: 24px 0;
`;

const DescriptionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
`;

const DescriptionText = styled.p`
  color: #4b5563;
  line-height: 1.6;
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
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

const SalesProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const db = getFirestore();
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "saleItems", productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data()
          });
        } else {
          setError("Product not found");
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigate, db]);

  const handlePurchase = () => {
    alert(`Thank you for purchasing ${product.name}!`);
    // In a real app, this would add to cart or redirect to checkout
    navigate('/');
  };

  if (loading) {
    return (
      <DetailPageContainer>
        <LoadingContainer>Loading product details...</LoadingContainer>
      </DetailPageContainer>
    );
  }

  if (error) {
    return (
      <DetailPageContainer>
        <ErrorContainer>{error}</ErrorContainer>
      </DetailPageContainer>
    );
  }

  if (!product) {
    return (
      <DetailPageContainer>
        <ErrorContainer>Product not found</ErrorContainer>
      </DetailPageContainer>
    );
  }

  // Extract specifications from product data
  const specifications = {
    'SKU': product.sku || 'N/A',
    'Condition': product.condition || 'New',
    'Brand': product.brand || 'N/A',
    'Model': product.model || 'N/A',
    'Warranty': product.warranty || 'Standard warranty',
    'Stock': product.stock > 0 ? 'In Stock' : 'Out of Stock',
    'Shipping': product.freeShipping ? 'Free Shipping' : 'Standard Shipping Rates Apply'
  };

  return (
    <DetailPageContainer>
      <DetailHeader>
        <BackButton onClick={() => navigate('/')}>
          ← Back to all products
        </BackButton>
        <MainTitle>Featured Products</MainTitle>
      </DetailHeader>
      
      <DetailContent>
        <DetailLeft>
          <DetailImageContainer>
            <DetailProductImage 
              src={product.images && product.images.length > 0 ? product.images[selectedImageIndex] : ''} 
              alt={product.name} 
            />
          </DetailImageContainer>
          
          {product.images && product.images.length > 1 && (
            <ThumbnailContainer>
              {product.images.map((image, index) => (
                <Thumbnail 
                  key={index}
                  selected={selectedImageIndex === index}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <ThumbnailImage src={image} alt={`${product.name} thumbnail ${index + 1}`} />
                </Thumbnail>
              ))}
            </ThumbnailContainer>
          )}
        </DetailLeft>
        
        <DetailRight>
          <DetailTitle>{product.name}</DetailTitle>
          <CategoryBadge>{product.category}</CategoryBadge>
          
          <DetailPrice>
            R {parseFloat(product.salePrice).toFixed(2)}
            {product.originalPrice !== product.salePrice && (
              <OriginalPrice>R {parseFloat(product.originalPrice).toFixed(2)}</OriginalPrice>
            )}
          </DetailPrice>
          
          {product.description && (
            <DescriptionContainer>
              <DescriptionTitle>Description</DescriptionTitle>
              <DescriptionText>{product.description}</DescriptionText>
            </DescriptionContainer>
          )}
          
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
              <TermsListItem>30-day return policy for defective items</TermsListItem>
              <TermsListItem>All products have been thoroughly inspected</TermsListItem>
              <TermsListItem>Standard warranty covers manufacturing defects</TermsListItem>
              <TermsListItem>Free shipping on orders over R1000</TermsListItem>
              <TermsListItem>Payment processed securely through our payment gateway</TermsListItem>
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

export default SalesProductDetails;