// Define the base theme structure
const baseTheme = {
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
    body: "'Poppins', sans-serif", // Add body font
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },
  space: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1536px',
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  transitions: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    standard: '0.3s ease',
    slow: '0.6s ease',
    fast: '0.15s ease',
  },
} as const;

// Light theme colors
export const lightTheme = {
  ...baseTheme,
  isDark: false,
  colors: {
    primary: '#1E40AF', // Deep Royal Blue for a modern primary tone
    primaryDark: '#1D3557', // Slightly muted dark blue for subtle depth
    primaryLight: '#3B82F6', // Bright and energetic blue
    secondary: '#14B8A6', // Fresh teal for secondary elements
    secondaryDark: '#0F766E', // Rich, sophisticated dark teal
    secondaryLight: '#2DD4BF', // Bright aqua for contrast
    accent: '#FFB020', // Vibrant golden yellow for accents
    background: '#F8FAFC', // Soft, clean white with a slight blue tint
    backgroundAlt: '#E7EDF2', // Muted alternative background for differentiation
    text: '#1E293B', // Dark slate blue for high readability
    textSecondary: '#475569', // Muted blue-gray for secondary text
    lightText: '#64748B', // Softer blue-gray for hints and subtle content
    error: '#DC2626', // Bold red for clear error indications
    success: '#22C55E', // Fresh green for success messages
    warning: '#F97316', // Vibrant orange for warnings
    info: '#2563EB', // Dynamic blue for informational content
    lightGray: '#F1F5F9', // Light gray for subtle borders and backgrounds
    mediumGray: '#CBD5E1', // Balanced gray for neutral elements
    darkGray: '#64748B', // Dark gray for inactive or disabled elements
    disabled: '#94A3B8', // Softer gray for disabled states
    border: '#E2E8F0', // Light gray with a touch of blue for modern borders
}

};

// Dark theme colors
export const darkTheme = {
  ...baseTheme,
  isDark: true,
  colors: {
    primary: '#3B82F6', // Bright blue for primary elements
    primaryDark: '#2563EB', // Deeper blue for hover states
    primaryLight: '#60A5FA', // Lighter blue for accents
    secondary: '#10B981', // Emerald green for secondary elements
    secondaryDark: '#059669', // Deeper green for hover states
    secondaryLight: '#34D399', // Lighter green for accents
    accent: '#F59E0B', // Amber for accent elements
    background: '#0A090E', // Very dark blue-black for main background
    backgroundAlt: '#16151B', // Slightly lighter dark background for cards and sections
    text: '#F8FAFC', // Almost white for primary text
    textSecondary: '#CBD5E1', // Light gray for secondary text
    lightText: '#94A3B8', // Medium gray for tertiary text
    error: '#EF4444', // Bright red for errors
    success: '#10B981', // Emerald green for success messages
    warning: '#F59E0B', // Amber for warnings
    info: '#3B82F6', // Blue for information
    lightGray: '#1E1D24', // Dark gray with slight purple tint
    mediumGray: '#2E2D36', // Medium dark gray with slight purple tint
    darkGray: '#4B4A55', // Lighter gray with slight purple tint
    disabled: '#383743', // Dark gray for disabled elements
    border: '#2E2D36', // Dark gray for borders
  },
};

// For backward compatibility
export const theme = lightTheme;

export type Theme = typeof lightTheme & {
  isDark?: boolean;
};
