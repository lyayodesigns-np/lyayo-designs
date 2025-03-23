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

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.standard};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[4]};
  min-height: 100px;
  resize: vertical;
  
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

export const RadioGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const RadioInput = styled.input`
  margin-right: ${({ theme }) => theme.space[2]};
  cursor: pointer;
`;

export const GenerateButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const PreviewTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewActions = styled.div`
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

export const CoverLetterPreview = styled.div`
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.6;
  color: #000000; /* Always use black text for better visibility on white background */
  background-color: white;
  padding: ${({ theme }) => theme.space[6]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.isDark ? '0 4px 12px rgba(255, 255, 255, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  max-width: 800px;
  margin: 0 auto;
  
  @media print {
    padding: 20px;
    border: none;
    background-color: white;
    color: black;
    box-shadow: none;
  }
`;

export const LetterHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: #000000; /* Always use black text */
`;

export const LetterDate = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: #000000; /* Always use black text */
`;

export const LetterAddress = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: #000000; /* Always use black text */
  
  p {
    color: #000000; /* Always use black text */
  }
`;

export const LetterSubject = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: #000000; /* Always use black text */
`;

export const LetterBody = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
  
  p {
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: #000000; /* Always use black text */
  }
  
  strong {
    color: #000000; /* Always use black text */
  }
`;

export const LetterSignature = styled.div`
  margin-top: ${({ theme }) => theme.space[6]};
  color: #000000; /* Always use black text */
`;

export const HighlightedText = styled.span`
  background-color: #3b82f6; /* Primary blue color */
  color: white;
  padding: 2px 4px;
  border-radius: 3px;
  font-weight: 500;
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
