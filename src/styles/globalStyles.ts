import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

// Define the styled-components DefaultTheme to include our Theme type
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: ${({ theme }) => theme.lineHeights.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.shorter};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  ul, ol {
    margin-bottom: ${({ theme }) => theme.space[4]};
    padding-left: ${({ theme }) => theme.space[5]};
  }

  section {
    padding: ${({ theme }) => theme.space[12]} 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.space[8]} 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.space[4]};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyles;
