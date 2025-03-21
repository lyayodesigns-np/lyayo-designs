import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const getButtonStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : theme.colors.primary};
        color: ${({ theme }) => theme.isDark ? theme.colors.text : 'white'};
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
          border-radius: ${({ theme }) => theme.radii.md};
          background: linear-gradient(
            45deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #10b981,
            #3b82f6
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
          background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : theme.colors.primary};
          border-radius: calc(${({ theme }) => theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.9)'};
          }
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.isDark ? 'rgba(16, 185, 129, 0.1)' : theme.colors.secondary};
        color: ${({ theme }) => theme.isDark ? theme.colors.text : 'white'};
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
          border-radius: ${({ theme }) => theme.radii.md};
          background: linear-gradient(
            45deg,
            #10b981,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #10b981
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
          background-color: ${({ theme }) => theme.isDark ? 'rgba(16, 185, 129, 0.1)' : theme.colors.secondary};
          border-radius: calc(${({ theme }) => theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${({ theme }) => theme.isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.9)'};
          }
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
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
          border-radius: ${({ theme }) => theme.radii.md};
          background: linear-gradient(
            45deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #3b82f6
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
          background-color: ${({ theme }) => theme.isDark ? theme.colors.background : 'white'};
          border-radius: calc(${({ theme }) => theme.radii.md} - 2px);
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        &:hover:not(:disabled) {
          &::before {
            animation: animatedgradient 3s ease infinite;
            opacity: 1;
          }
          
          &::after {
            background-color: ${({ theme }) => theme.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
          }
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: none;
        padding-left: 0;
        padding-right: 0;
        
        &:hover:not(:disabled) {
          color: ${({ theme }) => theme.colors.secondary};
          background-color: transparent;
        }
      `;
    default:
      return '';
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
        font-size: ${({ theme }) => theme.fontSizes.md};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[6]};
        font-size: ${({ theme }) => theme.fontSizes.lg};
      `;
    default:
      return '';
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  ${({ variant = 'primary' }) => getButtonStyles(variant)}
  ${({ size = 'medium' }) => getButtonSize(size)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
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
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
  }
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  margin-left: ${({ position }) => (position === 'right' ? '0.5rem' : '0')};
  margin-right: ${({ position }) => (position === 'left' ? '0.5rem' : '0')};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <IconWrapper position="left">{icon}</IconWrapper>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <IconWrapper position="right">{icon}</IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
