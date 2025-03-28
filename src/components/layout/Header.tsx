import React, { useState, useEffect, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useRoutePreload } from '../../App';
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 50px;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  max-width: 200px;
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
  const [servicesCloseTimeoutId, setServicesCloseTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [toolsCloseTimeoutId, setToolsCloseTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { isDarkTheme, toggleTheme, theme } = useTheme();
  const { preloadRoute } = useRoutePreload();
  
  // Create refs for dropdown containers
  const servicesDropdownRef = React.useRef<HTMLDivElement>(null);
  const toolsDropdownRef = React.useRef<HTMLDivElement>(null);
  
   
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (toolsDropdownOpen) setToolsDropdownOpen(false);
  };
  
  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(!toolsDropdownOpen);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  };
  
  const openServicesDropdown = () => {
    // Clear any existing timeout to prevent the dropdown from closing
    if (servicesCloseTimeoutId) {
      clearTimeout(servicesCloseTimeoutId);
      setServicesCloseTimeoutId(null);
    }
    setServicesDropdownOpen(true);
    if (toolsDropdownOpen) setToolsDropdownOpen(false);
  };
  
  const openToolsDropdown = () => {
    // Clear any existing timeout to prevent the dropdown from closing
    if (toolsCloseTimeoutId) {
      clearTimeout(toolsCloseTimeoutId);
      setToolsCloseTimeoutId(null);
    }
    setToolsDropdownOpen(true);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  };

  const closeServicesDropdownWithDelay = () => {
    // Set a timeout to close the dropdown after a delay
    const timeoutId = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms delay gives enough time to move to submenu
    setServicesCloseTimeoutId(timeoutId);
  };

  const closeToolsDropdownWithDelay = () => {
    // Set a timeout to close the dropdown after a delay
    const timeoutId = setTimeout(() => {
      setToolsDropdownOpen(false);
    }, 300); // 300ms delay gives enough time to move to submenu
    setToolsCloseTimeoutId(timeoutId);
  };
  
  // Navigate to services page and open dropdown
  const handleServicesClick = () => {
    toggleServicesDropdown();
    if (location.pathname !== '/services/') {
      // Only navigate if not already on services page
      window.location.href = '/services/';
    }
  };
  
  // Handle clicks outside dropdown menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close services dropdown if click is outside
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target as Node) &&
        servicesDropdownOpen
      ) {
        setServicesDropdownOpen(false);
      }
      
      // Close tools dropdown if click is outside
      if (
        toolsDropdownRef.current && 
        !toolsDropdownRef.current.contains(event.target as Node) &&
        toolsDropdownOpen
      ) {
        setToolsDropdownOpen(false);
      }
    };
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen, toolsDropdownOpen]);
  
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
    // Only close menu when route changes AND it's not a dropdown item click
    if (!servicesDropdownOpen && !toolsDropdownOpen) {
      closeMenu();
    }
    
    // Always close dropdowns on route change
    setServicesDropdownOpen(false);
    setToolsDropdownOpen(false);
    
    // Clear any existing timeouts
    if (servicesCloseTimeoutId) {
      clearTimeout(servicesCloseTimeoutId);
      setServicesCloseTimeoutId(null);
    }
    if (toolsCloseTimeoutId) {
      clearTimeout(toolsCloseTimeoutId);
      setToolsCloseTimeoutId(null);
    }
  }, [location, servicesCloseTimeoutId, toolsCloseTimeoutId, servicesDropdownOpen, toolsDropdownOpen, closeMenu]);
  
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
  
  const isServicesActive = location.pathname === '/services/' || 
                          location.pathname === '/search-engine-optimization/' || 
                          location.pathname === '/services/web-design/' || 
                          location.pathname === '/hosting-with-us/';
  
  const isToolsActive = location.pathname.startsWith('/tools/') || location.pathname === '/domain-name-generator/';

  const handleNavLinkClick = (e: React.MouseEvent) => {
    // Don't close menu on dropdown button clicks
    if ((e.target as HTMLElement).closest('.dropdown-button')) {
      return;
    }
    // Keep menu open on mobile
    if (window.innerWidth <= parseInt(theme.breakpoints.md)) {
      return;
    }
    closeMenu();
  };

  // Preload handlers for navigation links
  const handleHomeHover = () => preloadRoute('/');
  const handleAboutHover = () => preloadRoute('/about-us/');
  const handleServicesHover = () => preloadRoute('/services/');
  const handleSEOHover = () => preloadRoute('/search-engine-optimization/');
  const handleWebDesignHover = () => preloadRoute('/services/web-design/');
  const handleHostingHover = () => preloadRoute('/hosting-with-us/');
  const handlePricingHover = () => preloadRoute('/pricing/');
  const handleContactHover = () => preloadRoute('/contact/');
  const handleDomainGeneratorHover = () => preloadRoute('/domain-name-generator/');
  const handleDomainCoverLetterHover = () => preloadRoute('/services/how-to-register-a-com-np-domain-in-nepal/');
  
  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesCloseTimeoutId) clearTimeout(servicesCloseTimeoutId);
      if (toolsCloseTimeoutId) clearTimeout(toolsCloseTimeoutId);
    };
  }, [servicesCloseTimeoutId, toolsCloseTimeoutId]);
  
  return (
    <>
      <HeaderContainer theme={theme} style={{ 
        padding: scrolled ? '4px 0' : '8px 0',
        backgroundColor: scrolled 
          ? theme.colors.background 
          : theme.isDark 
            ? 'rgba(10, 9, 14, 0.9)' // Dark theme semi-transparent background with new color
            : 'rgba(255, 255, 255, 0.9)', // Light theme semi-transparent background
        boxShadow: scrolled ? theme.shadows.md : 'none'
      }}>
        <NavContainer>
          <Logo to="/" onMouseEnter={handleHomeHover}>
            <LogoImage src={theme.isDark ? "/logo.png" : "/logo-dark.png"} alt="Lyayo Designs Logo" />
          </Logo>
       
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MobileMenuButton onClick={toggleMenu} aria-label="Open menu">
              {React.createElement(FaIcons.FaBars as React.ComponentType<IconBaseProps>)}
            </MobileMenuButton>
            
            <NavLinks isOpen={isMenuOpen}>
              <CloseButton onClick={closeMenu} aria-label="Close menu">
                {React.createElement(FaIcons.FaTimes as React.ComponentType<IconBaseProps>)}
              </CloseButton>
              <NavLink 
                to="/" 
                active={location.pathname === '/'} 
                onMouseEnter={handleHomeHover}
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about-us/" 
                active={location.pathname === '/about-us/'} 
                onMouseEnter={handleAboutHover}
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
              
              <DropdownContainer 
                ref={servicesDropdownRef} 
                onMouseEnter={openServicesDropdown}
                onMouseLeave={closeServicesDropdownWithDelay}
              >
                <DropdownButton 
                  className="dropdown-button"
                  active={isServicesActive}
                  onClick={handleServicesClick}
                  onMouseEnter={handleServicesHover}
                >
                  Services {React.createElement(servicesDropdownOpen ? 
                    FaIcons.FaChevronUp as React.ComponentType<IconBaseProps> : 
                    FaIcons.FaChevronDown as React.ComponentType<IconBaseProps>)}
                </DropdownButton>
                <DropdownContent isOpen={servicesDropdownOpen}>
                  <DropdownLink 
                    to="/search-engine-optimization/" 
                    onMouseEnter={handleSEOHover}
                    onClick={handleNavLinkClick}
                  >
                    Search Engine Optimization
                  </DropdownLink>
                  <DropdownLink 
                    to="/services/web-design/" 
                    onMouseEnter={handleWebDesignHover}
                    onClick={handleNavLinkClick}
                  >
                    Web Design
                  </DropdownLink>
                  <DropdownLink 
                    to="/hosting-with-us/" 
                    onMouseEnter={handleHostingHover}
                    onClick={handleNavLinkClick}
                  >
                    Hosting With Us
                  </DropdownLink>
                </DropdownContent>
              </DropdownContainer>
              
              <NavLink 
                to="/pricing/" 
                active={location.pathname === '/pricing/'} 
                onMouseEnter={handlePricingHover}
                onClick={handleNavLinkClick}
              >
                Pricing
              </NavLink>
              
              <DropdownContainer 
                ref={toolsDropdownRef}
                onMouseEnter={openToolsDropdown}
                onMouseLeave={closeToolsDropdownWithDelay}
              >
                <DropdownButton 
                  className="dropdown-button"
                  active={isToolsActive}
                  onClick={toggleToolsDropdown}
                >
                  Tools {React.createElement(toolsDropdownOpen ? 
                    FaIcons.FaChevronUp as React.ComponentType<IconBaseProps> : 
                    FaIcons.FaChevronDown as React.ComponentType<IconBaseProps>)}
                </DropdownButton>
                <DropdownContent isOpen={toolsDropdownOpen}>
                  <DropdownLink 
                    to="/domain-name-generator/" 
                    onMouseEnter={handleDomainGeneratorHover}
                    onClick={handleNavLinkClick}
                  >
                    Domain Name Generator
                  </DropdownLink>
                  <DropdownLink 
                    to="/services/how-to-register-a-com-np-domain-in-nepal/" 
                    onMouseEnter={handleDomainCoverLetterHover}
                    onClick={handleNavLinkClick}
                  >
                    Domain Cover Letter Generator
                  </DropdownLink>
                </DropdownContent>
              </DropdownContainer>
              
              <NavLink 
                to="/contact/" 
                active={location.pathname === '/contact/'} 
                onMouseEnter={handleContactHover}
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
              
              <ThemeToggleButton onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}>
                {isDarkTheme 
                  ? React.createElement(FaIcons.FaSun as React.ComponentType<IconBaseProps>) 
                  : React.createElement(FaIcons.FaMoon as React.ComponentType<IconBaseProps>)
                }
              </ThemeToggleButton>
            </NavLinks>
          </div>
        </NavContainer>
      </HeaderContainer>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;
