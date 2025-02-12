import {useEffect} from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/image/HomeHeroSection.jpg"; 

const HomeHeroSection = () => {

  useEffect(() => {
          // More robust scroll handling
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
              });
              
              // Fallback for older browsers
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }, 100);
      }, []);

    return (
        <HeroContainer>
            <Content>
                <Title>
                    <Highlight> </Highlight> <Moving> </Moving>
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
`;

const Content = styled.div`
  text-align: left;
  color: black;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color:rgb(24, 108, 244);
`;

const Moving = styled.span`
  color: white;
`;



export default HomeHeroSection;