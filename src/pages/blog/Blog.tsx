import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  PostsGrid,
  PostCard,
  PostImage,
  PostContent,
  PostTitle,
  PostMeta,
  PostDate,
  PostCategory,
  PostExcerpt,
  ReadMoreLink,
  LoadMoreButton
} from './blog.styles';
import FadeIn from '../../components/animations/FadeIn';
import Layout from '../../components/layout/Layout';
import { getAllPosts, getAllCategories } from '../../lib/sanity';
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
  authorName: string;
  authorImage: string;
}

interface Category {
  _id: string;
  title: string;
  count?: number;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch posts from Sanity CMS
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <Layout 
      title="Our Blog | Lyayo Designs" 
      description="Stay updated with the latest web design trends, SEO tips, and digital marketing strategies from Lyayo Designs."
    >
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Our Blog</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Insights, tips, and strategies to help your business thrive online
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <FadeIn direction="up" delay={0.2} duration={0.5}>
          {isLoading ? (
            <div>Loading articles...</div>
          ) : posts.length === 0 ? (
            <div>No articles found.</div>
          ) : (
            <>
              <PostsGrid>
                {posts.slice(0, visiblePosts).map(post => (
                  <PostCard key={post._id} to={`/blog/${post.slug.current}`}>
                    <PostImage bgImage={post.mainImage} />
                    <PostContent>
                      <PostMeta>
                        <PostDate>{formatDate(post.publishedAt)}</PostDate>
                        {post.categories && post.categories.length > 0 && (
                          <PostCategory>{post.categories[0].title}</PostCategory>
                        )}
                      </PostMeta>
                      <PostTitle>{post.title}</PostTitle>
                      <PostExcerpt>{post.excerpt}</PostExcerpt>
                      <ReadMoreLink>
                        Read More <FiArrowRight />
                      </ReadMoreLink>
                    </PostContent>
                  </PostCard>
                ))}
              </PostsGrid>
              
              {visiblePosts < posts.length && (
                <LoadMoreButton onClick={handleLoadMore}>
                  Load More Articles
                </LoadMoreButton>
              )}
            </>
          )}
        </FadeIn>
      </PageContainer>
    </Layout>
  );
};



export default Blog;
