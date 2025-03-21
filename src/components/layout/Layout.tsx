import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import ScrollToTopButton from '../common/ScrollToTopButton';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: 100px; // Increased padding to account for the fixed header
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Lyayo Designs | Creative Design Solutions',
  description = 'Lyayo Designs offers professional web design, graphic design, branding, and digital marketing services to help your business stand out.',
  keywords = 'web design, graphic design, branding, UI/UX design, digital marketing, Lyayo Designs',
  ogImage = '/logo512.png',
  ogUrl = 'https://lyayodesigns.com',
}) => {
  const siteUrl = 'https://lyayodesigns.com';
  
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={ogUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={ogUrl} />
      </Helmet>
      
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
