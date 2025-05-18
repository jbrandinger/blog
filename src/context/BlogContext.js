import React, { createContext, useContext, useState, useEffect } from 'react';
import blogData from '../utils/blogData';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const loadPosts = async () => {
      try {
        const allPosts = blogData.getBlogPosts();
        const featured = blogData.getFeaturedPosts();
        
        setPosts(allPosts);
        setFeaturedPosts(featured);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const getPostBySlug = (slug) => {
    return blogData.getPostBySlug(slug);
  };

  const getPostsByTag = (tag) => {
    return blogData.getPostsByTag(tag);
  };

  const getRecentPosts = (limit) => {
    return blogData.getRecentPosts(limit);
  };

  const value = {
    posts,
    featuredPosts,
    loading,
    getPostBySlug,
    getPostsByTag,
    getRecentPosts
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext; 