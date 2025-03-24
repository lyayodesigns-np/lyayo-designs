import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import LazyImage from '../../components/common/LazyImage';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import Section from '../../components/common/Section';
import { FadeIn, ScaleIn, ScrollReveal, AnimatedCard } from '../../components/animations';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  StoryContent,
  StoryText,
  StoryImageContainer,
  ValuesContainer,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  TeamContainer,
  TeamGrid,
  TeamMemberCard,
  TeamMemberImageWrapper,
  TeamMemberImage,
  TeamMemberOverlay,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberRole,
  TeamMemberBio,
  TeamSocialLinks,
  TeamSocialLink,
  TeamFilters,
  TeamFilterButton,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription
} from './about.styles';
import { ButtonLink } from '../services/seo/seo.styles';

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
      image: '/images/headshot/headshot1.jpg',
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
      image: '/images/headshot/headshot2g.jpg',
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
      image: '/images/headshot/headshot3.jpg',
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
      image: '/images/headshot/headshot9.JPG',
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
      image: '/images/headshot/headshot5.jpg',
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
      image: '/images/headshot/headshot8.jpeg',
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
            <ButtonLink href="/careers/">
                <Button size="large" variant="primary">
                View Openings
                </Button>
              </ButtonLink>
            </ScaleIn>
          </FadeIn>
        </CTAContainer>
      </CTASection>
    </Layout>
  );
};

export default AboutPage;
