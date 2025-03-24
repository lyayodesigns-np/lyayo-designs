import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { FadeIn, ScaleIn } from '../../components/animations';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContactContent,
  ContactInfo,
  ContactForm,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactTitle,
  ContactDescription,
  SocialLinks,
  SocialLink,
  Form,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  FormRow,
  SuccessMessage,
  SuccessIcon,
  MapContainer,
  FAQSection,
  FAQContainer,
  FAQTitle,
  FAQDescription,
  FAQQuestion,
  FAQAnswer
} from './contact.styles';

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
              <h2 >Get in Touch</h2>
              <p>
                Have a question or want to discuss a project? Reach out to us using the contact information below or fill out the form.
              </p>
              
              <ContactItem>
                <ContactIcon>
                  {React.createElement(FaIcons.FaMapMarkerAlt as React.ComponentType<IconBaseProps>)}
                </ContactIcon>
                <ContactText>
                  <ContactTitle>Our Location</ContactTitle>
                  <ContactDescription>Kirtipur, Kathmandu, Nepal</ContactDescription>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  {React.createElement(FaIcons.FaPhone as React.ComponentType<IconBaseProps>)}
                </ContactIcon>
                <ContactText>
                  <ContactTitle>Phone Number</ContactTitle>
                  <ContactDescription>+977 9818412760</ContactDescription>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  {React.createElement(FaIcons.FaEnvelope as React.ComponentType<IconBaseProps>)}
                </ContactIcon>
                <ContactText>
                  <ContactTitle>Email Address</ContactTitle>
                  <ContactDescription>lyayodesigns@gmail.com</ContactDescription>
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
                <SocialLink href="https://www.facebook.com/lyayodesigns" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  {React.createElement(FaIcons.FaFacebook as React.ComponentType<IconBaseProps>)}
                </SocialLink>
                <SocialLink href="https://x.com/lyayodesigns" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  {React.createElement(FaIcons.FaTwitter as React.ComponentType<IconBaseProps>)}
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/company/lyayo-designs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
