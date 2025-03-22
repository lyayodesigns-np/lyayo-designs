import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { FadeIn, ScrollReveal, AnimatedCard } from '../../components/animations';

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

// Service Section
const ServiceSection = styled(Section)`
  scroll-margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: all 0.3s ease;
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

interface ServiceTextProps {
  reverse?: boolean;
}

const ServiceText = styled.div<ServiceTextProps>`
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
    margin-bottom: ${({ theme }) => theme.space[4]};
    line-height: 1.6;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: ${({ reverse }) => (reverse ? 1 : 2)};
  }
`;

interface ServiceImageContainerProps {
  reverse?: boolean;
}

const ServiceImageContainer = styled.div<ServiceImageContainerProps>`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const ServiceFeature = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.space[2]};
`;

// Process Section
const ProcessSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : '#f9f9f9'};
  position: relative;
  overflow: hidden;
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[8]};
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProcessSteps = styled.div`
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

const ProcessStep = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -30px;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0 auto ${({ theme }) => theme.space[4]};
`;

const StepTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Pricing Section
const PricingSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[8]};
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PricingPlans = styled.div`
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

interface PricingPlanProps {
  featured?: boolean;
}

const PricingPlan = styled.div<PricingPlanProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.standard}, box-shadow ${({ theme }) => theme.transitions.standard};
  border: 2px solid ${({ featured, theme }) => (featured ? theme.colors.primary : theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)')};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

interface PlanNameProps {
  featured?: boolean;
}

const PlanName = styled.h3<PlanNameProps>`
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ featured, theme }) => (featured ? theme.colors.primary : theme.colors.text)};
`;

const PlanPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const PlanFeatures = styled.ul`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.space[6]};
  list-style-type: none;
  padding: 0;
`;

const PlanFeature = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const PlanFeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.success};
  margin-right: ${({ theme }) => theme.space[2]};
