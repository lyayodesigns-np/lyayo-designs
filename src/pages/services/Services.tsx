import React from 'react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { FadeIn, ScrollReveal, AnimatedCard } from '../../components/animations';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ServiceSection,
  ServiceContent,
  ServiceText,
  ServiceImageContainer,
  ServiceFeatures,
  ServiceFeature,
  FeatureIcon,
  ProcessSection,
  ProcessSteps,
  ProcessStep,
  StepNumber,
  StepTitle,
  StepDescription,
  PricingSection,
  PricingPlans,
  PricingPlan,
  PlanName,
  PlanPrice,
  PlanFeatures,
  PlanFeature,
  PlanFeatureIcon,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText,
  CTAButtons
} from './services.styles';

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
