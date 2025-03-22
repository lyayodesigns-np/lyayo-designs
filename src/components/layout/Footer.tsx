import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.text};
  color: ${({ theme }) => theme.isDark ? theme.colors.text : theme.colors.background};
  padding: ${({ theme }) => theme.space[12]} 0 ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[8]} 0 ${({ theme }) => theme.space[4]};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.isDark ? theme.colors.text : theme.colors.background};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.isDark ? theme.colors.textSecondary : theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space[3]};
  transition: color ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.isDark ? theme.colors.textSecondary : theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[3]};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.isDark ? theme.colors.text : theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: color ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ContactIcon = styled.span`
  margin-right: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.primary};
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space[8]};
  padding-top: ${({ theme }) => theme.space[4]};
  border-top: 1px solid ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.darkGray};
  color: ${({ theme }) => theme.isDark ? theme.colors.textSecondary : theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo>Lyayo Designs</Logo>
          <FooterText>
            Creating beautiful, functional designs that help businesses succeed in the digital world.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              {React.createElement(FaIcons.FaFacebook as React.ComponentType<IconBaseProps>)}
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              {React.createElement(FaIcons.FaTwitter as React.ComponentType<IconBaseProps>)}
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {React.createElement(FaIcons.FaInstagram as React.ComponentType<IconBaseProps>)}
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {React.createElement(FaIcons.FaLinkedin as React.ComponentType<IconBaseProps>)}
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterColumn>
{/*         
        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services#web-design">Web Design</FooterLink>
          <FooterLink to="/services#graphic-design">Graphic Design</FooterLink>
          <FooterLink to="/services#branding">Branding</FooterLink>
          <FooterLink to="/services#ui-ux">UI/UX Design</FooterLink>
          <FooterLink to="/services#digital-marketing">Digital Marketing</FooterLink>
        </FooterColumn> */}
        
        <FooterColumn>
          <FooterTitle>Policies</FooterTitle>
          <FooterLink to="/disclaimer">Disclaimer</FooterLink>
          <FooterLink to="/terms">Terms And Conditions</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <ContactIcon>
              {React.createElement(FaIcons.FaMapMarkerAlt as React.ComponentType<IconBaseProps>)}
            </ContactIcon>
            <FooterText>123 Design Street, Creative City</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              {React.createElement(FaIcons.FaPhone as React.ComponentType<IconBaseProps>)}
            </ContactIcon>
            <FooterText>+1 (555) 123-4567</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              {React.createElement(FaIcons.FaEnvelope as React.ComponentType<IconBaseProps>)}
            </ContactIcon>
            <FooterText>info@lyayodesigns.com</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              {React.createElement(FaIcons.FaClock as React.ComponentType<IconBaseProps>)}
            </ContactIcon>
            <FooterText>Mon-Fri: 9am - 5pm</FooterText>
          </ContactItem>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Lyayo Designs. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
