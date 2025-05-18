import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const Home = () => {
  const { featuredPosts, loading } = useBlog();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

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
            Joel's Journal
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Exploring life, the universe, and everything in between
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
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {featuredPosts.map((post) => (
            <Grid 
              item 
              key={post.id} 
              xs={12} 
              sm={6} 
              md={4}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card
                sx={{
                  width: 360,
                  height: 500,
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
                  sx={{
                    height: 240,
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 260,
                  width: '100%',
                }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    width: '100%',
                  }}>
                    {post.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      flexGrow: 1,
                      width: '100%',
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mt: 'auto',
                    width: '100%',
                  }}>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(post.date).toLocaleDateString()}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/blog/${post.slug}`}
                      size="small"
                      color="primary"
                    >
                      Read More
                    </Button>
                  </Box>
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