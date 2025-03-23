import styled from 'styled-components';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';

// Hero Section
export const HeroSection = styled(Section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.isDark 
    ? `linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)` 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  padding-top: 80px;
  padding-bottom: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zm63 31c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zM34 90c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zm56-76c1.657 0 3-1.343 3-3s-.895-3-2-3-3 .895-3 2 .895 3 2 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: ${({ theme }) => theme.isDark ? 0.3 : 0.5};
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const HeroText = styled.div`
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
  
  span {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[6]};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[8]};
  margin-top: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroStatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

export const HeroStatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: rgba(255, 255, 255, 0.8);
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Services Section
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  h2 {
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.shorter};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ServicesGrid = styled.div`
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

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  button {
    align-self: flex-start;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const ServiceTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const LearnMoreButton = styled(Button)`
  margin-top: auto;
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
`;

// Stats Section
export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
`;

// CTA Section
export const CTASection = styled(Section)`
  padding-top: 80px;
  padding-bottom: 80px;
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
`;

export const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const CTATitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const CTADescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

// Affordable Services Section
export const AffordableServicesSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AffordableServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const AffordableServicesContent = styled(SectionHeader)`
  text-align: left;
  
  h2 {
    text-align: left;
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.shorter};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  p {
    text-align: left;
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  button {
    margin: ${({ theme }) => theme.space[4]} 0 0;
    display: inline-block;
  }
`;

export const AffordableServicesImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

// Other Features Section
export const FeaturesSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Why Choose Us Section
export const WhyChooseUsSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

export const WhyChooseUsContainer = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const ChooseUsGrid = styled.div`
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

export const ChooseUsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ChooseUsIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const ChooseUsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const ChooseUsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Testimonials Section
export const TestimonialsSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : theme.colors.backgroundAlt};
`;

export const TestimonialsGrid = styled.div`
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

export const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all ${({ theme }) => theme.transitions.standard};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : theme.colors.backgroundAlt};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space[4]};
  flex-grow: 1;
`;

export const TestimonialClient = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

export const ClientCompany = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;
