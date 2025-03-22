import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn, ScrollReveal, AnimatedCard } from '../../components/animations';

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

// Story Section
const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const StoryText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
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
    order: 2;
  }
`;

const StoryImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.1;
    border-radius: ${({ theme }) => theme.radii.md};
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.1;
    border-radius: ${({ theme }) => theme.radii.md};
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

// Values Section
const ValuesContainer = styled.div`
  padding: ${({ theme }) => theme.space[10]};
  border-radius: ${({ theme }) => theme.radii.xl};
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : "#f9f9f9"};
  box-shadow: ${({ theme }) => theme.isDark ? 'none' : theme.shadows.sm};
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
      ? 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)' 
      : 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'};
    z-index: 0;
  }
  
  h2 {
    position: relative;
    z-index: 1;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[8]};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ValuesGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.colors.backgroundAlt};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.isDark 
    ? 'rgba(59, 130, 246, 0.1)' 
    : 'rgba(59, 130, 246, 0.05)'};
  border-radius: 50%;
`;

const ValueTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Team Section
const TeamContainer = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
      margin: 15px auto 0;
    }
  }
  
  > p {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[8]};
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMemberImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md} ${({theme}) => theme.radii.md} 0 0;
  height: 300px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 2;
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const TeamMemberOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const TeamMemberCard = styled.div`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-5px);
    
    ${TeamMemberImageWrapper}::before {
      transform: translateY(0);
    }
    
    ${TeamMemberImage} {
      transform: scale(1.05);
    }
    
    ${TeamMemberOverlay} {
      opacity: 1;
    }
  }
`;

const TeamMemberInfo = styled.div`
  padding: ${({ theme }) => theme.space[5]};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  z-index: 1;
