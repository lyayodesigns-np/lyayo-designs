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
  border: ${({ featured, theme }) => (featured ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.backgroundAlt}`)};
  transform: ${({ featured }) => (featured ? 'scale(1.05)' : 'scale(1)')};
  z-index: ${({ featured }) => (featured ? 2 : 1)};
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    transform: ${({ featured }) => (featured ? 'scale(1.08)' : 'scale(1.03)')};
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
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space[6]};
  text-align: left;
`;

const PlanFeature = styled.li`
  padding: ${({ theme }) => theme.space[2]} 0;
  display: flex;
  align-items: center;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.space[2]};
  }
`;

// Tools Section
const ToolsGrid = styled.div`
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

const ToolCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ToolTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
`;

const ToolDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

// CTA Section
const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
`;

const CTADescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: white;
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
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  display: inline-block;
  text-decoration: none;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  ${({ variant, theme }) => {
    if (variant === 'primary') {
      return `
        background-color: ${theme.colors.primary};
        color: white;
      `;
    } else if (variant === 'secondary') {
      return `
        background-color: white;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
      `;
    }
  }}
`;

const SEOPage: React.FC = () => {
  const theme = useTheme() as Theme;
  
  return (
    <Layout
      title="SEO Services - Lyayo Designs"
      description="Boost your website's visibility with our professional SEO services. We help businesses in Nepal improve their search engine rankings and drive more traffic."
      keywords="SEO services, search engine optimization, Nepal, website ranking, keyword research, content marketing, link building"
    >
      {/* Hero Section */}
      <HeroSection>
        <FadeIn>
          <HeroContent>
            <HeroTitle>Search Engine Optimization</HeroTitle>
            <HeroSubtitle>
              We can help you create effective SEO strategies that will boost your website's visibility and drive more traffic to your site.
            </HeroSubtitle>
            <CustomButton size="large" variant="secondary" as="a" href="#pricing">
              View Our SEO Packages
            </CustomButton>
          </HeroContent>
        </FadeIn>
      </HeroSection>

      {/* SEO Optimization Section */}
      <ServiceSection id="seo-optimization">
        <ServiceContent>
          <ServiceText>
            <FadeIn direction="left">
              <h2>SEO Optimization</h2>
              <p>
                At Lyayo Designs, we understand that having a beautiful website is only half the battle. If your target audience can't find you online, your website won't generate the leads and sales you need to grow your business.
              </p>
              <p>
                Our comprehensive SEO services are designed to improve your website's visibility in search engine results, driving more organic traffic and increasing your online presence. We use proven strategies and the latest techniques to help your business rank higher for relevant keywords.
              </p>
              <CustomButton variant="primary" as="a" href="#pricing">
                Get Started
              </CustomButton>
            </FadeIn>
          </ServiceText>
          <ServiceImageContainer>
            <ScaleIn>
              <LazyImage
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="SEO Optimization"
                height="400px"
              />
            </ScaleIn>
          </ServiceImageContainer>
        </ServiceContent>
      </ServiceSection>

      {/* Page Speed Optimization Section */}
      <ServiceSection id="page-speed">
        <ServiceContent>
          <ServiceImageContainer reverse>
            <ScaleIn>
              <LazyImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
                alt="Page Speed Optimization"
                height="400px"
              />
            </ScaleIn>
          </ServiceImageContainer>
          <ServiceText reverse>
            <FadeIn direction="right">
              <h2>Page Speed Optimization</h2>
              <p>
                We know that a fast, responsive website is key to keeping your visitors engaged and converting them into customers. Page speed is also a critical factor in search engine rankings.
              </p>
              <p>
                Our team will analyze your website's performance and implement technical optimizations to improve loading times, reduce bounce rates, and enhance user experience. From image optimization to code minification, we'll ensure your website loads quickly on all devices.
              </p>
              <CustomButton variant="primary" as="a" href="#contact">
                Learn More
              </CustomButton>
            </FadeIn>
          </ServiceText>
        </ServiceContent>
      </ServiceSection>

      {/* Our SEO Services */}
      <Section id="services">
        <FadeIn>
          <h2>We Specialize In Following</h2>
          <p>Comprehensive SEO Services to Boost Your Online Presence</p>
        </FadeIn>
        <FeaturesGrid>
          <FadeIn delay={0.1}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaSearch as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Keyword Research</FeatureTitle>
                <FeatureDescription>
                  We identify the most valuable and relevant keywords for your business to target in your SEO campaigns.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaFileAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Content Marketing</FeatureTitle>
                <FeatureDescription>
                  We create high-quality, SEO-optimized content that engages your audience and improves your search rankings.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.3}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaShareAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Social Media Marketing</FeatureTitle>
                <FeatureDescription>
                  We leverage social media platforms to increase your brand visibility and drive traffic to your website.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.4}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaLink as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Link Building & Outreach</FeatureTitle>
                <FeatureDescription>
                  We build high-quality backlinks to improve your website's authority and search engine rankings.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.5}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaChartLine as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Competitor Research</FeatureTitle>
                <FeatureDescription>
                  We analyze your competitors' strategies to identify opportunities and develop effective SEO tactics.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
          <FadeIn delay={0.6}>
            <AnimatedCard hoverEffect="lift">
              <FeatureCard>
                <FeatureIcon>
                  {React.createElement(FaIcons.FaChartBar as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Performance Tracking</FeatureTitle>
                <FeatureDescription>
                  We provide detailed reports on your SEO performance, showing the impact of our strategies on your rankings.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FadeIn>
        </FeaturesGrid>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" backgroundColor={theme.isDark ? theme.colors.backgroundAlt : "#f9f9f9"}>
        <div style={{ padding: '20px' }}>
          <FadeIn>
            <h2>Our SEO Packages</h2>
            <p>Choose the right plan for your business needs</p>
          </FadeIn>
          <PricingGrid>
            <FadeIn delay={0.1}>
              <PricingPlan>
                <PlanName>SEO TIER 1</PlanName>
                <PlanPrice>$299<span style={{ fontSize: '1rem' }}>/month</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Basic On-Page SEO
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Website Maintenance
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Monthly Reports
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    3 Guest Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    2 Profile Backlinks Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    1 Blog Post Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    2 Social Media Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Facebook Advertising (Free $10)
                  </PlanFeature>
                </PlanFeatures>
                <CustomButton variant="primary">Choose Plan</CustomButton>
              </PricingPlan>
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingPlan featured>
                <PlanName featured>SEO TIER 2</PlanName>
                <PlanPrice>$499<span style={{ fontSize: '1rem' }}>/month</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Basic On-Page SEO
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Website Maintenance
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Monthly Reports
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    4 Guest Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    3 Profile Backlinks Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    2 Blog Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    3 Social Media Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Facebook Advertising (Free $15)
                  </PlanFeature>
                </PlanFeatures>
                <CustomButton variant="secondary">Choose Plan</CustomButton>
              </PricingPlan>
            </FadeIn>
            <FadeIn delay={0.3}>
              <PricingPlan>
                <PlanName>SEO TIER 3</PlanName>
                <PlanPrice>$699<span style={{ fontSize: '1rem' }}>/month</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Basic On-Page SEO
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Website Maintenance
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Monthly Reports
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    5 Guest Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    4 Profile Backlinks Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    4 Blog Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    4 Social Media Posts Every Month
                  </PlanFeature>
                  <PlanFeature>
                    {React.createElement(FaIcons.FaCheck as React.ComponentType<IconBaseProps>)}
                    Facebook Advertising (Free $20)
                  </PlanFeature>
                </PlanFeatures>
                <CustomButton variant="primary">Choose Plan</CustomButton>
              </PricingPlan>
            </FadeIn>
          </PricingGrid>
        </div>
      </Section>

      {/* Tools Section */}
      <Section id="tools">
        <FadeIn>
          <h2>We Have Our Hands On The Best SEO Tools</h2>
          <p>Professional tools to deliver the best results for your business</p>
        </FadeIn>
        <ToolsGrid>
          <FadeIn delay={0.1}>
            <ToolCard>
              <ToolTitle>Ahrefs</ToolTitle>
              <ToolDescription>
                Our favorite tool is Ahrefs, which we use to track website rankings, monitor competitor activity, and research new keywords.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ToolCard>
              <ToolTitle>Semrush</ToolTitle>
              <ToolDescription>
                We use Semrush to devise SEO campaigns and review on-page SEO to help your website reach higher in search results.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
          <FadeIn delay={0.3}>
            <ToolCard>
              <ToolTitle>Canva Premium</ToolTitle>
              <ToolDescription>
                We design our clients' social media posts on Canva to make sure they stand out and get the attention your page deserves.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
          <FadeIn delay={0.4}>
            <ToolCard>
              <ToolTitle>Labrika</ToolTitle>
              <ToolDescription>
                We also use Labrika for content optimization on our clients' sites. We make sure to keep the spam score below 10% and optimize the page for SEO.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
          <FadeIn delay={0.5}>
            <ToolCard>
              <ToolTitle>Grammarly Premium</ToolTitle>
              <ToolDescription>
                With us, your articles and pages will always have zero grammatical errors. With Grammarly, your pages will always be easily readable and ready to make conversions.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
          <FadeIn delay={0.6}>
            <ToolCard>
              <ToolTitle>WooRank</ToolTitle>
              <ToolDescription>
                The first change we need to make on our clients' pages is to rank them higher. We make sure this goes on with the combination of all other tools with WooRank.
              </ToolDescription>
            </ToolCard>
          </FadeIn>
        </ToolsGrid>
      </Section>

      {/* CTA Section */}
      <Section id="contact" backgroundColor="#1a73e8" paddingTop="80px" paddingBottom="80px">
        <CTAContainer>
          <CTATitle>Ready to Improve Your Search Rankings?</CTATitle>
          <CTADescription>
            Contact us today to discuss how our SEO services can help your business grow online.
          </CTADescription>
          <CustomButton size="large" variant="secondary" as="a" href="/contact">
            Get in Touch
          </CustomButton>
        </CTAContainer>
      </Section>
    </Layout>
  );
};

export default SEOPage;
