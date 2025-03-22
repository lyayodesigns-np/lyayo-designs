import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { FadeIn, ScaleIn, ScrollReveal, AnimatedButton, AnimatedCard } from '../../components/animations';

// Hero Section
const HeroSection = styled(Section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.isDark 
    ? `linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)` 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  padding-top: 80px;
  padding-bottom: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zm63 31c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zM34 90c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zm56-76c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: ${({ theme }) => theme.isDark ? 0.3 : 0.5};
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroText = styled.div`
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
  
  span {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[6]};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[8]};
  margin-top: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroStatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

const HeroStatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: rgba(255, 255, 255, 0.8);
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Services Section
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  h2 {
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.shorter};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  button {
    align-self: flex-start;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ServiceTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const LearnMoreButton = styled(Button)`
  margin-top: auto;
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
`;

// Stats Section
const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
`;

// CTA Section
const CTASection = styled(Section)`
  padding-top: 80px;
  padding-bottom: 80px;
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
`;

const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[4]};
`;

const CTATitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CTADescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

// Affordable Services Section
const AffordableServicesSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const AffordableServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AffordableServicesContent = styled(SectionHeader)`
  text-align: left;
  
  h2 {
    text-align: left;
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.shorter};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  p {
    text-align: left;
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  button {
    margin: ${({ theme }) => theme.space[4]} 0 0;
    display: inline-block;
  }
`;

const AffordableServicesImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

// Other Features Section
const FeaturesSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Why Choose Us Section
const WhyChooseUsSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

const WhyChooseUsContainer = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const ChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ChooseUsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ChooseUsIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ChooseUsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ChooseUsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Testimonials Section
const TestimonialsSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space[4]};
  flex-grow: 1;
`;

const TestimonialClient = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ClientCompany = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Lyayo Designs | Web Design Company in Nepal"
      description="Lyayo Designs is a leading web design company in Nepal with 5+ years of experience creating stunning websites at affordable rates."
    >
      {/* Hero Section */}
      <HeroSection paddingTop="0" paddingBottom="0">
        <HeroContent>
          <FadeIn direction="up" delay={0.2}>
            <HeroText>
              <HeroTitle>Turning <span>Ideas</span> into Digital Experiences</HeroTitle>
              <HeroSubtitle>
                Lyayo Designs is a Web Design Company in Nepal with more than 5 years of experience in creating stunning websites that look great on any device. Our web design services offer quality solutions at affordable rates.
              </HeroSubtitle>
              <ButtonGroup>
                <AnimatedButton variant="primary" size="large">Our Services</AnimatedButton>
                <AnimatedButton variant="outline" size="large">Get a Quote</AnimatedButton>
              </ButtonGroup>
              
              <HeroStats>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>5+</HeroStatNumber>
                    <HeroStatLabel>Years Experience</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>100+</HeroStatNumber>
                    <HeroStatLabel>Projects Completed</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>50+</HeroStatNumber>
                    <HeroStatLabel>Happy Clients</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
              </HeroStats>
            </HeroText>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Affordable Web Design Services Section */}
      <AffordableServicesSection id="affordable-services">
        <AffordableServicesContainer>
          <FadeIn direction="right" delay={0.2}>
            <AffordableServicesContent>
              <h2>Affordable Web Design Services In Nepal</h2>
              <p>
                We are one of the best web design companies in Nepal. We offer affordable and professional website designing services to small and medium businesses.
              </p>
              <p>
                Our website designers will use a brainstorming session with you to create a design that is inspired by your business. We provide our clients with customized services that cater to their needs, while still maintaining the look and feel they want. We have a team of professionals who have experience in delivering high-quality solutions for businesses of different sizes in diverse industries.
              </p>
              <AnimatedButton variant="primary" size="medium">
                Get a Free Quote
              </AnimatedButton>
            </AffordableServicesContent>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <AffordableServicesImageContainer>
              <LazyImage
                src="/images/image1.jpg"
                alt="Affordable Web Design Services"
                height="400px"
              />
            </AffordableServicesImageContainer>
          </ScaleIn>
        </AffordableServicesContainer>
      </AffordableServicesSection>

      {/* Services Section */}
      <Section id="services">
        <ScrollReveal animation="slideUp" staggerChildren={true} staggerDelay={0.1} triggerOnce={true}>
          <SectionHeader>
            <h2>Web Design / Web Development Service</h2>
            <p>We offer WordPress Website Designs, Custom WordPress Themes, Web Hosting, Shopify Themes, Responsive Designs, Woocommerce Solutions, Mobile App Development Services, SEO Optimization and much more!</p>
          </SectionHeader>
          <ServicesGrid>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaLaptopCode as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Website Design</ServiceTitle>
                <ServiceDescription>
                  Our web developers from Nepal take your ideas from inception to completion in order to deliver beautiful, functional web designs that are well-structured, responsive, and easy to maintain.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaSearch as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>SEO Optimization</ServiceTitle>
                <ServiceDescription>
                  We also offer search engine optimization services in Nepal. Our expert SEO team will help you increase your online presence by using optimized keywords for your site to increase the number of visitors to your website and the number of conversions they make.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaMobileAlt as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Mobile Application</ServiceTitle>
                <ServiceDescription>
                  We offer custom mobile app development services in Nepal for both iOS and Android devices through our in-house development team of developers and designers to provide the best design possible.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaWordpress as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>WordPress Solutions</ServiceTitle>
                <ServiceDescription>
                  We specialize in WordPress website designs, custom themes, and WooCommerce solutions to create powerful, flexible websites that you can easily manage and update.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaShoppingCart as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>E-Commerce</ServiceTitle>
                <ServiceDescription>
                  From Shopify themes to WooCommerce solutions, we build secure, user-friendly online stores that help Nepali businesses sell products and services online effectively.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard>
                <ServiceIcon>
                  {React.createElement(FaIcons.FaServer as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Web Hosting</ServiceTitle>
                <ServiceDescription>
                  We provide reliable web hosting services to ensure your website stays fast, secure, and accessible to your customers at all times.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
          </ServicesGrid>
        </ScrollReveal>
      </Section>

      {/* Other Features Section */}
      <FeaturesSection id="features">
        <ScrollReveal animation="slideUp" staggerChildren={true} staggerDelay={0.1} triggerOnce={true}>
          <SectionHeader>
            <h2>Other Features</h2>
          </SectionHeader>
          <FeaturesGrid>
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaServer as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Web Hosting</FeatureTitle>
                <FeatureDescription>
                  We have partnered with hosting providers to provide the best hosting services in Nepal.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaMobileAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Mobile Responsive Design</FeatureTitle>
                <FeatureDescription>
                  Our mobile-optimized website design ensures that your site renders well on any device.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaChartLine as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Digital Marketing</FeatureTitle>
                <FeatureDescription>
                  From social media management to search engine optimization, we've got you covered.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaPencilAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Copywriting</FeatureTitle>
                <FeatureDescription>
                  We love to work with brands who are looking for creative words that make them stand out from the competition.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaPaintBrush as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Branding</FeatureTitle>
                <FeatureDescription>
                  We design logos, websites, graphics, and other marketing materials to help people shine through their brands.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaHeadset as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Support</FeatureTitle>
                <FeatureDescription>
                  We train our clients to navigate throughout the website and we are available 24/7 for support.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FeaturesGrid>
        </ScrollReveal>
      </FeaturesSection>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection id="why-choose-us">
        <WhyChooseUsContainer>
          <ScrollReveal animation="slideUp" triggerOnce={true}>
            <SectionHeader>
              <h2>Why Choose Us?</h2>
              <p>We are a team of experienced web designers and developers who are passionate about creating beautiful and functional websites that help businesses grow.</p>
            </SectionHeader>
            <ChooseUsGrid>
              <AnimatedCard>
                <ChooseUsCard>
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaSearchDollar as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>SEO Optimized Copywriting</ChooseUsTitle>
                  <ChooseUsDescription>
                    We help clients increase their online presence by using optimized keywords for their site to increase the number of visitors to your website and the number of conversions they make.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
              
              <AnimatedCard>
                <ChooseUsCard>
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaUsers as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>Fulfill The Needs Of Every Client</ChooseUsTitle>
                  <ChooseUsDescription>
                    Our team creates websites that are tailored to the needs of each individual business, with an emphasis on aesthetics, simplicity, and functionality.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
              
              <AnimatedCard>
                <ChooseUsCard>
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaHashtag as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>Social Media Channels</ChooseUsTitle>
                  <ChooseUsDescription>
                    We know what it takes to gain visibility and cultivate a thriving audience on all social media channels.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
            </ChooseUsGrid>
          </ScrollReveal>
        </WhyChooseUsContainer>
      </WhyChooseUsSection>
      
      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials">
        <ScrollReveal animation="slideUp" triggerOnce={true}>
          <SectionHeader>
            <h2>What Our Clients Have To Say About Us</h2>
          </SectionHeader>
          <TestimonialsGrid>
            <AnimatedCard>
              <TestimonialCard>
                <TestimonialText>
                  They offer a wide range of services and are always willing to listen to what your needs are. I would recommend them to anyone looking for affordable web design services that will help create a beautiful ecommerce website, as well as other marketing materials.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>eJhola</ClientName>
                  <ClientCompany>eCommerce Company</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <TestimonialCard>
                <TestimonialText>
                  I was really impressed with how they were able to help me create a landing page so quickly. They also offered me a few free design templates that were nice bonuses. The quality of the work is also top notch and I have been pleased with their work every time.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>Buddha Engineering</ClientName>
                  <ClientCompany>Consultancy</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <TestimonialCard>
                <TestimonialText>
                  I loved working with Lyayo Designs on my web design project. I had a tight budget and they were able to work with me to create an elegant site that I am really proud of. The project was done on time and they also offered me a few free design templates.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>Shaligram Nepal</ClientName>
                  <ClientCompany>Online Store</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
          </TestimonialsGrid>
        </ScrollReveal>
      </TestimonialsSection>
      
      {/* Stats Section */}
      <Section id="stats">
        <StatsContainer>
          <AnimatedCard>
            <StatCard>
              <StatNumber>100+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>250+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>5+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>15</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
          </AnimatedCard>
        </StatsContainer>
      </Section>

      {/* CTA Section */}
      <CTASection id="cta">
        <CTAContainer>
          <FadeIn direction="up" delay={0.2}>
            <CTATitle style={{ color: 'white' }}>Ready to Elevate Your Online Presence in Nepal?</CTATitle>
            <CTADescription style={{ color: 'white' }}>
              Let's work together to create a stunning website that helps your business stand out in the Nepali market. Contact us today for affordable, high-quality web design services!
            </CTADescription>
            <ButtonWrapper>
              <AnimatedButton size="large" variant="secondary">
                Get in Touch
              </AnimatedButton>
            </ButtonWrapper>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default HomePage;
