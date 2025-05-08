import React from 'react';
import styled from 'styled-components';
import { Wrench, SmartphoneCharging, Smartphone, Unplug, Search, UserRoundCog } from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 2rem;
  position: relative; /* Ensure section is placed in proper stacking context */
  z-index: 1; /* Avoid overlap with navbar */
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
    color:rgb(63, 66, 241);
  }

  span.normal {
    color: black;
  }
`;

const Subtitle = styled.p`
  color: rgb(17, 23, 31);
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack the cards vertically on small screens */
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #2d3748;
  background-color: rgba(1, 17, 117, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: rgba(0, 87, 187, 0.8);
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
  background-color: rgba(15, 1, 61, 0.86);
  color: rgb(9, 110, 117);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color: rgb(10, 21, 36);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ServicesSection = () => {
  const services = [
    {
      icon: <SmartphoneCharging size={24} />,
      title: 'IPhone Premium Reselling',
      description: 'High-quality iPhones at competitive prices.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Gadgets',
      description: 'A range of premium gadgets and accessories.',
    },
    {
      icon: <Wrench size={24} />,
      title: 'Repair Services',
      description: 'Expert repair services for all gadgets, specializing in iPhones.',
    },
    {
      icon: <UserRoundCog size={24} />,
      title: 'Professional Procurement Services',
      description: 'Assisting businesses and individuals in sourcing tech products.',
    },
    {
      icon: <Unplug size={24} />,
      title: 'Consignor Services',
      description: 'Streamlined solutions for consigning your products with us.',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>
            <span className="normal">Our </span>
            <span className="highlight">SERVICES</span>
          </Title>
          <Subtitle>
          Tacit Group Supply Co. offers a comprehensive range of services to meet your needs.
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
