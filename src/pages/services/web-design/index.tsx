import React from 'react';
import styled, { useTheme } from 'styled-components';
import Layout from '../../../components/layout/Layout';
import Section from '../../../components/common/Section';
import LazyImage from '../../../components/common/LazyImage';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Theme } from '../../../styles/theme';
import FadeIn from '../../../components/animations/FadeIn';
import ScaleIn from '../../../components/animations/ScaleIn';
import AnimatedCard from '../../../components/animations/AnimatedCard';
import Button from '../../../components/common/Button';

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
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[4]};
    line-height: 1.8;
  }
  
  button {
    margin: ${({ theme }) => theme.space[4]} 0 0;
    display: inline-block;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

interface ServiceImageContainerProps {
  reverse?: boolean;
}

const ServiceImageContainer = styled.div<ServiceImageContainerProps>`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    margin-top: ${({ theme }) => theme.space[6]};
  }
`;

// Features Section
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[8]};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
  justify-content: flex-start;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
  flex-shrink: 0;
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-grow: 1;
  line-height: 1.6;
`;

// Pricing Section
const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[8]};
  
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
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: ${({ featured, theme }) => featured ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

interface PlanNameProps {
  featured?: boolean;
}

const PlanName = styled.h3<PlanNameProps>`
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ featured, theme }) => (featured ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const PlanPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: ${({ theme }) => theme.space[4]} 0;
  color: ${({ theme }) => theme.colors.text};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.space[6]} 0;
  text-align: left;
  flex-grow: 1;
`;

const PlanFeature = styled.li`
  padding: ${({ theme }) => theme.space[2]} 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &:before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.space[2]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

// CTA Section
const CTASection = styled(Section)`
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
      ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
      : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%),
                radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.08), transparent 70%);
    z-index: 0;
  }
`;

const CTAContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[10]} 0;
`;

const CTATitle = styled.h2`
  color: white;
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  color: white;
  line-height: 1.6;
