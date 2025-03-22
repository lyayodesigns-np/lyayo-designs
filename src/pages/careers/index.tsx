import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Button from '../../components/common/Button';
import Layout from '../../components/layout/Layout';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.space[4]} 80px;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space[10]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const JobList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[6]};
`;

const JobCard = styled.div`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const JobMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const JobType = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const JobLocation = styled.span`
  display: flex;
  align-items: center;
`;

const JobDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BenefitsList = styled.ul`
  margin: ${({ theme }) => theme.space[6]} 0;
  padding-left: ${({ theme }) => theme.space[6]};
`;

const BenefitItem = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ApplicationForm = styled.div`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[8]};
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.2)' : theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.2)' : theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

const FileUpload = styled.div`
  margin-top: ${({ theme }) => theme.space[2]};
`;

const CareersPage: React.FC = () => {
  return (
    <Layout title="Careers | Lyayo Designs" description="Join our team at Lyayo Designs - Web design and development career opportunities in Nepal.">
      <PageContainer>
        <FadeIn>
          <PageTitle>Careers at Lyayo Designs</PageTitle>
          <Paragraph>
            Join our team of creative professionals and help us build amazing digital experiences for clients around the world. We're always looking for talented individuals who are passionate about web design and development.
          </Paragraph>
        </FadeIn>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Why Work With Us</SectionTitle>
            <Paragraph>
              At Lyayo Designs, we believe in creating an environment where creativity thrives and innovation is encouraged. We offer a collaborative workspace where your ideas matter and your growth is prioritized.
            </Paragraph>
            
            <BenefitsList>
              <BenefitItem>Flexible work arrangements and remote work options</BenefitItem>
              <BenefitItem>Competitive salary and performance bonuses</BenefitItem>
              <BenefitItem>Professional development opportunities and learning resources</BenefitItem>
              <BenefitItem>Collaborative and inclusive work culture</BenefitItem>
              <BenefitItem>Work on diverse projects across various industries</BenefitItem>
              <BenefitItem>Regular team building activities and events</BenefitItem>
            </BenefitsList>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Open Positions</SectionTitle>
            
            <JobList>
              <JobCard>
                <JobTitle>Senior Web Developer</JobTitle>
                <JobMeta>
                  <JobType>Full-time</JobType>
                  <JobLocation>Kathmandu, Nepal (Hybrid)</JobLocation>
                </JobMeta>
                <JobDescription>
                  We're looking for an experienced web developer with strong skills in React, Node.js, and modern frontend frameworks. You'll be responsible for building responsive and performant web applications for our clients.
                </JobDescription>
                <Button variant="primary">Apply Now</Button>
              </JobCard>
              
              <JobCard>
                <JobTitle>UI/UX Designer</JobTitle>
                <JobMeta>
                  <JobType>Full-time</JobType>
                  <JobLocation>Kathmandu, Nepal (Hybrid)</JobLocation>
                </JobMeta>
                <JobDescription>
                  We're seeking a talented UI/UX designer with a strong portfolio of digital products. You'll work closely with our development team to create beautiful, intuitive interfaces that delight users.
                </JobDescription>
                <Button variant="primary">Apply Now</Button>
              </JobCard>
              
              <JobCard>
                <JobTitle>Digital Marketing Specialist</JobTitle>
                <JobMeta>
                  <JobType>Part-time</JobType>
                  <JobLocation>Remote</JobLocation>
                </JobMeta>
                <JobDescription>
                  Join our marketing team to help clients grow their online presence. You'll develop and implement digital marketing strategies, manage social media campaigns, and analyze performance metrics.
                </JobDescription>
                <Button variant="primary">Apply Now</Button>
              </JobCard>
            </JobList>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Don't See a Fit?</SectionTitle>
            <Paragraph>
              We're always interested in connecting with talented individuals. If you don't see a position that matches your skills but believe you could add value to our team, send us your resume and we'll keep it on file for future opportunities.
            </Paragraph>
            
            <ApplicationForm>
              <FormTitle>General Application</FormTitle>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="Your full name" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="Your email address" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" placeholder="Your phone number" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="position">Position of Interest</Label>
                <Input type="text" id="position" placeholder="What role are you interested in?" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Cover Letter</Label>
                <Textarea id="message" placeholder="Tell us about yourself and why you'd like to join our team" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="resume">Resume/CV</Label>
                <FileUpload>
                  <Input type="file" id="resume" />
                </FileUpload>
              </FormGroup>
              
              <Button variant="primary" size="large">Submit Application</Button>
            </ApplicationForm>
          </Section>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default CareersPage;
