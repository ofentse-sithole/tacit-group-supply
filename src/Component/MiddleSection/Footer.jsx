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
  
  &::before {
    content: '';
    position: absolute;
    top: -70px;
    left: 0;
    width: 100%;
    height: 70px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231e54e7' fill-opacity='1' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
  }
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