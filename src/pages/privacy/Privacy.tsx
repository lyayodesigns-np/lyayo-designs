import React from 'react';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Layout from '../../components/layout/Layout';
import {
  PageContainer,
  PageTitle,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ListItem
} from './privacy.styles';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout title="Privacy Policy | Lyayo Designs" description="Privacy policy for Lyayo Designs website and services.">
      <PageContainer>
        <FadeIn>
          <PageTitle>Privacy Policy</PageTitle>
          <Paragraph>
            Last updated: March 22, 2025
          </Paragraph>
        </FadeIn>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Introduction</SectionTitle>
            <Paragraph>
              At Lyayo Designs, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </Paragraph>
            <Paragraph>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Information We Collect</SectionTitle>
            <Paragraph>
              We may collect personal information that you voluntarily provide to us when you:
            </Paragraph>
            <List>
              <ListItem>Contact us through our website</ListItem>
              <ListItem>Subscribe to our newsletter</ListItem>
              <ListItem>Request a quote or consultation</ListItem>
              <ListItem>Purchase our services</ListItem>
              <ListItem>Participate in surveys or promotions</ListItem>
            </List>
            <Paragraph>
              The personal information we collect may include:
            </Paragraph>
            <List>
              <ListItem>Name, email address, phone number, and company name</ListItem>
              <ListItem>Billing and payment information</ListItem>
              <ListItem>Information about your project requirements</ListItem>
              <ListItem>Any other information you choose to provide</ListItem>
            </List>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Automatically Collected Information</SectionTitle>
            <Paragraph>
              When you visit our website, we may automatically collect certain information about your device, including:
            </Paragraph>
            <List>
              <ListItem>IP address</ListItem>
              <ListItem>Browser type and version</ListItem>
              <ListItem>Operating system</ListItem>
              <ListItem>Pages visited and time spent on those pages</ListItem>
              <ListItem>Referral sources</ListItem>
            </List>
            <Paragraph>
              We use this information to analyze trends, administer the site, track users' movements around the site, and gather demographic information about our user base as a whole.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>How We Use Your Information</SectionTitle>
            <Paragraph>
              We may use the information we collect for various purposes, including:
            </Paragraph>
            <List>
              <ListItem>Providing, maintaining, and improving our services</ListItem>
              <ListItem>Processing transactions and sending related information</ListItem>
              <ListItem>Responding to your inquiries and providing customer support</ListItem>
              <ListItem>Sending promotional communications, such as newsletters or updates</ListItem>
              <ListItem>Monitoring and analyzing usage patterns and trends</ListItem>
              <ListItem>Protecting against, identifying, and preventing fraud and other illegal activities</ListItem>
            </List>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Disclosure of Your Information</SectionTitle>
            <Paragraph>
              We may share your information in the following situations:
            </Paragraph>
            <List>
              <ListItem>With service providers who perform services on our behalf</ListItem>
              <ListItem>To comply with legal obligations</ListItem>
              <ListItem>To protect and defend our rights and property</ListItem>
              <ListItem>With your consent or at your direction</ListItem>
            </List>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Data Security</SectionTitle>
            <Paragraph>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Your Rights</SectionTitle>
            <Paragraph>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </Paragraph>
            <List>
              <ListItem>The right to access the personal information we hold about you</ListItem>
              <ListItem>The right to request correction of inaccurate information</ListItem>
              <ListItem>The right to request deletion of your information</ListItem>
              <ListItem>The right to opt-out of marketing communications</ListItem>
            </List>
            <Paragraph>
              To exercise these rights, please contact us using the information provided below.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Changes to This Privacy Policy</SectionTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>Contact Us</SectionTitle>
            <Paragraph>
              If you have questions or concerns about this Privacy Policy, please contact us at info@lyayodesigns.com.
            </Paragraph>
          </Section>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default PrivacyPolicyPage;
