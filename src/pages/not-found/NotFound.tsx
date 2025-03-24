import React from 'react';
import { Link } from 'react-router-dom';

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundText,
  ButtonContainer,
  NotFoundImage
} from './notFound.styles';
import FadeIn from '../../components/animations/FadeIn';
import Button from '../../components/common/Button';
import Layout from '../../components/layout/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout 
      title="Page Not Found | Lyayo Designs" 
      description="The page you are looking for does not exist. Return to the Lyayo Designs homepage."
    >
      <NotFoundContainer>
        <NotFoundContent>
          <FadeIn direction="down" duration={0.7}>
            <NotFoundTitle>404</NotFoundTitle>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} duration={0.7}>
            <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <NotFoundText>
              Oops! The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </NotFoundText>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4} duration={0.7}>
            <ButtonContainer>
              <Link to="/">
                <Button size="large" variant="primary">
                  Return to Homepage
                </Button>
              </Link>
            </ButtonContainer>
          </FadeIn>
        </NotFoundContent>
        
        <FadeIn direction="left" delay={0.3} duration={0.7}>
          <NotFoundImage />
        </FadeIn>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;
