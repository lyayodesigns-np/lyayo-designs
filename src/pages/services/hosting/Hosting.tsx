import React from 'react';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { useTheme } from 'styled-components';

import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ServiceSection,
  ServiceContent,
  ServiceText,
  ServiceImageContainer,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  PricingGrid,
  PricingPlan,
  PlanName,
  PlanPrice,
  PlanFeatures,
  PlanFeature,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  ButtonLink
} from './hosting.styles';
import AnimatedCard from '../../../components/animations/AnimatedCard';
import FadeIn from '../../../components/animations/FadeIn';
import ScaleIn from '../../../components/animations/ScaleIn';
import Button from '../../../components/common/Button';
import LazyImage from '../../../components/common/LazyImage';
import Section from '../../../components/common/Section';
import Layout from '../../../components/layout/Layout';
import { Theme } from '../../../styles/theme';

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
