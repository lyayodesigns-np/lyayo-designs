/**
 * Format a date string into a human-readable format
 * @param dateString ISO date string
 * @returns Formatted date string (e.g., "March 24, 2025")
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
};
