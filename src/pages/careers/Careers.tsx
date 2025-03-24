import React, { useState } from 'react';
import { FaGlobe, FaLaptop, FaChartLine, FaCheck } from 'react-icons/fa';

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  Paragraph,
  JobList,
  JobCard,
  JobTitle,
  JobMeta,
  JobType,
  JobLocation,
  JobDescription,
  BenefitsList,
  BenefitItem,
  ApplicationForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  FileUpload,
  CardGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './careers.styles';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Button from '../../components/common/Button';
import Layout from '../../components/layout/Layout';

const CareersPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <Layout title="Careers | Lyayo Designs" description="Join our team at Lyayo Designs - Web design and development career opportunities in Nepal.">
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Join Our Creative Team</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Be part of a passionate team building amazing digital experiences for clients around the world.
            </HeroSubtitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.5} duration={0.7}>
            <Button size="large" variant="primary">
              View Opportunities
            </Button>
          </FadeIn>
        </HeroContent>
      </HeroSection>
      
      <PageContainer>
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Why Work With Us</SectionTitle>
            <Paragraph>
              At Lyayo Designs, we believe in creating an environment where creativity thrives and innovation is encouraged. We offer a collaborative workspace where your ideas matter and your growth is prioritized.
            </Paragraph>
            
            <CardGrid>
              <FeatureCard>
                <FeatureIcon>
                  <FaLaptop />
                </FeatureIcon>
                <FeatureTitle>Flexible Work</FeatureTitle>
                <FeatureDescription>
                  Enjoy flexible work arrangements and remote work options that fit your lifestyle.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <FaChartLine />
                </FeatureIcon>
                <FeatureTitle>Growth Opportunities</FeatureTitle>
                <FeatureDescription>
                  Access professional development resources and advance your career with us.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <FaGlobe />
                </FeatureIcon>
                <FeatureTitle>Diverse Projects</FeatureTitle>
                <FeatureDescription>
                  Work on exciting projects across various industries and expand your portfolio.
                </FeatureDescription>
              </FeatureCard>
            </CardGrid>
            
            <BenefitsList>
              <BenefitItem>Competitive salary and performance bonuses</BenefitItem>
              <BenefitItem>Collaborative and inclusive work culture</BenefitItem>
              <BenefitItem>Regular team building activities and events</BenefitItem>
              <BenefitItem>Health and wellness benefits</BenefitItem>
              <BenefitItem>Opportunities to work with international clients</BenefitItem>
              <BenefitItem>Professional development allowance</BenefitItem>
            </BenefitsList>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Current Opening</SectionTitle>
            
            <JobList>
              <JobCard>
                <JobTitle>Content Writer</JobTitle>
                <JobMeta>
                  <JobType>Full-time</JobType>
                  <JobLocation>Kathmandu, Nepal (Hybrid)</JobLocation>
                </JobMeta>
                <JobDescription>
                  We're looking for a talented content writer with excellent research and writing skills. You'll create engaging blog posts, website content, and marketing materials for our clients across various industries. The ideal candidate has experience in SEO writing and can adapt their tone to different brand voices.
                </JobDescription>
                <Button variant="primary" onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply Now
                </Button>
              </JobCard>
            </JobList>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section id="application-form">
            <SectionTitle>General Application</SectionTitle>
            <Paragraph>
              Don't see a position that matches your skills but believe you could add value to our team? Send us your resume and we'll keep it on file for future opportunities.
            </Paragraph>
            
            <ApplicationForm>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" placeholder="Your full name" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" id="email" placeholder="Your email address" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" placeholder="Your phone number" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input type="text" id="position" placeholder="What role are you interested in?" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Cover Letter</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about yourself and why you'd like to join our team" 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="resume">Resume/CV</Label>
                  <FileUpload>
                    <Input type="file" id="resume" required />
                  </FileUpload>
                </FormGroup>
                
                {formSubmitted ? (
                  <div style={{ 
                    padding: '10px', 
                    backgroundColor: 'rgba(0, 128, 0, 0.1)', 
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    <FaCheck style={{ color: 'green' }} />
                    <span>Thank you for your application! We'll review your information and contact you if there's a match.</span>
                  </div>
                ) : (
                  <Button variant="primary" size="large" type="submit">
                    Submit Application
                  </Button>
                )}
              </form>
            </ApplicationForm>
          </Section>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default CareersPage;
