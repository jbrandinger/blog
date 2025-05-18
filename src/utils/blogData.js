// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    content: `React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamental concepts of React and how to get started with your first React application.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you create reusable UI components that manage their own state.

## Key Features

- Component-based architecture
- Virtual DOM for efficient rendering
- One-way data flow
- JSX syntax for writing components

## Getting Started

To create a new React application, you can use Create React App:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This will set up a new React project with all the necessary dependencies and configuration.`,
    image: 'https://source.unsplash.com/random/800x600?react',
    date: '2024-03-20',
    author: 'John Doe',
    tags: ['React', 'JavaScript', 'Web Development'],
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    slug: 'future-of-web-development',
    excerpt: 'Exploring upcoming trends and technologies in web development.',
    content: `The web development landscape is constantly evolving. Let's take a look at some of the most exciting trends and technologies shaping the future of web development.

## Emerging Technologies

1. WebAssembly
2. Edge Computing
3. AI and Machine Learning
4. Progressive Web Apps

## What to Watch

Keep an eye on these technologies as they continue to mature and become more widely adopted in the industry.`,
    image: 'https://source.unsplash.com/random/800x600?technology',
    date: '2024-03-18',
    author: 'Jane Smith',
    tags: ['Web Development', 'Technology', 'Future'],
    featured: true
  },
  {
    id: 3,
    title: 'Mastering CSS Grid',
    slug: 'mastering-css-grid',
    excerpt: 'A comprehensive guide to CSS Grid layout system.',
    content: `CSS Grid is a powerful layout system that brings two-dimensional layout capabilities to CSS. Let's dive deep into how to use it effectively.

## Understanding Grid

CSS Grid Layout is a two-dimensional layout system designed specifically for the user interface. It has many features that make building complex layouts straightforward.

## Key Concepts

- Grid Container
- Grid Items
- Grid Lines
- Grid Tracks
- Grid Areas

## Basic Example

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\``,
    image: 'https://source.unsplash.com/random/800x600?code',
    date: '2024-03-15',
    author: 'Mike Johnson',
    tags: ['CSS', 'Web Design', 'Layout'],
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