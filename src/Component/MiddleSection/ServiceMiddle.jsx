// ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Wrench, SmartphoneCharging, Smartphone, Unplug, Search, UserRoundCog } from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background-color:white;
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
    color:rgb(38, 173, 4);
  }

  span.normal {
    color: black;
  }
`;

const Subtitle = styled.p`
  color:rgb(17, 23, 31);
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
  background-color: rgba(1, 117, 49, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: rgba(0, 187, 25, 0.8);
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
  background-color: rgba(2, 36, 4, 0.86);
  color:rgb(34, 117, 9);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color:rgb(10, 21, 36);
  font-size: 0.875rem;
`;

const ServicesSection = () => {
  const services = [
    {
      icon: <SmartphoneCharging size={24} />,
      title: "IPhone Premium Reselling",
      description: "High-quality iPhones at competitive prices."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Gadgets",
      description: "A range of premium gadgets and accessories."
    },
    {
      icon: <Wrench size={24} />,
      title: "Repair Services",
      description: "Expert repair services for all gadgets, specializing in iPhones."
    },
    {
      icon: <UserRoundCog size={24} />,
      title: "Professional Procurement Services",
      description: "Assisting businesses and individuals in sourcing tech products."
    },
    
    {
      icon: <Unplug size={24} />,
      title: "Consignor Services",
      description: "Streamlined solutions for consigning your products with us."
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