import React from 'react';

import {
  PageContainer,
  PageTitle,
  Section,
  SectionTitle,
  Paragraph
} from './disclaimer.styles';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Layout from '../../components/layout/Layout';

const DisclaimerPage: React.FC = () => {
  return (
    <Layout title="Disclaimer | Lyayo Designs" description="Disclaimer for Lyayo Designs website and services.">
      <PageContainer>
        <FadeIn>
          <PageTitle>Disclaimer</PageTitle>
          <Paragraph>
            Last updated: March 22, 2025
          </Paragraph>
        </FadeIn>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Website Disclaimer</SectionTitle>
            <Paragraph>
              The information provided by Lyayo Designs ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </Paragraph>
            <Paragraph>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>External Links Disclaimer</SectionTitle>
            <Paragraph>
              The site may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Professional Disclaimer</SectionTitle>
            <Paragraph>
              The site cannot and does not contain web design advice. The web design information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </Paragraph>
            <Paragraph>
              We do not provide any kind of web design advice. The use or reliance of any information contained on this site is solely at your own risk.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Testimonials Disclaimer</SectionTitle>
            <Paragraph>
              The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about this Disclaimer, please contact us at info@lyayodesigns.com.
            </Paragraph>
          </Section>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default DisclaimerPage;
