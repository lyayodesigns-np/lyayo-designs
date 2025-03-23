import React, { useState } from 'react';
import Layout from '../../../components/layout/Layout';
import Section from '../../../components/common/Section';
import { FadeIn, ScaleIn } from '../../../components/animations';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  GeneratorContainer,
  GeneratorForm,
  FormTitle,
  FormInput,
  FormRow,
  FormGroup,
  FormLabel,
  ExtensionSelect,
  SelectInput,
  SelectDropdown,
  SelectOption,
  GenerateButton,
  ResultsContainer,
  ResultsTable,
  ResultsHeader,
  ResultsBody,
  ResultRow,
  DomainName,
  DomainActions,
  IconButton,
  NoResults,
  LoadingContainer,
  LoadingSpinner
} from './domainGenerator.styles';

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
