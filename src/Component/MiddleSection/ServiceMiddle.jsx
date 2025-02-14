// ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Camera, Code, Smartphone, Play, Search, Palette } from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background-color: #1a1f2e;
  padding: 2rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span.highlight {
    color: #6366f1;
  }

  span.normal {
    color: white;
  }
`;

const Subtitle = styled.p`
  color: #94a3b8;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #2d3748;
  background-color: rgba(30, 41, 59, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: rgba(30, 41, 59, 0.8);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
`;

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "WEB DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    },
    {
      icon: <Camera size={24} />,
      title: "PHOTOGRAPHY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    },
    {
      icon: <Palette size={24} />,
      title: "WEB DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    },
    {
      icon: <Smartphone size={24} />,
      title: "APP DEVELOPING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    },
    {
      icon: <Play size={24} />,
      title: "VIDEO EDITING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    },
    {
      icon: <Search size={24} />,
      title: "SEO EXPERT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor turpism."
    }
  ];

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>
            <span className="normal">MY </span>
            <span className="highlight">SERVICES</span>
          </Title>
          <Subtitle>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum standard dummy text.
          </Subtitle>
        </Header>

        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <Description>{service.description}</Description>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default ServicesSection;