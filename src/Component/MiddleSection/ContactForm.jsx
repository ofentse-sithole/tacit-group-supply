import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailJS from 'emailjs-com';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const FormCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #1e2126;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack sections on small screens */
  }
`;

const FormSection = styled.div`
  padding: 3rem;
`;

const ContactSection = styled(FormSection)`
  background: #17191c;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  color: white;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: rgb(90, 230, 34);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  color: white;
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: rgb(34, 230, 34);
  }
`;

const SubmitButton = styled.button`
  background: rgb(15, 95, 8);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgb(34, 206, 12);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  color: #999;
`;

const InfoTitle = styled.h3`
  color: white;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;
`;

const ContactForm = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Scroll to top on component mount - FIXED IMPLEMENTATION
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
    
    const timeoutId = setTimeout(scrollToTop, 100);
    
    // Clean up the timeout when component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  // Handle input change for controlled form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email with emailJS
    emailJS.sendForm('service_ahljxiv', 'template_imifcmg', form.current, 't1cogETF_-3uCWd8O')
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text); // Log success
        },
        (error) => {
          alert('An error occurred, please try again.');
          console.error('EmailJS Error:', error); // Log error
        }
      );

    // Reset form data after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    e.target.reset();
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <FormCard>
        <ContactSection>
          <SectionTitle>Contact information</SectionTitle>
          <ContactInfo>
            <InfoText>We're open for any suggestion or just to have a chat</InfoText>

            <InfoText>
              <MapPin size={20} />
              <span>Address: 1905 Xaba Street, Tokoza, Gauteng, 1426</span>
            </InfoText>

            <InfoText>
              <Phone size={20} />
              <span>Phone: 062 749 6008</span>
            </InfoText>

            <InfoText>
              <Mail size={20} />
              <span>Email: tacitgroupza@gmail.com</span>
            </InfoText>
          </ContactInfo>
        </ContactSection>

        <FormSection>
          <SectionTitle>Write us</SectionTitle>
          <form ref={form} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormSection>
      </FormCard>
    </Container>
  );
};

export default ContactForm;