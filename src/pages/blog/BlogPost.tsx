import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';

import {
  PageContainer,
  PostDetailContainer,
  PostDetailHeader,
  PostDetailTitle,
  PostDetailMeta,
  PostDate,
  PostCategory,
  PostDetailImage,
  PostDetailContent,
  AuthorSection,
  AuthorImage,
  AuthorInfo,
  AuthorName,
  AuthorBio,
  RelatedPostsSection,
  RelatedPostsTitle,
  RelatedPostsGrid,
  PostCard,
  PostImage,
  PostContent,
  PostTitle,
  PostMeta,
  PostExcerpt,
  ShareSection,
  ShareLabel,
  ShareButtons,
  ShareButton
} from './blog.styles';
import FadeIn from '../../components/animations/FadeIn';
import Layout from '../../components/layout/Layout';
import { getPostBySlug } from '../../lib/sanity';
import { formatDate } from '../../utils/dateUtils';

// Types
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  categories: Category[];
  authorName?: string;
  authorImage?: string;
  body?: string;
  author?: {
    name: string;
    image: string;
    bio: string;
  };
  relatedPosts?: Post[];
}

interface Category {
  _id: string;
  title: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        if (slug) {
          // Fetch post data from Sanity CMS
          const postData = await getPostBySlug(slug);
          setPost(postData);
          
          // Set related posts from the API response
          if (postData && postData.relatedPosts) {
            setRelatedPosts(postData.relatedPosts);
          }
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout title="Loading... | Lyayo Designs Blog">
        <PageContainer>
          <div>Loading article...</div>
        </PageContainer>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout title="Post Not Found | Lyayo Designs Blog">
        <PageContainer>
          <div>Post not found. <Link to="/blog">Return to blog</Link></div>
        </PageContainer>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${post.title} | Lyayo Designs Blog`}
      description={post.excerpt}
    >
      <PageContainer>
        <FadeIn direction="up" duration={0.7}>
          <Link to="/blog" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '24px',
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontWeight: 500
          }}>
            <FiArrowLeft /> Back to Blog
          </Link>
          
          <PostDetailContainer>
            <PostDetailHeader>
              <PostDetailTitle>{post.title}</PostDetailTitle>
              <PostDetailMeta>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                  <FiCalendar style={{ marginRight: '8px' }} />
                  <PostDate>{formatDate(post.publishedAt)}</PostDate>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                  <FiUser style={{ marginRight: '8px' }} />
                  <span>{post.author ? post.author.name : (post.authorName || 'Unknown')}</span>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FiTag style={{ marginRight: '8px' }} />
                    <PostCategory>{post.categories[0].title}</PostCategory>
                  </div>
                )}
              </PostDetailMeta>
            </PostDetailHeader>
            
            <PostDetailImage src={post.mainImage} alt={post.title} />
            
            <PostDetailContent dangerouslySetInnerHTML={{ __html: post.body || '' }} />
            
            <ShareSection>
              <ShareLabel>Share this article:</ShareLabel>
              <ShareButtons>
                <ShareButton href="#" aria-label="Share on Facebook">
                  <FiFacebook />
                </ShareButton>
                <ShareButton href="#" aria-label="Share on Twitter">
                  <FiTwitter />
                </ShareButton>
                <ShareButton href="#" aria-label="Share on LinkedIn">
                  <FiLinkedin />
                </ShareButton>
              </ShareButtons>
            </ShareSection>
            
            {post.author && (
              <AuthorSection>
                <AuthorImage bgImage={post.author.image} />
                <AuthorInfo>
                  <AuthorName>{post.author.name}</AuthorName>
                  <AuthorBio>{post.author.bio}</AuthorBio>
                </AuthorInfo>
              </AuthorSection>
            )}
            
            {relatedPosts.length > 0 && (
              <RelatedPostsSection>
                <RelatedPostsTitle>You might also like</RelatedPostsTitle>
                <RelatedPostsGrid>
                  {relatedPosts.map(relatedPost => (
                    <PostCard key={relatedPost._id} to={`/blog/${relatedPost.slug.current}`}>
                      <PostImage bgImage={relatedPost.mainImage} />
                      <PostContent>
                        <PostMeta>
                          <PostDate>{formatDate(relatedPost.publishedAt)}</PostDate>
                        </PostMeta>
                        <PostTitle>{relatedPost.title}</PostTitle>
                        <PostExcerpt>{relatedPost.excerpt}</PostExcerpt>
                      </PostContent>
                    </PostCard>
                  ))}
                </RelatedPostsGrid>
              </RelatedPostsSection>
            )}
          </PostDetailContainer>
        </FadeIn>
      </PageContainer>
    </Layout>
  );
};



export default BlogPost;
