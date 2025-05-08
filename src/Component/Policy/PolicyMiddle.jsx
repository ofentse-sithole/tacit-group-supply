import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { AlertTriangle, Check, Clock, RefreshCcw, Smartphone } from 'lucide-react';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`;

// Animations
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a202c, #2d3748);
  color: #f7fafc;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const LogoContainer = styled.div`
  background-color: #1a202c;
  padding: 1rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
  border: 2px solid #5a67d8;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.05em;
  background: linear-gradient(to right, #a3bffa, #c3dafe);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const LogoImage = styled.img`
  max-height: 80px;
  width: auto;
`;

const TitleContainer = styled.div`
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e2e8f0;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

const TitleUnderline = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 0.25rem;
  background: linear-gradient(to right, #5a67d8, #9f7aea);
`;

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  background-color: ${props => props.active ? '#5a67d8' : '#4a5568'};
  color: ${props => props.active ? 'white' : '#e2e8f0'};
  box-shadow: ${props => props.active ? '0 10px 15px -3px rgba(99, 102, 241, 0.3)' : 'none'};
  
  &:hover {
    background-color: ${props => props.active ? '#5a67d8' : '#4a5568'};
    transform: translateY(-2px);
  }
`;

const ContentCard = styled.div`
  background-color: rgba(26, 32, 44, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #4a5568;
  flex-grow: 1;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  padding: 0.5rem;
  background-color: ${props => props.warning ? '#dd6b20' : '#5a67d8'};
  border-radius: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.warning ? '#fed7aa' : '#a3bffa'};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #cbd5e0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const IconWrapper = styled.div`
  margin-top: 0.25rem;
  color: ${props => props.warning ? '#f6ad55' : '#7f9cf5'};
  flex-shrink: 0;
`;

const ExampleCard = styled.div`
  background-color: rgba(45, 55, 72, 0.5);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #4a5568;
  margin-bottom: 1.5rem;
`;

const ExampleTitle = styled.p`
  font-weight: 600;
  color: #fed7aa;
  margin-bottom: 0.5rem;
`;

const ExampleText = styled.p`
  color: #cbd5e0;
`;

// Mobile-friendly responsive table
const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #4a5568;
  
  @media (max-width: 767px) {
    display: block;
  }
`;

const Table = styled.table`
  min-width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const TableHead = styled.thead`
  background-color: #1a202c;
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const TableHeadCell = styled.th`
  padding: 0.75rem 1rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #a0aec0;
`;

const TableBody = styled.tbody`
  background-color: #2d3748;
  
  @media (max-width: 767px) {
    display: block;
  }
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #4a5568;
  }
  
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 1rem 0.5rem;
    
    &:not(:last-child) {
      border-bottom: 1px solid #4a5568;
    }
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  font-weight: ${props => props.bold ? '500' : 'normal'};
  color: ${props => props.highlight ? '#a3bffa' : 'inherit'};
  text-align: ${props => props.center ? 'center' : 'left'};
  
  @media (max-width: 767px) {
    padding: 0.5rem;
    display: ${props => props.mobileHidden ? 'none' : 'block'};
    
    &:first-child {
      grid-column: 1 / -1;
      background-color: #1a202c;
      font-weight: 600;
      padding: 0.75rem;
      border-radius: 0.25rem;
      margin-bottom: 0.5rem;
    }
    
    &:not(:first-child) {
      text-align: center;
    }
    
    &:before {
      content: '${props => props.mobileLabel}';
      display: block;
      font-weight: 500;
      font-size: 0.75rem;
      color: #a0aec0;
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
`;

// Alternative Card-Based Payment Schedule for Mobile
const PaymentScheduleCards = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
`;

const PaymentCard = styled.div`
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #4a5568;
`;

const PaymentCardTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #a0aec0;
`;

const PaymentCardAmount = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #a3bffa;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #a3bffa;
`;

const FooterCard = styled.div`
  background-color: rgba(26, 32, 44, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #4a5568;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterGridItem = styled.div`
  background-color: rgba(45, 55, 72, 0.4);
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #cbd5e0;
  font-weight: ${props => props.bold ? '600' : 'normal'};
  color: ${props => props.highlight ? '#a3bffa' : '#cbd5e0'};
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Copyright = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #a0aec0;
`;

export default function TacitGroupPolicy() {
  const [activeTab, setActiveTab] = useState('layby');

  return (
    <>
      <GlobalStyle />
      <br/>
      <br/>
      <br/>
      <Container>
        {/* Logo and Header */}
        <Header>
          <TitleContainer>
            <Title>LAY-BY & TRADE-IN POLICY</Title>
            <TitleUnderline />
          </TitleContainer>
        </Header>

        {/* Tab Navigation */}
        <TabContainer>
          <TabButton 
            active={activeTab === 'layby'} 
            onClick={() => setActiveTab('layby')}
          >
            <Clock size={18} />
            <span>Lay-By Policy</span>
          </TabButton>
          <TabButton 
            active={activeTab === 'tradein'} 
            onClick={() => setActiveTab('tradein')}
          >
            <RefreshCcw size={18} />
            <span>Trade-In Policy</span>
          </TabButton>
        </TabContainer>

        {/* Content Area */}
        <ContentCard>
          {activeTab === 'layby' && (
            <>
              <Section>
                <SectionHeader>
                  <IconContainer>
                    <Clock size={24} />
                  </IconContainer>
                  <SectionTitle>STANDARD LAY-BY POLICY</SectionTitle>
                </SectionHeader>
                <Paragraph>
                  There are a few important things to keep in mind when purchasing a product
                  from Tacit Group using the Lay-By option:
                </Paragraph>
                <List>
                  <ListItem>
                    <IconWrapper>
                      <Check size={18} />
                    </IconWrapper>
                    <span>Our lay-by option is over a period of 5 months.</span>
                  </ListItem>
                  <ListItem>
                    <IconWrapper>
                      <Check size={18} />
                    </IconWrapper>
                    <span>Payments are made via EFT or in cash.</span>
                  </ListItem>
                  <ListItem>
                    <IconWrapper>
                      <Check size={18} />
                    </IconWrapper>
                    <span>Applies to both brand new and pre-owned devices.</span>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionHeader>
                  <IconContainer warning>
                    <AlertTriangle size={24} />
                  </IconContainer>
                  <SectionTitle warning>CANCELLING A LAY-BY</SectionTitle>
                </SectionHeader>
                <Paragraph>
                  If you cancel a lay-by, a 30% cancellation fee applies.
                </Paragraph>
                <ExampleCard>
                  <ExampleTitle>Example:</ExampleTitle>
                  <ExampleText>
                    If you put a lay-by on a device worth R5,000, and cancel midway, you will be
                    refunded 70% of what you've paid so far.
                  </ExampleText>
                </ExampleCard>
              </Section>

              <Section>
                {/* Desktop/Tablet Table (hidden on mobile) */}
                <TableWrapper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>DEVICE VALUE</TableHeadCell>
                        <TableHeadCell center>MONTH 1</TableHeadCell>
                        <TableHeadCell center>MONTH 2</TableHeadCell>
                        <TableHeadCell center>MONTH 3</TableHeadCell>
                        <TableHeadCell center>MONTH 4</TableHeadCell>
                        <TableHeadCell center>MONTH 5</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell bold>Any Device (100%)</TableCell>
                        <TableCell 
                          center 
                          highlight 
                          mobileLabel="Month 1"
                        >20%</TableCell>
                        <TableCell 
                          center 
                          highlight 
                          mobileLabel="Month 2"
                        >20%</TableCell>
                        <TableCell 
                          center 
                          highlight 
                          mobileLabel="Month 3"
                        >20%</TableCell>
                        <TableCell 
                          center 
                          highlight 
                          mobileLabel="Month 4"
                        >20%</TableCell>
                        <TableCell 
                          center 
                          highlight 
                          mobileLabel="Month 5"
                        >20%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
                
                {/* Mobile Card Layout (only visible on mobile) */}
                <PaymentScheduleCards>
                  <PaymentCard>
                    <PaymentCardTitle>DEVICE VALUE</PaymentCardTitle>
                    <PaymentCardAmount>Any Device (100%)</PaymentCardAmount>
                  </PaymentCard>
                  
                  <PaymentCard>
                    <PaymentCardTitle>MONTH 1</PaymentCardTitle>
                    <PaymentCardAmount>20%</PaymentCardAmount>
                  </PaymentCard>
                  
                  <PaymentCard>
                    <PaymentCardTitle>MONTH 2</PaymentCardTitle>
                    <PaymentCardAmount>20%</PaymentCardAmount>
                  </PaymentCard>
                  
                  <PaymentCard>
                    <PaymentCardTitle>MONTH 3</PaymentCardTitle>
                    <PaymentCardAmount>20%</PaymentCardAmount>
                  </PaymentCard>
                  
                  <PaymentCard>
                    <PaymentCardTitle>MONTH 4</PaymentCardTitle>
                    <PaymentCardAmount>20%</PaymentCardAmount>
                  </PaymentCard>
                  
                  <PaymentCard>
                    <PaymentCardTitle>MONTH 5</PaymentCardTitle>
                    <PaymentCardAmount>20%</PaymentCardAmount>
                  </PaymentCard>
                </PaymentScheduleCards>
              </Section>
            </>
          )}

          {activeTab === 'tradein' && (
            <Section>
              <SectionHeader>
                <IconContainer>
                  <RefreshCcw size={24} />
                </IconContainer>
                <SectionTitle>TRADE-INS POLICY</SectionTitle>
              </SectionHeader>
              <Paragraph>
                Tacit Group accepts trade-ins from the iPhone 7 upwards.
              </Paragraph>
              <Paragraph>
                To qualify, you must provide:
              </Paragraph>
              <List>
                <ListItem>
                  <IconWrapper>
                    <Check size={18} />
                  </IconWrapper>
                  <span>Proof of Ownership (Original Receipt or Valid Documentation)</span>
                </ListItem>
                <ListItem>
                  <IconWrapper>
                    <Check size={18} />
                  </IconWrapper>
                  <span>Device Inspection (We will evaluate your device's condition)</span>
                </ListItem>
              </List>

              <ExampleCard>
                <ExampleTitle>Please Note:</ExampleTitle>
                <List>
                  <ListItem>
                    <IconWrapper warning>
                      <AlertTriangle size={16} />
                    </IconWrapper>
                    <span>Trade-ins are accepted only on original price values, not on discounted, sale, or special price devices.</span>
                  </ListItem>
                  <ListItem>
                    <IconWrapper warning>
                      <AlertTriangle size={16} />
                    </IconWrapper>
                    <span>Trade-in values are determined after evaluation.</span>
                  </ListItem>
                </List>
              </ExampleCard>
            </Section>
          )}
        </ContentCard>

        {/* Footer Section */}
        <Footer>
          <FooterTitle>TALK TO US</FooterTitle>
          <FooterCard>
            <FooterGrid>
              <FooterGridItem>
                <FooterText>All phones come sealed with a fast charger, screen protector & pouch</FooterText>
              </FooterGridItem>
              <FooterGridItem>
                <FooterText>Upgrade storage for an extra R500</FooterText>
              </FooterGridItem>
              <FooterGridItem>
                <FooterText>Delivery available. Cash on delivery accepted.</FooterText>
              </FooterGridItem>
              <FooterGridItem>
                <FooterText bold highlight>Email us: Tacitgroupza@gmail.com</FooterText>
              </FooterGridItem>
            </FooterGrid>
            <ContactWrapper>
              <Smartphone size={18} color="#7f9cf5" />
              <FooterText bold>Contact: 062-749-6008 / 065-661-1341</FooterText>
            </ContactWrapper>
          </FooterCard>
        </Footer>
      </Container>
    </>
  );
}