`;

// Create styled anchor that uses Button styling
const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;

const WebDesignPage: React.FC = () => {
  const theme = useTheme() as Theme;
  
  return (
    <Layout
      title="Web Design Services - Lyayo Designs"
      description="Professional web design services in Nepal. We create stunning, responsive websites that look great on any device and help your business stand out online."
      keywords="web design, responsive design, website development, Nepal, mobile-friendly websites, website redesign, website maintenance"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Web Design</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              We create stunning, responsive websites that help your business stand out and convert visitors into customers.
            </HeroSubtitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} duration={0.7}>
            <ButtonLink href="#pricing">
              <Button size="large" variant="primary">
                View Our Web Design Packages
              </Button>
            </ButtonLink>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Web Design Overview Section */}
      <ServiceSection id="web-design-overview">
        <ServiceContent>
          <ServiceText>
            <FadeIn direction="left">
              <h2>Professional Web Design</h2>
              <p>
                At Lyayo Designs, we understand that your website is often the first impression potential customers have of your business. That's why we create beautiful, functional websites that not only look great but also drive results.
              </p>
              <p>
                Our web design services are tailored to meet the specific needs of your business. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver a solution that works for you.
              </p>
              <ButtonLink href="#pricing">
                <Button variant="primary">
                  Get Started
                </Button>
              </ButtonLink>
            </FadeIn>
          </ServiceText>
          <ServiceImageContainer>
            <ScaleIn>
              <LazyImage
                src="/images/image4.jpg"
                alt="Web Design"
                height="400px"
              />
            </ScaleIn>
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Our Web Design Services */}
      <Section id="services">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>We Specialize In Following</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Web Design Services</p>
          </FadeIn>
        </div>
        <FeaturesGrid>
          <FadeIn delay={0.1}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaMobileAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Mobile Responsive</FeatureTitle>
                <FeatureDescription>
                  We can make your pages or your entire website fully mobile responsive or even some basic tweaks only if you need us to.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaBolt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Page Speed Optimization</FeatureTitle>
                <FeatureDescription>
                  We know that a fast, responsive website is key to keeping your visitors engaged and converting them into customers.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.3}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaEdit as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Modifying Your Sites</FeatureTitle>
                <FeatureDescription>
                  We can help you add or modify your site structure or content and also adding new features within your website.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.4}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaExchangeAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Website Migration</FeatureTitle>
                <FeatureDescription>
                  We can help you migrate your website within hosting platforms or help you migrate your site from any other platform to WordPress.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.5}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaPaintBrush as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Website Redesign</FeatureTitle>
                <FeatureDescription>
                  We have been working in the SEO and link-building industries for many years, and we know how to get results.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.6}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaTools as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Website Maintenance</FeatureTitle>
                <FeatureDescription>
                  We will find out why your competitors are ranking ahead of you, then develop a strategy to help you overtake them.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
        </FeaturesGrid>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" backgroundColor={theme.isDark ? theme.colors.backgroundAlt : theme.colors.backgroundAlt}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Check Our Pricing Plan</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6', marginBottom: theme.space[6] }}>
              Digitize Your Business Today with Our Affordable Web Design Packages
            </p>
          </FadeIn>
        </div>
        
        <PricingGrid>
          <FadeIn delay={0.1}>
            <PricingPlan>
              <div>
                <PlanName>Landing Page</PlanName>
                <PlanPrice>
                  $200
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Perfect for small businesses just getting started
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>Multiple Pages</PlanFeature>
                <PlanFeature>Free Hosting/SSL</PlanFeature>
                <PlanFeature>Free Domain</PlanFeature>
                <PlanFeature>Logo Design/ Branding</PlanFeature>
                <PlanFeature>Social Media Integration</PlanFeature>
                <PlanFeature>Basic SEO Optimization</PlanFeature>
              </PlanFeatures>
              <div>
                <ButtonLink href="/contact">
                  <Button variant="primary" size="medium">
                    Get Started
                  </Button>
                </ButtonLink>
              </div>
            </PricingPlan>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <PricingPlan featured>
              <div>
                <PlanName featured>eCommerce Store</PlanName>
                <PlanPrice>
                  $300
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Ideal for businesses selling products online
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>All Features From Basic Plan</PlanFeature>
                <PlanFeature>Payment Integration</PlanFeature>
                <PlanFeature>Facebook Marketplace</PlanFeature>
                <PlanFeature>Multivendor Support</PlanFeature>
                <PlanFeature>Logistics Integration</PlanFeature>
                <PlanFeature>Order Tracking</PlanFeature>
              </PlanFeatures>
              <div>
                <ButtonLink href="/contact">
                  <Button variant="primary" size="medium">
                    Get Started
                  </Button>
                </ButtonLink>
              </div>
            </PricingPlan>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <PricingPlan>
              <div>
                <PlanName>Full-Fledged Web App</PlanName>
                <PlanPrice>
                  $350
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  For established businesses requiring comprehensive solutions
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>Unlimited Revisions</PlanFeature>
                <PlanFeature>Additional Blog Posts</PlanFeature>
                <PlanFeature>Personalized Training/Support</PlanFeature>
                <PlanFeature>VPS Hosting</PlanFeature>
                <PlanFeature>Google My Business</PlanFeature>
                <PlanFeature>SEO Audit Report</PlanFeature>
              </PlanFeatures>
              <div>
                <ButtonLink href="/contact">
                  <Button variant="primary" size="medium">
                    Get Started
                  </Button>
                </ButtonLink>
              </div>
            </PricingPlan>
          </FadeIn>
        </PricingGrid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <FadeIn direction="up">
            <CTATitle>Ready to Transform Your Online Presence?</CTATitle>
            <CTADescription>
              Let's work together to create a website that not only looks great but also helps you achieve your business goals.
            </CTADescription>
            <ScaleIn delay={0.3}>
              <ButtonLink href="/contact">
                <Button variant="primary" size="large">
                  Get in Touch
                </Button>
              </ButtonLink>
            </ScaleIn>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default WebDesignPage;
