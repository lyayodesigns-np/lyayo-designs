import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import LazyImage from '../../components/common/LazyImage';
import { FadeIn, ScaleIn, ScrollReveal, AnimatedButton, AnimatedCard } from '../../components/animations';

import {
  HeroSection,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  HeroStats,
  StatItem,
  HeroStatNumber,
  HeroStatLabel,
  SectionHeader,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  LearnMoreButton,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
  CTASection,
  CTAContainer,
  ButtonWrapper,
  CTATitle,
  CTADescription,
  AffordableServicesSection,
  AffordableServicesContainer,
  AffordableServicesContent,
  AffordableServicesImageContainer,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  WhyChooseUsSection,
  WhyChooseUsContainer,
  ChooseUsGrid,
  ChooseUsCard,
  ChooseUsIcon,
  ChooseUsTitle,
  ChooseUsDescription,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialClient,
  ClientName,
  ClientCompany
} from './home.styles';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Lyayo Designs | Web Design Company in Nepal"
      description="Lyayo Designs is a leading web design company in Nepal with 5+ years of experience creating stunning websites at affordable rates."
    >
      {/* Hero Section */}
      <HeroSection paddingTop="0" paddingBottom="0">
        <HeroContent>
          <FadeIn direction="up" delay={0.2}>
            <HeroText>
              <HeroTitle>Turning <span>Ideas</span> into Digital Experiences</HeroTitle>
              <HeroSubtitle>
                Lyayo Designs is a Web Design Company in Nepal with more than 5 years of experience in creating stunning websites that look great on any device. Our web design services offer quality solutions at affordable rates.
              </HeroSubtitle>
              <ButtonGroup>
                <AnimatedButton variant="primary" size="large">Our Services</AnimatedButton>
                <AnimatedButton variant="outline" size="large">Get a Quote</AnimatedButton>
              </ButtonGroup>
              
              <HeroStats>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>5+</HeroStatNumber>
                    <HeroStatLabel>Years Experience</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>100+</HeroStatNumber>
                    <HeroStatLabel>Projects Completed</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
                <AnimatedCard>
                  <StatItem>
                    <HeroStatNumber>50+</HeroStatNumber>
                    <HeroStatLabel>Happy Clients</HeroStatLabel>
                  </StatItem>
                </AnimatedCard>
              </HeroStats>
            </HeroText>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Affordable Web Design Services Section */}
      <AffordableServicesSection id="affordable-services">
        <AffordableServicesContainer>
          <FadeIn direction="right" delay={0.2}>
            <AffordableServicesContent>
              <h2>Affordable Web Design Services In Nepal</h2>
              <p>
                We are one of the best web design companies in Nepal. We offer affordable and professional website designing services to small and medium businesses.
              </p>
              <p>
                Our website designers will use a brainstorming session with you to create a design that is inspired by your business. We provide our clients with customized services that cater to their needs, while still maintaining the look and feel they want. We have a team of professionals who have experience in delivering high-quality solutions for businesses of different sizes in diverse industries.
              </p>
              <AnimatedButton variant="primary" size="medium">
                Get a Free Quote
              </AnimatedButton>
            </AffordableServicesContent>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <AffordableServicesImageContainer>
              <LazyImage
                src="/images/image1.jpg"
                alt="Affordable Web Design Services"
                height="400px"
              />
            </AffordableServicesImageContainer>
          </ScaleIn>
        </AffordableServicesContainer>
      </AffordableServicesSection>

      {/* Services Section */}
      <Section id="services">
        <ScrollReveal animation="slideUp" staggerChildren={true} staggerDelay={0.1} triggerOnce={true}>
          <SectionHeader>
            <h2>Web Design / Web Development Service</h2>
            <p>We offer WordPress Website Designs, Custom WordPress Themes, Web Hosting, Shopify Themes, Responsive Designs, Woocommerce Solutions, Mobile App Development Services, SEO Optimization and much more!</p>
          </SectionHeader>
          <ServicesGrid>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaLaptopCode as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Website Design</ServiceTitle>
                <ServiceDescription>
                  Our web developers from Nepal take your ideas from inception to completion in order to deliver beautiful, functional web designs that are well-structured, responsive, and easy to maintain.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaSearch as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>SEO Optimization</ServiceTitle>
                <ServiceDescription>
                  We also offer search engine optimization services in Nepal. Our expert SEO team will help you increase your online presence by using optimized keywords for your site to increase the number of visitors to your website and the number of conversions they make.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaMobileAlt as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Mobile Application</ServiceTitle>
                <ServiceDescription>
                  We offer custom mobile app development services in Nepal for both iOS and Android devices through our in-house development team of developers and designers to provide the best design possible.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaWordpress as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>WordPress Solutions</ServiceTitle>
                <ServiceDescription>
                  We specialize in WordPress website designs, custom themes, and WooCommerce solutions to create powerful, flexible websites that you can easily manage and update.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaShoppingCart as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>E-Commerce</ServiceTitle>
                <ServiceDescription>
                  From Shopify themes to WooCommerce solutions, we build secure, user-friendly online stores that help Nepali businesses sell products and services online effectively.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
            <AnimatedCard>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  {React.createElement(FaIcons.FaServer as React.ComponentType<IconBaseProps>)}
                </ServiceIcon>
                <ServiceTitle>Web Hosting</ServiceTitle>
                <ServiceDescription>
                  We provide reliable web hosting services to ensure your website stays fast, secure, and accessible to your customers at all times.
                </ServiceDescription>
                <LearnMoreButton variant="text" icon={React.createElement(FaIcons.FaArrowRight as React.ComponentType<IconBaseProps>)} iconPosition="right">
                  Learn More
                </LearnMoreButton>
              </ServiceCard>
            </AnimatedCard>
          </ServicesGrid>
        </ScrollReveal>
      </Section>

      {/* Other Features Section */}
      <FeaturesSection id="features">
        <ScrollReveal animation="slideUp" staggerChildren={true} staggerDelay={0.1} triggerOnce={true}>
          <SectionHeader>
            <h2>Other Features</h2>
          </SectionHeader>
          <FeaturesGrid>
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaServer as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Web Hosting</FeatureTitle>
                <FeatureDescription>
                  We have partnered with hosting providers to provide the best hosting services in Nepal.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaMobileAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Mobile Responsive Design</FeatureTitle>
                <FeatureDescription>
                  Our mobile-optimized website design ensures that your site renders well on any device.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaChartLine as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Digital Marketing</FeatureTitle>
                <FeatureDescription>
                  From social media management to search engine optimization, we've got you covered.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaPencilAlt as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Copywriting</FeatureTitle>
                <FeatureDescription>
                  We love to work with brands who are looking for creative words that make them stand out from the competition.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaPaintBrush as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Branding</FeatureTitle>
                <FeatureDescription>
                  We design logos, websites, graphics, and other marketing materials to help people shine through their brands.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <FeatureCard className="feature-card">
                <FeatureIcon>
                  {React.createElement(FaIcons.FaHeadset as React.ComponentType<IconBaseProps>)}
                </FeatureIcon>
                <FeatureTitle>Support</FeatureTitle>
                <FeatureDescription>
                  We train our clients to navigate throughout the website and we are available 24/7 for support.
                </FeatureDescription>
              </FeatureCard>
            </AnimatedCard>
          </FeaturesGrid>
        </ScrollReveal>
      </FeaturesSection>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection id="why-choose-us">
        <WhyChooseUsContainer>
          <ScrollReveal animation="slideUp" triggerOnce={true}>
            <SectionHeader>
              <h2>Why Choose Us?</h2>
              <p>We are a team of experienced web designers and developers who are passionate about creating beautiful and functional websites that help businesses grow.</p>
            </SectionHeader>
            <ChooseUsGrid>
              <AnimatedCard>
                <ChooseUsCard className="choose-us-card">
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaSearchDollar as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>SEO Optimized Copywriting</ChooseUsTitle>
                  <ChooseUsDescription>
                    We help clients increase their online presence by using optimized keywords for their site to increase the number of visitors to your website and the number of conversions they make.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
              
              <AnimatedCard>
                <ChooseUsCard className="choose-us-card">
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaUsers as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>Fulfill The Needs Of Every Client</ChooseUsTitle>
                  <ChooseUsDescription>
                    Our team creates websites that are tailored to the needs of each individual business, with an emphasis on aesthetics, simplicity, and functionality.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
              
              <AnimatedCard>
                <ChooseUsCard className="choose-us-card">
                  <ChooseUsIcon>
                    {React.createElement(FaIcons.FaHashtag as React.ComponentType<IconBaseProps>)}
                  </ChooseUsIcon>
                  <ChooseUsTitle>Social Media Channels</ChooseUsTitle>
                  <ChooseUsDescription>
                    We know what it takes to gain visibility and cultivate a thriving audience on all social media channels.
                  </ChooseUsDescription>
                </ChooseUsCard>
              </AnimatedCard>
            </ChooseUsGrid>
          </ScrollReveal>
        </WhyChooseUsContainer>
      </WhyChooseUsSection>
      
      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials">
        <ScrollReveal animation="slideUp" triggerOnce={true}>
          <SectionHeader>
            <h2>What Our Clients Have To Say About Us</h2>
          </SectionHeader>
          <TestimonialsGrid>
            <AnimatedCard>
              <TestimonialCard className="testimonial-card">
                <TestimonialText>
                  They offer a wide range of services and are always willing to listen to what your needs are. I would recommend them to anyone looking for affordable web design services that will help create a beautiful ecommerce website, as well as other marketing materials.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>eJhola</ClientName>
                  <ClientCompany>eCommerce Company</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <TestimonialCard className="testimonial-card">
                <TestimonialText>
                  I was really impressed with how they were able to help me create a landing page so quickly. They also offered me a few free design templates that were nice bonuses. The quality of the work is also top notch and I have been pleased with their work every time.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>Buddha Engineering</ClientName>
                  <ClientCompany>Consultancy</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
            
            <AnimatedCard>
              <TestimonialCard className="testimonial-card">
                <TestimonialText>
                  I loved working with Lyayo Designs on my web design project. I had a tight budget and they were able to work with me to create an elegant site that I am really proud of. The project was done on time and they also offered me a few free design templates.
                </TestimonialText>
                <TestimonialClient>
                  <ClientName>Shaligram Nepal</ClientName>
                  <ClientCompany>Online Store</ClientCompany>
                </TestimonialClient>
              </TestimonialCard>
            </AnimatedCard>
          </TestimonialsGrid>
        </ScrollReveal>
      </TestimonialsSection>
      
      {/* Stats Section */}
      <Section id="stats">
        <StatsContainer>
          <AnimatedCard>
            <StatCard>
              <StatNumber>100+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>250+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>5+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </AnimatedCard>
          <AnimatedCard>
            <StatCard>
              <StatNumber>15</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
          </AnimatedCard>
        </StatsContainer>
      </Section>

      {/* CTA Section */}
      <CTASection id="cta">
        <CTAContainer>
          <FadeIn direction="up" delay={0.2}>
            <CTATitle style={{ color: 'white' }}>Ready to Elevate Your Online Presence in Nepal?</CTATitle>
            <CTADescription style={{ color: 'white' }}>
              Let's work together to create a stunning website that helps your business stand out in the Nepali market. Contact us today for affordable, high-quality web design services!
            </CTADescription>
            <ButtonWrapper>
              <AnimatedButton size="large" variant="secondary" href="/contact">
                Get in Touch
              </AnimatedButton>
            </ButtonWrapper>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default HomePage;
