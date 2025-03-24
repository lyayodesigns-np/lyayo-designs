import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const StyledButton = styled(motion.button)<{
  variant: string;
  size: string;
  fullWidth: boolean;
  hasIcon: boolean;
  iconPosition: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  position: relative;
  overflow: hidden;
  
  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}
  
  ${({ iconPosition }) => iconPosition === 'right' && `
    flex-direction: row-reverse;
  `}
  
  ${({ size, theme }) => {
    if (size === 'small') {
      return `
        padding: ${theme.space[1]} ${theme.space[3]};
        font-size: ${theme.fontSizes.sm};
      `;
    } else if (size === 'large') {
      return `
        padding: ${theme.space[3]} ${theme.space[6]};
        font-size: ${theme.fontSizes.lg};
      `;
    }
    return `
      padding: ${theme.space[2]} ${theme.space[4]};
      font-size: ${theme.fontSizes.md};
    `;
  }}
  
  ${({ variant, theme }) => {
    if (variant === 'primary') {
      return `
        background-color: ${theme.isDark ? 'rgba(59, 130, 246, 0.1)' : theme.colors.primary};
        color: white;
        border: none;
        position: relative;
        z-index: 1;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: ${theme.radii.md};
          background: linear-gradient(
            45deg,
            ${theme.colors.primary},
            ${theme.colors.primaryDark},
            #8b5cf6,
            ${theme.colors.accent},
            ${theme.colors.primary}
          );
          background-size: 400% 400%;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background-color: ${theme.isDark ? theme.colors.background : theme.colors.primary};
          border-radius: calc(${theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${theme.isDark ? 'rgba(59, 130, 246, 0.15)' : theme.colors.primaryDark};
          }
        }
        
        &:disabled {
          background-color: ${theme.colors.disabled};
          cursor: not-allowed;
        }
      `;
    } else if (variant === 'secondary') {
      return `
        background-color: ${theme.isDark ? 'rgba(16, 185, 129, 0.1)' : theme.colors.secondary};
        color: white;
        border: none;
        position: relative;
        z-index: 1;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: ${theme.radii.md};
          background: linear-gradient(
            45deg,
            ${theme.colors.secondary},
            ${theme.colors.secondaryDark},
            ${theme.colors.primary},
            #8b5cf6,
            ${theme.colors.secondary}
          );
          background-size: 400% 400%;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background-color: ${theme.isDark ? theme.colors.background : theme.colors.secondary};
          border-radius: calc(${theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${theme.isDark ? 'rgba(16, 185, 129, 0.15)' : theme.colors.secondaryDark};
          }
        }
        
        &:disabled {
          background-color: ${theme.colors.disabled};
          cursor: not-allowed;
        }
      `;
    } else if (variant === 'outline') {
      return `
        background-color: transparent;
        color: white;
        border: none;
        position: relative;
        z-index: 1;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: ${theme.radii.md};
          background: linear-gradient(
            45deg,
            ${theme.colors.primary},
            #8b5cf6,
            ${theme.colors.accent},
            ${theme.colors.primaryDark},
            ${theme.colors.primary}
          );
          background-size: 400% 400%;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background-color: ${theme.isDark ? theme.colors.background : 'rgba(0, 0, 0, 0.7)'};
          border-radius: calc(${theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0, 0, 0, 0.8)'};
          }
        }
        
        &:disabled {
          color: ${theme.colors.disabled};
          border-color: ${theme.colors.disabled};
          cursor: not-allowed;
        }
      `;
    } else if (variant === 'text') {
      return `
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 0;
        padding-right: 0;
        
        &:hover:not(:disabled) {
          color: ${theme.colors.accent};
          text-decoration: underline;
        }
        
        &:disabled {
          color: ${theme.colors.disabled};
          cursor: not-allowed;
        }
      `;
    }
  }}
  
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Animation variants
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  },
  tap: {
    scale: 0.98,
  },
  disabled: {
    scale: 1,
    boxShadow: 'none',
  },
};

// Ripple effect component
const Ripple = styled(motion.span)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: scale(0);
  pointer-events: none;
`;

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  const [ripples, setRipples] = React.useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const nextId = React.useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick();
    }
    
    // Create ripple effect
    if (!disabled && variant !== 'text') {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;
      
      const newRipple = {
        id: nextId.current,
        x,
        y,
        size,
      };
      
      nextId.current += 1;
      setRipples([...ripples, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
      }, 600);
    }
  };

  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      disabled={disabled}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      iconPosition={iconPosition}
      className={className}
      whileHover={!disabled ? 'hover' : 'disabled'}
      whileTap={!disabled ? 'tap' : 'disabled'}
      variants={buttonVariants}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {variant !== 'text' && ripples.map(ripple => (
        <Ripple
          key={ripple.id}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ transform: 'scale(0)', opacity: 0.7 }}
          animate={{ transform: 'scale(1)', opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default AnimatedButton;
