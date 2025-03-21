import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
}

const StyledContainer = styled.div<{ fluid: boolean }>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[4]};
  
  ${({ fluid, theme }) =>
    !fluid &&
    `
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 540px;
    }
    
    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 720px;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 960px;
    }
    
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: 1140px;
    }
    
    @media (min-width: ${theme.breakpoints['2xl']}) {
      max-width: 1320px;
    }
  `}
`;

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className,
}) => {
  return (
    <StyledContainer fluid={fluid} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
