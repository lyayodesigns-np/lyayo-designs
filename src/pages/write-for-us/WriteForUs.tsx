import React from 'react';

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  WriteForUsContent,
  WriteForUsDescription,
  TopicsList,
  TopicTag,
  SectionSubtitle,
  GuidelinesList,
  GuidelineItem,
  WriteForUsConclusion,
  AnimatedBackground
} from './writeForUs.styles';
import FadeIn from '../../components/animations/FadeIn';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Button from '../../components/common/Button';
import Layout from '../../components/layout/Layout';

const WriteForUsPage: React.FC = () => {
  return (
    <Layout 
      title="Write for Us | Lyayo Designs" 
      description="Contribute to Lyayo Designs blog with your insights on web design, development, and digital marketing."
    >
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Write for <span>Lyayo Designs</span></HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Share your expertise with our global community of designers, developers, and digital enthusiasts
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>
      
      <PageContainer>
        <ScrollReveal triggerOnce={true}>
          <WriteForUsContent>
            <AnimatedBackground />
            <WriteForUsDescription>
              Are you a passionate design enthusiast with a knack for writing engaging content? Do you have unique insights into the world of design, technology, and digital innovation? If so, we'd love to hear from you! Lyayo Designs is always looking for fresh perspectives and compelling voices to share with our global community.
            </WriteForUsDescription>
            
            <SectionSubtitle>Submission Guidelines:</SectionSubtitle>
            <GuidelinesList>
              <GuidelineItem>Please submit either a rough draft, a partial draft, or a short pitch (a paragraph summarizing your argument and why it matters to our readers) paired with an outline. The more complete your submission, the better feedback we can give you.</GuidelineItem>
              <GuidelineItem>Your content must be original and not published elsewhere. We cannot accept press releases or sales pitches.</GuidelineItem>
              <GuidelineItem>Make sure your submission has a clear thesis and argument. We're looking for bold, interesting, and human-centric writing.</GuidelineItem>
            </GuidelinesList>
            
            <SectionSubtitle>Published Content Criteria:</SectionSubtitle>
            <GuidelinesList>
              <GuidelineItem>Our articles typically range from 600 to 2,500 words, but the average length of an article is 1,500 words. We're flexible on word count, depending on the depth and quality of the content.</GuidelineItem>
              <GuidelineItem>We value articles that focus on current and cutting-edge topics in the design industry. Custom illustrations often accompany the articles, so any supporting visuals you can provide are a bonus.</GuidelineItem>
            </GuidelinesList>
            
            <SectionSubtitle>Submission Process:</SectionSubtitle>
            <GuidelinesList>
              <GuidelineItem>Please email your submissions to lyayodesigns@gmail.com in the form of Google Documents. We accept plaintext, Markdown, or HTML formats.</GuidelineItem>
              <GuidelineItem>Our editors review submissions on a weekly basis. Upon reviewing, we provide feedback and may ask for revisions.</GuidelineItem>
              <GuidelineItem>Once your submission is accepted, you'll collaborate with one of our editors to refine and finalize the piece.</GuidelineItem>
            </GuidelinesList>
            
            <SectionSubtitle>Review and Acceptance:</SectionSubtitle>
            <GuidelinesList>
              <GuidelineItem>After your submission, our editors and team review the piece and discuss its fit within our audience's interest. We then collect feedback and provide notes for revision.</GuidelineItem>
              <GuidelineItem>Once revisions have been addressed, a further round of team discussions will occur for final acceptance.</GuidelineItem>
              <GuidelineItem>You'll then work with our editor on enhancing the organization, argumentation, and style of the piece.</GuidelineItem>
            </GuidelinesList>
            
            <SectionSubtitle>Publication Process:</SectionSubtitle>
            <GuidelinesList>
              <GuidelineItem>Once your article has been accepted and revised, it will be scheduled for publication. A specific publication date will be provided when the article is almost ready.</GuidelineItem>
              <GuidelineItem>You'll continue to collaborate with our editor until publication. We're committed to ensuring that every piece we publish is something we're proud of!</GuidelineItem>
              <GuidelineItem>We provide additional resources and sponsors for authors, which we'll discuss upon acceptance of your piece.</GuidelineItem>
            </GuidelinesList>
            
            <WriteForUsConclusion>
              We look forward to receiving your submissions and collaborating with you to share your insights with our community. Thank you for your interest in contributing to Lyayo Designs!
            </WriteForUsConclusion>
            
            <TopicsList>
              <TopicTag>Web Design</TopicTag>
              <TopicTag>UI/UX</TopicTag>
              <TopicTag>Front-end</TopicTag>
              <TopicTag>SEO</TopicTag>
              <TopicTag>Digital Marketing</TopicTag>
              <TopicTag>E-commerce</TopicTag>
              <TopicTag>WordPress</TopicTag>
              <TopicTag>Graphic Design</TopicTag>
            </TopicsList>
            
            <Button variant="primary" size="large" onClick={() => window.location.href = "mailto:lyayodesigns@gmail.com?subject=Blog%20Submission"}>
              Submit Your Article
            </Button>
          </WriteForUsContent>
        </ScrollReveal>
      </PageContainer>
    </Layout>
  );
};

export default WriteForUsPage;
