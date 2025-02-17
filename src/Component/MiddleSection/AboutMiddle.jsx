import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack the content vertically on small screens */
  }
`;

const TextContent = styled.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Title = styled.h1`
  color: rgb(0, 137, 7);
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 2rem;

  span {
    display: block;
    border-bottom: 2px solid #00896F;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust title font size on smaller screens */
  }
`;

const Description = styled.p`
  color: rgb(0, 0, 0);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust description font size for better readability on mobile */
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack images vertically on smaller screens */
    align-items: center;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: -20%;
  top: 0;
  width: 120%;
  height: 100%;
  background-image: url('/public/image/gadgets-1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%; /* Adjust background image width for small screens */
    right: 0;
    top: -30%;
  }
`;

const TeamImage = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  background-image: url('/public/image/gadgets.jpg');
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  z-index: 2;
  margin-left: 2rem;
  box-shadow: -20px 20px 0 rgba(200, 245, 235, 0.5);

  @media (max-width: 768px) {
    width: 100%;
    height: 250px; /* Adjust image height for smaller screens */
    margin-left: 0;
    box-shadow: none; /* Remove shadow for mobile */
  }
`;

const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <TextContent>
          <Title>
            <span>Our Mission</span>
          </Title>
          <Description>
            At Tacit Group Supply Co., our mission is to provide high-quality
            gadgets and smartphones that meet your tech needs with reliability
            and excellence. As trusted consignors, we meticulously curate our
            inventory to offer only the best in performance and design, ensuring
            every product delivers exceptional value and satisfaction. Whether
            you’re seeking the latest smartphone or cutting-edge gadgets, we’re
            committed to offering unparalleled service, dependable products,
            and a seamless shopping experience that keeps you connected and
            ahead of the curve.
          </Description>
          <Title>
            <span>Our Vision</span>
          </Title>
          <Description>
            At Tacit Group Supply Co., our core values are rooted in excellence,
            trust, and a commitment to customer satisfaction. We are dedicated
            to offering only the finest gadgets and smartphones, thoughtfully
            selected for their superior performance, lasting durability, and
            sleek design. Guided by integrity, we ensure transparent communication
            and honest sourcing in every step of our process. Our focus is on
            delivering outstanding service and cultivating strong, long-term
            relationships with our customers, always prioritizing their needs.
            Above all, we aim to inspire innovation and provide dependable products
            that elevate the tech experience for everyone we serve.
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

export default About;
