import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: relative;
  background:rgb(255, 255, 255);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const WaveSection = styled.div`
  position: relative;
  background:rgb(1, 2, 0);
  min-height: 200px;
  
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <WaveSection>
        <ContentWrapper>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialLinks>

          <Navigation>
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Navigation>

          <Copyright>
            ©2025 Tacit Supply Group Co. | All Rights Reserved
          </Copyright>
        </ContentWrapper>
      </WaveSection>
    </FooterContainer>
  );
};

export default Footer;