// Sample blog posts data
import Intro from '../assets/images/intro.jpg';
import Fork from '../assets/images/fork.jpeg';

const blogPosts = [
  {
    id: 1,
    title: 'Greetings',
    slug: 'intro',
    excerpt: 'Welcome to my blog.',
    content: `Welcome to my blog. 

  I am using this website as a way to release some of the thoughts 
  I have been having and throw them into the ether. This is mainly for my benefit but maybe 
  someone might find it interesting to read :)

  I don't know where this journey will take me, but I'm excited to find out. This space will evolve as I do.`,
    image: Intro,
    date: '2025-05-18',
    author: 'Me',
    tags: ['Introduction', 'Journal'],
    featured: true
  },
  {
    id: 2,
    title: 'The Fork in the Road',
    slug: 'the-fork-in-the-road',
    excerpt: 'My entire life has been a clear path. Until now..',
    content: `My entire life has been a clear path. Until now..

  ## The Fork
 I have reached the fork`,
    image: Fork,
    date: '2025-05-18',
    author: 'Me',
    tags: ['Contemplation', 'Journal'],
    featured: true
  }
];

// Helper functions to work with blog data
export const getBlogPosts = () => blogPosts;

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);

export const getPostsByTag = (tag) => blogPosts.filter(post => post.tags.includes(tag));

export const getRecentPosts = (limit = 3) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export default {
  getBlogPosts,
  getFeaturedPosts,
  getPostBySlug,
  getPostsByTag,
  getRecentPosts
}; 