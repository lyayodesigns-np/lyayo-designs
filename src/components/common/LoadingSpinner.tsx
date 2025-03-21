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
  width: 80px;
  height: 80px;
`;

const SpinnerRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerRing />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
