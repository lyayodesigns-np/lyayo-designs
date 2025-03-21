import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AnimatedInputProps {
  type?: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
}

const InputContainer = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.space[4]};
  width: 100%;
`;

const InputLabel = styled(motion.label)<{ hasError: boolean }>`
  position: absolute;
  left: ${({ theme }) => theme.space[3]};
  color: ${({ hasError, theme }) => hasError ? theme.colors.error : theme.colors.text};
  pointer-events: none;
  transition: all 0.3s ease;
`;

const StyledInput = styled(motion.input)<{ hasError: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border: 1px solid ${({ hasError, theme }) => hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ theme }) => theme.colors.background};
  transition: all ${({ theme }) => theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) => hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ hasError, theme }) => hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled(motion.div)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.space[1]};
`;

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  type = 'text',
  name,
  id,
  placeholder = '',
  value,
  onChange,
  onFocus,
  onBlur,
  required = false,
  disabled = false,
  className = '',
  label,
  error,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(!!value);
  
  React.useEffect(() => {
    setHasValue(!!value);
  }, [value]);
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    if (onChange) onChange(e);
  };
  
  return (
    <InputContainer className={className}>
      {label && (
        <InputLabel
          htmlFor={id}
          hasError={!!error}
          animate={{
            top: isFocused || hasValue ? '-12px' : '12px',
            fontSize: isFocused || hasValue ? '12px' : '16px',
            backgroundColor: isFocused || hasValue ? 'white' : 'transparent',
            padding: isFocused || hasValue ? '0 4px' : '0',
            color: isFocused ? (error ? '#ff4d4f' : '#1a73e8') : (error ? '#ff4d4f' : '#666'),
          }}
          transition={{ duration: 0.2 }}
        >
          {label} {required && '*'}
        </InputLabel>
      )}
      
      <StyledInput
        type={type}
        name={name}
        id={id}
        placeholder={isFocused ? placeholder : ''}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        disabled={disabled}
        hasError={!!error}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      />
      
      {error && (
        <ErrorMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};

export default AnimatedInput;
