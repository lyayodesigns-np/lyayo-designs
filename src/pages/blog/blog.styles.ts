import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Section from '../../components/common/Section';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.space[3]};
  }
`;

export const HeroSection = styled(Section)`
  position: relative;
  background: ${({ theme }) => theme.isDark 
    ? 'linear-gradient(135deg, #0a0a12 0%, #1a1a2e 25%, #2d2d44 50%, #1f1f35 75%, #0a0a12 100%)' 
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  padding: ${({ theme }) => theme.space[12]} 0;
`;

export const HeroTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.text};
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const PostImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
`;

export const PostContent = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PostDate = styled.span`
  margin-right: ${({ theme }) => theme.space[3]};
`;

export const PostCategory = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const PostExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space[3]};
  line-height: 1.6;
  flex-grow: 1;
`;

export const ReadMoreLink = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: auto;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

export const LoadMoreButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${({ theme }) => theme.space[8]} auto 0;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

// Blog Post Detail Styles
export const PostDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const PostDetailHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const PostDetailTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const PostDetailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PostDetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.space[6]};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const PostDetailContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space[6]} 0 ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.text};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space[5]} 0 ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
  
  ul, ol {
    margin: ${({ theme }) => theme.space[4]} 0;
    padding-left: ${({ theme }) => theme.space[5]};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.space[2]};
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.space[4]};
    margin: ${({ theme }) => theme.space[4]} 0;
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
    font-style: italic;
  }
  
  pre {
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    padding: ${({ theme }) => theme.space[4]};
    border-radius: 4px;
    overflow-x: auto;
    margin: ${({ theme }) => theme.space[4]} 0;
  }
  
  code {
    font-family: monospace;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: ${({ theme }) => theme.space[4]} 0;
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const AuthorImage = styled.div<{ bgImage: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const AuthorInfo = styled.div`
  flex-grow: 1;
`;

export const AuthorName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
`;

export const AuthorBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const ShareSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const ShareLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ShareButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

export const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const RelatedPostsSection = styled.div`
  margin-top: ${({ theme }) => theme.space[8]};
`;

export const RelatedPostsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.colors.text};
`;

export const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
