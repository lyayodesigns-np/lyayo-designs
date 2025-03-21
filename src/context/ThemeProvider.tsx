import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';

// Create a context for the theme
interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
  theme: lightTheme
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme state from localStorage or default to light theme
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('lyayo-theme');
    return savedTheme === 'dark';
  });

  // Current theme
  const theme = isDarkTheme ? darkTheme : lightTheme;

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('lyayo-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
