import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import { Theme } from '../../styles/theme';
import FadeIn from '../../components/animations/FadeIn';
import ScaleIn from '../../components/animations/ScaleIn';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  PricingGrid,
  PricingPlan,
  PlanName,
  PlanPrice,
  PlanFeatures,
  PlanFeature,
  FAQSection,
  FAQContainer,
  FAQTitle,
  FAQDescription,
  FAQQuestionToggle as FAQQuestion,
  FAQAnswerToggle as FAQAnswer,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  ButtonLink,
  PricingToggleContainer,
  ToggleOption,
  ToggleSwitch,
  SaveBadge
} from './pricing.styles';

const PricingPage: React.FC = () => {
  const theme = useTheme() as Theme;
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };
  
  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  const faqs = [
    {
      question: "What's included in the website design packages?",
      answer: "Our website design packages include responsive design, SEO optimization, contact forms, mobile compatibility, and various features depending on the plan you choose. All packages include initial consultation, design mockups, development, testing, and launch."
    },
    {
      question: "Do you offer custom pricing for specific projects?",
      answer: "Yes, we understand that every business has unique needs. If our standard packages don't fit your requirements, we offer custom pricing tailored to your specific project. Contact us to discuss your needs and get a personalized quote."
    },
    {
      question: "How long does it take to complete a website?",
      answer: "The timeline varies depending on the complexity of your project. Basic websites typically take 2-3 weeks, while more complex projects may take 4-8 weeks. We'll provide you with a specific timeline during our initial consultation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, bank transfers, and digital payment platforms. For larger projects, we typically require a 50% deposit upfront with the remaining balance due upon completion."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally. These can be purchased separately or added to your existing package."
    }
  ];
  
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
        <FadeIn>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQDescription>
            Find answers to common questions about our pricing and services
          </FAQDescription>
          
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div style={{ marginBottom: '16px' }}>
                  <FAQQuestion 
                    isOpen={openFAQ === index} 
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </div>
              </FadeIn>
            ))}
          </FAQContainer>
        </FadeIn>
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
