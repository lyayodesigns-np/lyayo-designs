import styled from 'styled-components';
import Section from '../../components/common/Section';

// Hero Section
export const HeroSection = styled(Section)`
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

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  padding: ${({ theme }) => theme.space[12]} 0;
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// Service Section
export const ServiceSection = styled(Section)`
  scroll-margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: all 0.3s ease;
`;

export const ServiceContent = styled.div`
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

export const ServiceText = styled.div<ServiceTextProps>`
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
    line-height: 1.6;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: ${({ reverse }) => (reverse ? 1 : 2)};
  }
`;

interface ServiceImageContainerProps {
  reverse?: boolean;
}

export const ServiceImageContainer = styled.div<ServiceImageContainerProps>`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

export const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const ServiceFeature = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.space[2]};
`;

// Process Section
export const ProcessSection = styled(Section)`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : '#f9f9f9'};
  position: relative;
  overflow: hidden;
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[8]};
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProcessSteps = styled.div`
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

export const ProcessStep = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -30px;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0 auto ${({ theme }) => theme.space[4]};
`;

export const StepTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
`;

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

// Pricing Section
export const PricingSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  
  h2 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.space[8]};
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PricingPlans = styled.div`
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

interface PricingPlanProps {
  featured?: boolean;
}

export const PricingPlan = styled.div<PricingPlanProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.standard}, box-shadow ${({ theme }) => theme.transitions.standard};
  border: 2px solid ${({ featured, theme }) => (featured ? theme.colors.primary : theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)')};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

interface PlanNameProps {
  featured?: boolean;
}

export const PlanName = styled.h3<PlanNameProps>`
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ featured, theme }) => (featured ? theme.colors.primary : theme.colors.text)};
`;

export const PlanPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

export const PlanFeatures = styled.ul`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.space[6]};
  list-style-type: none;
  padding: 0;
`;

export const PlanFeature = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PlanFeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.success};
  margin-right: ${({ theme }) => theme.space[2]};
`;

// CTA Section
export const CTASection = styled(Section)`
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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

export const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const CTAText = styled.p`
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;
