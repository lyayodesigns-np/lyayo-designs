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

export const JobList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[6]};
`;

export const JobCard = styled.div`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const JobMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const JobType = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const JobLocation = styled.span`
  display: flex;
  align-items: center;
`;

export const JobDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const BenefitsList = styled.ul`
  margin: ${({ theme }) => theme.space[6]} 0;
  padding-left: ${({ theme }) => theme.space[6]};
`;

export const BenefitItem = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ApplicationForm = styled.div`
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[8]};
`;

export const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.2)' : theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.2)' : theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const FileUpload = styled.div`
  margin-top: ${({ theme }) => theme.space[2]};
`;
