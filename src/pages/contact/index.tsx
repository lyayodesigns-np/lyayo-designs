import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { FadeIn, ScaleIn } from '../../components/animations';

// Hero Section
const HeroSection = styled(Section)`
  position: relative;
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  padding: ${({ theme }) => theme.space[12]} 0;
`;

const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
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
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[6]};
    line-height: 1.8;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark 
    ? 'rgba(59, 130, 246, 0.1)' 
    : 'rgba(59, 130, 246, 0.05)'};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: all ${({ theme }) => theme.transitions.standard};
`;

const ContactText = styled.div``;

const ContactTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const ContactDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark 
    ? 'rgba(59, 130, 246, 0.1)' 
    : 'rgba(59, 130, 246, 0.05)'};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

// Form Styles
const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  resize: vertical;
  min-height: 150px;
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
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
  margin-top: ${({ theme }) => theme.space[10]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
`;

// FAQ Section
const FAQSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : "#f9f9f9"};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.isDark 
      ? 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)' 
      : 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'};
    z-index: 0;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FAQTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 15px auto 0;
  }
`;

const FAQDescription = styled.p`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

interface FAQQuestionProps {
  isOpen: boolean;
}

const FAQQuestion = styled.button<FAQQuestionProps>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme, isOpen }) => 
    isOpen ? (theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)') : 'transparent'};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : theme.colors.text};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
  }
  
  &:focus {
    outline: none;
  }
  
  &::after {
    content: '${({ isOpen }) => (isOpen ? '−' : '+')}';
    font-size: 1.5rem;
    line-height: 1;
  }
`;

interface FAQAnswerProps {
  isOpen: boolean;
}

const FAQAnswer = styled.div<FAQAnswerProps>`
  padding: ${({ isOpen, theme }) => (isOpen ? theme.space[4] : '0 ' + theme.space[4])};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
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
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Contact Us</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              We'd love to hear from you. Reach out to discuss your project or get a quote.
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Contact Section */}
      <Section id="contact">
        <ContactContent>
          <ContactForm>
            <FadeIn>
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
                    <option value="seo">SEO Services</option>
                    <option value="hosting">Web Hosting</option>
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
                
                <ScaleIn>
                  <Button type="submit" variant="primary" size="large" fullWidth disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </ScaleIn>
              </Form>
            </FadeIn>
          </ContactForm>
          
          <ContactInfo>
            <FadeIn delay={0.2}>
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
              </SocialLinks>
            </FadeIn>
          </ContactInfo>
        </ContactContent>
      </Section>
      
      {/* Map Section */}
      <Section>
        <FadeIn>
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240422609331!2d85.31323601506156!3d27.709862982790663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b0b6d9b3%3A0x3c8c49a6c7a81c8f!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1648456891700!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lyayo Designs Location"
            />
          </MapContainer>
        </FadeIn>
      </Section>
      
      {/* FAQ Section */}
      <FAQSection>
        <FadeIn>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQDescription>
            Find answers to common questions about our services, process, and pricing.
          </FAQDescription>
          
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div style={{ marginBottom: '16px' }}>
                  <FAQQuestion 
                    isOpen={openFAQ === index} 
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </div>
              </FadeIn>
            ))}
          </FAQContainer>
        </FadeIn>
      </FAQSection>
    </Layout>
  );
};

export default ContactPage;
