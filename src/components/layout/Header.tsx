import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import logoColorImage from '../../assets/logo/lyayo-color.svg';
import logoWhiteImage from '../../assets/logo/lyayo-white.svg';
import { useTheme } from '../../context/ThemeProvider';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: ${({ theme }) => theme.zIndices.sticky};
  transition: all ${({ theme }) => theme.transitions.standard};
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[4]};
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  transition: all ${({ theme }) => theme.transitions.standard};
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.space[10]} ${({ theme }) => theme.space[4]};
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform ${({ theme }) => theme.transitions.standard};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    z-index: ${({ theme }) => theme.zIndices.modal};
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.bold : theme.fontWeights.medium};
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => active ? '30px' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.standard};
  }
  
  &:hover::after {
    width: 30px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[4]};
    width: 100%;
    
    &::after {
      bottom: auto;
      left: 0;
      transform: none;
      width: ${({ active }) => active ? '4px' : '0'};
      height: 100%;
      top: 0;
    }
    
    &:hover::after {
      width: 4px;
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button<{ active: boolean }>`
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  background: none;
  border: none;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.bold : theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => active ? '30px' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.standard};
  }
  
  &:hover::after {
    width: 30px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[4]};
    width: 100%;
    justify-content: space-between;
    
    &::after {
      bottom: auto;
      left: 0;
      transform: none;
      width: ${({ active }) => active ? '4px' : '0'};
      height: 100%;
      top: 0;
    }
    
    &:hover::after {
      width: 4px;
    }
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  min-width: 200px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[2]};
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  top: calc(100% + 5px); 
  left: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    padding: 0;
    margin-left: ${({ theme }) => theme.space[4]};
  }
`;

const DropdownLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.space[6]};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndices.modal + 1};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.isDark 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.05)'
  };
  border: 1px solid ${({ theme }) => theme.isDark 
    ? 'rgba(255, 255, 255, 0.2)' 
    : 'rgba(0, 0, 0, 0.1)'
  };
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.isDark 
    ? theme.colors.accent 
    : theme.colors.primary
  };
  cursor: pointer;
  margin-left: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.standard};
  width: 40px;
  height: 40px;
  box-shadow: ${({ theme }) => theme.isDark 
    ? '0 0 10px rgba(255, 255, 255, 0.1)' 
    : 'none'
  };
  
  &:hover {
    color: ${({ theme }) => theme.isDark 
      ? '#FFFFFF' 
      : theme.colors.primaryDark
    };
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.isDark 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.1)'
    };
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[4]};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices.overlay};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const location = useLocation();
  const { isDarkTheme, toggleTheme, theme } = useTheme();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (toolsDropdownOpen) setToolsDropdownOpen(false);
  };
  
  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(!toolsDropdownOpen);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close menu when route changes
    closeMenu();
    setServicesDropdownOpen(false);
    setToolsDropdownOpen(false);
  }, [location]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const isServicesActive = location.pathname === '/services' || 
                          location.pathname === '/services/seo' || 
                          location.pathname === '/services/web-design' || 
                          location.pathname === '/services/hosting';
  
  const isToolsActive = location.pathname.startsWith('/tools');
  
  return (
    <>
      <HeaderContainer theme={theme} style={{ 
        padding: scrolled ? '6px 0' : '10px 0',
        backgroundColor: scrolled 
          ? theme.colors.background 
          : theme.isDark 
            ? 'rgba(17, 24, 39, 0.9)' // Dark theme semi-transparent background
            : 'rgba(255, 255, 255, 0.9)', // Light theme semi-transparent background
        boxShadow: scrolled ? theme.shadows.md : 'none'
      }}>
        <NavContainer>
          <Logo to="/">
            <LogoImage src={isDarkTheme ? logoWhiteImage : logoColorImage} alt="Lyayo Designs Logo" />
            {/* <LogoImage src={LogoImage} alt="Lyayo Designs Logo" /> */}
          </Logo>
       
          
          <NavLinks isOpen={isMenuOpen}>
            <CloseButton onClick={closeMenu} aria-label="Close menu">
              {React.createElement(FaIcons.FaTimes as React.ComponentType<IconBaseProps>)}
            </CloseButton>
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>
              About Us
            </NavLink>
            
            <DropdownContainer>
              <DropdownButton 
                active={isServicesActive}
                onClick={toggleServicesDropdown}
              >
                Services {React.createElement(servicesDropdownOpen ? 
                  FaIcons.FaChevronUp as React.ComponentType<IconBaseProps> : 
                  FaIcons.FaChevronDown as React.ComponentType<IconBaseProps>)}
              </DropdownButton>
              <DropdownContent isOpen={servicesDropdownOpen}>
                <DropdownLink to="/services/seo">
                  Search Engine Optimization
                </DropdownLink>
                <DropdownLink to="/services/web-design">
                  Web Design
                </DropdownLink>
                <DropdownLink to="/services/hosting">
                  Hosting With Us
                </DropdownLink>
              </DropdownContent>
            </DropdownContainer>
            
            <NavLink to="/pricing" active={location.pathname === '/pricing'}>
              Pricing
            </NavLink>
            
            <DropdownContainer>
              <DropdownButton 
                active={isToolsActive}
                onClick={toggleToolsDropdown}
              >
                Tools {React.createElement(toolsDropdownOpen ? 
                  FaIcons.FaChevronUp as React.ComponentType<IconBaseProps> : 
                  FaIcons.FaChevronDown as React.ComponentType<IconBaseProps>)}
              </DropdownButton>
              <DropdownContent isOpen={toolsDropdownOpen}>
                <DropdownLink to="/tools/seo-analyzer">
                  SEO Analyzer
                </DropdownLink>
                <DropdownLink to="/tools/speed-test">
                  Speed Test
                </DropdownLink>
                <DropdownLink to="/tools/color-picker">
                  Color Picker
                </DropdownLink>
              </DropdownContent>
            </DropdownContainer>
            
            <NavLink to="/contact" active={location.pathname === '/contact'}>
              Contact
            </NavLink>
            
            <ThemeToggleButton onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}>
              {isDarkTheme 
                ? React.createElement(FaIcons.FaSun as React.ComponentType<IconBaseProps>) 
                : React.createElement(FaIcons.FaMoon as React.ComponentType<IconBaseProps>)
              }
            </ThemeToggleButton>
          </NavLinks>
        </NavContainer>
      </HeaderContainer>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;
