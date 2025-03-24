import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    min-height: calc(100vh - 150px);
  }
`;

export const NotFoundContent = styled.div`
  max-width: 600px;
  margin-right: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space[8]};
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin: ${({ theme }) => theme.space[3]} 0;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const NotFoundImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url('/images/404-illustration.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;
  }
`;
