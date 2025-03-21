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
  border: 1px solid ${({ theme }) => theme.colors.backgroundAlt};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
  justify-content: flex-start;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1;
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
  border: ${({ featured, theme }) => featured ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.backgroundAlt}`};
  transform: ${({ featured }) => featured ? 'scale(1.05)' : 'scale(1)'};
  z-index: ${({ featured }) => featured ? 2 : 1};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: scale(1);
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
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: ${({ theme }) => theme.space[4]} 0;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.space[6]} 0;
  text-align: left;
`;

const PlanFeature = styled.li`
  padding: ${({ theme }) => theme.space[2]} 0;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.space[2]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const CTASection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  color: white;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space[6]};
  opacity: 0.9;
`;

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  as?: React.ElementType;
  href?: string;
}

const CustomButton = styled.button<ButtonProps>`
  padding: ${({ size }) => (size === 'small' ? '8px 16px' : size === 'medium' ? '12px 24px' : '16px 32px')};
  font-size: ${({ size }) => (size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px')};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : 'white'};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? 'white' : theme.colors.primary};
  border: 2px solid ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : 'white'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.primaryDark : 'rgba(255, 255, 255, 0.9)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
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
        <FadeIn>
          <HeroContent>
            <HeroTitle>Web Design</HeroTitle>
            <HeroSubtitle>
              We create stunning, responsive websites that help your business stand out and convert visitors into customers.
            </HeroSubtitle>
            <CustomButton size="large" variant="secondary" as="a" href="#pricing">
              View Our Web Design Packages
            </CustomButton>
          </HeroContent>
        </FadeIn>
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
              <CustomButton variant="primary" as="a" href="#pricing">
                Get Started
              </CustomButton>
            </FadeIn>
          </ServiceText>
          <ServiceImageContainer>
            <ScaleIn>
              <LazyImage
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Web Design"
                height="400px"
              />
            </ScaleIn>
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Our Web Design Services */}
      <Section id="services">
        <FadeIn>
          <h2>We Specialize In Following</h2>
          <p>Web Design Services</p>
        </FadeIn>
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
        <FadeIn>
          <h2>Check Our Pricing Plan</h2>
          <p>Digitize Your Business Today</p>
        </FadeIn>
        <PricingGrid>
          <FadeIn delay={0.1}>
            <PricingPlan>
              <PlanName>Landing Page</PlanName>
              <PlanPrice>$200<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span></PlanPrice>
              <PlanFeatures>
                <PlanFeature>Multiple Pages</PlanFeature>
                <PlanFeature>Free Hosting/SSL</PlanFeature>
                <PlanFeature>Free Domain</PlanFeature>
                <PlanFeature>Logo Design/ Branding</PlanFeature>
                <PlanFeature>Social Media Integration</PlanFeature>
                <PlanFeature>Basic SEO Optimization</PlanFeature>
              </PlanFeatures>
              <CustomButton variant="primary" size="medium" as="a" href="/contact">
                Buy Now
              </CustomButton>
            </PricingPlan>
          </FadeIn>
          <FadeIn delay={0.2}>
            <PricingPlan featured>
              <PlanName featured>eCommerce Store</PlanName>
              <PlanPrice>$300<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span></PlanPrice>
              <PlanFeatures>
                <PlanFeature>All Features From Basic Plan</PlanFeature>
                <PlanFeature>Payment Integration</PlanFeature>
                <PlanFeature>Facebook Marketplace</PlanFeature>
                <PlanFeature>Multivendor Support</PlanFeature>
                <PlanFeature>Logistics Integration</PlanFeature>
                <PlanFeature>Order Tracking</PlanFeature>
              </PlanFeatures>
              <CustomButton variant="primary" size="medium" as="a" href="/contact">
                Buy Now
              </CustomButton>
            </PricingPlan>
          </FadeIn>
          <FadeIn delay={0.3}>
            <PricingPlan>
              <PlanName>Full-Fledged Web App</PlanName>
              <PlanPrice>$350<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/once</span></PlanPrice>
              <PlanFeatures>
                <PlanFeature>Unlimited Revisions</PlanFeature>
                <PlanFeature>Additional Blog Posts</PlanFeature>
                <PlanFeature>Personalized Training/Support</PlanFeature>
                <PlanFeature>VPS Hosting</PlanFeature>
                <PlanFeature>Google My Business</PlanFeature>
                <PlanFeature>SEO Audit Report</PlanFeature>
              </PlanFeatures>
              <CustomButton variant="primary" size="medium" as="a" href="/contact">
                Buy Now
              </CustomButton>
            </PricingPlan>
          </FadeIn>
        </PricingGrid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <FadeIn>
          <CTATitle>Ready to Transform Your Online Presence?</CTATitle>
          <CTADescription>
            Let's work together to create a website that not only looks great but also helps you achieve your business goals.
          </CTADescription>
          <CustomButton variant="secondary" size="large" as="a" href="/contact">
            Get in Touch
          </CustomButton>
        </FadeIn>
      </CTASection>
    </Layout>
  );
};

export default WebDesignPage;
