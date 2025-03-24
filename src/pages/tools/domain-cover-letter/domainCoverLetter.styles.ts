import styled from 'styled-components';

import Button from '../../../components/common/Button';
import Section from '../../../components/common/Section';

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

export const FormContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.isDark ? '0 4px 12px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)'};
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : '#ffffff'};
`;

export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  padding-bottom: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : 'white'};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(74, 108, 247, 0.2)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.isDark ? theme.colors.darkGray : '#aaa'};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  border-radius: 6px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : 'white'};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(74, 108, 247, 0.2)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.isDark ? theme.colors.darkGray : '#aaa'};
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

export const FormNote = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const RadioLabel = styled.label`
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const GenerateButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(74, 108, 247, 0.2)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const PreviewContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.isDark ? '0 4px 12px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)'};
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : 'white'};
`;

export const PreviewTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.isDark ? theme.colors.mediumGray : '#e0e0e0'};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(74, 108, 247, 0.03)'};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const PreviewActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

export const IconButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 5px;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(74, 108, 247, 0.1)'};
    border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(74, 108, 247, 0.3)'};
  }
`;

export const CoverLetterPreview = styled.div`
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.isDark ? theme.colors.background : 'white'};
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const LetterHeader = styled.div`
  margin-bottom: 30px;
`;

export const LetterDate = styled.p`
  text-align: right;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LetterAddress = styled.div`
  margin-bottom: 20px;
  
  p {
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LetterSubject = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

export const LetterBody = styled.div`
  margin-bottom: 30px;
  
  p {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LetterSignature = styled.div`
  p {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InfoSection = styled.div`
  margin-top: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
  border-radius: ${({ theme }) => theme.radii.md};
  
  h2 {
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes['xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  
  h3 {
    margin-top: ${({ theme }) => theme.space[6]};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes['lg']};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

export const StepsList = styled.ol`
  margin-top: ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[6]};
  
  li {
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

export const GuideSection = styled.div`
  margin-top: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const GuideTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

export const GuideSubtitle = styled.h3`
  margin-top: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-bottom: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const GuideParagraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const BulletList = styled.ul`
  margin-top: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[6]};
  
  li {
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    position: relative;
    
    &::before {
      content: "•";
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;
