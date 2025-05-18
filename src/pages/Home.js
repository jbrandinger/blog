import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button 
} from '@mui/material';
import { Link } from 'react-router-dom';

// Temporary featured posts data (we'll move this to a separate file later)
const featuredPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    image: 'https://source.unsplash.com/random/800x600?react',
    date: '2024-03-20'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development.',
    image: 'https://source.unsplash.com/random/800x600?technology',
    date: '2024-03-18'
  },
  {
    id: 3,
    title: 'Mastering CSS Grid',
    excerpt: 'A comprehensive guide to CSS Grid layout system.',
    image: 'https://source.unsplash.com/random/800x600?code',
    date: '2024-03-15'
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
          borderRadius: 2
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Welcome to My Blog
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Exploring technology, development, and everything in between
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/blog"
              variant="contained"
              color="secondary"
              size="large"
            >
              Read Latest Posts
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Posts Section */}
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Posts
        </Typography>
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 