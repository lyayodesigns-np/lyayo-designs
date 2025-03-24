import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Layout from '../../components/layout/Layout';
import FadeIn from '../../components/animations/FadeIn';
// Comment out unused imports but keep them for future implementation
// import { getPostBySlug } from '../../lib/sanity';
import { formatDate } from '../../utils/dateUtils';
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
  body?: string;
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
          // In a real implementation, this would be an actual API call
          // For now, we'll simulate with placeholder data
          // const postData = await getPostBySlug(slug);
          
          // Simulate data for development
          const mockPost = generateMockPost(slug);
          setPost(mockPost);
          
          // Fetch related posts
          const mockRelated = generateMockRelatedPosts(3, mockPost.categories[0]._id);
          setRelatedPosts(mockRelated);
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
                  <span>{post.authorName}</span>
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
            
            <PostDetailContent dangerouslySetInnerHTML={{ __html: post.body || generateMockContent() }} />
            
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
            
            <AuthorSection>
              <AuthorImage bgImage={post.authorImage} />
              <AuthorInfo>
                <AuthorName>{post.authorName}</AuthorName>
                <AuthorBio>
                  John Doe is a senior web designer and developer with over 10 years of experience in creating beautiful, functional websites for businesses of all sizes.
                </AuthorBio>
              </AuthorInfo>
            </AuthorSection>
            
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

// Helper function to generate a mock post for development
const generateMockPost = (slug: string): Post => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  
  return {
    _id: `post-${slug}`,
    title: 'The Ultimate Guide to Responsive Web Design',
    slug: { current: slug },
    excerpt: 'Learn how to create websites that look great on any device with our comprehensive guide to responsive web design principles and techniques.',
    mainImage: 'https://source.unsplash.com/random/1200x800?web,design',
    publishedAt: date.toISOString(),
    categories: [{ _id: '1', title: 'Web Design' }],
    authorName: 'John Doe',
    authorImage: 'https://source.unsplash.com/random/100x100?portrait'
  };
};

// Helper function to generate mock related posts
const generateMockRelatedPosts = (count: number, categoryId: string): Post[] => {
  const posts: Post[] = [];
  
  for (let i = 1; i <= count; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i * 3);
    
    posts.push({
      _id: `related-${i}`,
      title: getRandomTitle(i),
      slug: { current: `related-post-${i}` },
      excerpt: `This is a sample excerpt for related post ${i}. It provides a brief overview of what the article is about.`,
      mainImage: `https://source.unsplash.com/random/600x400?web,design&sig=${i}`,
      publishedAt: date.toISOString(),
      categories: [{ _id: categoryId, title: 'Web Design' }],
      authorName: 'John Doe',
      authorImage: 'https://source.unsplash.com/random/100x100?portrait'
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

// Helper function to generate mock content
const generateMockContent = (): string => {
  return `
    <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Recent work also considers the viewer proximity as part of the viewing context as an extension for RWD. Content, design and performance are necessary across all devices to ensure usability and satisfaction.</p>
    
    <h2>Why Responsive Design Matters</h2>
    <p>With the growth in mobile device usage, having a website that works well on smartphones and tablets is no longer optional—it's essential. Here are some key reasons why responsive design matters:</p>
    <ul>
      <li>Improved user experience across all devices</li>
      <li>Better SEO performance (Google prioritizes mobile-friendly sites)</li>
      <li>Easier maintenance than having separate mobile and desktop sites</li>
      <li>Future-proofing your website as new devices emerge</li>
    </ul>
    
    <h2>Key Principles of Responsive Design</h2>
    <p>To create truly responsive websites, designers and developers should follow these core principles:</p>
    
    <h3>1. Fluid Grids</h3>
    <p>Instead of designing a layout based on rigid pixels, a fluid grid uses relative units like percentages to create a more flexible foundation. This allows content to resize and reflow based on the screen size.</p>
    
    <h3>2. Flexible Images</h3>
    <p>Images need to scale and adapt to different screen sizes without breaking the layout. Using CSS techniques like max-width: 100% ensures that images never exceed their container size.</p>
    
    <h3>3. Media Queries</h3>
    <p>Media queries allow you to apply different CSS styles based on the characteristics of the device, such as its width, height, or orientation. This is what enables the layout to transform at different breakpoints.</p>
    <pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}</code></pre>
    
    <h2>Best Practices for Implementation</h2>
    <p>When implementing responsive design, consider these best practices:</p>
    <ol>
      <li>Start with a mobile-first approach</li>
      <li>Test on real devices, not just browser resizing</li>
      <li>Optimize images and assets for faster loading on mobile</li>
      <li>Use relative units (%, em, rem) instead of fixed pixels</li>
      <li>Consider touch interactions for mobile users</li>
    </ol>
    
    <blockquote>
      "Good responsive design is not just about adjusting screen size; it's about creating an optimal experience for each device."
    </blockquote>
    
    <h2>Common Challenges and Solutions</h2>
    <p>Even with the best intentions, responsive design can present challenges. Here are some common issues and how to address them:</p>
    
    <h3>Navigation Menus</h3>
    <p>Large navigation menus can be problematic on small screens. Consider using a hamburger menu or priority+ pattern to simplify navigation on mobile.</p>
    
    <h3>Tables</h3>
    <p>Wide tables don't work well on narrow screens. Solutions include horizontal scrolling for tables, collapsing columns, or restructuring data for mobile views.</p>
    
    <h3>High-Resolution Images</h3>
    <p>Serving appropriately sized images to different devices is crucial for performance. Use the srcset attribute and picture element to deliver the right image for each screen.</p>
    
    <h2>Tools and Frameworks</h2>
    <p>Several tools and frameworks can help streamline responsive web design:</p>
    <ul>
      <li>Bootstrap - A popular CSS framework with a responsive grid system</li>
      <li>Tailwind CSS - A utility-first CSS framework for rapid UI development</li>
      <li>Sass/SCSS - CSS preprocessors that make media queries more manageable</li>
      <li>Browser developer tools with device emulation</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Responsive web design is no longer a luxury—it's a necessity in our multi-device world. By embracing fluid layouts, flexible images, and media queries, you can create websites that provide an optimal viewing experience across a wide range of devices.</p>
    
    <p>Remember that responsive design is not a one-time implementation but an ongoing approach to web development that requires testing and refinement as new devices and screen sizes emerge.</p>
  `;
};

export default BlogPost;