`;

// CTA Section
const CTASection = styled(Section)`
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CTAText = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <Layout
      title="Services - Lyayo Designs"
      description="Explore our comprehensive range of design services including web design, graphic design, branding, UI/UX design, and digital marketing."
      keywords="web design services, graphic design, branding services, UI/UX design, digital marketing, Lyayo Designs services"
    >
      {/* Hero Section */}
      <HeroSection paddingTop="120px" paddingBottom="80px">
        <HeroContent>
          <FadeIn direction="up">
            <HeroTitle>Our Services</HeroTitle>
            <HeroSubtitle>
              We offer a wide range of design services to help your business stand out in the digital landscape.
            </HeroSubtitle>
            <Button variant="primary" size="large">
              Get Started
            </Button>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Web Design Service */}
      <ServiceSection id="web-design" paddingTop="80px" paddingBottom="80px">
        <ServiceContent>
          <ScrollReveal animation="slideLeft" triggerOnce={true}>
            <ServiceText>
              <h2>Web Design & Development</h2>
              <p>
                We create beautiful, responsive websites that look great on any device and help you achieve your business goals. Our web design process focuses on creating user-friendly experiences that convert visitors into customers.
              </p>
              <ServiceFeatures>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Responsive Design for All Devices
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Custom WordPress Development
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  E-commerce Solutions
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  SEO-Friendly Structure
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Fast Loading Speed
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Website Maintenance & Support
                </ServiceFeature>
              </ServiceFeatures>
              <Button variant="primary">Learn More</Button>
            </ServiceText>
          </ScrollReveal>
          <ScrollReveal animation="slideRight" triggerOnce={true}>
            <ServiceImageContainer>
              <LazyImage
                src="/images/image1.jpg"
                alt="Web Design Services"
                height="400px"
              />
            </ServiceImageContainer>
          </ScrollReveal>
        </ServiceContent>
      </ServiceSection>

      {/* Graphic Design Service */}
      <ServiceSection id="graphic-design">
        <ServiceContent>
          <ScrollReveal animation="slideLeft" triggerOnce={true}>
            <ServiceImageContainer>
              <LazyImage
                src="/images/image2.jpg"
                alt="Graphic Design Services"
                height="400px"
              />
            </ServiceImageContainer>
          </ScrollReveal>
          <ScrollReveal animation="slideRight" triggerOnce={true}>
            <ServiceText reverse>
              <h2>Graphic Design</h2>
              <p>
                From logos to marketing materials, we create stunning visuals that communicate your brand message effectively. Our graphic design services help you make a lasting impression on your audience.
              </p>
              <ServiceFeatures>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Logo Design & Brand Identity
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Print Materials (Business Cards, Brochures, etc.)
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Social Media Graphics
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Packaging Design
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Infographics & Data Visualization
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Illustration & Custom Graphics
                </ServiceFeature>
              </ServiceFeatures>
              <Button variant="primary">Learn More</Button>
            </ServiceText>
          </ScrollReveal>
        </ServiceContent>
      </ServiceSection>

      {/* Branding Service */}
      <ServiceSection id="branding" paddingTop="80px" paddingBottom="80px">
        <ServiceContent>
          <ScrollReveal animation="slideLeft" triggerOnce={true}>
            <ServiceText>
              <h2>Branding</h2>
              <p>
                We help you develop a strong brand identity that resonates with your target audience and sets you apart from competitors. Our branding services ensure consistency across all touchpoints.
              </p>
              <ServiceFeatures>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Brand Strategy & Positioning
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Visual Identity Development
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Brand Guidelines
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Brand Messaging & Tone of Voice
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Brand Collateral Design
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Brand Audit & Refresh
                </ServiceFeature>
              </ServiceFeatures>
              <Button variant="primary">Learn More</Button>
            </ServiceText>
          </ScrollReveal>
          <ScrollReveal animation="slideRight" triggerOnce={true}>
            <ServiceImageContainer>
              <LazyImage
                src="/images/image3.jpg"
                alt="Branding Services"
                height="400px"
              />
            </ServiceImageContainer>
          </ScrollReveal>
        </ServiceContent>
      </ServiceSection>

      {/* UI/UX Design Service */}
      <ServiceSection id="ui-ux">
        <ServiceContent>
          <ScrollReveal animation="slideLeft" triggerOnce={true}>
            <ServiceImageContainer>
              <LazyImage
                src="/images/image4.jpg"
                alt="UI/UX Design Services"
                height="400px"
              />
            </ServiceImageContainer>
          </ScrollReveal>
          <ScrollReveal animation="slideRight" triggerOnce={true}>
            <ServiceText reverse>
              <h2>UI/UX Design</h2>
              <p>
                We create intuitive user interfaces and seamless user experiences that keep your customers engaged. Our UI/UX design services focus on creating products that are both beautiful and functional.
              </p>
              <ServiceFeatures>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  User Research & Analysis
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Wireframing & Prototyping
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  User Interface Design
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Interaction Design
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Usability Testing
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Mobile App Design
                </ServiceFeature>
              </ServiceFeatures>
              <Button variant="primary">Learn More</Button>
            </ServiceText>
          </ScrollReveal>
        </ServiceContent>
      </ServiceSection>

      {/* Digital Marketing Service */}
      <ServiceSection id="digital-marketing" paddingTop="80px" paddingBottom="80px">
        <ServiceContent>
          <ScrollReveal animation="slideLeft" triggerOnce={true}>
            <ServiceText>
              <h2>Digital Marketing</h2>
              <p>
                We help you reach your target audience through effective digital marketing strategies and campaigns. Our digital marketing services are designed to increase your online visibility and drive results.
              </p>
              <ServiceFeatures>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Search Engine Optimization (SEO)
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Social Media Marketing
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Content Marketing
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Email Marketing
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Pay-Per-Click (PPC) Advertising
                </ServiceFeature>
                <ServiceFeature>
                  <FeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</FeatureIcon>
                  Analytics & Reporting
                </ServiceFeature>
              </ServiceFeatures>
              <Button variant="primary">Learn More</Button>
            </ServiceText>
          </ScrollReveal>
          <ScrollReveal animation="slideRight" triggerOnce={true}>
            <ServiceImageContainer>
              <LazyImage
                src="/images/image1.jpg"
                alt="Digital Marketing Services"
                height="400px"
              />
            </ServiceImageContainer>
          </ScrollReveal>
        </ServiceContent>
      </ServiceSection>

      {/* Our Process Section */}
      <ProcessSection id="our-process">
        <ScrollReveal animation="fade" triggerOnce={true}>
          <h2>Our Process</h2>
          <p>We follow a proven process to ensure the success of every project.</p>
        </ScrollReveal>
        <ProcessSteps>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.1}>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepTitle>Discovery</StepTitle>
              <StepDescription>
                We start by understanding your business, goals, and target audience to create a solid foundation for your project.
              </StepDescription>
            </ProcessStep>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.2}>
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepTitle>Strategy</StepTitle>
              <StepDescription>
                Based on our findings, we develop a strategic plan that outlines how we'll achieve your objectives.
              </StepDescription>
            </ProcessStep>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.3}>
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepTitle>Design</StepTitle>
              <StepDescription>
                Our designers create visually appealing concepts that align with your brand and meet your requirements.
              </StepDescription>
            </ProcessStep>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.4}>
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepTitle>Delivery</StepTitle>
              <StepDescription>
                After your approval, we finalize the designs and deliver the completed project with ongoing support.
              </StepDescription>
            </ProcessStep>
          </ScrollReveal>
        </ProcessSteps>
      </ProcessSection>

      {/* Pricing Section */}
      <PricingSection id="pricing">
        <ScrollReveal animation="fade" triggerOnce={true}>
          <h2>Our Pricing</h2>
          <p>Transparent pricing plans tailored to fit your needs.</p>
        </ScrollReveal>
        <PricingPlans>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.1}>
            <AnimatedCard>
              <PricingPlan>
                <PlanName>Basic</PlanName>
                <PlanPrice>$999</PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    5-Page Website
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Responsive Design
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Contact Form
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Basic SEO Setup
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    1 Month Support
                  </PlanFeature>
                </PlanFeatures>
                <Button variant="primary">Get Started</Button>
              </PricingPlan>
            </AnimatedCard>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.2}>
            <AnimatedCard>
              <PricingPlan featured>
                <PlanName featured>Professional</PlanName>
                <PlanPrice>$1,999</PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    10-Page Website
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Responsive Design
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Contact Form & CRM Integration
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Advanced SEO Setup
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Social Media Integration
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    3 Months Support
                  </PlanFeature>
                </PlanFeatures>
                <Button variant="primary">Get Started</Button>
              </PricingPlan>
            </AnimatedCard>
          </ScrollReveal>
          <ScrollReveal animation="slideUp" triggerOnce={true} delay={0.3}>
            <AnimatedCard>
              <PricingPlan>
                <PlanName>Enterprise</PlanName>
                <PlanPrice>$3,999+</PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Custom Website
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Responsive Design
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Advanced Functionality
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    E-commerce Integration
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    Comprehensive SEO
                  </PlanFeature>
                  <PlanFeature>
                    <PlanFeatureIcon>{React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}</PlanFeatureIcon>
                    6 Months Support
                  </PlanFeature>
                </PlanFeatures>
                <Button variant="primary">Get Started</Button>
              </PricingPlan>
            </AnimatedCard>
          </ScrollReveal>
        </PricingPlans>
      </PricingSection>

      {/* CTA Section */}
      <CTASection id="cta" paddingTop="80px" paddingBottom="80px">
        <CTAContent>
          <FadeIn>
            <CTATitle style={{ color: 'white' }}>Ready to Elevate Your Online Presence in Nepal?</CTATitle>
            <CTAText style={{ color: 'white' }}>
              Let's work together to create a stunning website that helps your business stand out in the Nepali market. Contact us today for affordable, high-quality web design services!
            </CTAText>
            <CTAButtons>
              <Button size="large" variant="primary">
                Get in Touch
              </Button>
            </CTAButtons>
          </FadeIn>
        </CTAContent>
      </CTASection>
    </Layout>
  );
};

export default ServicesPage;
