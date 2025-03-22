import React from 'react';
import styled, { useTheme } from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import { Theme } from '../../styles/theme';
import FadeIn from '../../components/animations/FadeIn';
import ScaleIn from '../../components/animations/ScaleIn';

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

// FAQ Section
const FAQSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : '#f9f9f9'};
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const FAQQuestion = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const FAQAnswer = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
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

// Pricing Toggle
const PricingToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const ToggleOption = styled.span<{ active: boolean }>`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.bold : theme.fontWeights.medium};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
`;

const ToggleSwitch = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  margin: 0 ${({ theme }) => theme.space[3]};
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: transform ${({ theme }) => theme.transitions.standard};
  }
  
  &[data-active="yearly"]::after {
    transform: translateX(30px);
  }
`;

// Save Badge
const SaveBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radii.full};
  z-index: 3;
`;

const PricingPage: React.FC = () => {
  const theme = useTheme() as Theme;
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');
  
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };
  
  return (
    <Layout
      title="Pricing - Lyayo Designs"
      description="Explore our affordable pricing plans for web design, SEO, and hosting services. Choose the plan that fits your business needs and budget."
      keywords="pricing, web design pricing, SEO pricing, hosting pricing, affordable web services, website packages, Nepal"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Simple, Transparent Pricing</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Choose the perfect plan for your business needs with no hidden fees or surprises.
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Pricing Section */}
      <Section id="pricing">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Our Pricing Plans</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6', marginBottom: theme.space[6] }}>
              We offer flexible pricing options to suit businesses of all sizes. Save with our annual billing option.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <PricingToggleContainer>
              <ToggleOption active={billingCycle === 'monthly'} onClick={() => setBillingCycle('monthly')}>
                Monthly
              </ToggleOption>
              <ToggleSwitch 
                data-active={billingCycle} 
                onClick={toggleBillingCycle}
              />
              <ToggleOption active={billingCycle === 'yearly'} onClick={() => setBillingCycle('yearly')}>
                Yearly <span style={{ fontSize: '12px', color: theme.colors.success }}>(Save 20%)</span>
              </ToggleOption>
            </PricingToggleContainer>
          </FadeIn>
        </div>
        
        <PricingGrid>
          <FadeIn delay={0.1}>
            <PricingPlan>
              <div>
                <PlanName>Basic</PlanName>
                <PlanPrice>
                  {billingCycle === 'monthly' ? '$499' : '$4,790'}
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>{billingCycle === 'monthly' ? '/mo' : '/year'}</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Perfect for small businesses just getting started
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>5-Page Responsive Website</PlanFeature>
                <PlanFeature>Basic SEO Setup</PlanFeature>
                <PlanFeature>Contact Form</PlanFeature>
                <PlanFeature>Mobile Responsive Design</PlanFeature>
                <PlanFeature>Social Media Integration</PlanFeature>
                <PlanFeature>1 Month Free Hosting</PlanFeature>
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
              {billingCycle === 'yearly' && <SaveBadge>Save 20%</SaveBadge>}
              <div>
                <PlanName featured>Professional</PlanName>
                <PlanPrice>
                  {billingCycle === 'monthly' ? '$999' : '$9,590'}
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>{billingCycle === 'monthly' ? '/mo' : '/year'}</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  Ideal for growing businesses with specific needs
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>10-Page Responsive Website</PlanFeature>
                <PlanFeature>Advanced SEO Optimization</PlanFeature>
                <PlanFeature>Custom Contact Forms</PlanFeature>
                <PlanFeature>Content Management System</PlanFeature>
                <PlanFeature>E-commerce Functionality (up to 50 products)</PlanFeature>
                <PlanFeature>Blog Setup</PlanFeature>
                <PlanFeature>3 Months Free Hosting</PlanFeature>
                <PlanFeature>Google Analytics Integration</PlanFeature>
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
                <PlanName>Enterprise</PlanName>
                <PlanPrice>
                  {billingCycle === 'monthly' ? '$1,999' : '$19,190'}
                  <span style={{ fontSize: '16px', fontWeight: 'normal' }}>{billingCycle === 'monthly' ? '/mo' : '/year'}</span>
                </PlanPrice>
                <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                  For established businesses requiring comprehensive solutions
                </p>
              </div>
              <PlanFeatures>
                <PlanFeature>Unlimited Pages</PlanFeature>
                <PlanFeature>Premium SEO Package</PlanFeature>
                <PlanFeature>Custom Web Application Development</PlanFeature>
                <PlanFeature>Full E-commerce Solution</PlanFeature>
                <PlanFeature>Custom Database Integration</PlanFeature>
                <PlanFeature>Payment Gateway Integration</PlanFeature>
                <PlanFeature>User Account Management</PlanFeature>
                <PlanFeature>6 Months Free Hosting</PlanFeature>
                <PlanFeature>Priority Support</PlanFeature>
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

      {/* FAQ Section */}
      <FAQSection>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: theme.space[8] }}>
          <FadeIn>
            <h2 style={{ fontSize: theme.fontSizes['3xl'], fontWeight: theme.fontWeights.bold, marginBottom: theme.space[2], color: theme.colors.text }}>Frequently Asked Questions</h2>
            <p style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}>
              Find answers to common questions about our pricing and services
            </p>
          </FadeIn>
        </div>
        
        <FAQContainer>
          <FadeIn delay={0.1}>
            <FAQItem>
              <FAQQuestion>What's included in the website design packages?</FAQQuestion>
              <FAQAnswer>
                Our website design packages include responsive design, SEO optimization, contact forms, mobile compatibility, and various features depending on the plan you choose. All packages include initial consultation, design mockups, development, testing, and launch.
              </FAQAnswer>
            </FAQItem>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <FAQItem>
              <FAQQuestion>Do you offer custom pricing for specific projects?</FAQQuestion>
              <FAQAnswer>
                Yes, we understand that every business has unique needs. If our standard packages don't fit your requirements, we offer custom pricing tailored to your specific project. Contact us to discuss your needs and get a personalized quote.
              </FAQAnswer>
            </FAQItem>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <FAQItem>
              <FAQQuestion>How long does it take to complete a website?</FAQQuestion>
              <FAQAnswer>
                The timeline varies depending on the complexity of your project. Basic websites typically take 2-3 weeks, while more complex projects may take 4-8 weeks. We'll provide you with a specific timeline during our initial consultation.
              </FAQAnswer>
            </FAQItem>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <FAQItem>
              <FAQQuestion>What payment methods do you accept?</FAQQuestion>
              <FAQAnswer>
                We accept various payment methods including credit/debit cards, bank transfers, and digital payment platforms. For larger projects, we typically require a 50% deposit upfront with the remaining balance due upon completion.
              </FAQAnswer>
            </FAQItem>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <FAQItem>
              <FAQQuestion>Do you offer ongoing maintenance and support?</FAQQuestion>
              <FAQAnswer>
                Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally. These can be purchased separately or added to your existing package.
              </FAQAnswer>
            </FAQItem>
          </FadeIn>
        </FAQContainer>
      </FAQSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <FadeIn direction="up">
            <CTATitle>Ready to Get Started?</CTATitle>
            <CTADescription>
              Contact us today to discuss your project and find the perfect solution for your business needs.
            </CTADescription>
            <ScaleIn delay={0.3}>
              <ButtonLink href="/contact">
                <Button variant="primary" size="large">
                  Contact Us Now
                </Button>
              </ButtonLink>
            </ScaleIn>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default PricingPage;
