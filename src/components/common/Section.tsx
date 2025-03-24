import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Container from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  fluid?: boolean;
}

const StyledSection = styled.section<{
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.background};
  padding-top: ${({ paddingTop, theme }) => paddingTop || theme.space[12]};
  padding-bottom: ${({ paddingBottom, theme }) => paddingBottom || theme.space[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ paddingTop, theme }) => paddingTop || theme.space[8]};
    padding-bottom: ${({ paddingBottom, theme }) => paddingBottom || theme.space[8]};
  }
`;

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  backgroundColor,
  paddingTop,
  paddingBottom,
  fluid = false,
}) => {
  return (
    <StyledSection
      id={id}
      className={className}
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Container fluid={fluid}>{children}</Container>
    </StyledSection>
  );
};

export default Section;
