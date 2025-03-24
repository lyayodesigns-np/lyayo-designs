import React from 'react';

import {
  PageContainer,
  PageTitle,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ListItem
} from './terms.styles';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Layout from '../../components/layout/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout 
      title="Terms and Conditions | Lyayo Designs" 
      description="Terms and conditions for using Lyayo Designs services."
      keywords="terms and conditions, legal, Lyayo Designs, web design terms, service agreement"
    >
      <PageContainer>
        <FadeIn>
          <PageTitle>Terms and Conditions</PageTitle>
          <Paragraph>
            Last updated: March 22, 2025
          </Paragraph>
        </FadeIn>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              Welcome to Lyayo Designs. These Terms and Conditions govern your use of our website and services. By accessing our website or using our services, you agree to these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our website or services.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>2. Services</SectionTitle>
            <Paragraph>
              Lyayo Designs provides web design, development, and related digital services. The specific details, deliverables, timelines, and costs for each project will be outlined in a separate agreement or proposal provided to the client.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>3. Intellectual Property Rights</SectionTitle>
            <Paragraph>
              All intellectual property rights in the website and the materials published on it, including but not limited to text, images, designs, logos, software, and code, are owned by Lyayo Designs or our licensors. These works are protected by copyright laws and treaties around the world. All such rights are reserved.
            </Paragraph>
            <Paragraph>
              Upon full payment for our services, clients will receive rights to use the deliverables as specified in their individual service agreements. However, Lyayo Designs retains the right to use client work in our portfolio and marketing materials unless explicitly agreed otherwise.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>4. Payment Terms</SectionTitle>
            <Paragraph>
              Payment terms will be specified in each client's service agreement. Typically, we require a deposit before beginning work, with the remaining balance due upon completion or as specified in the agreement.
            </Paragraph>
            <Paragraph>
              If a client fails to make any payment by the due date, Lyayo Designs reserves the right to suspend work on the project and/or withhold deliverables until payment is received.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>5. Client Responsibilities</SectionTitle>
            <Paragraph>
              Clients are responsible for:
            </Paragraph>
            <List>
              <ListItem>Providing necessary content, information, and feedback in a timely manner</ListItem>
              <ListItem>Reviewing and approving work at designated project milestones</ListItem>
              <ListItem>Ensuring they have the right to use any content they provide to us</ListItem>
              <ListItem>Making payments according to the agreed schedule</ListItem>
            </List>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>6. Limitation of Liability</SectionTitle>
            <Paragraph>
              To the maximum extent permitted by law, Lyayo Designs shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use or inability to use our services.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>7. Termination</SectionTitle>
            <Paragraph>
              Either party may terminate a service agreement with written notice if the other party breaches a material term of the agreement. In case of termination, the client shall pay for all services performed up to the termination date.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>8. Changes to Terms</SectionTitle>
            <Paragraph>
              Lyayo Designs reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
            </Paragraph>
          </Section>
        </ScrollReveal>
        
        <ScrollReveal triggerOnce={true}>
          <Section>
            <SectionTitle>9. Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about these Terms and Conditions, please contact us at info@lyayodesigns.com.
            </Paragraph>
          </Section>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default TermsPage;