`;

const TeamMemberName = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const TeamMemberRole = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TeamMemberBio = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const TeamSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const TeamSocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    color: white;
    transform: translateY(-3px);
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const TeamFilters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamFilterButton = styled.button<{ active?: boolean }>`
  background-color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  color: ${({ theme, active }) => active ? (theme.isDark ? theme.colors.text : 'white') : theme.colors.text};
  border: none;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.3s ease;
  min-width: 100px;
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.colors.primary : theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    transform: translateY(-2px);
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
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const CTADescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: white;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    // Scroll to the top of the team section
    const teamSection = document.getElementById('our-team');
    if (teamSection) {
      const headerOffset = 120; // Account for fixed header
      const elementPosition = teamSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Define team members with categories
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/300x300',
      bio: 'With over 10 years of experience in web design and digital marketing, Rajesh founded Lyayo Designs to help Nepali businesses establish a strong online presence.',
      categories: ['leadership'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaTwitter, url: 'https://twitter.com' },
        { icon: FaIcons.FaEnvelope, url: 'mailto:rajesh@lyayodesigns.com' }
      ]
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Lead Designer',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Priya brings creativity and innovation to every project. With a background in graphic design and UX/UI, she ensures all Lyayo websites are visually stunning and user-friendly.',
      categories: ['design', 'leadership'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaDribbble, url: 'https://dribbble.com' },
        { icon: FaIcons.FaBehance, url: 'https://behance.net' }
      ]
    },
    {
      id: 3,
      name: 'Arun Kumar',
      role: 'Senior Developer',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Arun specializes in front-end development and has mastered the art of bringing designs to life with clean, efficient code and seamless functionality.',
      categories: ['development'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaGithub, url: 'https://github.com' },
        { icon: FaIcons.FaStackOverflow, url: 'https://stackoverflow.com' }
      ]
    },
    {
      id: 4,
      name: 'Maya Gurung',
      role: 'Marketing Specialist',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Maya helps clients maximize their online presence through strategic digital marketing campaigns, SEO optimization, and social media management.',
      categories: ['marketing'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaTwitter, url: 'https://twitter.com' },
        { icon: FaIcons.FaInstagram, url: 'https://instagram.com' }
      ]
    },
    {
      id: 5,
      name: 'Sanjay Thapa',
      role: 'Backend Developer',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Sanjay is our database and server-side expert, ensuring all Lyayo websites are secure, fast, and built on a solid technical foundation.',
      categories: ['development'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaGithub, url: 'https://github.com' },
        { icon: FaIcons.FaCode, url: 'https://codepen.io' }
      ]
    },
    {
      id: 6,
      name: 'Anita Rai',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Anita focuses on creating intuitive user experiences and interfaces that delight users while meeting business objectives.',
      categories: ['design'],
      socialLinks: [
        { icon: FaIcons.FaLinkedin, url: 'https://linkedin.com' },
        { icon: FaIcons.FaDribbble, url: 'https://dribbble.com' },
        { icon: FaIcons.FaInstagram, url: 'https://instagram.com' }
      ]
    }
  ];
  
  // Filter team members based on active filter
  const filteredTeamMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.categories.includes(activeFilter));
  
  return (
    <Layout
      title="About Lyayo Designs - Our Story, Values, and Team"
      description="Learn about Lyayo Designs, our story, our core values, and the talented team behind our creative design solutions."
      keywords="about Lyayo Designs, design agency, creative team, company values, design philosophy"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>About Lyayo Designs</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              We're a team of passionate designers and developers dedicated to creating exceptional digital experiences.
            </HeroSubtitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} duration={0.7}>
            <Button size="large" variant="primary">
              Get to Know Us
            </Button>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      {/* Our Story Section */}
      <Section id="our-story" paddingTop="100px" paddingBottom="100px">
        <StoryContent>
          <FadeIn direction="right">
            <StoryText>
              <h2>Our Story</h2>
              <p>
                Lyayo Designs was founded in 2020 with a simple mission: to help businesses of all sizes establish a strong online presence through beautiful, functional design. What started as a small freelance operation has grown into a full-service design agency with a team of talented designers, developers, and marketers.
              </p>
              <p>
                Our founder, Jane Doe, noticed that many small businesses struggled to find affordable, high-quality design services that truly understood their needs. She set out to create an agency that would bridge this gap, offering professional design solutions with a personal touch.
              </p>
              <p>
                Over the years, we've had the privilege of working with clients across various industries, from startups to established enterprises. Each project has taught us valuable lessons and helped us refine our craft, making us the agency we are today.
              </p>
              <Button variant="primary" size="medium">Learn More</Button>
            </StoryText>
          </FadeIn>
          <FadeIn direction="left" delay={0.3}>
            <StoryImageContainer>
              <LazyImage
                src="/images/image2.jpg"
                alt="Lyayo Designs Story"
                height="400px"
              />
            </StoryImageContainer>
          </FadeIn>
        </StoryContent>
      </Section>

      {/* Our Values Section */}
      <Section id="our-values" paddingTop="100px" paddingBottom="100px">
        <ValuesContainer>
          <FadeIn>
            <h2>Our Core Values</h2>
            <p>These principles guide everything we do at Lyayo Designs.</p>
          </FadeIn>
          <ScrollReveal staggerChildren={true} staggerDelay={0.1} animation="slideUp" triggerOnce={true}>
            <ValuesGrid>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaStar as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Excellence</ValueTitle>
                  <ValueDescription>
                    We strive for excellence in every project we undertake, paying close attention to detail and delivering work that exceeds expectations.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaHandshake as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Collaboration</ValueTitle>
                  <ValueDescription>
                    We believe in the power of collaboration, working closely with our clients and each other to achieve the best possible results.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaLightbulb as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Innovation</ValueTitle>
                  <ValueDescription>
                    We embrace innovation and stay at the forefront of design trends and technologies to deliver cutting-edge solutions.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaHeart as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Passion</ValueTitle>
                  <ValueDescription>
                    We're passionate about design and genuinely care about helping our clients succeed through effective visual communication.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaUserFriends as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Client-Centric</ValueTitle>
                  <ValueDescription>
                    We put our clients at the center of everything we do, listening to their needs and tailoring our solutions accordingly.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
              <AnimatedCard hoverEffect="lift">
                <ValueCard>
                  <ValueIcon>
                    {React.createElement(FaIcons.FaBalanceScale as React.ComponentType<IconBaseProps>)}
                  </ValueIcon>
                  <ValueTitle>Integrity</ValueTitle>
                  <ValueDescription>
                    We operate with integrity and transparency, building trust with our clients through honest communication and ethical practices.
                  </ValueDescription>
                </ValueCard>
              </AnimatedCard>
            </ValuesGrid>
          </ScrollReveal>
        </ValuesContainer>
      </Section>

      {/* Our Team Section */}
      <Section id="our-team" paddingTop="100px" paddingBottom="100px">
        <TeamContainer>
          <FadeIn>
            <h2>Meet Our Team</h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
              The talented individuals behind Lyayo Designs who bring creativity, expertise, and passion to every project we undertake.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <TeamFilters>
              <TeamFilterButton 
                active={activeFilter === 'all'} 
                onClick={() => handleFilterClick('all')}
              >
                All
              </TeamFilterButton>
              <TeamFilterButton 
                active={activeFilter === 'leadership'} 
                onClick={() => handleFilterClick('leadership')}
              >
                Leadership
              </TeamFilterButton>
              <TeamFilterButton 
                active={activeFilter === 'design'} 
                onClick={() => handleFilterClick('design')}
              >
                Design
              </TeamFilterButton>
              <TeamFilterButton 
                active={activeFilter === 'development'} 
                onClick={() => handleFilterClick('development')}
              >
                Development
              </TeamFilterButton>
              <TeamFilterButton 
                active={activeFilter === 'marketing'} 
                onClick={() => handleFilterClick('marketing')}
              >
                Marketing
              </TeamFilterButton>
            </TeamFilters>
          </FadeIn>
          
          <ScrollReveal staggerChildren={true} staggerDelay={0.1} animation="scale" triggerOnce={true}>
            <TeamGrid>
              {filteredTeamMembers.map((member) => (
                <AnimatedCard key={member.id} hoverEffect="tilt">
                  <TeamMemberCard>
                    <TeamMemberImageWrapper>
                      <TeamMemberImage src={member.image} alt={member.name} />
                      <TeamMemberOverlay />
                    </TeamMemberImageWrapper>
                    <TeamMemberInfo>
                      <TeamMemberName>{member.name}</TeamMemberName>
                      <TeamMemberRole>{member.role}</TeamMemberRole>
                      <TeamMemberBio initial={{ height: 0, opacity: 0 }} whileHover={{ height: 'auto', opacity: 1 }}>
                        <p>{member.bio}</p>
                      </TeamMemberBio>
                      <TeamSocialLinks>
                        {member.socialLinks.map((link, index) => (
                          <TeamSocialLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {React.createElement(link.icon as React.ComponentType<IconBaseProps>)}
                          </TeamSocialLink>
                        ))}
                      </TeamSocialLinks>
                    </TeamMemberInfo>
                  </TeamMemberCard>
                </AnimatedCard>
              ))}
            </TeamGrid>
          </ScrollReveal>
        </TeamContainer>
      </Section>

      {/* CTA Section */}
      <CTASection id="cta">
        <CTAContainer>
          <FadeIn direction="up">
            <CTATitle>Want to Join Our Team?</CTATitle>
            <CTADescription>
              We're always looking for talented individuals to join our team. Check out our current openings or send us your resume.
            </CTADescription>
            <ScaleIn delay={0.3}>
              <Button size="large" variant="primary">
                View Openings
              </Button>
            </ScaleIn>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default AboutPage;
