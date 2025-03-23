import styled from 'styled-components';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';

// Hero Section
export const HeroSection = styled(Section)`
  position: relative;
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  overflow: hidden;
  padding: ${({ theme }) => theme.space[8]} 0;
  
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
  padding: ${({ theme }) => theme.space[8]} 0;
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// Generator Section
export const GeneratorContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
`;

export const GeneratorForm = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[4]};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const ExtensionSelect = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SelectDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
`;

export const SelectOption = styled.div`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

export const GenerateButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const ResultsContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[6]};
`;

export const ResultsTable = styled.div`
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

export const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ResultsBody = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const ResultRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  border-bottom: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  }
`;

export const DomainName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const DomainActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[8]};
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
