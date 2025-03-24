import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Layout from '../../components/layout/Layout';
import FadeIn from '../../components/animations/FadeIn';
// Comment out unused imports but keep them for future implementation
// import { getAllPosts, getAllCategories, getFeaturedPosts } from '../../lib/sanity';
import { formatDate } from '../../utils/dateUtils';
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
        // In a real implementation, these would be actual API calls
        // For now, we'll simulate with placeholder data
        // const allPosts = await getAllPosts();
        
        // Simulate data for development
        const mockPosts = generateMockPosts(12);
        setPosts(mockPosts);
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

// Helper function to generate mock posts for development
const generateMockPosts = (count: number): Post[] => {
  const categories = [
    { _id: '1', title: 'Web Design' },
    { _id: '2', title: 'SEO' },
    { _id: '3', title: 'Hosting' },
    { _id: '4', title: 'Development' },
    { _id: '5', title: 'Marketing' }
  ];
  
  const posts: Post[] = [];
  
  for (let i = 1; i <= count; i++) {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const date = new Date();
    date.setDate(date.getDate() - i * 2); // Each post is 2 days apart
    
    posts.push({
      _id: `post-${i}`,
      title: `${i % 2 === 0 ? 'How to ' : ''}${getRandomTitle(i)}`,
      slug: { current: `post-${i}` },
      excerpt: `This is a sample excerpt for post ${i}. It provides a brief overview of what the article is about and entices readers to click and read more.`,
      mainImage: `https://source.unsplash.com/random/600x400?web,design&sig=${i}`,
      publishedAt: date.toISOString(),
      categories: [categories[categoryIndex]],
      authorName: 'John Doe',
      authorImage: 'https://source.unsplash.com/random/100x100?portrait&sig=1'
    });
  }
  
  return posts;
};

// Helper function to generate random post titles
const getRandomTitle = (index: number): string => {
  const titles = [
    "Improve Your Website's SEO in 5 Simple Steps",
    "The Ultimate Guide to Responsive Web Design",
    "Why Your Business Needs a Professional Website",
    "Top Web Design Trends for 2025",
    "How to Choose the Right Hosting Provider",
    "Boost Your Conversion Rate with These Design Tips",
    "The Importance of Mobile-First Design",
    "Common SEO Mistakes to Avoid",
    "How to Optimize Your Website for Speed",
    "Creating an Effective Content Strategy",
    "Web Accessibility: Why It Matters and How to Implement It",
    "The Psychology of Colors in Web Design"
  ];
  
  return titles[index % titles.length];
};

export default Blog;
