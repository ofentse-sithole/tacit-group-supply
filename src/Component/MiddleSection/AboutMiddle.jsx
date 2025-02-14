import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  font-family: serif;
  font-size: 1.5rem;
  color: #00896F;
  border: 2px solid #00896F;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: "DB";
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #00896F;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
`;

const TextContent = styled.div`
  padding-right: 2rem;
`;

const Title = styled.h1`
  color: #00896F;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 2rem;

  span {
    display: block;
    border-bottom: 2px solid #00896F;
    padding-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  color: #00896F;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: -20%;
  top: 0;
  width: 120%;
  height: 100%;
  background-image: url('/api/placeholder/600/400');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const TeamImage = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  background-image: url('/api/placeholder/400/300');
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  z-index: 2;
  margin-left: 2rem;
  box-shadow: -20px 20px 0 rgba(200, 245, 235, 0.5);
`;

const WhoWeAre = () => {
  return (
    <Container>
      <ContentWrapper>
        <TextContent>
          <Title>
            <span>Who</span>
            <span>we</span>
            <span>are.</span>
          </Title>
          <Description>
            Meet the home remedy specialists
          </Description>
          <Description>
            Our natural medicine experts harness diverse professional experience to recommend personalized solutions to our clients.
          </Description>
        </TextContent>

        <ImageSection>
          <BackgroundImage />
          <TeamImage />
        </ImageSection>
      </ContentWrapper>
    </Container>
  );
};

export default WhoWeAre;