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

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  threshold = 100,
  fallback,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    if (fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };
  
  return (
    <ImageWrapper width={width} height={height} className={className}>
      <StyledLazyImage
        src={imgSrc}
        alt={alt}
        effect="blur"
        threshold={threshold}
        objectFit={objectFit}
        onError={handleError}
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
