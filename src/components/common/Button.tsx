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
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: ${({ theme }) => theme.colors.primary};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: ${({ theme }) => theme.colors.secondary};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
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
