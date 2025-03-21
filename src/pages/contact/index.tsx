import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

// Hero Section
const HeroSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
`;

// Contact Section
const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const ContactForm = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ContactIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[4]};
`;

const ContactText = styled.div``;

const ContactTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const ContactDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[6]};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

// Form Styles
const Form = styled.form`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: border-color ${({ theme }) => theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: border-color ${({ theme }) => theme.transitions.standard};
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: border-color ${({ theme }) => theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
`;

const SuccessIcon = styled.span`
  margin-right: ${({ theme }) => theme.space[2]};
`;

// Map Section
const MapContainer = styled.div`
  height: 400px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: ${({ theme }) => theme.space[8]};
`;

// FAQ Section
const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

interface FAQQuestionProps {
  isOpen: boolean;
}

const FAQQuestion = styled.button<FAQQuestionProps>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : 'white')};
  color: ${({ isOpen, theme }) => (isOpen ? 'white' : theme.colors.text)};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    background-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : theme.colors.lightGray)};
  }
  
  &:focus {
    outline: none;
  }
`;

interface FAQAnswerProps {
  isOpen: boolean;
}

const FAQAnswer = styled.div<FAQAnswerProps>`
  padding: ${({ isOpen, theme }) => (isOpen ? theme.space[4] : '0 ' + theme.space[4])};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.standard};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
`;

interface FAQItemType {
  question: string;
  answer: string;
}

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        // Reset form fields here
        const form = e.target as HTMLFormElement;
        form.reset();
      }, 5000);
    }, 1500);
  };
  
  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  const faqs: FAQItemType[] = [
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex project could take 2-3 months. We\'ll provide you with a detailed timeline during our initial consultation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer both project-based and hourly pricing options. For most clients, we recommend project-based pricing, which provides a clear understanding of costs upfront. We\'ll provide a detailed quote after understanding your specific requirements.'
    },
    {
      question: 'Do you offer ongoing maintenance services?',
      answer: 'Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security checks, performance optimization, and content updates.'
    },
    {
      question: 'Can you help with content creation?',
      answer: 'Absolutely! We offer content creation services including copywriting, photography, and video production. We can help you create compelling content that resonates with your target audience and aligns with your brand voice.'
    },
    {
      question: 'Do you offer hosting services?',
      answer: 'Yes, we offer reliable hosting solutions for all our web projects. Our hosting packages include regular backups, security monitoring, and technical support to ensure your website remains online and performs well.'
    }
  ];
  
  return (
    <Layout
      title="Contact Lyayo Designs - Get in Touch With Our Team"
      description="Contact Lyayo Designs for all your design needs. Reach out to discuss your project, request a quote, or learn more about our services."
      keywords="contact Lyayo Designs, design agency contact, get a quote, design consultation, contact form"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
            We'd love to hear from you. Reach out to discuss your project or get a quote.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Contact Section */}
      <Section id="contact">
        <ContactContent>
          <ContactForm>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              
              {formSubmitted && (
                <SuccessMessage>
                  <SuccessIcon>{React.createElement(FaIcons.FaCheckCircle as React.ComponentType<IconBaseProps>)}</SuccessIcon>
                  Your message has been sent successfully! We'll get back to you soon.
                </SuccessMessage>
              )}
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <FormInput type="text" id="firstName" name="firstName" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <FormInput type="text" id="lastName" name="lastName" required />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput type="email" id="email" name="email" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <FormInput type="tel" id="phone" name="phone" />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput type="text" id="subject" name="subject" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="service">Service You're Interested In</FormLabel>
                <FormSelect id="service" name="service">
                  <option value="">Select a Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="branding">Branding</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea id="message" name="message" required />
              </FormGroup>
              
              <Button type="submit" size="large" fullWidth disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </ContactForm>
          
          <ContactInfo>
            <h2>Get in Touch</h2>
            <p>
              Have a question or want to discuss a project? Reach out to us using the contact information below or fill out the form.
            </p>
            
            <ContactItem>
              <ContactIcon>
                {React.createElement(FaIcons.FaMapMarkerAlt as React.ComponentType<IconBaseProps>)}
              </ContactIcon>
              <ContactText>
                <ContactTitle>Our Location</ContactTitle>
                <ContactDescription>123 Design Street, Creative City</ContactDescription>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                {React.createElement(FaIcons.FaPhone as React.ComponentType<IconBaseProps>)}
              </ContactIcon>
              <ContactText>
                <ContactTitle>Phone Number</ContactTitle>
                <ContactDescription>+1 (555) 123-4567</ContactDescription>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                {React.createElement(FaIcons.FaEnvelope as React.ComponentType<IconBaseProps>)}
              </ContactIcon>
              <ContactText>
                <ContactTitle>Email Address</ContactTitle>
                <ContactDescription>info@lyayodesigns.com</ContactDescription>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                {React.createElement(FaIcons.FaClock as React.ComponentType<IconBaseProps>)}
              </ContactIcon>
              <ContactText>
                <ContactTitle>Business Hours</ContactTitle>
                <ContactDescription>Monday - Friday: 9am - 5pm</ContactDescription>
              </ContactText>
            </ContactItem>
            
            <h3>Follow Us</h3>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {React.createElement(FaIcons.FaFacebook as React.ComponentType<IconBaseProps>)}
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                {React.createElement(FaIcons.FaTwitter as React.ComponentType<IconBaseProps>)}
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {React.createElement(FaIcons.FaInstagram as React.ComponentType<IconBaseProps>)}
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {React.createElement(FaIcons.FaLinkedin as React.ComponentType<IconBaseProps>)}
              </SocialLink>
              <SocialLink href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                {React.createElement(FaIcons.FaPinterest as React.ComponentType<IconBaseProps>)}
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
        
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266039817!2d-73.98784492426863!3d40.75798597138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710932174359!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lyayo Designs Office Location"
          ></iframe>
        </MapContainer>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" backgroundColor="#f9f9f9">
        <FAQContainer>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services and process.</p>
          
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion 
                onClick={() => toggleFAQ(index)}
                isOpen={openFAQ === index}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                {openFAQ === index ? 
                  React.createElement(FaIcons.FaMinus as React.ComponentType<IconBaseProps>) : 
                  React.createElement(FaIcons.FaPlus as React.ComponentType<IconBaseProps>)
                }
              </FAQQuestion>
              <FAQAnswer 
                isOpen={openFAQ === index}
                id={`faq-answer-${index}`}
              >
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Section>
    </Layout>
  );
};

export default ContactPage;
