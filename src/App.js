import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import { BlogProvider } from './context/BlogContext';
import './App.css';

// Create a theme instance with Minimalist Monochrome color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Deep Navy
      light: '#34495E', // Darker Navy
      dark: '#1A252F', // Very Dark Navy
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#95A5A6', // Soft Gray
      light: '#BDC3C7', // Light Gray
      dark: '#7F8C8D', // Dark Gray
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F2F5', // Softer, more muted background
      paper: '#F8F9FA', // Slightly off-white for cards and paper elements
    },
    text: {
      primary: '#2C3E50', // Deep Navy
      secondary: '#7F8C8D', // Dark Gray
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.8,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)',
          backgroundColor: '#F8F9FA',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#F8F9FA',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F9FA',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BlogProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<div>Blog Page</div>} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </Layout>
        </Router>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;
