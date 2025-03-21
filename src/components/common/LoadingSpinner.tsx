import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
`;

const SpinnerRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 4px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
  will-change: transform;
`;

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  // Use CSS variables to avoid re-renders on size changes
  const containerSize = size === 'small' ? 24 : size === 'large' ? 64 : 40;
  const ringSize = containerSize * 0.8;
  const borderSize = size === 'small' ? 2 : size === 'large' ? 6 : 4;
  
  return (
    <SpinnerContainer style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
      <SpinnerRing 
        style={{ 
          width: `${ringSize}px`, 
          height: `${ringSize}px`,
          margin: `${(containerSize - ringSize) / 2}px`,
          borderWidth: `${borderSize}px`
        }} 
      />
    </SpinnerContainer>
  );
};

export default React.memo(LoadingSpinner);
