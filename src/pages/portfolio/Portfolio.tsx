import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  ProjectTitle,
  ProjectCategory,
  ProjectDescription,
  ProjectLink,
  LoadMoreButton
} from './portfolio.styles';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Layout from '../../components/layout/Layout';

// Portfolio project data
const projectsData = [
  {
    id: 1,
    title: 'Easy Care Health Service',
    category: 'Healthcare',
    description: 'A comprehensive healthcare service platform providing easy access to medical services and information.',
    image: '/images/portfolio/easycare.png',
    link: 'https://easycarehealthservice.com',
    tags: ['Healthcare', 'Web Development']
  },
  {
    id: 2,
    title: 'Kies Sourcing',
    category: 'Business',
    description: 'Professional sourcing and procurement solutions for businesses seeking quality products and services.',
    image: '/images/portfolio/kiesresourcing.png',
    link: 'https://kiessourcing.com',
    tags: ['Business', 'E-commerce']
  },
  {
    id: 3,
    title: 'Keanu Sourcing',
    category: 'Business',
    description: 'Strategic sourcing platform connecting businesses with reliable suppliers and procurement solutions.',
    image: '/images/portfolio/keanusourcing.png',
    link: 'https://keanusourcing.com',
    tags: ['Business', 'Web Development']
  },
  {
    id: 4,
    title: 'Genre Finder',
    category: 'Entertainment',
    description: 'Innovative application that helps users discover and explore content based on genre preferences.',
    image: '/images/portfolio/genrefinder.png',
    link: 'https://genrefinder.app',
    tags: ['Entertainment', 'App Development']
  },
  {
    id: 5,
    title: 'Wish Sender',
    category: 'Social',
    description: 'Platform for sending personalized wishes and messages to friends and family on special occasions.',
    image: '/images/portfolio/wishsender.png',
    link: 'https://wishsender.app',
    tags: ['Social', 'App Development']
  }
];

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projectsData.length);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.tags.includes(filter)));
    }
    // Reset visible projects count when filter changes
    setVisibleProjects(projectsData.length);
  }, [filter]);
  
  // Load more projects
  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };
  
  return (
    <Layout title="Portfolio | Lyayo Designs" description="Explore our portfolio of web design, development, branding, and digital marketing projects.">
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Our Portfolio</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Explore our collection of creative work across web design, development, and application projects.
            </HeroSubtitle>
          </FadeIn>
         
        </HeroContent>
      </HeroSection>
      
      <PageContainer>
        <ScrollReveal triggerOnce={true}>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            margin: '0 auto 3rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <h2 style={{ 
              marginBottom: '1rem', 
              fontSize: '1.75rem',
              color: 'var(--color-primary)'
            }}>
              Check Out Our Work
            </h2>
            <p style={{ 
              lineHeight: '1.7', 
              marginBottom: '1.5rem' 
            }}>
              Lyayo Designs is a web design company that specializes in designing the perfect website for your business. We offer customized solutions to meet any of your needs. We also specialize in e-commerce sites, blogs, and social media pages. We have had many happy customers throughout our history and we hope to add you to our list.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <FilterContainer>
            {categories.map(category => (
              <FilterButton 
                key={category} 
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <ProjectsGrid>
            {filteredProjects.slice(0, visibleProjects).map(project => (
              <ProjectCard key={project.id}>
                <ProjectImage bgImage={project.image} className="project-image" />
                <ProjectOverlay className="project-overlay">
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <FaArrowRight />
                  </ProjectLink>
                </ProjectOverlay>
              </ProjectCard>
            ))}
          </ProjectsGrid>
          
          {visibleProjects < filteredProjects.length && (
            <LoadMoreButton onClick={handleLoadMore}>
              Load More Projects
            </LoadMoreButton>
          )}
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default PortfolioPage;
