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
  ToolsGrid,
  ToolCard,
  ToolTitle,
  ToolDescription,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  ButtonLink
} from './seo.styles';
import AnimatedCard from '../../../components/animations/AnimatedCard';
import FadeIn from '../../../components/animations/FadeIn';
import ScaleIn from '../../../components/animations/ScaleIn';
import Button from '../../../components/common/Button';
import LazyImage from '../../../components/common/LazyImage';
import Section from '../../../components/common/Section';
import Layout from '../../../components/layout/Layout';
import { Theme } from '../../../styles/theme';

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
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Search Engine Optimization</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              We can help you create effective SEO strategies that will boost your website's visibility and drive more traffic to your site.
            </HeroSubtitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} duration={0.7}>
            <ButtonLink href="#pricing">
              <Button size="large" variant="primary">
                View Our SEO Packages
              </Button>
            </ButtonLink>
          </FadeIn>
        </HeroContent>
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
                src="/images/image3.jpg"
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
              <ButtonLink href="#contact">
                <Button variant="primary">
                  Learn More
                </Button>
              </ButtonLink>
            </FadeIn>
          </ServiceText>
        </ServiceContent>
      </ServiceSection>

      {/* Our SEO Services */}
      <Section id="services">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>We Specialize In Following</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Comprehensive SEO Services to Boost Your Online Presence</p>
          </FadeIn>
        </div>
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
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
            <FadeIn>
              <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Our SEO Packages</h2>
              <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Choose the right plan for your business needs</p>
            </FadeIn>
          </div>
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
                <ButtonLink href="#">
                  <Button variant="primary">Choose Plan</Button>
                </ButtonLink>
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
                <ButtonLink href="#">
                  <Button variant="primary">Choose Plan</Button>
                </ButtonLink>
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
                <ButtonLink href="#">
                  <Button variant="primary">Choose Plan</Button>
                </ButtonLink>
              </PricingPlan>
            </FadeIn>
          </PricingGrid>
        </div>
      </Section>

      {/* Tools Section */}
      <Section id="tools">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>We Have Our Hands On The Best SEO Tools</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>Professional tools to deliver the best results for your business</p>
          </FadeIn>
        </div>
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
      <CTASection id="contact">
        <CTAContainer>
          <FadeIn direction="up">
            <CTATitle>Ready to Improve Your Search Rankings?</CTATitle>
            <CTADescription>
              Contact us today to discuss how our SEO services can help your business grow online.
            </CTADescription>
            <ScaleIn delay={0.3}>
              <ButtonLink href="/contact">
                <Button size="large" variant="primary">
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

export default SEOPage;
