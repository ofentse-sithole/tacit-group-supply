import { useEffect } from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/image/HomeHeroSection.jpg";

const HomeHeroSection = () => {
  useEffect(() => {
    // More robust scroll handling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }, 100);
  }, []);

  return (
    <HeroContainer>
      <Content>
        <Title>
          <Highlight> Your One-Stop Shop for Quality Products </Highlight> <Moving> </Moving>
        </Title>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    height: 80vh; /* Reduce height on smaller screens */
  }
`;

const Content = styled.div`
  text-align: center; /* Center the text for better alignment on mobile */
  color: black;

  @media (max-width: 768px) {
    padding: 0 1rem; /* Add padding on small screens */
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  font-weight: bold; /* Make the title bold */
  
  @media (max-width: 768px) {
    font-size: 2rem; /* Reduce font size on mobile */
    text-align: center; /* Center align text on small screens */
  }
`;

const Highlight = styled.span`
  color: rgb(27, 109, 11);
`;

const Moving = styled.span`
  color: white;
`;

export default HomeHeroSection;
