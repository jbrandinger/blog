// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Finding My Voice in the Digital Age',
    slug: 'finding-my-voice',
    excerpt: 'A reflection on how writing online has helped me process my thoughts and connect with others.',
    content: `I've always been someone who processes things through writing. There's something about putting pen to paper (or fingers to keyboard) that helps me make sense of the world around me.

## The Beginning

When I first started this blog, I wasn't sure what I wanted to say. The blank page was intimidating, and the thought of sharing my thoughts with the world was even more so. But here I am, writing my first post, taking that first step into vulnerability.

## Why I Write

Writing has become my therapy, my way of untangling the knots in my mind. Each post is a snapshot of where I am in life - the good, the bad, and everything in between. It's not always pretty, but it's always real.

## The Digital Connection

What I didn't expect was how sharing these thoughts would connect me with others. Each comment, each message from someone who relates to what I've written, reminds me that we're all navigating this life together.

## Moving Forward

I don't know where this journey will take me, but I'm excited to find out. This space will evolve as I do, and I'm grateful to have you along for the ride.`,
    image: 'https://source.unsplash.com/random/800x600?writing',
    date: '2024-03-20',
    author: 'Me',
    tags: ['Personal', 'Reflection', 'Writing'],
    featured: true
  },
  {
    id: 2,
    title: 'The Quiet Moments Between',
    slug: 'quiet-moments',
    excerpt: 'Finding peace in the spaces between our busy lives.',
    content: `It's in the quiet moments that I find myself most present. That space between tasks, between thoughts, between breaths - that's where the magic happens.

## Morning Rituals

I've started waking up 30 minutes earlier than necessary. Not to be more productive, but to simply be. To watch the sunrise, to feel the first rays of light on my face, to breathe in the new day.

## The Power of Stillness

In a world that never stops moving, I'm learning to appreciate the stillness. It's not always easy - my mind wants to race ahead, to plan, to worry. But when I can quiet it, even for a moment, I find a peace I didn't know I was missing.

## Finding Balance

Life is a constant dance between doing and being. I'm still learning the steps, still finding my rhythm. But I'm getting better at recognizing when I need to pause, to breathe, to just be.

## A Note to Self

Remember: it's okay to slow down. It's okay to take a moment. The world will keep turning, and you'll be better for having taken the time to be present in it.`,
    image: 'https://source.unsplash.com/random/800x600?morning',
    date: '2024-03-18',
    author: 'Me',
    tags: ['Mindfulness', 'Personal Growth', 'Reflection'],
    featured: true
  },
  {
    id: 3,
    title: 'On Change and Growth',
    slug: 'change-and-growth',
    excerpt: "Navigating life's transitions and embracing the growth that comes with them.",
    content: `Change has always been a constant in my life, but that doesn't make it any easier to navigate. Each transition brings its own challenges and opportunities for growth.

## Embracing Uncertainty

I used to fight against change, to try to maintain control in situations where control was never really mine to begin with. Now, I'm learning to embrace the uncertainty, to see it as a space of possibility rather than fear.

## The Growth Mindset

Every challenge, every change, every moment of discomfort is an opportunity to grow. It's not always comfortable, but it's always valuable. I'm learning to lean into these moments rather than away from them.

## Lessons Learned

- Change is inevitable, but our response to it is our choice
- Growth often comes disguised as discomfort
- The only way out is through
- Every ending is a new beginning

## Moving Forward

As I write this, I'm in the middle of another transition. It's scary and exciting and everything in between. But I'm ready to face it head-on, to learn from it, to grow through it.

Because that's what life is, isn't it? A series of changes and transitions, of endings and beginnings, of growth and learning. And I'm here for all of it.`,
    image: 'https://source.unsplash.com/random/800x600?change',
    date: '2024-03-15',
    author: 'Me',
    tags: ['Personal Growth', 'Change', 'Reflection'],
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