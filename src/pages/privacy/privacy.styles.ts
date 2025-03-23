import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.space[4]} 80px;
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space[10]};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[6]};
`;

export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.space[2]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
