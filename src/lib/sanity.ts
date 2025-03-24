import { createClient } from '@sanity/client';

// Create a Sanity client
export const sanityClient = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true, // Set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // Use a UTC date string
});

// Helper function to build an image URL
export const urlFor = (source: any) => {
  return `https://cdn.sanity.io/images/your-project-id/production/${source}`;
};

// Fetch all blog posts
export const getAllPosts = async () => {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      },
      "authorName": author->name,
      "authorImage": author->image
    }
  `);
  return posts;
};

// Fetch a single blog post by slug
export const getPostBySlug = async (slug: string) => {
  const post = await sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      },
      "author": author->{
        name,
        image,
        bio
      },
      "relatedPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
      }
    }
  `, { slug });
  return post;
};

// Fetch posts by category
export const getPostsByCategory = async (category: string) => {
  const posts = await sanityClient.fetch(`
    *[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      },
      "authorName": author->name,
      "authorImage": author->image
    }
  `, { category });
  return posts;
};

// Fetch all categories
export const getAllCategories = async () => {
  const categories = await sanityClient.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      "count": count(*[_type == "post" && references(^._id)])
    }
  `);
  return categories;
};

// Fetch featured posts
export const getFeaturedPosts = async () => {
  const posts = await sanityClient.fetch(`
    *[_type == "post" && featured == true] | order(publishedAt desc)[0...4] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title
      },
      "authorName": author->name,
      "authorImage": author->image
    }
  `);
  return posts;
};
