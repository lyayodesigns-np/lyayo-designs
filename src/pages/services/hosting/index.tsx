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
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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
  transform: ${({ featured }) => featured ? 'scale(1.05)' : 'scale(1)'};
  z-index: ${({ featured }) => featured ? 2 : 1};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: scale(1);
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

const HostingPage: React.FC = () => {
  const theme = useTheme() as Theme;
  
  return (
    <Layout
      title="Hosting Services - Lyayo Designs"
      description="Reliable and affordable hosting solutions with VPS servers, increased security, high traffic capacity, and automated backups."
      keywords="web hosting, VPS hosting, affordable hosting, secure hosting, website hosting, Nepal, cloud hosting, managed hosting"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Hosting With Us</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Get the best computing power for the cheapest price with our reliable and affordable hosting solutions.
            </HeroSubtitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} duration={0.7}>
            <ButtonLink href="#pricing">
              <Button size="large" variant="primary">
                View Our Hosting Plans
              </Button>
            </ButtonLink>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Hosting Overview Section */}
      <ServiceSection id="hosting-overview">
        <ServiceContent>
          <ServiceText>
            <FadeIn direction="left">
              <h2>Why Host With Us?</h2>
              <p>
                We are passionate about providing reliable and affordable hosting solutions for our customers. We believe that everyone should have access to quality hosting, and we work hard to make sure that our services are affordable and easy to use.
              </p>
              <p>
                Our VPS server pricing is the cheapest since the price of a powerful server is divided among all our clients, giving you enterprise-level performance at a fraction of the cost.
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
                alt="Hosting Services"
                height="400px"
              />
            </ScaleIn>
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Our Hosting Features */}
      <Section id="features">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Our Hosting Features</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Premium features at an affordable price</p>
          </FadeIn>
        </div>
        <FeaturesGrid>
          <FadeIn delay={0.1}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaServer as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>VPS Servers</FeatureTitle>
                <FeatureDescription>
                  We use VPS Servers for our clients rather than any reseller hostings so that our client websites don't have to compromise.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaShieldAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Increased Security</FeatureTitle>
                <FeatureDescription>
                  All our client domains are proxied through Cloudflare and we use a network firewall for an additional layer of security.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.3}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaNetworkWired as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>High Traffic</FeatureTitle>
                <FeatureDescription>
                  Obtain 3 TB of outgoing and unlimited inbound data transfer with a connection speed between 200 Mbps and 1 Gbps.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.4}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaDatabase as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Backups</FeatureTitle>
                <FeatureDescription>
                  We use automated backups frequently so you can be assured your data is always safe with us.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.5}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaHdd as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Storage</FeatureTitle>
                <FeatureDescription>
                  All of our clients will be assigned to a super-fast NVMe with the option to add extra storage capacity.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.6}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaMoneyBillWave as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Incredible Pricing</FeatureTitle>
                <FeatureDescription>
                  Our VPS server pricing is the cheapest since the price of a powerful server is divided to all our clients.
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
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Just One Plan That's Perfect For You</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Choose the billing cycle that works best for you</p>
          </FadeIn>
        </div>
        <PricingGrid>
          <FadeIn delay={0.1}>
            <PricingPlan>
              <PlanName>Monthly Plan</PlanName>
              <PlanPrice>Contact Us<span style={{ fontSize: '16px', fontWeight: 'normal' }}> for pricing</span></PlanPrice>
              <PlanFeatures>
                <PlanFeature>4 vCPU Cores</PlanFeature>
                <PlanFeature>8 GB RAM</PlanFeature>
                <PlanFeature>5GB NVMe Storage</PlanFeature>
                <PlanFeature>3 TB Traffic</PlanFeature>
                <PlanFeature>2 Email Accounts</PlanFeature>
                <PlanFeature>24/7 Support</PlanFeature>
              </PlanFeatures>
              <ButtonLink href="/contact">
                <Button variant="primary" size="medium">
                  Contact Us
                </Button>
              </ButtonLink>
            </PricingPlan>
          </FadeIn>
          <FadeIn delay={0.2}>
            <PricingPlan featured>
              <PlanName featured>Annual Plan</PlanName>
              <PlanPrice>Contact Us<span style={{ fontSize: '16px', fontWeight: 'normal' }}> for pricing</span></PlanPrice>
              <PlanFeatures>
                <PlanFeature>4 vCPU Cores</PlanFeature>
                <PlanFeature>8 GB RAM</PlanFeature>
                <PlanFeature>5GB NVMe Storage</PlanFeature>
                <PlanFeature>3 TB Traffic</PlanFeature>
                <PlanFeature>2 Email Accounts</PlanFeature>
                <PlanFeature>Priority Support</PlanFeature>
              </PlanFeatures>
              <ButtonLink href="/contact">
                <Button variant="primary" size="medium">
                  Contact Us
                </Button>
              </ButtonLink>
            </PricingPlan>
          </FadeIn>
        </PricingGrid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <FadeIn direction="up">
            <CTATitle>Ready to Host Your Website With Us?</CTATitle>
            <CTADescription>
              Get reliable, secure, and affordable hosting for your website today. No technical knowledge required!
            </CTADescription>
            <ScaleIn delay={0.3}>
              <ButtonLink href="/contact">
                <Button variant="primary" size="large">
                  Get Started Now
                </Button>
              </ButtonLink>
            </ScaleIn>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default HostingPage;
