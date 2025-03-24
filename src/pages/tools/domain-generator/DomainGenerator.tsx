import axios from 'axios';
import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

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
  ResultsBody,
  ResultCard,
  DomainInfo,
  DomainIcon,
  DomainDetails,
  DomainName,
  DomainTags,
  AvailabilityTag,
  ExtensionTag,
  DomainActions,
  ActionButton,
  ActionText,
  LoadingContainer,
  LoadingSpinner
} from './domainGenerator.styles';
import { FadeIn, ScaleIn } from '../../../components/animations';
import Section from '../../../components/common/Section';
import Layout from '../../../components/layout/Layout';

interface DomainSuggestion {
  name: string;
  available: boolean;
  domain: string;
  zone: string;
}

interface DomainrResponse {
  results: Array<{
    domain: string;
    host: string;
    subdomain: string;
    zone: string;
    path: string;
    registerURL: string;
    availability?: string;
  }>;
}

const DomainGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [extension, setExtension] = useState('.com');
  const [extensionDropdownOpen, setExtensionDropdownOpen] = useState(false);
  const [maxLength, setMaxLength] = useState('15');
  const [suggestions, setSuggestions] = useState<DomainSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const extensions = ['.com', '.net', '.org', '.io', '.co', '.ai', '.app', '.dev'];
  
  const toggleExtensionDropdown = () => {
    setExtensionDropdownOpen(!extensionDropdownOpen);
  };
  
  const selectExtension = (ext: string) => {
    setExtension(ext);
    setExtensionDropdownOpen(false);
  };
  
  const generateDomainNames = async () => {
    if (!keywords.trim()) {
      setError('Please enter at least one keyword');
      return;
    }
    
    setIsLoading(true);
    setHasSearched(true);
    setError(null);
    
    try {
      // Prepare query string with keywords and selected extension
      const query = keywords.toLowerCase().trim();
      const maxLengthNum = maxLength ? parseInt(maxLength) : 15;
      
      // Prepare a comma-separated list of extensions to try
      const extensionsToTry = extensions.map(ext => ext.replace('.', '')).join(',');
      
      // Call the Domainr API
      const options = {
        method: 'GET',
        url: 'https://domainr.p.rapidapi.com/v2/search',
        params: {
          'mashape-key': '3464f0254emsh589879eea0ef875p1a728ejsn6c7b256f9f58',
          defaults: extensionsToTry, // Use multiple extensions
          query: query,
          registrar: 'dnsimple.com',
          location: 'de'
        },
        headers: {
          'x-rapidapi-key': '3464f0254emsh589879eea0ef875p1a728ejsn6c7b256f9f58',
          'x-rapidapi-host': 'domainr.p.rapidapi.com'
        }
      };
      
      const response = await axios.request<DomainrResponse>(options);
      
      if (response.data && response.data.results) {
        // Filter domains based on max length if specified
        const filteredResults = response.data.results.filter((result: DomainrResponse['results'][0]) => {
          return result.domain.length <= maxLengthNum;
        });
        
        // Map API response to our domain suggestion format
        const domainSuggestions: DomainSuggestion[] = filteredResults.map((result: DomainrResponse['results'][0]) => ({
          name: result.domain,
          domain: result.domain,
          zone: result.zone,
          // The API doesn't directly provide availability in the search endpoint
          // We'll mark them as potentially available and would need to check with another API call
          available: true
        }));
        
        // Limit to 15 suggestions
        setSuggestions(domainSuggestions.slice(0, 15));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching domain suggestions:', error);
      setError('Failed to fetch domain suggestions. Please try again later.');
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
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
                    placeholder="15" 
                    value={maxLength}
                    onChange={(e) => setMaxLength(e.target.value)}
                  />
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    Between 3-63 characters
                  </div>
                </FormGroup>
              </FormRow>
              
              {error && (
                <div style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
                  {error}
                </div>
              )}
              
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
                <ResultsBody>
                  {suggestions.map((domain, index) => (
                    <ScaleIn key={index} delay={index * 0.05}>
                      <ResultCard>
                        <DomainInfo>
                          <DomainIcon>
                            {domain.name.includes('.com') ? '🌐' : 
                             domain.name.includes('.io') ? '💻' : 
                             domain.name.includes('.ai') ? '🤖' : 
                             domain.name.includes('.app') ? '📱' : 
                             domain.name.includes('.dev') ? '👨‍💻' : '🔗'}
                          </DomainIcon>
                          <DomainDetails>
                            <DomainName>{domain.name}</DomainName>
                            <DomainTags>
                              {domain.available && (
                                <AvailabilityTag available={true}>
                                  Available
                                </AvailabilityTag>
                              )}
                              <ExtensionTag>
                                {domain.name.split('.').pop()}
                              </ExtensionTag>
                            </DomainTags>
                          </DomainDetails>
                        </DomainInfo>
                        <DomainActions>
                          <ActionButton 
                            onClick={() => copyToClipboard(domain.name)}
                            title="Copy to clipboard"
                          >
                            {React.createElement(FaIcons.FaCopy as React.ComponentType<IconBaseProps>)}
                            <ActionText>Copy</ActionText>
                          </ActionButton>
                          <ActionButton 
                            onClick={() => checkAvailability(domain.name)}
                            title="Check availability"
                            primary
                          >
                            {React.createElement(FaIcons.FaExternalLinkAlt as React.ComponentType<IconBaseProps>)}
                            <ActionText>Check</ActionText>
                          </ActionButton>
                        </DomainActions>
                      </ResultCard>
                    </ScaleIn>
                  ))}
                </ResultsBody>
              </ResultsContainer>
            ) : hasSearched ? (
              <div>
                <h3>No domain suggestions found</h3>
                <p>Try different keywords or select more domain extensions.</p>
              </div>
            ) : null}
          </FadeIn>
        </GeneratorContainer>
      </Section>
    </Layout>
  );
};

export default DomainGenerator;
