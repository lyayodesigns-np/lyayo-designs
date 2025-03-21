import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

// Hero Section
const HeroSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.secondary};
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

// Service Section
const ServiceSection = styled(Section)`
  scroll-margin-top: 80px;
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
`;

const FeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.space[2]};
`;

// Process Section
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
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  
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
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

// Pricing Section
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
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.standard}, box-shadow ${({ theme }) => theme.transitions.standard};
  border: 2px solid ${({ featured, theme }) => (featured ? theme.colors.primary : 'transparent')};
  
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
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%),
                radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.08), transparent 70%);
    z-index: 0;
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CTADescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const ServicesPage: React.FC = () => {
  return (
    <Layout
      title="Services - Lyayo Designs"
      description="Explore our comprehensive range of design services including web design, graphic design, branding, UI/UX design, and digital marketing."
      keywords="web design services, graphic design, branding services, UI/UX design, digital marketing, Lyayo Designs services"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            We offer a wide range of design services to help your business stand out in the digital landscape.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Web Design Service */}
      <ServiceSection id="web-design" backgroundColor="#f9f9f9">
        <ServiceContent>
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
            <Button>Get a Quote</Button>
          </ServiceText>
          <ServiceImageContainer>
            <LazyImage
              src="https://via.placeholder.com/600x400"
              alt="Web Design Services"
              height="400px"
            />
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Graphic Design Service */}
      <ServiceSection id="graphic-design">
        <ServiceContent>
          <ServiceImageContainer>
            <LazyImage
              src="https://via.placeholder.com/600x400"
              alt="Graphic Design Services"
              height="400px"
            />
          </ServiceImageContainer>
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
            <Button>Get a Quote</Button>
          </ServiceText>
        </ServiceContent>
      </ServiceSection>

      {/* Branding Service */}
      <ServiceSection id="branding" backgroundColor="#f9f9f9">
        <ServiceContent>
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
            <Button>Get a Quote</Button>
          </ServiceText>
          <ServiceImageContainer>
            <LazyImage
              src="https://via.placeholder.com/600x400"
              alt="Branding Services"
              height="400px"
            />
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* UI/UX Design Service */}
      <ServiceSection id="ui-ux">
        <ServiceContent>
          <ServiceImageContainer>
            <LazyImage
              src="https://via.placeholder.com/600x400"
              alt="UI/UX Design Services"
              height="400px"
            />
          </ServiceImageContainer>
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
            <Button>Get a Quote</Button>
          </ServiceText>
        </ServiceContent>
      </ServiceSection>

      {/* Digital Marketing Service */}
      <ServiceSection id="digital-marketing" backgroundColor="#f9f9f9">
        <ServiceContent>
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
            <Button>Get a Quote</Button>
          </ServiceText>
          <ServiceImageContainer>
            <LazyImage
              src="https://via.placeholder.com/600x400"
              alt="Digital Marketing Services"
              height="400px"
            />
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Our Process Section */}
      <Section id="our-process">
        <h2>Our Process</h2>
        <p>We follow a proven process to ensure the success of every project.</p>
        <ProcessSteps>
          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepTitle>Discovery</StepTitle>
            <StepDescription>
              We start by understanding your business, goals, and target audience to create a solid foundation for your project.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepTitle>Strategy</StepTitle>
            <StepDescription>
              Based on our findings, we develop a strategic plan that outlines how we'll achieve your objectives.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepTitle>Design</StepTitle>
            <StepDescription>
              Our designers create visually appealing concepts that align with your brand and meet your requirements.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepTitle>Delivery</StepTitle>
            <StepDescription>
              After your approval, we finalize the designs and deliver the completed project with ongoing support.
            </StepDescription>
          </ProcessStep>
        </ProcessSteps>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" backgroundColor="#f9f9f9">
        <h2>Our Pricing</h2>
        <p>Transparent pricing plans tailored to fit your needs.</p>
        <PricingPlans>
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
            <Button>Get Started</Button>
          </PricingPlan>
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
            <Button>Get Started</Button>
          </PricingPlan>
        </PricingPlans>
      </Section>

      {/* CTA Section */}
      <CTASection id="cta" paddingTop="80px" paddingBottom="80px">
        <CTAContainer>
          <CTATitle style={{ color: 'white' }}>Ready to Elevate Your Online Presence in Nepal?</CTATitle>
          <CTADescription style={{ color: 'white' }}>
            Let's work together to create a stunning website that helps your business stand out in the Nepali market. Contact us today for affordable, high-quality web design services!
          </CTADescription>
          <Button size="large" variant="secondary">
            Get in Touch
          </Button>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default ServicesPage;
