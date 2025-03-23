import React, { useEffect, useState, useRef, memo } from 'react';
import styled, { createGlobalStyle, useTheme } from 'styled-components';
import { Theme } from '../../styles/theme';

// Global style to hide the default cursor
const GlobalStyle = createGlobalStyle`
  body, a, button, [role="button"], .clickable, .service-card, .feature-card, .choose-us-card, .testimonial-card {
    cursor: none !important;
  }
`;

interface CursorProps {
  size: number;
  color: string;
  opacity: number;
  zIndex: number;
  isDark: boolean;
}

const CursorCircle = styled.div<CursorProps>`
  position: fixed;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
  pointer-events: none;
  mix-blend-mode: normal;
  z-index: ${props => props.zIndex};
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, opacity 0.2s;
  box-shadow: 0 0 15px 5px ${props => props.color};
  filter: blur(5px);
  will-change: transform, width, height;
`;

// Small dot in the center for precision
const CursorDot = styled.div<{isDark: boolean}>`
  position: fixed;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => props.isDark ? 'white' : 'black'};
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 3px 1px ${props => props.isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  will-change: transform;
`;

interface MouseCursorProps {
  darkModeColor?: string;
  lightModeColor?: string;
  size?: number;
  opacity?: number;
  zIndex?: number;
  hoverElements?: string[];
}

const MouseCursor: React.FC<MouseCursorProps> = ({
  darkModeColor = 'rgba(100, 100, 200, 0.5)',
  lightModeColor = 'rgba(50, 50, 120, 0.5)',
  size = 30,
  opacity = 0.6,
  zIndex = 9999,
  hoverElements = ['a', 'button', '.clickable']
}) => {
  const theme = useTheme() as Theme;
  const isDark = theme.isDark;
  const cursorColor = isDark ? darkModeColor : lightModeColor;
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use refs to avoid recreating event listeners on each render
  const positionRef = useRef(position);
  const isHoveringRef = useRef(isHovering);
  
  useEffect(() => {
    positionRef.current = position;
    isHoveringRef.current = isHovering;
  }, [position, isHovering]);
  
  useEffect(() => {
    // Throttle the mousemove event for better performance
    let lastUpdateTime = 0;
    const THROTTLE_DELAY = 10; // ms
    
    const updatePosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < THROTTLE_DELAY) return;
      
      lastUpdateTime = currentTime;
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isHoveringElement = hoverElements.some(selector => {
        if (selector.startsWith('.')) {
          return target.classList.contains(selector.substring(1));
        } else {
          return target.tagName.toLowerCase() === selector;
        }
      });
      
      if (isHoveringElement !== isHoveringRef.current) {
        setIsHovering(isHoveringElement);
      }
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Use passive event listeners for better performance
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    // Initialize cursor position to center of viewport if not set
    if (position.x === 0 && position.y === 0) {
      setPosition({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      });
    }
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverElements]); // Only re-run if hoverElements changes
  
  if (!isVisible) return <GlobalStyle />;
  
  return (
    <>
      <GlobalStyle />
      <CursorDot 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        isDark={isDark}
      />
      <CursorCircle
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        size={isHovering ? size * 2 : size}
        color={cursorColor}
        opacity={isHovering ? opacity * 1.3 : opacity}
        zIndex={zIndex}
        isDark={isDark}
      />
    </>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(MouseCursor);
