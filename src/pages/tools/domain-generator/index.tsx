import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../../components/layout/Layout';
import Section from '../../../components/common/Section';
import Button from '../../../components/common/Button';
import { FadeIn, ScaleIn } from '../../../components/animations';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

// Hero Section
const HeroSection = styled(Section)`
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

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  padding: ${({ theme }) => theme.space[8]} 0;
`;

const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// Generator Section
const GeneratorContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
`;

const GeneratorForm = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const FormInput = styled.input`
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ExtensionSelect = styled.div`
  position: relative;
  width: 100%;
`;

const SelectInput = styled.input`
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

const SelectDropdown = styled.div<{ isOpen: boolean }>`
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

const SelectOption = styled.div`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const GenerateButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

const ResultsContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[6]};
`;

const ResultsTable = styled.div`
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const ResultsBody = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ResultRow = styled.div`
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

const DomainName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const DomainActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

const IconButton = styled.button`
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

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[8]};
`;

const LoadingSpinner = styled.div`
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

interface DomainSuggestion {
  name: string;
  available: boolean;
}

const DomainGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [extension, setExtension] = useState('.com');
  const [extensionDropdownOpen, setExtensionDropdownOpen] = useState(false);
  const [maxLength, setMaxLength] = useState('');
  const [suggestions, setSuggestions] = useState<DomainSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const extensions = ['.com', '.net', '.org', '.io', '.co', '.ai', '.app', '.dev'];
  
  const toggleExtensionDropdown = () => {
    setExtensionDropdownOpen(!extensionDropdownOpen);
  };
  
  const selectExtension = (ext: string) => {
    setExtension(ext);
    setExtensionDropdownOpen(false);
  };
  
  const generateDomainNames = () => {
    if (!keywords.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const keywordArray = keywords.toLowerCase().split(/\s+/);
      const generatedDomains: DomainSuggestion[] = [];
      const maxLengthNum = maxLength ? parseInt(maxLength) : 20;
      
      // Generate domain names based on keywords
      const prefixes = ['get', 'my', 'the', 'best', 'top', 'pro', 'smart', 'go'];
      const suffixes = ['hub', 'spot', 'zone', 'space', 'app', 'site', 'hq', 'now', 'ly'];
      
      // Direct combinations
      keywordArray.forEach(keyword => {
        // Simple keyword + extension
        if ((keyword + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${keyword}${extension}`,
            available: Math.random() > 0.3 // Randomly determine availability
          });
        }
        
        // With random prefix
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        if ((randomPrefix + keyword + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${randomPrefix}${keyword}${extension}`,
            available: Math.random() > 0.3
          });
        }
        
        // With random suffix
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        if ((keyword + randomSuffix + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${keyword}${randomSuffix}${extension}`,
            available: Math.random() > 0.3
          });
        }
      });
      
      // Combine keywords if there are multiple
      if (keywordArray.length > 1) {
        // Combine all keywords
        const combined = keywordArray.join('');
        if ((combined + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${combined}${extension}`,
            available: Math.random() > 0.3
          });
        }
        
        // Combine with camelCase
        const camelCase = keywordArray.map((word, index) => 
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        if ((camelCase + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${camelCase}${extension}`,
            available: Math.random() > 0.3
          });
        }
        
        // Combine with hyphens
        const hyphenated = keywordArray.join('-');
        if ((hyphenated + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${hyphenated}${extension}`,
            available: Math.random() > 0.3
          });
        }
      }
      
      // Add some creative variations
      if (keywordArray.length === 1) {
        const keyword = keywordArray[0];
        
        // Add "ify" suffix
        if ((keyword + 'ify' + extension).length <= maxLengthNum) {
          generatedDomains.push({
            name: `${keyword}ify${extension}`,
            available: Math.random() > 0.3
          });
        }
      }
      
      // Remove duplicates and limit to 15 suggestions
      const uniqueDomains = Array.from(new Set(generatedDomains.map(d => d.name)))
        .map(name => generatedDomains.find(d => d.name === name)!)
        .slice(0, 15);
      
      setSuggestions(uniqueDomains);
      setIsLoading(false);
    }, 1500);
  };
  
  const copyToClipboard = (domainName: string) => {
    navigator.clipboard.writeText(domainName);
    // You could add a toast notification here
  };
  
  const checkAvailability = (domainName: string) => {
    window.open(`https://www.namecheap.com/domains/registration/results/?domain=${domainName}`, '_blank');
  };
  
  return (
    <Layout
      title="Domain Name Generator - Find Your Perfect Domain"
      description="Generate unique and available domain names for your business or project with our AI-powered domain name generator tool."
      keywords="domain name generator, domain suggestions, business name ideas, website name generator, domain availability checker"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Domain Name Generator</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Find the perfect domain name for your business or project
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>
      
      {/* Generator Section */}
      <Section>
        <GeneratorContainer>
          <FadeIn>
            <GeneratorForm>
              <FormTitle>Enter Keywords or Domain Names</FormTitle>
              <FormInput 
                type="text" 
                placeholder="e.g., tech, creative, business" 
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              
              <FormRow>
                <FormGroup>
                  <FormLabel>Domain Extension</FormLabel>
                  <ExtensionSelect>
                    <SelectInput
                      value={extension}
                      onClick={toggleExtensionDropdown}
                      readOnly
                    />
                    <SelectDropdown isOpen={extensionDropdownOpen}>
                      {extensions.map((ext, index) => (
                        <SelectOption key={index} onClick={() => selectExtension(ext)}>
                          {ext}
                        </SelectOption>
                      ))}
                    </SelectDropdown>
                  </ExtensionSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Maximum Length</FormLabel>
                  <FormInput 
                    type="number" 
                    placeholder="8" 
                    value={maxLength}
                    onChange={(e) => setMaxLength(e.target.value)}
                  />
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    Between 3-15 characters
                  </div>
                </FormGroup>
              </FormRow>
              
              <ScaleIn delay={0.2}>
                <GenerateButton 
                  variant="primary" 
                  size="medium" 
                  onClick={generateDomainNames}
                  disabled={isLoading}
                >
                  {isLoading ? 'Generating...' : 'GENERATE DOMAINS'}
                </GenerateButton>
              </ScaleIn>
            </GeneratorForm>
            
            {isLoading ? (
              <LoadingContainer>
                <LoadingSpinner />
              </LoadingContainer>
            ) : hasSearched && suggestions.length > 0 ? (
              <ResultsContainer>
                <ResultsTable>
                  <ResultsHeader>
                    <div>Domain Name</div>
                    <div>Actions</div>
                  </ResultsHeader>
                  <ResultsBody>
                    {suggestions.map((domain, index) => (
                      <ScaleIn key={index} delay={index * 0.05}>
                        <ResultRow>
                          <DomainName>{domain.name}</DomainName>
                          <DomainActions>
                            <IconButton 
                              onClick={() => copyToClipboard(domain.name)}
                              title="Copy to clipboard"
                            >
                              {React.createElement(FaIcons.FaCopy as React.ComponentType<IconBaseProps>)}
                            </IconButton>
                            <IconButton 
                              onClick={() => checkAvailability(domain.name)}
                              title="Check availability"
                            >
                              {React.createElement(FaIcons.FaExternalLinkAlt as React.ComponentType<IconBaseProps>)}
                            </IconButton>
                          </DomainActions>
                        </ResultRow>
                      </ScaleIn>
                    ))}
                  </ResultsBody>
                </ResultsTable>
              </ResultsContainer>
            ) : hasSearched ? (
              <NoResults>
                <h3>No domain suggestions found</h3>
                <p>Try different keywords or select more domain extensions.</p>
              </NoResults>
            ) : null}
          </FadeIn>
        </GeneratorContainer>
      </Section>
    </Layout>
  );
};

export default DomainGenerator;
