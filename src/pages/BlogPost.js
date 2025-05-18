import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  Divider,
  CircularProgress
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useBlog } from '../context/BlogContext';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPostBySlug, loading } = useBlog();
  const post = getPostBySlug(slug);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return (
      <Container>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Post Not Found
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/blog')}
          >
            Back to Blog
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mt: 4, mb: 2 }}
      >
        Back
      </Button>

      <Paper elevation={0} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>

        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="subtitle1" color="text.secondary">
            By {post.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            • {new Date(post.date).toLocaleDateString()}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ mr: 1, mb: 1 }}
              onClick={() => navigate(`/blog/tag/${tag}`)}
            />
          ))}
        </Box>

        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: 1,
            mb: 4
          }}
        />

        <Box sx={{ typography: 'body1' }}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      </Paper>
    </Container>
  );
};

export default BlogPost; 