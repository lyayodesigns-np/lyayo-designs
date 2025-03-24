import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'border' | 'scale' | 'tilt' | 'none';
  clickEffect?: boolean;
  onClick?: () => void;
  delay?: number;
}

const CardContainer = styled(motion.div)<{ hoverEffect: string }>`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background-color: transparent; /* Make background transparent to show the child component's background */
  height: 100%; /* Ensure it takes full height */
  display: flex; /* Use flexbox for better layout */
  flex-direction: column; /* Stack children vertically */
  transition: all ${({ theme }) => theme.transitions.standard};
  
  ${({ hoverEffect, theme }) => {
    if (hoverEffect === 'glow') {
      return `
        box-shadow: ${theme.shadows.md};
        &:hover {
          box-shadow: 0 0 20px rgba(74, 144, 226, 0.3);
        }
      `;
    } else if (hoverEffect === 'border') {
      return `
        box-shadow: ${theme.shadows.md};
        border: 1px solid transparent;
        &:hover {
          border-color: ${theme.colors.primary};
        }
      `;
    } else if (hoverEffect === 'none') {
      return `
        box-shadow: ${theme.shadows.md};
      `;
    } else {
      return `
        box-shadow: ${theme.shadows.md};
      `;
    }
  }}
`;

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  clickEffect = true,
  onClick,
  delay = 0,
}) => {
  // Define hover animation based on the effect type
  let hoverAnimation = {};
  
  switch (hoverEffect) {
    case 'lift':
      hoverAnimation = { y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' };
      break;
    case 'scale':
      hoverAnimation = { scale: 1.03 };
      break;
    case 'tilt':
      // Tilt effect is handled by the onMouseMove event
      break;
    case 'none':
      hoverAnimation = {};
      break;
    default:
      hoverAnimation = { y: -10 };
  }
  
  // Define click animation
  const tapAnimation = clickEffect ? { scale: 0.98 } : {};
  
  // For tilt effect
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === 'tilt') {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateXValue = ((y - centerY) / centerY) * 5; // Max 5 degrees
      const rotateYValue = ((centerX - x) / centerX) * 5; // Max 5 degrees
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    }
  };
  
  const handleMouseLeave = () => {
    if (hoverEffect === 'tilt') {
      setRotateX(0);
      setRotateY(0);
    }
  };
  
  return (
    <CardContainer
      className={className}
      hoverEffect={hoverEffect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={hoverEffect === 'tilt' ? {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      } : undefined}
    >
      {children}
    </CardContainer>
  );
};

export default AnimatedCard;
