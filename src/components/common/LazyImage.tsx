import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  threshold?: number;
  fallback?: string;
  priority?: boolean;
  placeholderSrc?: string;
}

const ImageWrapper = styled.div<{ width?: string | number; height?: string | number }>`
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : '100%')};
  height: ${({ height }) => (height ? (typeof height === 'number' ? `${height}px` : height) : 'auto')};
  overflow: hidden;
`;

const StyledLazyImage = styled(LazyLoadImage)<{ objectFit?: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  transition: transform 0.3s ease;
`;

// Create a small, blurred placeholder for images
const createPlaceholder = (width = 10, height = 10) => 
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`;

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  threshold = 200, // Increased threshold for earlier loading
  fallback,
  priority = false,
  placeholderSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    if (fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };
  
  // If priority is true, we want to load the image immediately
  // This is useful for above-the-fold images
  if (priority) {
    return (
      <ImageWrapper width={width} height={height} className={className}>
        <img 
          src={imgSrc}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit || 'cover',
          }}
          onError={handleError}
        />
      </ImageWrapper>
    );
  }
  
  return (
    <ImageWrapper width={width} height={height} className={className}>
      <StyledLazyImage
        src={imgSrc}
        alt={alt}
        effect="blur"
        threshold={threshold}
        objectFit={objectFit}
        onError={handleError}
        placeholderSrc={placeholderSrc || createPlaceholder()}
        wrapperProps={{
          style: {
            display: 'block',
            width: '100%',
            height: '100%',
          },
        }}
      />
    </ImageWrapper>
  );
};

export default LazyImage;
